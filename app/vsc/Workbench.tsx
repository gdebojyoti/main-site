import { useEffect, useState } from "react";

import ActivityBar from "./ActivityBar";
import EditorArea from "./editorArea/EditorArea";
import { useThemePicker } from "./quickPick/useThemePicker";
import SideBar from "./SideBar";
import StatusBar from "./StatusBar";
import { useVsc } from "./state/VscContext";

const Workbench = () => {
  const { isMobile } = useVsc();
  const openThemePicker = useThemePicker();

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "b") {
        event.preventDefault();
        setSidebarOpen((open) => !open);
      }

      // Pressing Alt+Shift+T should open the theme quick picker
      // TODO: In the future, replace this sequence with Ctrl+K Ctrl+T
      
      // Windows treats Ctrl+Alt as AltGr, and Chrome then reports altKey as false and
      // AltGraph as true. event.code, since Alt changes the character a key produces.
      const altPressed = event.altKey || event.getModifierState("AltGraph");
      if (event.shiftKey && altPressed && event.code === "KeyT") {
        event.preventDefault();
        openThemePicker();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openThemePicker]);

  const onFileNameClick = () => {
    // do nothing for desktop
    if (!isMobile) {
      return;
    }

    // close sidebar for mobile
    setSidebarOpen(false);
  }

  return (
    <div className="flex h-full flex-col overflow-x-hidden bg-canvas">
      {/* title bar - SKIP for now */}

      {/* activity bar (flush) + side bar + editor area (floating, rounded panels) */}
      <div className="flex min-h-0 min-w-0 flex-1">
        <ActivityBar sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen((open) => !open)} />
        <div className="flex min-h-0 min-w-0 flex-1 gap-1 pt-1 pr-1 pb-2">
          {sidebarOpen && <SideBar onFileNameClick={onFileNameClick} />}
          <EditorArea sidebarOpen={sidebarOpen} />
        </div>
      </div>

      {/* status bar - branch, error / warning, encoding, line ending, language, etc */}
      {!isMobile && <StatusBar />}
    </div>
  );
};

export default Workbench;
