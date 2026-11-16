import type { ReactNode } from "react";

const Key = ({ children }: { children: string }) => (
  <span className="text-syntax-key">{`"${children}"`}</span>
);

const Str = ({ children }: { children: string }) => (
  <span className="text-syntax-string">{`"${children}"`}</span>
);

// bracket-pair colorization: outer braces use level 1, nested objects use level 2
const Bracket = ({ level, children }: { level: 1 | 2; children: ReactNode }) => (
  <span className={level === 1 ? "text-syntax-bracket-1" : "text-syntax-bracket-2"}>{children}</span>
);

const PackageFile = () => {
  return (
    <pre className="w-max min-w-full px-8 py-12 font-mono text-sm leading-relaxed text-syntax-punctuation">
      <code>
        <Bracket level={1}>{"{"}</Bracket>{"\n"}
        {"  "}<Key>name</Key>{": "}<Str>debojyoti-ghosh</Str>{",\n"}
        {"  "}<Key>version</Key>{": "}<Str>26.11.16</Str>{",\n"}
        {"  "}<Key>description</Key>{": "}<Str>UI / UX Developer & Front-end Engineer</Str>{",\n"}
        {"  "}<Key>scripts</Key>{": "}<Bracket level={2}>{"{"}</Bracket>{"\n"}
        {"    "}<Key>hobbies</Key>{": "}<Str>lego && video-games</Str>{"\n"}
        {"  "}<Bracket level={2}>{"}"}</Bracket>{",\n"}
        {"  "}<Key>dependencies</Key>{": "}<Bracket level={2}>{"{"}</Bracket>{"\n"}
        {"    "}<Key>next</Key>{": "}<Str>16.3.6</Str>{",\n"}
        {"    "}<Key>react</Key>{": "}<Str>19.2.8</Str>{",\n"}
        {"    "}<Key>tailwindcss</Key>{": "}<Str>^4</Str>{",\n"}
        {"    "}<Key>typescript</Key>{": "}<Str>^5</Str>{"\n"}
        {"  "}<Bracket level={2}>{"}"}</Bracket>{"\n"}
        <Bracket level={1}>{"}"}</Bracket>
      </code>
    </pre>
  );
};

export default PackageFile;
