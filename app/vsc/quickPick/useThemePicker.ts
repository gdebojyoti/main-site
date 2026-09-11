import { useCallback } from "react";
import { THEMES, useTheme } from "../state/ThemeContext";
import { useQuickPick } from "./QuickPickProvider";

export function useThemePicker() {
  const { showQuickPick } = useQuickPick();
  const { theme, setTheme } = useTheme();

  return useCallback(() => {
    showQuickPick(
      THEMES.map((entry) => ({
        label: entry.disabled ? `${entry.label} (coming soon)` : entry.label,
        selected: entry.id === theme,
        onSelect: () => setTheme(entry.id),
        disabled: entry.disabled
      })),
    );
  }, [showQuickPick, theme, setTheme]);
}
