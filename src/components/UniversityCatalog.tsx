import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { destinations } from "@/content/destinations";
import { universityCatalog } from "@/content/university-catalog";
import { slugifyHeading } from "@/lib/destination-toc";

export function UniversityCatalog() {
  return (
    <div className="mx-auto mt-16 max-w-3xl space-y-20 border-t border-[var(--line)] pt-16 sm:mt-20 sm:space-y-24 sm:pt-20">
      <Reveal>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--fg-faint)]">
          By country
        </p>
        <h2 className="mt-3 font-serif text-xl font-normal text-[var(--fg)] sm:text-2xl">
          Programme listings
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[0.9375rem]">
          Groupings are for orientation only. Names, fees, and intake rules change
          - confirm everything on the university website and with regulators before
          you apply. Country guides:{" "}
          <Link
            href="/destinations"
            className="font-medium text-[var(--fg)] underline-offset-4 hover:underline"
          >
            Destinations
          </Link>
          .
        </p>
      </Reveal>

      {destinations.map((d, countryIndex) => {
        const categories = universityCatalog[d.slug];
        if (!categories?.length) return null;
        return (
          <Reveal key={d.slug} delay={countryIndex * 0.04}>
            <section
              id={d.slug}
              className={
                countryIndex === 0
                  ? "scroll-mt-28"
                  : "scroll-mt-28 border-t border-[var(--line)] pt-14"
              }
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-serif text-2xl font-normal text-[var(--fg)] sm:text-3xl">
                  {d.shortName}
                </h3>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="shrink-0 text-sm font-medium text-[var(--fg-muted)] underline-offset-4 hover:text-[var(--fg)] hover:underline"
                >
                  Country guide →
                </Link>
              </div>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">{d.headline}</p>

              <div className="mt-12 space-y-14">
                {categories.map((cat) => {
                  const headingId = `${d.slug}-${slugifyHeading(cat.title)}`;
                  return (
                    <div key={cat.title}>
                      <h4
                        id={headingId}
                        className="scroll-mt-28 font-serif text-lg font-normal tracking-tight text-[var(--fg)] sm:text-xl"
                      >
                        {cat.title}
                      </h4>
                      {cat.intro ? (
                        <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[0.9375rem]">
                          {cat.intro}
                        </p>
                      ) : null}
                      <ul className="mt-6 space-y-5 border-t border-[var(--line)] pt-6">
                        {cat.universities.map((u) => (
                          <li key={u.name} className="max-w-3xl">
                            <p className="font-medium text-[var(--fg)]">{u.name}</p>
                            <p className="mt-1 text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[0.9375rem]">
                              {u.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          </Reveal>
        );
      })}
    </div>
  );
}
