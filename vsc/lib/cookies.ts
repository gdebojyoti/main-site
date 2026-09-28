import type { FileId } from "../files";

const COOKIE_NAME = "vsc_pinned";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function parsePinnedCookie(cookieHeader: string | null): FileId[] {
  if (!cookieHeader) return [];

  const entry = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_NAME}=`));
  if (!entry) return [];

  try {
    const raw = decodeURIComponent(entry.slice(COOKIE_NAME.length + 1));
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id): id is FileId => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function writePinnedCookie(ids: FileId[]) {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(JSON.stringify(ids));
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${MAX_AGE_SECONDS}; samesite=lax`;
}
