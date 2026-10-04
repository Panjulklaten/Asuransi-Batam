// Envelope request untuk POST /api/sppa (divalidasi dengan zod di server).
// Isi `values` divalidasi terpisah oleh validateSubmission() sesuai config produk.
import { z } from "zod";

export const submissionEnvelope = z.object({
  product: z.string().min(1).max(40),
  values: z.record(z.string().max(80), z.unknown()),
  declaration: z.object({ accepted: z.array(z.string().max(40)).max(10) }),
  // Anti-bot: honeypot harus kosong; startedAt (ms epoch) dipakai untuk menolak submit instan.
  website: z.string().max(0).optional(),
  startedAt: z.number().int().positive(),
});

export type SubmissionEnvelope = z.infer<typeof submissionEnvelope>;
