import type { Destination } from "@/content/destinations";
import { getDestinationTocItems } from "@/lib/destination-toc";

export function DestinationToc({ destination }: { destination: Destination }) {
  const items = getDestinationTocItems(destination);
  return (
    <nav
      className="max-h-[min(50vh,22rem)] overflow-y-auto overscroll-y-contain border border-[var(--line)] bg-[var(--canvas)] p-4 sm:p-5 lg:max-h-none lg:overflow-visible"
      aria-label="On this page"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-faint)]">
        On this page
      </p>
      <ol className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.href ?? item.id}>
            <a
              href={item.href ?? `#${item.id}`}
              className="text-[var(--fg-muted)] underline-offset-2 hover:text-[var(--fg)] hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
