import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionLift } from "@/components/MotionLift";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";
import { destinations } from "@/content/destinations";
import { getDestinationCover } from "@/content/stock-images";

export const metadata: Metadata = {
  title: "Study destinations",
  description:
    "Overview of MBBS pathways in Russia, Uzbekistan, Kazakhstan, and Georgia - universities, NMC context, and practical comparisons.",
};

export default function DestinationsIndexPage() {
  return (
    <>
      <Header orgName={site.orgName} nav={site.nav} />
      <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
        <div className="border-b border-[var(--line)] bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--fg-faint)]">
                Resource guide
              </p>
              <h1 className="mt-3 font-serif text-[2rem] font-normal tracking-tight text-[var(--fg)] sm:text-4xl">
                Study destinations
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed sm:text-[0.9375rem]">
                Country snapshots for Indian students considering MBBS abroad.
                Each guide includes an on-page index. Confirm recognition with
                NMC and the university directly.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
          <ul className="grid gap-10 sm:grid-cols-2 sm:gap-10">
            {destinations.map((d, i) => {
              const img = getDestinationCover(d.slug);
              return (
                <Reveal key={d.slug} delay={i * 0.07}>
                  <MotionLift>
                    <Link
                      href={`/destinations/${d.slug}`}
                      className="group block border border-[var(--line)] bg-[var(--canvas)] transition-colors hover:border-[var(--line-strong)]"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--line)]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.05] group-hover:grayscale-0 grayscale-[0.2]"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6 sm:p-7">
                        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                          {d.shortName}
                        </p>
                        <h2 className="mt-2 font-serif text-2xl font-normal text-[var(--fg)]">
                          {d.headline}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed">
                          {d.teaser}
                        </p>
                        <p className="mt-4 text-sm font-medium text-[var(--fg)] underline-offset-4 group-hover:underline">
                          Read guide
                        </p>
                      </div>
                    </Link>
                  </MotionLift>
                </Reveal>
              );
            })}
          </ul>
          <Reveal className="mt-16 border-t border-[var(--line)] pt-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--fg-faint)]">
              Also read
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link
                  href="/universities"
                  className="font-medium text-[var(--fg)] underline-offset-4 hover:underline"
                >
                  Universities
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="font-medium text-[var(--fg)] underline-offset-4 hover:underline"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/scholarships"
                  className="font-medium text-[var(--fg)] underline-offset-4 hover:underline"
                >
                  Scholarships
                </Link>
              </li>
            </ul>
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
