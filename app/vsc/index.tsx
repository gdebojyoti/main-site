import ActivityBar from "./ActivityBar";
import ActivityPanel from "./ActivityPanel";
import BottomBar from "./BottomBar";
import MainContent from "./mainContent/MainContent";

const VSC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* title bar - SKIP for now */}

      {/* container */}
      <div className="flex grow">
        {/* activity bar */}
        <ActivityBar />

        {/* activity panel */}
        <ActivityPanel />

        {/* main content */}
        <MainContent />
      </div>

      {/* bottom bar - branch, error / warning, UTF, CRLF, language, etc*/}
      <BottomBar />
    </div>
  );
};

export default VSC;
