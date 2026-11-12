// Harness bersama tes: Postgres nyata + PostgREST nyata + stub Storage Supabase (in-memory).
import { execSync, spawn, type ChildProcess } from "node:child_process";
import { createHmac } from "node:crypto";
import http from "node:http";

export const JWT_SECRET = "integration-test-jwt-secret-0123456789abcdef";
export const files = new Map<string, Buffer>(); // isi "bucket" Storage
export const realFetch = globalThis.fetch;

const b64 = (o: unknown) => Buffer.from(JSON.stringify(o)).toString("base64url");
export const jwt = (payload: object) => { const h = `${b64({ alg: "HS256", typ: "JWT" })}.${b64(payload)}`; return `${h}.${createHmac("sha256", JWT_SECRET).update(h).digest("base64url")}`; };


export function startStub(portRest: number, portStub: number): Promise<http.Server> {
  const srv = http.createServer((req, res) => {
    const chunks: Buffer[] = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      const body = Buffer.concat(chunks);
      const u = new URL(req.url!, "http://x");
      if (u.pathname.startsWith("/rest/v1/")) {
        const p = http.request({ host: "127.0.0.1", port: portRest, path: u.pathname.replace("/rest/v1", "") + u.search, method: req.method, headers: { ...req.headers, host: `127.0.0.1:${portRest}` } }, (r) => { res.writeHead(r.statusCode!, r.headers); r.pipe(res); });
        p.end(body);
        return;
      }
      const send = (code: number, b: unknown) => { res.writeHead(code, { "content-type": "application/json" }); res.end(JSON.stringify(b)); };
      let m;
      if ((m = u.pathname.match(/^\/storage\/v1\/object\/sign\/mail-attachments\/(.+)$/)) && req.method === "POST") return send(200, { signedURL: `/object/sign/mail-attachments/${m[1]}?token=t` });
      if ((m = u.pathname.match(/^\/storage\/v1\/object\/mail-attachments\/(.+)$/)) && req.method === "POST") { files.set(decodeURIComponent(m[1]), body); return send(200, { Key: `mail-attachments/${m[1]}` }); }
      if (u.pathname === "/storage/v1/object/mail-attachments" && req.method === "DELETE") { for (const p of JSON.parse(body.toString()).prefixes) files.delete(p); return send(200, []); }
      send(404, { message: "stub: " + u.pathname });
    });
  });
  return new Promise((r) => srv.listen(portStub, () => r(srv)));
}


export const psql = (sql: string, db = "postgres") => execSync(`su postgres -c "psql -d ${db} -v ON_ERROR_STOP=1 -q -t -A"`, { input: sql, encoding: "utf8" });

export async function setupDb(dbName: string, portRest: number): Promise<ChildProcess> {
  psql(`drop database if exists ${dbName}; create database ${dbName};`);
  psql(`
    do $$ begin
      if not exists (select 1 from pg_roles where rolname='anon') then create role anon nologin; end if;
      if not exists (select 1 from pg_roles where rolname='authenticated') then create role authenticated nologin; end if;
      if not exists (select 1 from pg_roles where rolname='service_role') then create role service_role nologin bypassrls; end if;
      if not exists (select 1 from pg_roles where rolname='authenticator') then create role authenticator login password 'pw' noinherit; end if;
    end $$;
    grant anon, authenticated, service_role to authenticator;`);
  psql(`create schema storage; create table storage.buckets (id text primary key, name text, public boolean default false, file_size_limit bigint);`, dbName);
  execSync(`su postgres -c "psql -d ${dbName} -v ON_ERROR_STOP=1 -q -f ${process.cwd()}/supabase/migrations/20261111000000_mini_webmail.sql"`, { stdio: "pipe" });
  psql(`grant usage on schema public to anon, authenticated, service_role; grant all on all tables in schema public to service_role; grant all on all sequences in schema public to service_role; grant execute on all functions in schema public to service_role;`, dbName);
  const pgrst = spawn(process.env.POSTGREST_BIN ?? "postgrest", [], { env: { ...process.env, PGRST_DB_URI: `postgres://authenticator:pw@127.0.0.1/${dbName}`, PGRST_DB_SCHEMAS: "public", PGRST_DB_ANON_ROLE: "anon", PGRST_JWT_SECRET: JWT_SECRET, PGRST_SERVER_PORT: String(portRest), PGRST_DB_POOL: "5" }, stdio: "ignore" });
  for (let i = 0; i < 50; i++) { try { if ((await realFetch(`http://127.0.0.1:${portRest}/`)).ok) break; } catch { /* menunggu */ } await new Promise((r) => setTimeout(r, 200)); }
  return pgrst;
}
