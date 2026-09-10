import type { ContextMenuItem } from "./ContextMenuProvider";

export function buildSettingsMenuItems({ onThemeClick }: { onThemeClick: () => void }): ContextMenuItem[] {
  return [
    { label: "Theme", onSelect: onThemeClick },
    { label: "About", onSelect: () => {} },
    { label: "Contact", onSelect: () => {}, disabled: true },
    { label: "Check for updates", onSelect: () => {} },
  ];
}
