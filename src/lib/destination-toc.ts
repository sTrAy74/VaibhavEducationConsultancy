import type { Destination } from "@/content/destinations";
import { getUniversityCategoriesForSlug } from "@/content/university-catalog";

export function slugifyHeading(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

export type TocItem = { id: string; label: string; href?: string };

function categoryTocLabel(title: string): string {
  return title.replace(/^\d+\.\s*/, "").trim();
}

/** Section ids match headings in DestinationBody. */
export function getDestinationTocItems(destination: Destination): TocItem[] {
  const items: TocItem[] = [{ id: "overview", label: "Overview" }];

  const categories = getUniversityCategoriesForSlug(destination.slug);
  if (categories?.length) {
    items.push({ id: "universities", label: "Universities" });
    for (const cat of categories) {
      items.push({
        id: slugifyHeading(cat.title),
        label: categoryTocLabel(cat.title),
      });
    }
  }

  if (destination.keyRequirements) {
    items.push({ id: "nmc-requirements", label: "NMC checklist" });
  }
  if (destination.comparisonTable) {
    items.push({ id: "comparison-table-title", label: "At a glance" });
  }
  return items;
}
