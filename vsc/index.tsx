"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ContextMenuProvider } from "./contextMenu/ContextMenuProvider";
import { FILE_ROUTES, HOME_FILE_ID, type FileId } from "./files";
import { QuickPickProvider } from "./quickPick/QuickPickProvider";
import { ThemeProvider } from "./state/ThemeContext";
import { VscProvider } from "./state/VscContext";
import Workbench from "./Workbench";

function useRouteFileId(): FileId {
  const pathname = usePathname();
  const entry = Object.entries(FILE_ROUTES).find(([, route]) => route === pathname);
  return entry ? (entry[0] as FileId) : HOME_FILE_ID;
}

const VSC = ({ initialPinned, isMobile }: { initialPinned: FileId[]; isMobile: boolean }) => {
  const activeId = useRouteFileId();
  const router = useRouter();

  const handleNavigate = useCallback(
    (id: FileId, options?: { replace?: boolean }) => {
      if (id === activeId) return;
      if (options?.replace) router.replace(FILE_ROUTES[id]);
      else router.push(FILE_ROUTES[id]);
    },
    [activeId, router],
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
