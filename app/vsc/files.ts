export type FileId = "home" | "resume" | "contact" | "package";

export type FileMeta = {
  id: FileId;
  label: string;
  path: string;
  type: "tsx" | "md" | "css" | "json";
};

export const FILES: FileMeta[] = [
  { id: "home", label: "home.tsx", path: "main-site/app/routes/home.tsx", type: "tsx" },
  { id: "resume", label: "RESUME.md", path: "main-site/RESUME.md", type: "md" },
  { id: "contact", label: "contact.css", path: "main-site/app/styles/contact.css", type: "css" },
  { id: "package", label: "package.json", path: "main-site/package.json", type: "json" },
];

export const FILES_BY_ID: Record<FileId, FileMeta> = Object.fromEntries(
  FILES.map((file) => [file.id, file]),
) as Record<FileId, FileMeta>;

export const HOME_FILE_ID: FileId = "home";

// URL each file is addressable at. Clicking a file navigates here (adding a
// history entry); loading one of these routes directly opens that file too.
export const FILE_ROUTES: Record<FileId, string> = {
  home: "/",
  contact: "/contact",
  package: "/about",
  resume: "/resume",
};

// Folder structure shown in the explorer. Folder ids are their paths, which
// keeps them unique and doubles as the key for collapse state.
export type ExplorerNode =
  | { kind: "folder"; id: string; name: string; children: ExplorerNode[] }
  | { kind: "file"; id: FileId };

export const EXPLORER_TREE: ExplorerNode[] = [
  {
    kind: "folder",
    id: "app",
    name: "app",
    children: [
      { kind: "folder", id: "app/routes", name: "routes", children: [{ kind: "file", id: "home" }] },
      { kind: "folder", id: "app/styles", name: "styles", children: [{ kind: "file", id: "contact" }] },
    ],
  },
  { kind: "file", id: "package" },
  { kind: "file", id: "resume" },
];
