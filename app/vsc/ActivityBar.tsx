import type { MouseEvent } from "react";
import { Files, Search, Settings, User } from "lucide-react";

import { useContextMenu } from "./contextMenu/ContextMenuProvider";
import { buildSettingsMenuItems } from "./contextMenu/settingsMenuItems";
import { useThemePicker } from "./quickPick/useThemePicker";

const ITEM_CLASS = "flex h-12 w-12 items-center justify-center border-l-2";

const ActivityBar = ({
  sidebarOpen,
  onToggleSidebar,
}: {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}) => {
  const { showAnchoredMenu } = useContextMenu();
  const openThemePicker = useThemePicker();

  const handleSettingsClick = (event: MouseEvent<HTMLButtonElement>) => {
    showAnchoredMenu(event, buildSettingsMenuItems({ onThemeClick: openThemePicker }));
  };

  return (
    <div className="flex w-12 shrink-0 flex-col bg-activity-bar text-activity-bar-inactive-foreground">
      <div className="flex flex-col">
        <button
          type="button"
          onClick={onToggleSidebar}
          className={`${ITEM_CLASS} cursor-pointer ${
            sidebarOpen
              ? "border-activity-bar-active-border text-activity-bar-foreground"
              : "border-transparent"
          }`}
        >
          <Files className="h-6 w-6" />
        </button>
        <button type="button" className={`${ITEM_CLASS} border-transparent`}>
          <Search className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-auto flex flex-col">
        <button type="button" className={`${ITEM_CLASS} border-transparent`}>
          <User className="h-6 w-6" />
        </button>
        <button type="button" onClick={handleSettingsClick} className={`${ITEM_CLASS} cursor-pointer border-transparent`}>
          <Settings className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;
