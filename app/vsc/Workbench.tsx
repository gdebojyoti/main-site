import { useEffect, useState } from "react";
import ActivityBar from "./ActivityBar";
import EditorArea from "./editorArea/EditorArea";
import SideBar from "./SideBar";
import StatusBar from "./StatusBar";
import { useVsc } from "./state/VscContext";

const Workbench = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { isMobile } = useVsc();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "b") {
        event.preventDefault();
        setSidebarOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex h-full flex-col bg-canvas">
      {/* title bar - SKIP for now */}

      {/* activity bar (flush) + side bar + editor area (floating, rounded panels) */}
      <div className="flex min-h-0 flex-1">
        <ActivityBar sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen((open) => !open)} />
        <div className="flex min-h-0 flex-1 gap-1 pt-1 pr-1 pb-2">
          {sidebarOpen && <SideBar />}
          <EditorArea />
        </div>
      </div>

      {/* status bar - branch, error / warning, encoding, line ending, language, etc */}
      {!isMobile && <StatusBar />}
    </div>
  );
};

export default Workbench;
