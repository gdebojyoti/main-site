export type FileId = "home" | "resume" | "contact" | "package";

export type FileMeta = {
  id: FileId;
  label: string;
  path: string;
  type: "tsx" | "md" | "css" | "json";
  pinned: boolean;
};

export const FILES: FileMeta[] = [
  { id: "home", label: "home.tsx", path: "main-site/app/routes/home.tsx", type: "tsx", pinned: true },
  { id: "resume", label: "RESUME.md", path: "main-site/RESUME.md", type: "md", pinned: false },
  { id: "contact", label: "contact.css", path: "main-site/app/styles/contact.css", type: "css", pinned: false },
  { id: "package", label: "package.json", path: "main-site/package.json", type: "json", pinned: false },
];

export const ACTIVE_FILE_ID: FileId = "home";
