const FILE_TYPE_COLOR_VAR: Record<string, string> = {
  tsx: "var(--file-tsx)",
  md: "var(--file-md)",
  css: "var(--file-css)",
  json: "var(--file-json)",
};

const FILE_TYPE_LABEL: Record<string, string> = {
  tsx: "TS",
  md: "MD",
  css: "CSS",
  json: "{}",
};

export const FileTypeIcon = ({ type, className }: { type: string; className?: string }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center text-[9px] font-bold leading-none ${className ?? ""}`}
    style={{ color: FILE_TYPE_COLOR_VAR[type] ?? "currentColor" }}
  >
    {FILE_TYPE_LABEL[type] ?? type.slice(0, 2).toUpperCase()}
  </span>
);
