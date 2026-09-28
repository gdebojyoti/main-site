import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FILE_ROUTES } from "../../files";

// same as the highlights in ResumeFile; cloned decoration keeps the padding on both halves when one wraps
const HIGHLIGHT_CLASS =
  "box-decoration-clone bg-editor-highlight px-1.5 py-0.5 font-semibold text-editor-highlight-foreground";
const PARAGRAPH_CLASS = "leading-7 @xl:leading-relaxed";
const LINK_CLASS = "inline-flex items-center gap-0.5 text-editor-link hover:underline";
// 36px tall (py-1.75 + 1px border around the 20px line)
const COMMAND_CLASS = "border border-editor-outline px-3 py-1.75 font-mono text-sm hover:border-accent";

const HomeFile = () => {
  return (
    <div className="@container">
      <div className="box-content max-w-3xl space-y-6 px-8 py-12 text-editor-foreground @xl:space-y-8 [&_strong]:text-editor-emphasis">
        <p className="font-mono text-sm text-editor-comment">{"// hello, world"}</p>

        <h1 className="text-3xl leading-snug font-medium text-editor-emphasis @xl:text-4xl">
          Hi there, I am <span className={HIGHLIGHT_CLASS}>Debojyoti Ghosh</span>.
        </h1>

        <p className={PARAGRAPH_CLASS}>
          I am a <span className={`${HIGHLIGHT_CLASS} whitespace-nowrap`}>UI / UX developer</span> and{" "}
          <span className={`${HIGHLIGHT_CLASS} whitespace-nowrap`}>front-end engineer</span>.
          These cool sounding words mean that I work with <strong>NextJS, React, TypeScript, Tailwind CSS & GraphQL</strong>;
          and I consider myself to be fairly proficient with them.
        </p>

        <p className={PARAGRAPH_CLASS}>
          During the day, I work as a Front-end Engineer at Zeplyn AI.
          At night, I don my self-designed batsuit and work on web projects that interest me.
        </p>

        <section>
          <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            My recent works include
          </h2>
          <ul className="mt-3 space-y-3">
            {worksData.map((work) => (
              <li key={work.url}>
                {/* stacked on narrow editors: name + arrow on top, description below */}
                <a
                  href={work.url}
                  target="_blank"
                  className="flex flex-wrap items-center gap-x-3.5 gap-y-3 rounded-md border border-border bg-editor-card p-3.5 text-sm hover:border-accent @xl:px-4"
                >
                  {/* 36px tall */}
                  <span className="bg-accent px-3 py-2 font-bold text-editor-highlight-foreground">{work.name}</span>
                  <span className="order-last basis-full text-muted-foreground @xl:order-0 @xl:basis-auto">
                    {work.description}
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-editor-link" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <p className={PARAGRAPH_CLASS}>
          You can get in touch with me via email at{" "}
          <span className={HIGHLIGHT_CLASS}>{"contact { at } debojyotighosh { dot } com"}</span>, or find me on{" "}
          <a href="https://www.linkedin.com/in/gdebojyoti/" className={LINK_CLASS} target="_blank">
            LinkedIn <ArrowUpRight className="h-3 w-3" />
          </a>{" "}
          and{" "}
          <a href="https://github.com/gdebojyoti/" className={LINK_CLASS} target="_blank">
            GitHub <ArrowUpRight className="h-3 w-3" />
          </a>
          .
        </p>

        <div className="flex gap-2 flex-wrap">
          <Link href={FILE_ROUTES.resume} className={COMMAND_CLASS}>
            <span className="text-editor-marker">$</span> vsc ./resume
          </Link>
          <Link href={FILE_ROUTES.contact} className={COMMAND_CLASS}>
            <span className="text-editor-marker">$</span> vsc ./contact
          </Link>
        </div>
      </div>
    </div>
  );
};

const worksData = [
  {
    name: "Amusement Park",
    description: "a pure CSS project; with no images",
    url: "https://css-park.debojyotighosh.com/",
  },
  // { name: "Project Tiles", description: "a web based game; in progress" },
  // { name: "Flappy Bird", description: "a web version" },
];

export default HomeFile;
