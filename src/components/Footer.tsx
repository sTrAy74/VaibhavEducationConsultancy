import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { contactTelHref, site } from "@/content/site";

export function Footer({
  orgName,
  note,
  legal,
  links,
}: {
  orgName: string;
  note: string;
  legal: string;
  links: readonly { label: string; href: string }[];
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between sm:gap-16">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <BrandLogo className="h-12 w-auto max-w-[13rem] object-contain object-left sm:h-14 sm:max-w-[15rem]" />
            </Link>
            <p className="mt-4 font-serif text-base font-semibold text-[var(--fg)]">
              {orgName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
              {note.replace("{year}", String(year))}
            </p>
            {site.contact.phones.length > 0 ? (
              <p className="mt-4 text-sm text-[var(--fg-muted)]">
                <span className="text-[var(--fg-faint)]">Phone: </span>
                {site.contact.phones.map((num, i) => (
                  <span key={num}>
                    {i > 0 ? " · " : null}
                    <a
                      href={contactTelHref(num)}
                      className="text-[var(--fg)] underline-offset-4 hover:underline"
                    >
                      {num}
                    </a>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
          <nav aria-label="Footer" className="shrink-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--fg-faint)]">
              Pages
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-x-10">
              {links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--fg-muted)] underline-offset-4 hover:text-[var(--fg)] hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 max-w-2xl border-t border-[var(--line)] pt-8 text-xs leading-relaxed text-[var(--fg-faint)]">
          {legal}
        </p>
        <p className="mt-4 text-xs leading-relaxed text-[var(--fg-faint)]">
          Photographs via{" "}
          <a
            href="https://unsplash.com"
            className="text-[var(--fg-muted)] underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Unsplash
          </a>{" "}
          (
          <a
            href="https://unsplash.com/license"
            className="text-[var(--fg-muted)] underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            license
          </a>
          ).
        </p>
      </div>
    </footer>
  );
}
