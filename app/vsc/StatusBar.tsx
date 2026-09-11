import { CircleX, GitBranch, TriangleAlert } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="flex h-6 shrink-0 items-center justify-between bg-status-bar px-4 pb-1 text-xs text-status-bar-foreground/60">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch size={16} />
          dev
        </span>
        <span className="flex items-center gap-1">
          <CircleX size={16} />
          0
          <TriangleAlert size={16} />
          0
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* <span>Ln 1, Col 1</span> */}
        {/* <span>Spaces: 2</span> */}
        <span>UTF-8</span>
        <span>CRLF</span>
        {/* <span>TypeScript JSX</span> */}
      </div>
    </div>
  );
};

export default StatusBar;
