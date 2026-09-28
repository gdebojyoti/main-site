import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { FILES, HOME_FILE_ID, type FileId } from "../files";
import { writePinnedCookie } from "../lib/cookies";

type VscState = {
  openIds: FileId[];
  pinnedIds: FileId[];
};

type VscContextValue = VscState & {
  activeId: FileId;
  isMobile: boolean;
  // Explorer folders / sections the user has collapsed. Kept here rather than
  // in SideBar because the sidebar unmounts when hidden.
  collapsedIds: string[];
  toggleCollapsed: (id: string) => void;
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
  isMobile,
  onNavigate,
  children,
}: {
  initialPinned: FileId[];
  activeId: FileId;
  isMobile: boolean;
  onNavigate: (id: FileId, options?: { replace?: boolean }) => void;
  children: ReactNode;
}) => {
  // The active file's tab is included from the start, so the server-rendered
  // HTML already shows it.
  const [state, setState] = useState<VscState>(() => {
    const pinned = normalizePinned(initialPinned);
    const openIds = pinned.includes(activeId) ? pinned : [...pinned, activeId];
    return { openIds, pinnedIds: pinned };
  });
  const [collapsedIds, setCollapsedIds] = useState<string[]>([]);

  // Visiting a file's route (a click, a direct URL, back/forward) always
  // opens that file's tab, unless it's already open (e.g. already pinned).
  // Adjusted during render rather than in an effect, so there's no frame
  // where the active file has no tab.
  const [prevActiveId, setPrevActiveId] = useState(activeId);
  if (activeId !== prevActiveId) {
    setPrevActiveId(activeId);
    if (!state.openIds.includes(activeId)) {
      setState({ ...state, openIds: [...state.openIds, activeId] });
    }
  }

  const openFile = useCallback(
    (id: FileId) => {
      onNavigate(id);
    },
    [onNavigate],
  );

  const closeFile = useCallback(
    (id: FileId) => {
      if (id === HOME_FILE_ID) return;
      const openIds = state.openIds.filter((x) => x !== id);
      const pinnedIds = state.pinnedIds.filter((x) => x !== id);
      setState({ openIds, pinnedIds });

      // side effects stay outside the state update, which React expects to be pure
      if (pinnedIds.length !== state.pinnedIds.length) writePinnedCookie(pinnedIds);
      if (id === activeId) {
        const closedIndex = state.openIds.indexOf(id);
        const fallback = openIds[closedIndex - 1] ?? openIds[0] ?? HOME_FILE_ID;
        onNavigate(fallback, { replace: true });
      }
    },
    [state, activeId, onNavigate],
  );

  const togglePin = useCallback(
    (id: FileId) => {
      if (id === HOME_FILE_ID) return;
      const isPinned = state.pinnedIds.includes(id);
      const pinnedIds = isPinned ? state.pinnedIds.filter((x) => x !== id) : [...state.pinnedIds, id];
      const openIds = state.openIds.includes(id) ? state.openIds : [...state.openIds, id];
      setState({ openIds, pinnedIds });
      writePinnedCookie(pinnedIds);
    },
    [state],
  );

  const toggleCollapsed = useCallback((id: string) => {
    setCollapsedIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
  }, []);

  const value = useMemo<VscContextValue>(
    () => ({ ...state, activeId, isMobile, collapsedIds, toggleCollapsed, openFile, closeFile, togglePin }),
    [state, activeId, isMobile, collapsedIds, toggleCollapsed, openFile, closeFile, togglePin],
  );

  return <VscContext.Provider value={value}>{children}</VscContext.Provider>;
};

export const useVsc = () => {
  const ctx = useContext(VscContext);
  if (!ctx) throw new Error("useVsc must be used within a VscProvider");
  return ctx;
};
