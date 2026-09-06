import { ChevronDown, Pin } from "lucide-react";
import type { MouseEvent } from "react";
import { useContextMenu } from "./contextMenu/ContextMenuProvider";
import { buildFileMenuItems } from "./contextMenu/fileMenuItems";
import { FILES_BY_ID, type FileId } from "./files";
import { FileTypeIcon } from "./icons";
import { useVsc } from "./state/VscContext";

const SECTION_HEADING_CLASS =
  "flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-side-bar-heading-foreground";

const SideBar = () => {
  const { openIds, pinnedIds, activeId, openFile, closeFile, togglePin } = useVsc();
  const { showContextMenu } = useContextMenu();

  // Middle-click closes a tab, but the browser only follows through on a
  // clean click (no drag) if we cancel the default auto-scroll grab on
  // mousedown — otherwise it silently swallows the click.
  const handleMouseDown = (event: MouseEvent) => {
    if (event.button === 1) event.preventDefault();
  };

  const handleAuxClick = (event: MouseEvent, id: FileId) => {
    if (event.button === 1) {
      event.preventDefault();
      closeFile(id);
    }
  };

  const handleContextMenu = (event: MouseEvent, id: FileId) => {
    showContextMenu(event, buildFileMenuItems(id, { pinnedIds, closeFile, togglePin }));
  };

  const treeRowClass = (id: FileId, indent: string) =>
    `flex items-center gap-2 py-0.75 ${indent} pr-2 cursor-pointer ${
      id === activeId ? "bg-list-active text-list-active-foreground" : "hover:bg-list-hover"
    }`;

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
          {openIds.map((id) => {
            const file = FILES_BY_ID[id];
            return (
              <li
                key={id}
                onClick={() => openFile(id)}
                onMouseDown={handleMouseDown}
                onAuxClick={(event) => handleAuxClick(event, id)}
                onContextMenu={(event) => handleContextMenu(event, id)}
                className={`flex items-center gap-2 py-0.75 pl-8 pr-2 cursor-pointer ${
                  id === activeId ? "bg-list-active text-list-active-foreground" : "hover:bg-list-hover"
                }`}
              >
                <FileTypeIcon type={file.type} />
                <span className="flex-1 truncate">{file.label}</span>
                {pinnedIds.includes(id) && <Pin className="h-3 w-3 shrink-0 text-muted-foreground" />}
              </li>
            );
          })}
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
            <span>app</span>
          </li>
          <li className="flex items-center gap-2 py-0.75 pl-14 pr-2 hover:bg-list-hover">
            <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground" />
            <span>routes</span>
          </li>
          <li
            onClick={() => openFile("home")}
            onContextMenu={(event) => handleContextMenu(event, "home")}
            className={treeRowClass("home", "pl-20")}
          >
            <FileTypeIcon type="tsx" />
            <span>home.tsx</span>
          </li>
          <li className="flex items-center gap-2 py-0.75 pl-14 pr-2 hover:bg-list-hover">
            <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground" />
            <span>styles</span>
          </li>
          <li
            onClick={() => openFile("contact")}
            onContextMenu={(event) => handleContextMenu(event, "contact")}
            className={treeRowClass("contact", "pl-20")}
          >
            <FileTypeIcon type="css" />
            <span>contact.css</span>
          </li>
          <li
            onClick={() => openFile("package")}
            onContextMenu={(event) => handleContextMenu(event, "package")}
            className={treeRowClass("package", "pl-8")}
          >
            <FileTypeIcon type="json" />
            <span>package.json</span>
          </li>
          <li
            onClick={() => openFile("resume")}
            onContextMenu={(event) => handleContextMenu(event, "resume")}
            className={treeRowClass("resume", "pl-8")}
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
