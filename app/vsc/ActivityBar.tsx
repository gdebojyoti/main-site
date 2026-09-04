import { Files, Search, Settings, User } from "lucide-react";

const ITEM_CLASS = "flex h-12 w-12 items-center justify-center border-l-2 border-transparent";

const ActivityBar = () => {
  return (
    <div className="flex w-12 shrink-0 flex-col bg-activity-bar text-activity-bar-inactive-foreground">
      <div className="flex flex-col">
        <button type="button" className={`${ITEM_CLASS} border-activity-bar-active-border text-activity-bar-foreground`}>
          <Files className="h-6 w-6" />
        </button>
        <button type="button" className={ITEM_CLASS}>
          <Search className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-auto flex flex-col">
        <button type="button" className={ITEM_CLASS}>
          <User className="h-6 w-6" />
        </button>
        <button type="button" className={ITEM_CLASS}>
          <Settings className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;
