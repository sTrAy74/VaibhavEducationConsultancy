import {
  getUniversityTableRows,
  type UniversityTableRow,
  UNIVERSITY_COUNTRY_LABELS,
  universityCountryOrder,
} from "@/content/university-catalog";

/** Preserve catalog order: first-seen group titles become section headers. */
function groupRowsInOrder(rows: UniversityTableRow[]) {
  const groups: { title: string; items: UniversityTableRow[] }[] = [];
  const indexByTitle = new Map<string, number>();
  for (const r of rows) {
    let i = indexByTitle.get(r.group);
    if (i === undefined) {
      i = groups.length;
      indexByTitle.set(r.group, i);
      groups.push({ title: r.group, items: [] });
    }
    groups[i].items.push(r);
  }
  return groups;
}

export function UniversitiesTable() {
  const rows = getUniversityTableRows();
  const bySlug = new Map<string, UniversityTableRow[]>();
  for (const slug of universityCountryOrder) {
    bySlug.set(
      slug,
      rows.filter((r) => r.slug === slug),
    );
  }

  return (
    <section aria-labelledby="universities-table-title">
      <h2
        id="universities-table-title"
        className="font-serif text-xl font-normal text-[var(--fg)] sm:text-2xl"
      >
        Universities by country
      </h2>
      <p
        id="universities-table-hint"
        className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[0.9375rem]"
      >
        Each country is broken into smaller tables by category—the same groupings
        we use in consultations (not rankings). Confirm NMC/WHO recognition and
        intake rules with each university. On very narrow screens you can scroll
        sideways within a table; focus the table area first if you use a
        keyboard.
      </p>

      <nav
        aria-label="Jump to a country"
        className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-[var(--fg-muted)]"
      >
        <span className="text-[var(--fg-faint)]">Jump to:</span>
        {universityCountryOrder.map((slug) => (
          <a
            key={slug}
            href={`#${slug}`}
            className="font-medium text-[var(--fg-muted)] underline decoration-[var(--line-strong)] underline-offset-4 hover:text-[var(--fg)] hover:decoration-[var(--fg)]"
          >
            {UNIVERSITY_COUNTRY_LABELS[slug] ?? slug}
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-16">
        {universityCountryOrder.map((slug) => {
          const countryRows = bySlug.get(slug) ?? [];
          if (countryRows.length === 0) return null;
          const label = UNIVERSITY_COUNTRY_LABELS[slug] ?? slug;
          const headingId = `universities-country-${slug}`;
          const groups = groupRowsInOrder(countryRows);

          return (
            <section
              key={slug}
              id={slug}
              aria-labelledby={headingId}
              className="scroll-mt-24"
            >
              <div className="border-b border-[var(--line)] pb-4">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h3
                    id={headingId}
                    className="font-serif text-xl font-normal tracking-tight text-[var(--fg)] sm:text-2xl"
                  >
                    {label}
                  </h3>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                    {countryRows.length}{" "}
                    {countryRows.length === 1 ? "university" : "universities"}
                  </p>
                </div>
              </div>

              <div
                role="region"
                aria-labelledby={headingId}
                aria-describedby="universities-table-hint"
                tabIndex={0}
                className="mt-6 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--fg)]"
              >
                <div className="flex flex-col gap-8">
                  {groups.map(({ title, items }) => (
                    <div
                      key={`${slug}-${title}`}
                      className="overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--canvas)] shadow-[0_1px_0_var(--line)]"
                    >
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-0 border-collapse text-left sm:min-w-[34rem]">
                          <caption className="border-b border-[var(--line)] bg-[var(--muted)] px-4 py-3.5 text-left text-[13px] font-medium leading-snug text-[var(--fg)] sm:px-5 sm:text-sm">
                            {title}
                          </caption>
                          <thead>
                            <tr className="border-b border-[var(--line)]">
                              <th
                                scope="col"
                                className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--fg-faint)] sm:px-5"
                              >
                                University
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--fg-faint)] sm:px-5"
                              >
                                At a glance
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.map((r, ri) => (
                              <tr
                                key={`${slug}-${r.name}-${r.group}`}
                                className={
                                  ri % 2 === 1
                                    ? "border-t border-[var(--line)] bg-[var(--muted)]/70"
                                    : "border-t border-[var(--line)] bg-[var(--canvas)]"
                                }
                              >
                                <th
                                  scope="row"
                                  className="w-[36%] min-w-[11rem] align-top px-4 py-4 text-[15px] font-normal leading-snug text-[var(--fg)] sm:w-[38%] sm:min-w-[14rem] sm:px-5 sm:pr-6"
                                >
                                  {r.name}
                                </th>
                                <td className="align-top px-4 py-4 text-sm leading-relaxed text-[var(--fg-muted)] sm:px-5 sm:text-[0.9375rem]">
                                  {r.summary}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
