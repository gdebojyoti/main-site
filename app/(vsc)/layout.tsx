import { headers } from "next/headers";
import { parsePinnedCookie } from "@/vsc/lib/cookies";
import { isMobileUserAgent } from "@/vsc/lib/userAgent";
import VSC from "@/vsc";

export default async function VscLayout({ children }: LayoutProps<"/">) {
  const headersList = await headers();
  const pinned = parsePinnedCookie(headersList.get("cookie"));
  const isMobile = isMobileUserAgent(headersList.get("user-agent"));

  return (
    <>
      <VSC initialPinned={pinned} isMobile={isMobile} />
      {children}
    </>
  );
}
