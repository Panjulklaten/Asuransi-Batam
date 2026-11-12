// Tipe bersama server ↔ client (tanpa impor server-only).
import type { Folder } from "./config";

export interface ThreadSummary {
  id: string;
  subject: string;
  folder: Folder;
  snippet: string | null;
  last_from: string | null;
  last_message_at: string;
  message_count: number;
  unread_count: number;
  has_outbound: boolean;
  has_attachments: boolean;
  participants: string[];
}

export interface AttachmentView {
  id: string;
  filename: string;
  content_type: string | null;
  size_bytes: number | null;
  content_disposition: string | null;
  content_id: string | null;
  stored: boolean;
}

export interface MessageView {
  id: string;
  direction: "inbound" | "outbound";
  message_id: string | null;
  from_email: string;
  from_name: string | null;
  to_emails: string[];
  cc_emails: string[];
  reply_to_emails: string[];
  subject: string;
  text_body: string | null;
  /** HTML yang SUDAH disanitasi di server (tidak pernah HTML mentah). */
  html: string | null;
  has_remote_images: boolean;
  images_omitted: boolean;
  received_at: string | null;
  sent_at: string | null;
  read_at: string | null;
  authentication: { spf?: string; dkim?: string; dmarc?: string } | null;
  attachments: AttachmentView[];
}

export interface ThreadDetail { thread: ThreadSummary; messages: MessageView[] }
export interface FolderCounts { inbox_unread: number; inbox_total: number; sent_total: number; archive_total: number; trash_total: number }
