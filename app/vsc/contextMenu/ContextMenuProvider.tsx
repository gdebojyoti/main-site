import { createContext, useCallback, useContext, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

export type ContextMenuItem = {
  label: string;
  onSelect: () => void;
  disabled?: boolean;
};

type MenuState = {
  x: number;
  y: number;
  items: ContextMenuItem[];
  openUpward?: boolean;
};

type ContextMenuContextValue = {
  showContextMenu: (event: MouseEvent, items: ContextMenuItem[]) => void;
  showAnchoredMenu: (event: MouseEvent, items: ContextMenuItem[]) => void;
};

const ContextMenuContext = createContext<ContextMenuContextValue | null>(null);

export const ContextMenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuState | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const showContextMenu = useCallback((event: MouseEvent, items: ContextMenuItem[]) => {
    event.preventDefault();
    event.stopPropagation();
    setMenu({ x: event.clientX, y: event.clientY, items });
  }, []);

  const showAnchoredMenu = useCallback((event: MouseEvent, items: ContextMenuItem[]) => {
    event.preventDefault();
    event.stopPropagation();
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setMenu({ x: rect.right - 5, y: window.innerHeight - rect.top - 40, items, openUpward: true });
  }, []);

  const closeMenu = useCallback(() => setMenu(null), []);

  useEffect(() => {
    if (!menu) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) closeMenu();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", closeMenu);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", closeMenu);
    };
  }, [menu, closeMenu]);

  return (
    <ContextMenuContext.Provider value={{ showContextMenu, showAnchoredMenu }}>
      {children}
      {menu && (
        <ul
          ref={menuRef}
          className="fixed z-50 min-w-56 rounded-lg border border-border bg-background p-1 text-[13px] text-foreground shadow-xl shadow-scrim"
          style={menu.openUpward ? { bottom: menu.y, left: menu.x } : { top: menu.y, left: menu.x }}
        >
          {menu.items.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                disabled={item.disabled}
                onClick={() => {
                  if (item.disabled) return;
                  item.onSelect();
                  closeMenu();
                }}
                className="flex w-full cursor-pointer items-center rounded-sm px-2.5 py-1.5 text-left outline-none disabled:cursor-default disabled:opacity-40 enabled:hover:bg-list-hover enabled:hover:ring-1 enabled:hover:ring-inset enabled:hover:ring-accent/50 enabled:focus-visible:bg-list-hover enabled:focus-visible:ring-1 enabled:focus-visible:ring-inset enabled:focus-visible:ring-accent/50"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </ContextMenuContext.Provider>
  );
};

export const useContextMenu = () => {
  const ctx = useContext(ContextMenuContext);
  if (!ctx) throw new Error("useContextMenu must be used within a ContextMenuProvider");
  return ctx;
};
