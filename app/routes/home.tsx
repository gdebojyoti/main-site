import type { Route } from "./+types/home";

export const handle = { fileId: "home" } as const;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Debojyoti Ghosh | UI / UX Developer & Front-end Engineer" },
    { name: "description", content: "UI / UX Developer & Front-end Engineer" },
  ];
}

export default function HomeRoute() {
  return null;
}
