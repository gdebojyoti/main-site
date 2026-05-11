import type { Route } from "./+types/home";
import VSC from "~/vsc";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Debojyoti Ghosh | UI / UX Developer & Front-end Engineer" },
    { name: "description", content: "UI / UX Developer & Front-end Engineer" },
  ];
}

export default function Home() {
  return <VSC />;
}
