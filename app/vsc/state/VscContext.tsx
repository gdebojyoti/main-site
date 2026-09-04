import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { FILES, HOME_FILE_ID, type FileId } from "../files";
import { writePinnedCookie } from "../lib/cookies";

type VscState = {
  openIds: FileId[];
  pinnedIds: FileId[];
  activeId: FileId;
};

type VscContextValue = VscState & {
  openFile: (id: FileId) => void;
  closeFile: (id: FileId) => void;
  togglePin: (id: FileId) => void;
  setActive: (id: FileId) => void;
};

const VscContext = createContext<VscContextValue | null>(null);

const ALL_IDS = FILES.map((file) => file.id);

function normalizePinned(ids: FileId[]): FileId[] {
  const filtered = ids.filter((id) => ALL_IDS.includes(id) && id !== HOME_FILE_ID);
  return [HOME_FILE_ID, ...filtered];
}

export const VscProvider = ({
  initialPinned,
  children,
}: {
  initialPinned: FileId[];
  children: ReactNode;
}) => {
  const [state, setState] = useState<VscState>(() => {
    const pinned = normalizePinned(initialPinned);
    return { openIds: pinned, pinnedIds: pinned, activeId: HOME_FILE_ID };
  });

  const openFile = useCallback((id: FileId) => {
    setState((s) => ({
      ...s,
      openIds: s.openIds.includes(id) ? s.openIds : [...s.openIds, id],
      activeId: id,
    }));
  }, []);

  const closeFile = useCallback((id: FileId) => {
    if (id === HOME_FILE_ID) return;
    setState((s) => {
      const openIds = s.openIds.filter((x) => x !== id);
      const pinnedIds = s.pinnedIds.filter((x) => x !== id);
      if (pinnedIds.length !== s.pinnedIds.length) writePinnedCookie(pinnedIds);

      let activeId = s.activeId;
      if (activeId === id) {
        const closedIndex = s.openIds.indexOf(id);
        activeId = openIds[closedIndex - 1] ?? openIds[0] ?? HOME_FILE_ID;
      }

      return { openIds, pinnedIds, activeId };
    });
  }, []);

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

  const setActive = useCallback((id: FileId) => {
    setState((s) => ({
      ...s,
      activeId: id,
      openIds: s.openIds.includes(id) ? s.openIds : [...s.openIds, id],
    }));
  }, []);

  const value = useMemo<VscContextValue>(
    () => ({ ...state, openFile, closeFile, togglePin, setActive }),
    [state, openFile, closeFile, togglePin, setActive],
  );

  return <VscContext.Provider value={value}>{children}</VscContext.Provider>;
};

export const useVsc = () => {
  const ctx = useContext(VscContext);
  if (!ctx) throw new Error("useVsc must be used within a VscProvider");
  return ctx;
};
