const PackageFile = () => {
  return (
    <pre className="px-8 py-12 font-mono text-sm leading-relaxed text-editor-foreground">
      <code>{`{
  "name": "debojyoti-ghosh",
  "version": "26.9.4",
  "description": "UI / UX Developer & Front-end Engineer",
  "scripts": {
    "hobbies": "lego && video-games"
  },
  "dependencies": {
    "react": "^19.2.6",
    "react-router": "7.15.0",
    "tailwindcss": "^4.2.2",
    "typescript": "^5.9.3"
  }
}`}</code>
    </pre>
  );
};

export default PackageFile;
