import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HomeIndexNav } from "@/components/HomeIndexNav";
import { Footer } from "@/components/Footer";
import { HeroParallax } from "@/components/HeroParallax";
import { MotionLift } from "@/components/MotionLift";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { homeIndexNav } from "@/content/home-index-nav";
import { contactTelHref, site } from "@/content/site";
import { destinations } from "@/content/destinations";
import {
  approachSectionImage,
  contactSectionImage,
  eligibilitySectionImage,
  getDestinationCover,
  homeHeroImage,
  processSectionImage,
  serviceSpotlights,
  trustSectionImage,
  whoWeServeImages,
} from "@/content/stock-images";

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--fg-faint)]">
      {children}
    </p>
  );
}

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-3 max-w-xl font-serif text-[1.75rem] font-normal leading-snug tracking-tight text-[var(--fg)] sm:text-[2rem]"
    >
      {children}
    </h2>
  );
}

const planningHub = [
  {
    title: "Universities",
    description:
      "Shortlisting with NMC-aware checks, English-medium confirmation, and questions to ask on official calls.",
    href: "/universities",
  },
  {
    title: "Courses",
    description:
      "MBBS and MD-style pathways, clinical phases, and how programme shape relates to licensing back home.",
    href: "/courses",
  },
  {
    title: "Scholarships",
    description:
      "Realistic notes on aid, building a budget band, and how we support loan paperwork - without promising free seats.",
    href: "/scholarships",
  },
] as const;

export default function Home() {
  const { contact } = site;
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry - ${site.orgName}`)}`;

  return (
    <>
      <Header orgName={site.orgName} nav={site.nav} />
      <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
        <section
          className="border-b border-[var(--line)]"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-[min(100%,84rem)] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-end lg:gap-14">
              <Reveal>
                <div className="lg:max-w-none">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--fg-faint)] sm:text-[13px] sm:tracking-[0.18em]">
                    {site.hero.eyebrow}
                  </p>
                  <h1
                    id="hero-heading"
                    className="mt-4 font-serif text-[2.125rem] font-normal leading-[1.1] tracking-tight text-[var(--fg)] sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem] lg:leading-[1.06]"
                  >
                    {site.hero.headline}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:mt-6 sm:text-lg sm:leading-relaxed">
                    {site.hero.subhead}
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3 sm:mt-10">
                    <Link
                      href={site.hero.primaryCta.href}
                      className="inline-flex h-12 min-h-12 items-center bg-[var(--fg)] px-7 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:px-8 sm:text-[15px]"
                    >
                      {site.hero.primaryCta.label}
                    </Link>
                    <Link
                      href={site.hero.secondaryCta.href}
                      className="inline-flex h-12 min-h-12 items-center border border-[var(--fg)] bg-transparent px-7 text-sm font-medium text-[var(--fg)] transition-colors hover:bg-[var(--muted)] sm:px-8 sm:text-[15px]"
                    >
                      {site.hero.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <HeroParallax
                  src={homeHeroImage.src}
                  alt={homeHeroImage.alt}
                  sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 5rem), 48vw"
                  priority
                />
              </Reveal>
            </div>
          </div>
        </section>

        <div className="mx-auto flex min-w-0 max-w-7xl gap-6 px-5 sm:gap-8 sm:px-6">
          <HomeIndexNav items={homeIndexNav} />
          <div className="min-w-0 max-w-full flex-1 overflow-x-clip">
        <section
          id="trust"
          className="scroll-mt-28 border-b border-[var(--line)] bg-[var(--muted)] py-16 sm:py-20"
          aria-labelledby="trust-heading"
        >
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--line)]">
                <Image
                  src={trustSectionImage.src}
                  alt={trustSectionImage.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 3rem), (max-width: 1280px) calc(50vw - 5rem), 36rem"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <Label>Counselling</Label>
                <H2 id="trust-heading">{site.trustStrip.title}</H2>
              </Reveal>
              <Stagger className="mt-10 flex flex-col gap-4">
                {site.trustStrip.points.map((point) => (
                  <StaggerItem key={point}>
                    <div className="flex gap-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                      <span
                        className="font-serif text-[var(--fg-faint)]"
                        aria-hidden
                      >
                        -
                      </span>
                      {point}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        <section
          id="guides"
          className="scroll-mt-28 border-b border-[var(--line)] py-20 sm:py-24"
          aria-labelledby="destinations-preview-heading"
        >
          <div className="w-full">
            <Reveal>
              <Label>Guides</Label>
              <H2 id="destinations-preview-heading">Where you can study</H2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-[0.9375rem]">
                Country snapshots with photographs. Open a guide for
                universities, NMC notes, and tables - then confirm every detail
                on official sources.
              </p>
            </Reveal>
            <ul className="mt-14 grid gap-10 sm:grid-cols-2">
              {destinations.map((d, i) => {
                const img = getDestinationCover(d.slug);
                return (
                  <Reveal key={d.slug} delay={i * 0.06}>
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
                            sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(50vw - 2rem), 40vw"
                          />
                        </div>
                        <div className="p-6 sm:p-7">
                          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                            {d.shortName}
                          </p>
                          <h3 className="mt-2 font-serif text-xl font-normal text-[var(--fg)]">
                            {d.headline}
                          </h3>
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
            <Reveal className="mt-12">
              <Link
                href="/destinations"
                className="text-sm font-medium text-[var(--fg)] underline-offset-4 hover:underline"
              >
                All destination guides →
              </Link>
            </Reveal>
          </div>
        </section>

        <section
          id="planning"
          className="scroll-mt-28 border-b border-[var(--line)] bg-[var(--muted)] py-16 sm:py-20"
          aria-labelledby="planning-hub-heading"
        >
          <div className="w-full">
            <Reveal>
              <Label>Resources</Label>
              <H2 id="planning-hub-heading">Universities, courses & finance</H2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[0.9375rem]">
                Country guides are the starting point - these pages go deeper on
                picking institutions, understanding programme shapes, and
                planning costs without wishful thinking.
              </p>
            </Reveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              {planningHub.map((item, i) => (
                <Reveal key={item.href} delay={i * 0.07}>
                  <MotionLift className="h-full">
                    <Link
                      href={item.href}
                      className="group flex h-full flex-col border border-[var(--line)] bg-[var(--canvas)] p-6 transition-colors hover:border-[var(--line-strong)] sm:p-7"
                    >
                      <h3 className="font-serif text-lg font-normal text-[var(--fg)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                        {item.description}
                      </p>
                      <p className="mt-5 text-sm font-medium text-[var(--fg)] underline-offset-4 group-hover:underline">
                        Read more →
                      </p>
                    </Link>
                  </MotionLift>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-28 border-b border-[var(--line)] py-20 sm:py-24"
          aria-labelledby="services-heading"
        >
          <div className="w-full">
            <Reveal>
              <Label>Services</Label>
              <H2 id="services-heading">{site.services.title}</H2>
              <p className="mt-4 max-w-2xl text-sm sm:text-[0.9375rem]">
                {site.services.intro}
              </p>
            </Reveal>
            <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {site.services.items.map((item, i) => {
                const shot = serviceSpotlights[i];
                return (
                  <Reveal key={item.title} delay={i * 0.05}>
                    <MotionLift className="h-full">
                      <div className="group flex h-full flex-col border border-[var(--line)] bg-[var(--canvas)]">
                        <div className="relative aspect-[5/3] w-full overflow-hidden border-b border-[var(--line)]">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(50vw - 2rem), (max-width: 1280px) 25vw, 18rem"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <span className="font-mono text-xs text-[var(--fg-faint)]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-2 font-serif text-lg font-normal text-[var(--fg)]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </MotionLift>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          id="who"
          className="scroll-mt-28 border-b border-[var(--line)] bg-[var(--muted)] py-20 sm:py-24"
          aria-labelledby="who-heading"
        >
          <div className="w-full">
            <Reveal>
              <Label>Audience</Label>
              <H2 id="who-heading">{site.whoWeServe.title}</H2>
              <p className="mt-4 max-w-2xl text-sm sm:text-[0.9375rem]">
                {site.whoWeServe.intro}
              </p>
            </Reveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              {site.whoWeServe.cards.map((card, i) => {
                const photo = whoWeServeImages[i];
                return (
                  <Reveal key={card.title} delay={i * 0.08}>
                    <MotionLift className="h-full">
                      <div className="flex h-full flex-col overflow-hidden border border-[var(--line)] bg-[var(--canvas)]">
                        <div className="relative aspect-[16/11] w-full border-b border-[var(--line)]">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(33vw - 1.25rem), 22rem"
                          />
                        </div>
                        <div className="p-6 sm:p-7">
                          <h3 className="font-serif text-lg font-normal text-[var(--fg)]">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed">
                            {card.body}
          </p>
        </div>
                      </div>
                    </MotionLift>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          id="process"
          className="scroll-mt-28 border-b border-[var(--line)] py-20 sm:py-24"
          aria-labelledby="process-heading"
        >
          <div className="w-full">
            <Reveal>
              <Label>Process</Label>
              <H2 id="process-heading">{site.process.title}</H2>
              <p className="mt-4 max-w-2xl text-sm sm:text-[0.9375rem]">
                {site.process.intro}
              </p>
            </Reveal>
            <Reveal className="mt-10">
              <div className="relative aspect-[21/9] max-h-[220px] w-full overflow-hidden border border-[var(--line)] sm:max-h-[260px]">
                <Image
                  src={processSectionImage.src}
                  alt={processSectionImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 3rem), (max-width: 1280px) calc(100vw - 14rem), 64rem"
                />
              </div>
            </Reveal>
            <div className="relative mt-14 max-w-2xl border-l border-[var(--line)] pl-3 sm:pl-4">
              <Stagger className="flex flex-col gap-9 sm:gap-10">
                {site.process.steps.map((s) => (
                  <StaggerItem key={s.step} className="w-full">
                    <div className="grid w-full grid-cols-[2.25rem_minmax(0,1fr)] items-start gap-x-3 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-x-4">
                      <span
                        className="pt-0.5 text-right font-mono text-[11px] tabular-nums leading-tight tracking-normal text-[var(--fg-faint)] sm:text-xs"
                        aria-hidden
                      >
                        {String(s.step).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-serif text-lg font-normal text-[var(--fg)]">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="scroll-mt-28 border-b border-[var(--line)] py-20 sm:py-24"
          aria-labelledby="approach-heading"
        >
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <Reveal>
              <Label>Principles</Label>
              <H2 id="approach-heading">{site.approach.title}</H2>
              <div className="mt-8 space-y-5 text-sm leading-relaxed sm:text-[0.9375rem]">
                {site.approach.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden border border-[var(--line)] lg:mx-auto lg:max-w-none">
                <Image
                  src={approachSectionImage.src}
                  alt={approachSectionImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 3rem), (max-width: 1280px) 42vw, 28rem"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="eligibility"
          className="scroll-mt-28 border-b border-[var(--line)] bg-[var(--muted)] py-20 sm:py-24"
          aria-labelledby="eligibility-heading"
        >
          <div className="w-full">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-12">
              <Reveal>
                <div className="relative aspect-square w-full max-w-sm overflow-hidden border border-[var(--line)] sm:aspect-[5/6]">
                  <Image
                    src={eligibilitySectionImage.src}
                    alt={eligibilitySectionImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 3rem), (max-width: 1280px) min(360px, 40vw), 22rem"
                  />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <Label>NMC</Label>
                  <H2 id="eligibility-heading">{site.eligibility.title}</H2>
                  <p className="mt-4 max-w-2xl text-sm sm:text-[0.9375rem]">
                    {site.eligibility.intro}
                  </p>
                </Reveal>
                <Reveal className="mt-8" delay={0.05}>
                  <ul className="max-w-xl space-y-3 border-l-2 border-[var(--fg)] py-1 pl-6">
                    {site.eligibility.items.map((item, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="scroll-mt-28 border-b border-[var(--line)] py-20 sm:py-24"
          aria-labelledby="faq-heading"
        >
          <div className="w-full">
            <Reveal>
              <Label>FAQ</Label>
              <H2 id="faq-heading">Frequently asked questions</H2>
              <p className="mt-4 max-w-2xl text-sm text-[var(--fg-muted)]">
                Expand a question to read the answer.
              </p>
            </Reveal>
            <Reveal className="mt-10" delay={0.06}>
              <div className="w-full border border-[var(--line)] bg-[var(--canvas)]">
                {site.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="faq-item group border-b border-[var(--line)] transition-colors last:border-0 open:bg-[var(--muted)]"
                  >
                    <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium text-[var(--fg)] [&::-webkit-details-marker]:hidden">
                      <span className="flex min-w-0 items-start justify-between gap-4 pr-1">
                        <span className="min-w-0">{faq.question}</span>
                        <span
                          className="shrink-0 font-mono transition-transform duration-200 group-open:rotate-45"
                          aria-hidden
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="border-t border-[var(--line)] px-5 py-4 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal>
          <section
            className="border-b border-[var(--line)] bg-[var(--fg)] py-14 text-white sm:py-16"
            aria-labelledby="cta-banner-heading"
          >
            <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0 max-w-md">
                <h2
                  id="cta-banner-heading"
                  className="font-serif text-2xl font-normal sm:text-[1.75rem]"
                >
                  {site.ctaBanner.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {site.ctaBanner.body}
                </p>
              </div>
              <Link
                href={site.ctaBanner.href}
                className="inline-flex h-11 w-full shrink-0 items-center justify-center border border-white bg-white px-6 text-sm font-medium text-[var(--fg)] transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
              >
                {site.ctaBanner.ctaLabel}
              </Link>
            </div>
          </section>
        </Reveal>

        <section
          id="contact"
          className="scroll-mt-28 min-w-0 py-20 sm:py-24"
          aria-labelledby="contact-heading"
        >
          <div className="grid min-w-0 w-full gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="min-w-0">
              <Reveal>
                <Label>Contact</Label>
                <H2 id="contact-heading">{contact.title}</H2>
                <p className="mt-4 max-w-xl text-sm sm:text-[0.9375rem]">
                  {contact.intro}
                </p>
              </Reveal>
              <Reveal className="mt-10" delay={0.08}>
                <div className="max-w-md border border-[var(--line)] p-8">
                  <dl className="space-y-6 text-sm">
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                        Email
                      </dt>
                      <dd className="mt-1.5">
                        <a
                          href={mailto}
                          className="break-words text-base font-medium text-[var(--fg)] underline-offset-4 hover:underline"
                        >
                          {contact.email}
                        </a>
                      </dd>
                    </div>
                    {contact.phones.length > 0 ? (
                      <div>
                        <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                          Contact numbers
                        </dt>
                        <dd className="mt-1.5 space-y-2">
                          {contact.phones.map((num) => (
                            <a
                              key={num}
                              href={contactTelHref(num)}
                              className="block text-base font-medium text-[var(--fg)] underline-offset-4 hover:underline"
                            >
                              {num}
                            </a>
                          ))}
                        </dd>
                      </div>
                    ) : null}
                    {contact.location ? (
                      <div>
                        <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                          Location
                        </dt>
                        <dd className="mt-1.5 whitespace-pre-line text-[var(--fg)]">
                          {contact.location}
                        </dd>
                      </div>
                    ) : null}
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                        Availability
                      </dt>
                      <dd className="mt-1.5">{contact.hours}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>
            <Reveal
              delay={0.1}
              className="min-w-0 max-w-full justify-self-stretch"
            >
              <div className="min-w-0 max-w-full lg:sticky lg:top-[7rem] lg:self-start">
                <div className="relative aspect-[4/5] w-full max-w-full min-w-0 overflow-hidden border border-[var(--line)]">
                  <Image
                    src={contactSectionImage.src}
                    alt={contactSectionImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 3rem), (max-width: 1280px) calc(50vw - 5rem), 36rem"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
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
