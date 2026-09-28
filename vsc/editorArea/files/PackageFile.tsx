const PackageFile = () => {
  return (
    <pre className="w-max min-w-full px-8 py-12 font-mono text-sm leading-relaxed text-editor-foreground">
      <code>{`{
  "name": "debojyoti-ghosh",
  "version": "26.9.6",
  "description": "UI / UX Developer & Front-end Engineer",
  "scripts": {
    "hobbies": "lego && video-games"
  },
  "dependencies": {
    "next": "16.3.6",
    "react": "19.2.8",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}`}</code>
    </pre>
  );
};

export default PackageFile;
