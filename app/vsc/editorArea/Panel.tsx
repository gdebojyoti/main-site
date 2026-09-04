import { X } from "lucide-react";
import Terminal from "./Terminal";

const PANEL_TABS = ["Problems", "Output", "Terminal", "Ports", "Debug Console"];

const Panel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex h-56 shrink-0 flex-col overflow-hidden rounded-lg border border-border bg-panel">
      {/* panel tab strip */}
      <div className="flex shrink-0 items-center justify-between px-1 pt-1">
        <ul className="flex text-xs">
          {PANEL_TABS.map((tab) => {
            const isActive = tab === "Terminal";
            return (
              <li
                key={tab}
                className={`px-3 py-1.5 ${
                  isActive
                    ? "rounded-md bg-tab-active text-panel-tab-active-foreground cursor-pointer"
                    : "text-panel-tab-inactive-foreground cursor-not-allowed"
                }`}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={onClose}
          className="mr-1 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center text-muted-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* terminal contents */}
      <Terminal />
    </div>
  );
};

export default Panel;
