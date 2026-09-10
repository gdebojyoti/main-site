import type { ContextMenuItem } from "./ContextMenuProvider";

export function buildSettingsMenuItems(): ContextMenuItem[] {
  return [
    { label: "Theme", onSelect: () => {} },
    { label: "About", onSelect: () => {} },
    { label: "Contact", onSelect: () => {}, disabled: true },
    { label: "Check for updates", onSelect: () => {} },
  ];
}
