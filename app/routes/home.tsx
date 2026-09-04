import type { Route } from "./+types/home";
import { parsePinnedCookie } from "~/vsc/lib/cookies";
import VSC from "~/vsc";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Debojyoti Ghosh | UI / UX Developer & Front-end Engineer" },
    { name: "description", content: "UI / UX Developer & Front-end Engineer" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return { pinned: parsePinnedCookie(request.headers.get("Cookie")) };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <VSC initialPinned={loaderData.pinned} />;
}
