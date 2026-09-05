const HomeFile = () => {
  return (
    <div className="p-8 text-editor-foreground">
      <h1 className="text-2xl font-semibold text-editor-foreground">Debojyoti Ghosh</h1>
      <p className="mt-1 text-muted-foreground">UI / UX Developer &amp; Front-end Engineer</p>

      <p className="mt-6 leading-relaxed text-editor-foreground">
        Hi there, I am Debojyoti Ghosh. More details are available{" "}
        <a
          className="text-accent underline underline-offset-2"
          href="https://web.archive.org/web/20240319211617/https://debojyotighosh.com/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default HomeFile;
