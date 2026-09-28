import { ChevronDown, ChevronRight, Pin } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { useContextMenu } from "./contextMenu/ContextMenuProvider";
import { buildFileMenuItems } from "./contextMenu/fileMenuItems";
import { EXPLORER_TREE, FILES_BY_ID, type ExplorerNode, type FileId } from "./files";
import { FileTypeIcon } from "./icons";
import { useVsc } from "./state/VscContext";

const SECTION_HEADING_CLASS =
  "flex w-full items-center gap-1 px-2 py-1 text-left text-[11px] font-bold uppercase tracking-wide text-side-bar-heading-foreground cursor-pointer select-none";

// Tree rows start at 2rem and step in by 1.5rem per level.
const treeIndent = (depth: number) => ({ paddingLeft: `${2 + depth * 1.5}rem` });

const SideBar = ({ onFileNameClick }: { onFileNameClick: () => void }) => {
  const { openIds, pinnedIds, activeId, collapsedIds, toggleCollapsed, openFile, closeFile, togglePin } = useVsc();
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

  const isExpanded = (id: string) => !collapsedIds.includes(id);

  const fileRowClass = (id: FileId) =>
    `flex items-center gap-2 py-0.75 pr-2 cursor-pointer ${
      id === activeId ? "bg-list-active text-list-active-foreground" : "hover:bg-list-hover"
    }`;

  const section = (id: string, title: string, children: ReactNode) => {
    const expanded = isExpanded(id);
    const Chevron = expanded ? ChevronDown : ChevronRight;
    return (
      <div>
        <button
          type="button"
          onClick={() => toggleCollapsed(id)}
          aria-expanded={expanded}
          className={SECTION_HEADING_CLASS}
        >
          <Chevron className="h-3.5 w-3.5" />
          {title}
        </button>
        {expanded && children}
      </div>
    );
  };

  const renderTreeNode = (node: ExplorerNode, depth: number): ReactNode => {
    if (node.kind === "file") {
      const file = FILES_BY_ID[node.id];
      return (
        <li
          key={node.id}
          role="treeitem"
          aria-selected={node.id === activeId}
          onClick={() => { openFile(node.id); onFileNameClick(); }}
          onContextMenu={(event) => handleContextMenu(event, node.id)}
          className={fileRowClass(node.id)}
          style={treeIndent(depth)}
        >
          <FileTypeIcon type={file.type} />
          <span>{file.label}</span>
        </li>
      );
    }

    const expanded = isExpanded(node.id);
    const Chevron = expanded ? ChevronDown : ChevronRight;
    return (
      <li key={node.id} role="treeitem" aria-expanded={expanded} aria-selected={false}>
        <div
          onClick={() => toggleCollapsed(node.id)}
          className="flex items-center gap-2 py-0.75 pr-2 cursor-pointer select-none hover:bg-list-hover"
          style={treeIndent(depth)}
        >
          <Chevron className="h-3 w-3 shrink-0 text-muted-foreground" />
          <span>{node.name}</span>
        </div>
        {expanded && <ul role="group">{node.children.map((child) => renderTreeNode(child, depth + 1))}</ul>}
      </li>
    );
  };

  return (
    <nav className="flex w-64 shrink-0 flex-col overflow-y-auto border-l border-border bg-side-bar text-side-bar-foreground text-sm">
      {/* panel title */}
      <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-side-bar-heading-foreground">
        Explorer
      </div>

      {/* open editors */}
      {section(
        "section:open-editors",
        "Open Editors",
        <ul>
          {openIds.map((id) => {
            const file = FILES_BY_ID[id];
            return (
              <li
                key={id}
                onClick={() => { openFile(id); onFileNameClick(); }}
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
        </ul>,
      )}

      {/* file / folder structure */}
      {section(
        "section:main-site",
        "Main-Site",
        <ul role="tree" aria-label="Main-Site">
          {EXPLORER_TREE.map((node) => renderTreeNode(node, 0))}
        </ul>,
      )}
    </nav>
  );
};

export default SideBar;
