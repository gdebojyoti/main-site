import Bowser from "bowser";

export function isMobileUserAgent(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return Bowser.parse(userAgent).platform.type === "mobile";
}
