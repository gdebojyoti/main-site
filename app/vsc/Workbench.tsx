import ActivityBar from "./ActivityBar";
import EditorArea from "./editorArea/EditorArea";
import SideBar from "./SideBar";
import StatusBar from "./StatusBar";

const Workbench = () => {
  return (
    <div className="flex h-full flex-col bg-canvas">
      {/* title bar - SKIP for now */}

      {/* activity bar (flush) + side bar + editor area (floating, rounded panels) */}
      <div className="flex min-h-0 flex-1">
        <ActivityBar />
        <div className="flex min-h-0 flex-1 gap-2 p-2">
          <SideBar />
          <EditorArea />
        </div>
      </div>

      {/* status bar - branch, error / warning, encoding, line ending, language, etc */}
      <StatusBar />
    </div>
  );
};

export default Workbench;
