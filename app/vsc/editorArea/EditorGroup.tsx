import { ChevronRight, Pin, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useContextMenu } from "../contextMenu/ContextMenuProvider";
import { buildFileMenuItems } from "../contextMenu/fileMenuItems";
import { FILES_BY_ID, HOME_FILE_ID, type FileId } from "../files";
import { FileTypeIcon } from "../icons";
import { useVsc } from "../state/VscContext";
import ContactFile from "./files/ContactFile";
import HomeFile from "./files/HomeFile";
import PackageFile from "./files/PackageFile";
import ResumeFile from "./files/ResumeFile";

const FILE_CONTENT = {
  home: HomeFile,
  resume: ResumeFile,
  contact: ContactFile,
  package: PackageFile,
};

const EditorGroup = () => {
  const { openIds, pinnedIds, activeId, closeFile, togglePin, setActive } = useVsc();
  const { showContextMenu } = useContextMenu();

  const activeFile = FILES_BY_ID[activeId];
  const ActiveContent = FILE_CONTENT[activeFile.id];
  const breadcrumbSegments = activeFile.path.split("/");

  const handleAuxClick = (event: MouseEvent, id: FileId) => {
    if (event.button === 1) {
      event.preventDefault();
      closeFile(id);
    }
  };

  const handleContextMenu = (event: MouseEvent, id: FileId) => {
    showContextMenu(event, buildFileMenuItems(id, { pinnedIds, closeFile, togglePin }));
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-editor">
      {/* tab bar */}
      <ul className="flex shrink-0 px-1 pt-1">
        {openIds.map((id) => {
          const file = FILES_BY_ID[id];
          const isActive = id === activeId;
          const isPinned = pinnedIds.includes(id);
          return (
            <li
              key={id}
              onClick={() => setActive(id)}
              onAuxClick={(event) => handleAuxClick(event, id)}
              onContextMenu={(event) => handleContextMenu(event, id)}
              className={`flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm ${
                isActive
                  ? "rounded-md bg-tab-active text-tab-active-foreground"
                  : "text-tab-inactive-foreground"
              }`}
            >
              <FileTypeIcon type={file.type} />
              <span>{file.label}</span>
              {isPinned ? (
                <Pin
                  className="h-3 w-3 shrink-0 text-muted-foreground"
                  onClick={(event) => {
                    event.stopPropagation();
                    togglePin(id);
                  }}
                />
              ) : (
                <X
                  className="h-3 w-3 shrink-0 text-muted-foreground"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (id !== HOME_FILE_ID) closeFile(id);
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>

      {/* breadcrumb */}
      <div className="flex shrink-0 items-center gap-1 px-3 py-1 text-xs text-muted-foreground">
        {breadcrumbSegments.map((segment, index) => (
          <span key={segment} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-3 w-3" />}
            <span className={index === breadcrumbSegments.length - 1 ? "text-editor-foreground" : ""}>
              {segment}
            </span>
          </span>
        ))}
      </div>

      {/* editor file contents */}
      <div
        className="min-h-0 flex-1 overflow-y-auto"
        onContextMenu={(event) => handleContextMenu(event, activeId)}
      >
        <ActiveContent />
      </div>
    </div>
  );
};

export default EditorGroup;
