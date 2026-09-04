import type { Route } from "./+types/contact";

export const handle = { fileId: "contact" } as const;

export function meta({}: Route.MetaArgs) {
  return [{ title: "contact.css | Debojyoti Ghosh" }];
}

export default function ContactRoute() {
  return null;
}
