import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";
import type { GuidePageContent } from "@/content/resource-pages";

export function GuidePageLayout({
  content,
  appendix,
}: {
  content: GuidePageContent;
  appendix?: ReactNode;
}) {
  return (
    <>
      <Header orgName={site.orgName} nav={site.nav} />
      <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
        <div className="border-b border-[var(--line)] bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--fg-faint)]">
                {content.eyebrow}
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-[2rem] font-normal tracking-tight text-[var(--fg)] sm:text-4xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed sm:text-[0.9375rem]">
                {content.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
          {content.highlights?.length ? (
            <Reveal>
              <ul className="grid gap-6 sm:grid-cols-3 sm:gap-8">
                {content.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="border border-[var(--line)] bg-[var(--canvas)] p-6"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                      {h.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {h.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <div
            className={
              content.highlights?.length
                ? "mx-auto mt-16 max-w-3xl space-y-14 sm:mt-20"
                : "mx-auto max-w-3xl space-y-14"
            }
          >
            {content.sections.map((section, i) => (
              <Reveal key={section.id} delay={i * 0.06}>
                <section id={section.id} className="scroll-mt-28">
                  <h2 className="font-serif text-xl font-normal text-[var(--fg)] sm:text-2xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[0.9375rem]"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}
          </div>

          {appendix}

          <Reveal className="mt-16 border-t border-[var(--line)] pt-12 sm:mt-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--fg-faint)]">
              {content.relatedHeading ?? "Related"}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {content.relatedLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-[var(--fg)] underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-12" delay={0.05}>
            <Link
              href="/"
              className="text-sm text-[var(--fg-muted)] underline-offset-4 hover:text-[var(--fg)] hover:underline"
            >
              ← Back to home
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer
        orgName={site.orgName}
        note={site.footer.note}
        legal={site.footer.legal}
        links={site.footer.links}
      />
    </>
  );
}
