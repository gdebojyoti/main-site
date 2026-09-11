import { useCallback } from "react";
import { useMatches, useNavigate } from "react-router";
import { ContextMenuProvider } from "./contextMenu/ContextMenuProvider";
import { FILE_ROUTES, HOME_FILE_ID, type FileId } from "./files";
import { QuickPickProvider } from "./quickPick/QuickPickProvider";
import { ThemeProvider } from "./state/ThemeContext";
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

const VSC = ({ initialPinned, isMobile }: { initialPinned: FileId[]; isMobile: boolean }) => {
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
    <ThemeProvider>
      <VscProvider
        initialPinned={initialPinned}
        activeId={activeId}
        isMobile={isMobile}
        onNavigate={handleNavigate}
      >
        <ContextMenuProvider>
          <QuickPickProvider>
            <Workbench />
          </QuickPickProvider>
        </ContextMenuProvider>
      </VscProvider>
    </ThemeProvider>
  );
};

export default VSC;
