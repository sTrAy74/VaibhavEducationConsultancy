import Link from "next/link";
import type { Destination } from "@/content/destinations";
import { getUniversityCategoriesForSlug } from "@/content/university-catalog";
import { slugifyHeading } from "@/lib/destination-toc";

export function DestinationBody({ destination }: { destination: Destination }) {
  const categories = getUniversityCategoriesForSlug(destination.slug);

  return (
    <article>
      <section
        id="overview"
        className="space-y-4 text-sm leading-relaxed sm:text-[0.9375rem]"
        aria-labelledby="overview-heading"
      >
        <h2
          id="overview-heading"
          className="font-serif text-xl font-normal text-[var(--fg)] sm:text-2xl"
        >
          Overview
        </h2>
        {destination.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {categories?.length ? (
        <section
          id="universities"
          className="mt-14 scroll-mt-28"
          aria-labelledby="universities-heading"
        >
          <h2
            id="universities-heading"
            className="font-serif text-xl font-normal text-[var(--fg)] sm:text-2xl"
          >
            Universities
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[0.9375rem]">
            The same grouped listings appear on the{" "}
            <Link
              href={`/universities#${destination.slug}`}
              className="font-medium text-[var(--fg)] underline-offset-4 hover:underline"
            >
              Universities
            </Link>{" "}
            page for easy scanning across countries. Confirm names, fees, and
            intake rules on each institution’s official site and with regulators.
          </p>

          <div className="mt-12 space-y-14">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3
                  id={slugifyHeading(cat.title)}
                  className="scroll-mt-28 font-serif text-xl font-normal tracking-tight text-[var(--fg)] sm:text-2xl"
                >
                  {cat.title}
                </h3>
                {cat.intro ? (
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed sm:text-[0.9375rem]">
                    {cat.intro}
                  </p>
                ) : null}
                <ul className="mt-6 space-y-5 border-t border-[var(--line)] pt-6">
                  {cat.universities.map((u) => (
                    <li key={u.name} className="max-w-3xl">
                      <p className="font-medium text-[var(--fg)]">{u.name}</p>
                      <p className="mt-1 text-sm leading-relaxed sm:text-[0.9375rem]">
                        {u.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {destination.keyRequirements ? (
        <section
          className="mt-14 border border-[var(--line)] border-l-2 border-l-[var(--fg)] bg-[var(--muted)] p-6 sm:p-8"
          aria-labelledby="nmc-requirements"
        >
          <h2
            id="nmc-requirements"
            className="font-serif text-xl font-normal text-[var(--fg)] sm:text-2xl"
          >
            {destination.keyRequirements.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed sm:text-[0.9375rem]">
            {destination.keyRequirements.intro}
          </p>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm sm:text-[0.9375rem]">
            {destination.keyRequirements.items.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {destination.comparisonTable ? (
        <section className="mt-14" aria-labelledby="comparison-table-title">
          <h2
            id="comparison-table-title"
            className="font-serif text-xl font-normal text-[var(--fg)] sm:text-2xl"
          >
            {destination.comparisonTable.title}
          </h2>
          <div className="mt-6 overflow-x-auto border border-[var(--line)]">
            <table className="w-full min-w-[28rem] text-left text-sm sm:min-w-[32rem]">
              <thead>
                <tr className="border-b border-[var(--line)] bg-[var(--muted)]">
                  <th className="px-4 py-3 font-medium text-[var(--fg)]">
                    {destination.comparisonTable.headers[0]}
                  </th>
                  <th className="px-4 py-3 font-medium text-[var(--fg)]">
                    {destination.comparisonTable.headers[1]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {destination.comparisonTable.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-[var(--line)] last:border-0"
                  >
                    <td className="px-4 py-3 align-top font-medium text-[var(--fg)]">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 align-top leading-relaxed">
                      {row.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </article>
  );
}
