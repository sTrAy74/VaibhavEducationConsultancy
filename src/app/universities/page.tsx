import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParallaxBanner } from "@/components/ParallaxBanner";
import { Reveal } from "@/components/motion/Reveal";
import { UniversitiesTable } from "@/components/UniversitiesTable";
import { universitiesPage } from "@/content/resource-pages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: universitiesPage.metaTitle,
  description: universitiesPage.metaDescription,
};

export default function UniversitiesPage() {
  return (
    <>
      <Header orgName={site.orgName} nav={site.nav} />
      <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
        <header className="border-b border-[var(--line)]">
          <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-6 sm:pt-16">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--fg-faint)]">
                {universitiesPage.eyebrow}
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-[2rem] font-normal tracking-tight text-[var(--fg)] sm:text-4xl">
                {universitiesPage.title}
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed sm:text-[0.9375rem]">
                {universitiesPage.intro}
              </p>
            </Reveal>
          </div>
          {universitiesPage.heroImage ? (
            <div className="mx-auto mt-10 max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16">
              <Reveal delay={0.08}>
                <ParallaxBanner
                  src={universitiesPage.heroImage.src}
                  alt={universitiesPage.heroImage.alt}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="aspect-[2/1] min-h-[160px] max-h-[min(42vh,340px)] sm:max-h-[380px]"
                />
              </Reveal>
            </div>
          ) : null}
        </header>

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
          <Reveal>
            <UniversitiesTable />
          </Reveal>

          <Reveal className="mt-14 border-t border-[var(--line)] pt-10 sm:mt-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--fg-faint)]">
              {universitiesPage.relatedHeading ?? "Related"}
            </p>
            <nav aria-label="Related pages" className="mt-5">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {universitiesPage.relatedLinks.map((l) => (
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
            </nav>
          </Reveal>

          <Reveal className="mt-10" delay={0.04}>
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
