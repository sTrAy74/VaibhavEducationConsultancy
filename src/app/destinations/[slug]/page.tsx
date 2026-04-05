import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DestinationBody } from "@/components/DestinationBody";
import { DestinationToc } from "@/components/DestinationToc";
import { ParallaxBanner } from "@/components/ParallaxBanner";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";
import {
  destinations,
  getDestinationBySlug,
} from "@/content/destinations";
import { getDestinationCover } from "@/content/stock-images";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestinationBySlug(slug);
  if (!d) return { title: "Not found" };
  return {
    title: d.headline,
    description: d.teaser,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();
  const cover = getDestinationCover(destination.slug);

  return (
    <>
      <Header orgName={site.orgName} nav={site.nav} />
      <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
        <div className="border-b border-[var(--line)]">
          <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-6 sm:pt-16">
            <Reveal>
              <nav
                className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--fg-muted)]"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/destinations"
                  className="font-medium text-[var(--fg)] underline-offset-4 hover:underline"
                >
                  Study destinations
                </Link>
                <span className="text-[var(--fg-faint)]" aria-hidden>
                  /
                </span>
                <span className="text-[var(--fg)]">{destination.shortName}</span>
              </nav>
              <h1 className="mt-5 max-w-3xl hyphens-auto break-words font-serif text-[1.75rem] font-normal leading-tight tracking-tight text-[var(--fg)] sm:text-[2rem] md:text-4xl">
                {destination.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-[0.9375rem]">
                {destination.teaser}
              </p>
            </Reveal>
          </div>
          <div className="mx-auto mt-10 max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16">
            <Reveal delay={0.08}>
              <ParallaxBanner
                src={cover.src}
                alt={cover.alt}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="aspect-[2/1] min-h-[160px] max-h-[min(42vh,340px)] sm:max-h-[380px]"
              />
            </Reveal>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-14">
            <aside className="min-w-0 shrink-0 lg:sticky lg:top-[7rem] lg:w-48 lg:self-start">
              <Reveal>
                <DestinationToc destination={destination} />
              </Reveal>
            </aside>
            <div className="min-w-0 flex-1">
              <Reveal>
                <DestinationBody destination={destination} />
              </Reveal>
              <Reveal className="mt-14" delay={0.05}>
                <p className="max-w-2xl border-t border-[var(--line)] pt-8 text-xs leading-relaxed text-[var(--fg-faint)]">
                  University names and programme rules change. Verify WHO/NMC
                  recognition, English-medium confirmation, internship
                  structure, and registration rules with regulators and the
                  institution before you apply.
                </p>
              </Reveal>
            </div>
          </div>
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
