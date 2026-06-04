import EditorPanel from "./EditorPanel";
import Terminal from "./Terminal";

const MainContent = () => {
  return (
    <main className="flex flex-col">
      {/* editor panel */}
      <EditorPanel />

      {/* terminal */}
      <Terminal />
    </main>
  )
}

export default MainContent;