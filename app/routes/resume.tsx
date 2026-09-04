import type { Route } from "./+types/resume";

export const handle = { fileId: "resume" } as const;

export function meta({}: Route.MetaArgs) {
  return [{ title: "Resume | Debojyoti Ghosh" }];
}

export default function ResumeRoute() {
  return null;
}
