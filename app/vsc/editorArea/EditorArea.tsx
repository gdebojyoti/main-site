import { useEffect, useState } from "react";

import { useVsc } from "../state/VscContext";
import EditorGroup from "./EditorGroup";
import Panel from "./Panel";

const EditorArea = () => {
  const { isMobile } = useVsc();

  const [panelOpen, setPanelOpen] = useState(!isMobile);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "`") {
        event.preventDefault();
        setPanelOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="flex min-h-0 min-w-0 flex-1 flex-col gap-1">
      <EditorGroup />
      {panelOpen && <Panel onClose={() => setPanelOpen(false)} />}
    </main>
  );
};

export default EditorArea;
