const ResumeFile = () => {
  return (
    // <div className="mx-auto max-w-2xl px-8 py-12 text-editor-foreground">
    <div className="max-w-3xl px-8 py-12 text-editor-foreground">
      {/* summary */}
      <h1 className="text-2xl font-semibold text-editor-foreground">Debojyoti Ghosh</h1>
      <p className="mt-2 leading-relaxed text-editor-foreground">
        Lead Frontend Engineer / Frontend Architect with 11+ years of experience building and scaling web products using React, TypeScript and Agentic AI tooling. From consumer platforms to AI startups.
      </p>

      {/* experience */}
      <h2 className="mt-6 text-lg font-semibold">Experience</h2>

      <div className="mt-2 space-y-4">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <h3 className="font-semibold">{experience.title}</h3>
            <p className="text-muted-foreground">{experience.date}</p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-editor-foreground">
              {experience.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* skills */}
      <h2 className="mt-6 text-lg font-semibold">Skills</h2>
      <p className="mt-2 text-muted-foreground text-sm italic">
        To be updated..
      </p>

      {/* education */}
      <h2 className="mt-6 text-lg font-semibold">Education</h2>
      <p className="mt-2 text-muted-foreground text-sm italic">
        To be updated..
      </p>
    </div>
  );
};

const experienceData = [
  {
    title: "Zeplyn AI • Senior Software Engineer, Front-end L5",
    date: "March 2025 – April 2026 | Remote",
    points: [
      <>
        Shipped 6+ client-winning features on short notice, used <strong>agentic AI</strong> to get them out in 1-2 days and contribute to successful deal signings.
        Used: <strong>React Router 7, TypeScript, Tailwind, VS Copilot</strong> (Claude Sonnet; Gemini 2.5 Pro models)
      </>,
      <>
        Migrated the stack from Remix to <strong>React Router 7</strong>, using <strong>agentic AI</strong> to cut the work from 1 week to 1 day. Used: <strong>Augment Code</strong>
      </>
    ]
  },
  {
    title: "REA India (Housing.com | PropTiger) • Lead Front-end Engineer",
    date: "August 2016 – September 2024 | Gurugram, Haryana",
    points: [
      <>
        Designed the architecture (HLD & LLD) of Housing Premium experience to monetize the users of Housing, and led a team of 4 developers.
        The work generated <strong>13 Cr in revenue</strong> over the past year. Used: <strong>React 19, Linaria</strong> (CSS-in-JS library), <strong>AWS</strong>
      </>,
      <>
        Reduced <strong>CLS (cumulative layout shift)</strong> on all major pages (search, dedicated, home) from more than 1 to less than 0.1 and improved other Core Web Vital metrics. This performance boost on our web pages resulted in <strong>Lighthouse scores of up to 88</strong>.
      </>,
      <>
        Led a team of 2 developers to build a custom checkout flow by collaborating with <strong>RazorPay</strong>. It boosted <strong>conversion by 10%</strong>. Thanks to the "add-ons" on top of that, our <strong>revenue grew by 15%</strong>.
      </>,
      <>
        Revamped the search & dedicate pages using <strong>micro frontend architecture</strong>. It reduced future development timelines by <strong>25%</strong>. Used: <strong>ReactJS, Redux, Webpack, Babel, GraphQL</strong>
      </>,
      <>
        Implemented the bi-annual Events page by myself for 2 years, collaborating with product, design & back-end teams. It increased our revenue by <strong>120% & 150%</strong> respectively. Used: <strong>CSS animations, SCSS</strong>
      </>,
      <>
        Conducted internal training on <strong>Prompt engineering and Generative AI tools</strong> (ChatGPT, Cursor IDE, Github Copilot in VS Code), reducing task timelines by <strong>20%</strong> and boosting test case writing speed with <strong>Jest by 50%</strong>.
      </>
    ]
  },
  {
    title: "3dPhy (acquired by PropTiger) • Software Engineer",
    date: "September 2015 – July 2016 | Gurugram, Haryana",
    points: [
      <>
        Developed the primary product <strong>OpenSpace</strong> and made it mobile first and cross-browser compatible, thereby increasing the revenue by <strong>200% in 6 months</strong>. Used: <strong>Three JS, jQuery, AWS</strong>
      </>,
      <>
        Created an in-house admin panel for our support team. It reduced the time spent on managing property inventory by <strong>50%</strong>. Used: <strong>Angular, TypeScript, Git, responsive web development</strong>
      </>
    ]
  },
  {
    title: "Tata Consultancy Services • Assistant Systems Engineer",
    date: "December 2014 – September 2015 | Kolkata, West Bengal",
    points: [
      <>
        Built a hybrid app for in-house testing tools that improved productivity by <strong>30%</strong>. Used: <strong>Electron, HTML5, CSS3, REST APIs</strong>
      </>
    ]
  }
];

export default ResumeFile;
