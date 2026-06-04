export function meta() {
  return [
    { title: "Debojyoti Ghosh | UI / UX Developer & Front-end Engineer" },
    { name: "description", content: "UI / UX Developer & Front-end Engineer" },
  ];
}

const TempPage = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <div className="md:w-[50%] p-5">
        <h1 className="text-3xl">🌱 Something new is growing here</h1>

        <div className="mt-8 text-xl leading-relaxed_ flex flex-col gap-4">
          <p>Welcome, traveler.</p>

          <p>This little corner of the internet is currently being rearranged, rebuilt, and occasionally stared at thoughtfully while I wonder whether that button should really be blue.</p>

          <p>The website isn't quite ready for visitors yet, but it will be soon.</p>

          <p>In the meantime, if you'd like to get in touch, send an email to: <strong>contact[at]debojyotighosh[dot]com</strong></p>

          <p>Thanks for stopping by. I hope you'll visit again once the dust has settled and the pixels are in their proper places. ✨</p>
        </div>
      </div>
    </div>
  );
}

export default TempPage;
