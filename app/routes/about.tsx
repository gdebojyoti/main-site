import type { Route } from "./+types/about";

export const handle = { fileId: "package" } as const;

export function meta({}: Route.MetaArgs) {
  return [{ title: "About | Debojyoti Ghosh" }];
}

export default function AboutRoute() {
  return null;
}
