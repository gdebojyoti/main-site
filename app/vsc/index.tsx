import { ContextMenuProvider } from "./contextMenu/ContextMenuProvider";
import type { FileId } from "./files";
import { VscProvider } from "./state/VscContext";
import Workbench from "./Workbench";

const VSC = ({ initialPinned }: { initialPinned: FileId[] }) => (
  <VscProvider initialPinned={initialPinned}>
    <ContextMenuProvider>
      <Workbench />
    </ContextMenuProvider>
  </VscProvider>
);

export default VSC;
