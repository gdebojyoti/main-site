import type { Route } from "./+types/vscLayout";
import { parsePinnedCookie } from "~/vsc/lib/cookies";
import { isMobileUserAgent } from "~/vsc/lib/userAgent";
import VSC from "~/vsc";

export function loader({ request }: Route.LoaderArgs) {
  return {
    pinned: parsePinnedCookie(request.headers.get("Cookie")),
    isMobile: isMobileUserAgent(request.headers.get("User-Agent")),
  };
}

export default function VscLayout({ loaderData }: Route.ComponentProps) {
  return <VSC initialPinned={loaderData.pinned} isMobile={loaderData.isMobile} />;
}
