const ContactFile = () => {
  return (
    <pre className="p-8 font-mono text-sm leading-relaxed text-editor-foreground">
      <code>{`.contact-details {
  --email: "contact[at]debojyotighosh[dot].com";
  --linkedin: "https://www.linkedin.com/in/gdebojyoti/";
  --github: "https://github.com/gdebojyoti/";

  --city: "Durgapur";
  --state: "West Bengal";
  --country: "India";
}`}</code>
    </pre>
  );
};

export default ContactFile;
