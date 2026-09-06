import { useCallback } from "react";
import { useMatches, useNavigate } from "react-router";
import { ContextMenuProvider } from "./contextMenu/ContextMenuProvider";
import { FILE_ROUTES, HOME_FILE_ID, type FileId } from "./files";
import { VscProvider } from "./state/VscContext";
import Workbench from "./Workbench";

function useRouteFileId(): FileId {
  const matches = useMatches();
  for (let i = matches.length - 1; i >= 0; i--) {
    const fileId = (matches[i].handle as { fileId?: FileId } | undefined)?.fileId;
    if (fileId) return fileId;
  }
  return HOME_FILE_ID;
}

const VSC = ({ initialPinned }: { initialPinned: FileId[] }) => {
  const activeId = useRouteFileId();
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (id: FileId, options?: { replace?: boolean }) => {
      if (id === activeId) return;
      navigate(FILE_ROUTES[id], { replace: options?.replace });
    },
    [activeId, navigate],
  );

  return (
    <VscProvider initialPinned={initialPinned} activeId={activeId} onNavigate={handleNavigate}>
      <ContextMenuProvider>
        <Workbench />
      </ContextMenuProvider>
    </VscProvider>
  );
};

export default VSC;
