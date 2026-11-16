import { Fragment } from "react";

// null renders an empty line between the groups
const PROPERTIES: ([name: string, value: string] | null)[] = [
  ["--email", "contact[at]debojyotighosh[dot].com"],
  ["--linkedin", "https://www.linkedin.com/in/gdebojyoti/"],
  ["--github", "https://github.com/gdebojyoti/"],
  null,
  ["--city", "Durgapur"],
  ["--state", "West Bengal"],
  ["--country", "India"],
];

const ContactFile = () => {
  return (
    <pre className="w-max min-w-full px-8 py-12 font-mono text-sm leading-relaxed text-syntax-punctuation">
      <code>
        <span className="text-syntax-selector">.contact-details</span>
        {" {\n"}
        {PROPERTIES.map((entry, index) => (
          <Fragment key={index}>
            {entry && (
              <>
                {"  "}
                <span className="text-syntax-property">{entry[0]}</span>
                {": "}
                <span className="text-syntax-string">{`"${entry[1]}"`}</span>
                {";"}
              </>
            )}
            {"\n"}
          </Fragment>
        ))}
        {"}"}
      </code>
    </pre>
  );
};

export default ContactFile;
