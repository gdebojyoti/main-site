import { X } from "lucide-react";

const PANEL_TABS = ["Problems", "Output", "Terminal", "Ports", "Debug Console"];
// const PANEL_TABS = ["Terminal"];

const Panel = () => {
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
        <button type="button" className="mr-1 flex h-6 w-6 shrink-0 items-center justify-center text-muted-foreground">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* terminal contents */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-xs leading-relaxed text-editor-foreground">
        <pre className="whitespace-pre-wrap">
          {`PS D:\\Work\\main-site> npm run dev

> dev
> react-router dev

  \u2794  Local:   http://localhost:5173/
  \u2794  Network: use --host to expose
  \u2794  press h + enter to show help
`}
        </pre>
        <span className="inline-block h-3.5 w-2 animate-pulse bg-editor-foreground align-middle" />
      </div>
    </div>
  );
};

export default Panel;
