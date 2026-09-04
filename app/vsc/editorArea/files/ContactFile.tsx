const ContactFile = () => {
  return (
    <pre className="px-8 py-6 font-mono text-sm leading-relaxed text-editor-foreground">
      <code>{`.contact {
  --email: "you@example.com";
  --linkedin: "linkedin.com/in/username";
  --github: "github.com/username";

  --city: "City";
  --state: "State";
  --country: "Country";
}`}</code>
    </pre>
  );
};

export default ContactFile;
