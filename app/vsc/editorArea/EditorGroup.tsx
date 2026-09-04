import { ChevronRight, Pin, X } from "lucide-react";
import { ACTIVE_FILE_ID, FILES } from "../files";
import { FileTypeIcon } from "../icons";
import ContactFile from "./files/ContactFile";
import HomeFile from "./files/HomeFile";
import PackageFile from "./files/PackageFile";
import ResumeFile from "./files/ResumeFile";

const FILE_CONTENT = {
  home: HomeFile,
  resume: ResumeFile,
  contact: ContactFile,
  package: PackageFile,
};

const activeFile = FILES.find((file) => file.id === ACTIVE_FILE_ID)!;
const ActiveContent = FILE_CONTENT[activeFile.id];
const breadcrumbSegments = activeFile.path.split("/");

const EditorGroup = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-editor">
      {/* tab bar */}
      <ul className="flex shrink-0 px-1 pt-1">
        {FILES.map((file) => {
          const isActive = file.id === ACTIVE_FILE_ID;
          return (
            <li
              key={file.id}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm ${
                isActive
                  ? "rounded-md bg-tab-active text-tab-active-foreground"
                  : "text-tab-inactive-foreground"
              }`}
            >
              <FileTypeIcon type={file.type} />
              <span>{file.label}</span>
              {file.pinned ? (
                <Pin className="h-3 w-3 shrink-0 text-muted-foreground" />
              ) : (
                <X className="h-3 w-3 shrink-0 text-muted-foreground" />
              )}
            </li>
          );
        })}
      </ul>

      {/* breadcrumb */}
      <div className="flex shrink-0 items-center gap-1 px-3 py-1 text-xs text-muted-foreground">
        {breadcrumbSegments.map((segment, index) => (
          <span key={segment} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-3 w-3" />}
            <span className={index === breadcrumbSegments.length - 1 ? "text-editor-foreground" : ""}>
              {segment}
            </span>
          </span>
        ))}
      </div>

      {/* editor file contents */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <ActiveContent />
      </div>
    </div>
  );
};

export default EditorGroup;
