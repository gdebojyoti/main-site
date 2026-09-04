import EditorGroup from "./EditorGroup";
import Panel from "./Panel";

const EditorArea = () => {
  return (
    <main className="flex min-h-0 min-w-0 flex-1 flex-col gap-2">
      <EditorGroup />
      <Panel />
    </main>
  );
};

export default EditorArea;
