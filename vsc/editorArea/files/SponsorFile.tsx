import { ArrowUpRight, Coffee } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { FILE_ROUTES } from "../../files";

const RAZORPAY_PAGE_URL = "https://pages.razorpay.com/debojyotighosh";

const LINK_CLASS = "inline-flex items-center gap-0.5 text-editor-link hover:underline";

// muted markdown syntax ("#", "##", "-") rendered alongside the content
const Marker = ({ children }: { children: ReactNode }) => (
  <span className="font-normal text-editor-marker">{children}</span>
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
    <Marker>##</Marker> {children}
  </h2>
);

// styled like the resume's "Download PDF" CTA so it follows the active theme
const SponsorButton = ({ className }: { className?: string }) => (
  <div className={`flex-col items-center gap-1.5 ${className ?? ""}`}>
    <a
      href={RAZORPAY_PAGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-2 bg-button px-3 py-2 text-sm font-medium text-button-foreground hover:bg-button-hover"
    >
      <Coffee className="h-4 w-4" />
      Buy me a chai
    </a>
    <p className="text-xs text-muted-foreground">One-time tip · No subscription</p>
  </div>
);

const tiers = [
  { cups: 1, outcome: "one bug fixed (probably)" },
  { cups: 2, outcome: "one bug fixed, two new ones written" },
  { cups: 3, outcome: "I finally write those tests" },
];

const SponsorFile = () => {
  return (
    <div className="@container">
      <div className="max-w-5xl px-4 py-6 leading-relaxed text-editor-foreground @xl:px-8 @xl:py-12 [&_strong]:text-editor-emphasis">
        {/* header */}
        <div className="flex flex-col gap-6 @xl:flex-row @xl:items-start @xl:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-editor-emphasis">
              <Marker>#</Marker> Sponsor
            </h1>
            <p className="mt-4">
              My code compiles on <strong>chai</strong>. If you're a fan of my work, feel free to buy me a cup. Thanks!
            </p>
          </div>

          <SponsorButton className="hidden shrink-0 @xl:flex" />
        </div>

        {/* tiers */}
        <section className="mt-10">
          <SectionHeading>What your chai compiles to</SectionHeading>
          <ul className="mt-3 space-y-1.5">
            {tiers.map(({ cups, outcome }) => (
              <li key={cups}>
                <Marker>-</Marker> <span aria-hidden="true">{"🍵".repeat(cups)}</span>{" "}
                <strong>
                  {cups} chai
                </strong>
                : {outcome}
              </li>
            ))}
          </ul>
        </section>

        {/* alternatives */}
        <section className="mt-10">
          <SectionHeading>No chai budget?</SectionHeading>
          <p className="mt-3">
            That's fine too. Star one of my repos on{" "}
            <a href="https://github.com/gdebojyoti/" className={LINK_CLASS} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            , share something you liked, or just say hi. It all counts.
          </p>
        </section>

        {/* disclaimer */}
        <section className="mt-10">
          <SectionHeading>Fine print</SectionHeading>
          <p className="mt-3">
            This is a voluntary thank-you, not a donation to a registered charity, so it isn't tax-deductible.
            It also doesn't buy priority support or an SLA.
            You get my genuine gratitude and a slightly more caffeinated developer.
          </p>
        </section>
      </div>

      {/* mobile CTA; sticky (not fixed) so it stays within the editor and keeps its own space at the end of the content */}
      <div className="sticky bottom-0 border-t border-border bg-editor px-4 py-3 @xl:hidden">
        <SponsorButton className="flex" />
      </div>
    </div>
  );
};

export default SponsorFile;
