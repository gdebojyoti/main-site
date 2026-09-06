import { GitBranch } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="flex h-6 shrink-0 items-center justify-between bg-status-bar px-2 text-xs text-status-bar-foreground">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch className="h-3.5 w-3.5" />
          dev
        </span>
        <span>&#9888; 0&nbsp;&nbsp;&#10006; 0</span>
      </div>

      <div className="flex items-center gap-3">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>CRLF</span>
        <span>TypeScript JSX</span>
      </div>
    </div>
  );
};

export default StatusBar;
