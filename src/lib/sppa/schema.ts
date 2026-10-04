// Envelope request untuk POST /api/sppa (divalidasi dengan zod di server).
// Isi `values` divalidasi terpisah oleh validateSubmission() sesuai config produk.
import { z } from "zod";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const submissionEnvelope = z.object({
  product: z.string().min(1).max(40),
  values: z.record(z.string().max(80), z.unknown()),
  declaration: z.object({ accepted: z.array(z.string().max(40)).max(10) }),
  uploadSession: z.string().regex(UUID_RE, "Sesi upload tidak valid.").optional(),
  // Anti-bot: honeypot harus kosong; startedAt (ms epoch) dipakai untuk menolak submit instan.
  website: z.string().max(0).optional(),
  startedAt: z.number().int().positive(),
});

export type SubmissionEnvelope = z.infer<typeof submissionEnvelope>;
