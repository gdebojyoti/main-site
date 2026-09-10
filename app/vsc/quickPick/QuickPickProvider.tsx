import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export type QuickPickItem = {
  label: string;
  onSelect: () => void;
  selected?: boolean;
};

type QuickPickContextValue = {
  showQuickPick: (items: QuickPickItem[]) => void;
};

const QuickPickContext = createContext<QuickPickContextValue | null>(null);

export const QuickPickProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<QuickPickItem[] | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const showQuickPick = useCallback((next: QuickPickItem[]) => setItems(next), []);
  const closeQuickPick = useCallback(() => setItems(null), []);

  useEffect(() => {
    if (!items) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) closeQuickPick();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeQuickPick();
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", closeQuickPick);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", closeQuickPick);
    };
  }, [items, closeQuickPick]);

  return (
    <QuickPickContext.Provider value={{ showQuickPick }}>
      {children}
      {items && (
        <ul
          ref={listRef}
          className="fixed top-2 left-1/2 z-50 w-150 max-w-[calc(100vw-1rem)] -translate-x-1/2 rounded-md border border-border bg-background p-1 text-[13px] text-foreground shadow-xl shadow-scrim"
        >
          {items.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => {
                  closeQuickPick();
                  item.onSelect();
                }}
                className={`flex w-full cursor-pointer items-center rounded-sm px-2.5 py-1.5 text-left outline-none ${
                  item.selected
                    ? "bg-quick-input-focus text-quick-input-focus-foreground"
                    : "hover:bg-list-hover hover:ring-1 hover:ring-accent/50 hover:ring-inset focus-visible:bg-list-hover focus-visible:ring-1 focus-visible:ring-accent/50 focus-visible:ring-inset"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </QuickPickContext.Provider>
  );
};

export const useQuickPick = () => {
  const ctx = useContext(QuickPickContext);
  if (!ctx) throw new Error("useQuickPick must be used within a QuickPickProvider");
  return ctx;
};
