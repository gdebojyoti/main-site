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
};

type ContextMenuContextValue = {
  showContextMenu: (event: MouseEvent, items: ContextMenuItem[]) => void;
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
    <ContextMenuContext.Provider value={{ showContextMenu }}>
      {children}
      {menu && (
        <ul
          ref={menuRef}
          className="fixed z-50 min-w-40 rounded-md border border-border bg-side-bar py-1 text-sm text-side-bar-foreground shadow-lg"
          style={{ top: menu.y, left: menu.x }}
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
                className="flex w-full cursor-pointer px-3 py-1 text-left disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:bg-list-hover"
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
