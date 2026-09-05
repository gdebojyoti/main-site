const HIGHLIGHT_CLASS = "bg-editor-highlight px-2 py-1 font-semibold text-editor-highlight-foreground";
const LINK_HIGHLIGHT_CLASS =
  "inline-block bg-accent px-2 py-1 font-semibold text-editor-highlight-foreground no-underline hover:opacity-80";

const HomeFile = () => {
  return (
    <div className="max-w-3xl px-8 py-12 text-editor-foreground">
      {/* <h1 className="text-2xl font-semibold text-editor-foreground">Debojyoti Ghosh</h1>
      <p className="mt-1 text-muted-foreground">UI / UX Developer &amp; Front-end Engineer</p> */}

      <p className="leading-relaxed text-editor-foreground">
        Hi there, I am <strong className={HIGHLIGHT_CLASS}>Debojyoti Ghosh</strong>.
      </p>

      <p className="mt-6 leading-relaxed text-editor-foreground">
        I am a <strong className={HIGHLIGHT_CLASS}>UI/ UX developer</strong> and{" "}
        <strong className={HIGHLIGHT_CLASS}>front-end engineer</strong>.
        These cool sounding words mean that I work with React JS, TypeScript, HTML5 and CSS3; and I consider myself to be fairly proficient with them.
      </p>

      <p className="mt-6 leading-relaxed text-editor-foreground">
        During the day, I work as a Front-end Engineer at Zeplyn AI.
        At night, I don my self-designed batsuit and work on web projects that interest me.
      </p>

      <p className="mt-6 leading-relaxed text-editor-foreground">
        My recent works include:
        <br />
        <a href="https://css-park.debojyotighosh.com/" className={LINK_HIGHLIGHT_CLASS} target="_blank">
          Amusement Park (a pure CSS project; with no images)
        </a>
        {/* Project Tiles (a web based game; in progress) */}
        {/* Flappy Bird (a web version) */}
      </p>

      <p className="mt-6 leading-relaxed text-editor-foreground">
        You can get in touch with me via email at{" "}
        <strong className={HIGHLIGHT_CLASS}>{"contact { at } debojyotighosh { dot } com"}</strong>.
      </p>
    </div>
  );
};

export default HomeFile;
