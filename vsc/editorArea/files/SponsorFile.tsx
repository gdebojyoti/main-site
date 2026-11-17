import type { ReactNode } from "react";
import { ArrowUpRight, Coffee } from "lucide-react";

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
              My code compiles on <strong>chai</strong> <span aria-hidden="true">🍵</span>
              <br />
              If you&apos;re a fan of my work, feel free to buy me a cup. Thanks!
            </p>
          </div>

          <SponsorButton className="hidden shrink-0 @xl:flex" />
        </div>

        {/* outcome */}
        <section className="mt-10">
          <SectionHeading>What does your tip compile to?</SectionHeading>
          <p className="mt-3">
            Mostly motivation, and a reminder that someone out there finds this useful.
            And chai, of course!
          </p>
        </section>

        {/* amount */}
        <section className="mt-10">
          <SectionHeading>How much should I tip?</SectionHeading>
          <p className="mt-3">
            Whatever you like. There&apos;s no minimum or maximum. ₹10 gets you my gratitude. ₹10,000 gets you my gratitude and some confusion.
          </p>
        </section>

        {/* alternatives */}
        <section className="mt-10">
          <SectionHeading>No chai budget?</SectionHeading>
          <p className="mt-3">
            That&apos;s fine too. Star one of my repos on{" "}
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
            This is a voluntary thank-you, not a donation to a registered charity, so it isn&apos;t tax-deductible.
            It also doesn&apos;t buy priority support or an SLA.
            You get my genuine thanks and a slightly more caffeinated developer.
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
