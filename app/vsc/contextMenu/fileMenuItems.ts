import { HOME_FILE_ID, type FileId } from "../files";
import type { ContextMenuItem } from "./ContextMenuProvider";

type FileMenuActions = {
  pinnedIds: FileId[];
  closeFile: (id: FileId) => void;
  togglePin: (id: FileId) => void;
};

export function buildFileMenuItems(id: FileId, { pinnedIds, closeFile, togglePin }: FileMenuActions): ContextMenuItem[] {
  const isHome = id === HOME_FILE_ID;
  const isPinned = pinnedIds.includes(id);

  return [
    { label: "Close", onSelect: () => closeFile(id), disabled: isHome },
    { label: isPinned ? "Unpin" : "Pin", onSelect: () => togglePin(id), disabled: isHome },
  ];
}
