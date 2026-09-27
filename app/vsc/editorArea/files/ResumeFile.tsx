import { ArrowUpRight, Download } from "lucide-react";
import { Fragment, type ReactNode } from "react";

const LINK_CLASS = "inline-flex items-center gap-0.5 text-editor-link hover:underline";
const CHIP_CLASS =
  "box-decoration-clone rounded-sm border border-editor-chip-border bg-editor-chip px-1.5 py-0.5 text-editor-chip-foreground";
const SKILL_CLASS = "rounded-sm bg-editor-highlight px-1.5 py-0.5 text-editor-highlight-foreground";

// muted markdown syntax ("#", "##", "•", "|", etc) rendered alongside the content
const Marker = ({ children }: { children: ReactNode }) => (
  <span className="font-normal text-editor-marker">{children}</span>
);

const Separator = () => <span className="mx-1.5 text-editor-marker">|</span>;

const SectionHeading = ({ children, divider = true }: { children: ReactNode; divider?: boolean }) => (
  <h2
    className={`text-xs font-semibold tracking-wider text-muted-foreground uppercase ${
      divider ? "border-b border-border pb-3" : ""
    }`}
  >
    <Marker>##</Marker> {children}
  </h2>
);

const ResumeFile = () => {
  return (
    <div className="@container">
      <div className="max-w-5xl px-4 py-6 text-editor-foreground @xl:px-8 @xl:py-12 [&_strong]:text-editor-emphasis">
        {/* header */}
        <div className="flex flex-col gap-6 @xl:flex-row @xl:items-start @xl:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-editor-emphasis">
              <Marker>#</Marker> Debojyoti Ghosh
            </h1>
            <p className="mt-2">
              Lead Frontend Engineer <Marker>/</Marker> Frontend Architect
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="bg-editor-highlight px-1.5 py-0.5 font-semibold text-editor-highlight-foreground">
                {"contact { at } debojyotighosh { dot } com"}
              </span>
              <a href="https://www.linkedin.com/in/gdebojyoti/" className={LINK_CLASS} target="_blank">
                LinkedIn <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href="https://github.com/gdebojyoti/" className={LINK_CLASS} target="_blank">
                GitHub <ArrowUpRight className="h-3 w-3" />
              </a>
              <span className="text-muted-foreground">Durgapur, West Bengal, India</span>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-button px-4 py-2 text-sm font-medium text-button-foreground hover:bg-button-hover"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        {/* profile */}
        <section className="mt-10">
          <SectionHeading divider={false}>Profile</SectionHeading>
          <p className="mt-3 leading-relaxed">
            Lead Frontend Engineer / Frontend Architect with <strong>11+ years</strong> of experience.
            Building and scaling web products using <strong>React</strong>, <strong>TypeScript</strong> and{" "}
            <strong>Agentic AI tooling</strong>. From large consumer platforms to AI startups.
          </p>
        </section>

        <div className="mt-10 grid gap-10 @3xl:grid-cols-[minmax(0,1fr)_17.5rem] @3xl:gap-12">
          {/* experience */}
          <section>
            <SectionHeading>Experience</SectionHeading>
            <div className="divide-y divide-border">
              {experienceData.map((experience) => (
                <div key={experience.company} className="py-8 last:pb-0">
                  <h3 className="font-semibold text-editor-emphasis">
                    <Marker>###</Marker> {experience.company}
                    {experience.companyNote && <Marker> {experience.companyNote}</Marker>}
                    <Marker> • </Marker>
                    {experience.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.date}
                    <Separator />
                    {experience.location}
                  </p>
                  <ul className="mt-3 ml-4 list-disc space-y-4 text-sm leading-relaxed">
                    {experience.points.map((point, idx) => (
                      <li key={idx}>
                        {point.content}
                        {point.tech && (
                          // inline flow (not flex) so a long chip breaks across lines like text
                          <div className="mt-2 font-mono text-xs leading-6">
                            <span className="text-editor-marker">used:</span>
                            {point.tech.map((tech) => (
                              <Fragment key={tech}>
                                {" "}
                                <span className={CHIP_CLASS}>{tech}</span>
                              </Fragment>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-10">
            {/* skills */}
            <section>
              <SectionHeading>Skills</SectionHeading>
              <div className="mt-5 space-y-4">
                {skillsData.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-sm font-semibold text-editor-emphasis">{group.category}</h3>
                    <div className="mt-1.5 flex flex-wrap gap-1.5 text-sm">
                      {group.skills.map((skill) => (
                        <span key={skill} className={SKILL_CLASS}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* education */}
            <section>
              <SectionHeading>Education</SectionHeading>
              <h3 className="mt-5 font-semibold text-editor-emphasis">
                B. Tech <Marker>•</Marker> Electronics &amp; Communications Engineering
              </h3>
              <p className="mt-1 text-sm">Dr B C Roy Engineering College</p>
              <p className="text-sm text-muted-foreground">
                2010 – 2014
                <Separator />
                GPA: 7 / 10
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

type Experience = {
  company: string;
  companyNote?: string;
  role: string;
  date: string;
  location: string;
  points: { content: ReactNode; tech?: string[] }[];
};

const experienceData: Experience[] = [
  {
    company: "Zeplyn AI",
    role: "Senior Software Engineer, Front-end L5",
    date: "March 2025 – April 2026",
    location: "Remote",
    points: [
      {
        content: (
          <>
            Shipped <strong>6+ client-winning features</strong> on short notice, used <strong>agentic AI</strong> to get
            them out in <strong>1-2 days</strong> and contribute to successful deal signings.
          </>
        ),
        tech: ["React Router 7", "TypeScript", "Tailwind", "VS Copilot (Claude Sonnet; Gemini 2.5 Pro)"],
      },
      {
        content: (
          <>
            Migrated the stack from Remix to <strong>React Router 7</strong>, using <strong>agentic AI</strong> to cut
            the work from <strong>1 week to 1 day</strong>.
          </>
        ),
        tech: ["Augment Code"],
      },
    ],
  },
  {
    company: "REA India (Housing.com | PropTiger)",
    role: "Lead Front-end Engineer",
    date: "August 2016 – September 2024",
    location: "Gurugram, Haryana",
    points: [
      {
        content: (
          <>
            Designed the architecture (HLD & LLD) of Housing Premium experience to monetize the users of Housing, and
            led a team of 4 developers. The work generated <strong>13 Cr in revenue</strong> over the past year.
          </>
        ),
        tech: ["React 19", "Linaria (CSS-in-JS)", "AWS"],
      },
      {
        content: (
          <>
            Reduced <strong>CLS (cumulative layout shift)</strong> on all major pages (search, dedicated, home) from
            more than 1 to less than 0.1 and improved other Core Web Vital metrics. This performance boost resulted in{" "}
            <strong>Lighthouse scores of up to 88</strong>.
          </>
        ),
      },
      {
        content: (
          <>
            Led a team of 2 developers to build a custom checkout flow by collaborating with <strong>RazorPay</strong>.
            It boosted <strong>conversion by 10%</strong>. Thanks to the "add-ons" on top of that, our{" "}
            <strong>revenue grew by 15%</strong>.
          </>
        ),
      },
      {
        content: (
          <>
            Revamped the search & dedicated pages using <strong>micro frontend architecture</strong>. It reduced future
            development timelines by <strong>25%</strong>.
          </>
        ),
        tech: ["ReactJS", "Redux", "Webpack", "Babel", "GraphQL"],
      },
      {
        content: (
          <>
            Implemented the bi-annual Events page by myself for 2 years, collaborating with product, design & back-end
            teams. It increased our revenue by <strong>120% & 150%</strong> respectively.
          </>
        ),
        tech: ["CSS animations", "SCSS"],
      },
      {
        content: (
          <>
            Conducted internal training on <strong>Prompt engineering and Generative AI tools</strong> (ChatGPT, Cursor
            IDE, Github Copilot in VS Code), reducing task timelines by <strong>20%</strong> and boosting test case
            writing speed with <strong>Jest by 50%</strong>.
          </>
        ),
      },
    ],
  },
  {
    company: "3dPhy",
    companyNote: "(acquired by PropTiger)",
    role: "Software Engineer",
    date: "September 2015 – July 2016",
    location: "Gurugram, Haryana",
    points: [
      {
        content: (
          <>
            Developed the primary product <strong>OpenSpace</strong> and made it mobile first and cross-browser
            compatible, thereby increasing the <strong>revenue by 200% in 6 months</strong>.
          </>
        ),
        tech: ["Three JS", "jQuery", "AWS"],
      },
      {
        content: (
          <>
            Created an in-house admin panel for our support team. It reduced the time spent on managing property
            inventory by <strong>50%</strong>.
          </>
        ),
        tech: ["Angular", "TypeScript", "Git", "Responsive web"],
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Assistant Systems Engineer",
    date: "December 2014 – September 2015",
    location: "Kolkata, West Bengal",
    points: [
      {
        content: (
          <>
            Built a hybrid app for in-house testing tools that improved <strong>productivity by 30%</strong>.
          </>
        ),
        tech: ["Electron", "HTML5", "CSS3", "REST APIs"],
      },
    ],
  },
];

const skillsData = [
  { category: "Frontend", skills: ["React JS", "TypeScript", "JavaScript", "React Router", "NextJS", "Redux", "Jest"] },
  { category: "Styling", skills: ["Tailwind CSS", "Emotion JS", "Linaria"] },
  { category: "Architecture", skills: ["Micro-frontend", "Webpack"] },
  { category: "AI", skills: ["VS Copilot", "Cursor", "Claude Code"] },
  { category: "Cloud / Tools", skills: ["AWS", "Jenkins CI / CD", "Git"] },
  { category: "Backend", skills: ["Node.js", "Express", "GraphQL"] },
];

export default ResumeFile;
