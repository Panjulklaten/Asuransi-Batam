// Klien Supabase KHUSUS SERVER (service role). Jangan impor file ini dari komponen client.
import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { mailEnv } from "./config";

let client: SupabaseClient | null = null;

export function db(): SupabaseClient {
  if (!client) {
    const url = mailEnv.supabaseUrl();
    const key = mailEnv.supabaseServiceKey();
    if (!url || !key) throw new Error("supabase_not_configured");
    client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
      global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }) },
    });
  }
  return client;
}
