import { ChevronDown, Folder, Pin } from "lucide-react";
import { ACTIVE_FILE_ID, FILES } from "./files";
import { FileTypeIcon } from "./icons";

const SECTION_HEADING_CLASS =
  "flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-side-bar-heading-foreground";

const SideBar = () => {
  return (
    <nav className="flex w-64 shrink-0 flex-col overflow-y-auto rounded-lg border border-border bg-side-bar text-side-bar-foreground text-sm">
      {/* panel title */}
      <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-side-bar-heading-foreground">
        Explorer
      </div>

      {/* open editors */}
      <div>
        <div className={SECTION_HEADING_CLASS}>
          <ChevronDown className="h-3.5 w-3.5" />
          Open Editors
        </div>
        <ul>
          {FILES.map((file) => (
            <li
              key={file.id}
              className={`flex items-center gap-2 py-0.75 pl-8 pr-2 ${
                file.id === ACTIVE_FILE_ID ? "bg-list-active text-list-active-foreground" : "hover:bg-list-hover"
              }`}
            >
              <FileTypeIcon type={file.type} />
              <span className="flex-1 truncate">{file.label}</span>
              {file.pinned && <Pin className="h-3 w-3 shrink-0 text-muted-foreground" />}
            </li>
          ))}
        </ul>
      </div>

      {/* file / folder structure */}
      <div>
        <div className={SECTION_HEADING_CLASS}>
          <ChevronDown className="h-3.5 w-3.5" />
          Main-Site
        </div>
        <ul>
          <li className="flex items-center gap-2 py-0.75 pl-8 pr-2 hover:bg-list-hover">
            <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground" />
            <Folder className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span>app</span>
          </li>
          <li className="flex items-center gap-2 py-0.75 pl-14 pr-2 hover:bg-list-hover">
            <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground" />
            <Folder className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span>routes</span>
          </li>
          <li
            className={`flex items-center gap-2 py-0.75 pl-20 pr-2 ${
              ACTIVE_FILE_ID === "home" ? "bg-list-active text-list-active-foreground" : "hover:bg-list-hover"
            }`}
          >
            <FileTypeIcon type="tsx" />
            <span>home.tsx</span>
          </li>
          <li className="flex items-center gap-2 py-0.75 pl-14 pr-2 hover:bg-list-hover">
            <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground" />
            <Folder className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span>styles</span>
          </li>
          <li
            className={`flex items-center gap-2 py-0.75 pl-20 pr-2 ${
              ACTIVE_FILE_ID === "contact" ? "bg-list-active text-list-active-foreground" : "hover:bg-list-hover"
            }`}
          >
            <FileTypeIcon type="css" />
            <span>contact.css</span>
          </li>
          <li
            className={`flex items-center gap-2 py-0.75 pl-8 pr-2 ${
              ACTIVE_FILE_ID === "package" ? "bg-list-active text-list-active-foreground" : "hover:bg-list-hover"
            }`}
          >
            <FileTypeIcon type="json" />
            <span>package.json</span>
          </li>
          <li
            className={`flex items-center gap-2 py-0.75 pl-8 pr-2 ${
              ACTIVE_FILE_ID === "resume" ? "bg-list-active text-list-active-foreground" : "hover:bg-list-hover"
            }`}
          >
            <FileTypeIcon type="md" />
            <span>RESUME.md</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
