import type { Route } from "./+types/vscLayout";
import { parsePinnedCookie } from "~/vsc/lib/cookies";
import VSC from "~/vsc";

export function loader({ request }: Route.LoaderArgs) {
  return { pinned: parsePinnedCookie(request.headers.get("Cookie")) };
}

export default function VscLayout({ loaderData }: Route.ComponentProps) {
  return <VSC initialPinned={loaderData.pinned} />;
}
