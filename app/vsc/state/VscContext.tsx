import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { FILES, HOME_FILE_ID, type FileId } from "../files";
import { writePinnedCookie } from "../lib/cookies";

type VscState = {
  openIds: FileId[];
  pinnedIds: FileId[];
};

type VscContextValue = VscState & {
  activeId: FileId;
  openFile: (id: FileId) => void;
  closeFile: (id: FileId) => void;
  togglePin: (id: FileId) => void;
};

const VscContext = createContext<VscContextValue | null>(null);

const ALL_IDS = FILES.map((file) => file.id);

function normalizePinned(ids: FileId[]): FileId[] {
  const filtered = ids.filter((id) => ALL_IDS.includes(id) && id !== HOME_FILE_ID);
  return [HOME_FILE_ID, ...filtered];
}

export const VscProvider = ({
  initialPinned,
  activeId,
  onNavigate,
  children,
}: {
  initialPinned: FileId[];
  activeId: FileId;
  onNavigate: (id: FileId, options?: { replace?: boolean }) => void;
  children: ReactNode;
}) => {
  const [state, setState] = useState<VscState>(() => {
    const pinned = normalizePinned(initialPinned);
    return { openIds: pinned, pinnedIds: pinned };
  });

  // Visiting a file's route (a click, a direct URL, back/forward) always
  // opens that file's tab, unless it's already open (e.g. already pinned).
  useEffect(() => {
    setState((s) => (s.openIds.includes(activeId) ? s : { ...s, openIds: [...s.openIds, activeId] }));
  }, [activeId]);

  const openFile = useCallback(
    (id: FileId) => {
      onNavigate(id);
    },
    [onNavigate],
  );

  const closeFile = useCallback(
    (id: FileId) => {
      if (id === HOME_FILE_ID) return;
      setState((s) => {
        const openIds = s.openIds.filter((x) => x !== id);
        const pinnedIds = s.pinnedIds.filter((x) => x !== id);
        if (pinnedIds.length !== s.pinnedIds.length) writePinnedCookie(pinnedIds);

        if (id === activeId) {
          const closedIndex = s.openIds.indexOf(id);
          const fallback = openIds[closedIndex - 1] ?? openIds[0] ?? HOME_FILE_ID;
          onNavigate(fallback, { replace: true });
        }

        return { openIds, pinnedIds };
      });
    },
    [activeId, onNavigate],
  );

  const togglePin = useCallback((id: FileId) => {
    if (id === HOME_FILE_ID) return;
    setState((s) => {
      const isPinned = s.pinnedIds.includes(id);
      const pinnedIds = isPinned ? s.pinnedIds.filter((x) => x !== id) : [...s.pinnedIds, id];
      writePinnedCookie(pinnedIds);
      const openIds = s.openIds.includes(id) ? s.openIds : [...s.openIds, id];
      return { ...s, pinnedIds, openIds };
    });
  }, []);

  const value = useMemo<VscContextValue>(
    () => ({ ...state, activeId, openFile, closeFile, togglePin }),
    [state, activeId, openFile, closeFile, togglePin],
  );

  return <VscContext.Provider value={value}>{children}</VscContext.Provider>;
};

export const useVsc = () => {
  const ctx = useContext(VscContext);
  if (!ctx) throw new Error("useVsc must be used within a VscProvider");
  return ctx;
};
