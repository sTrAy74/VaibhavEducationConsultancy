/**
 * Sticky left index on the home page (lg+). Items with `sectionId` participate in
 * scroll-spy highlighting when that element id is in view.
 */
export type HomeIndexNavItem = {
  label: string;
  href: string;
  sectionId?: string;
};

export const homeIndexNav: readonly HomeIndexNavItem[] = [
  { label: "Counselling", href: "/#trust", sectionId: "trust" },
  { label: "Country guides", href: "/#guides", sectionId: "guides" },
  { label: "Resources", href: "/#planning", sectionId: "planning" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Who we serve", href: "/#who", sectionId: "who" },
  { label: "How it works", href: "/#process", sectionId: "process" },
  { label: "Our approach", href: "/#approach", sectionId: "approach" },
  { label: "NMC & eligibility", href: "/#eligibility", sectionId: "eligibility" },
  { label: "FAQ", href: "/#faq", sectionId: "faq" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
  { label: "Universities", href: "/universities" },
  { label: "Courses", href: "/courses" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "All destinations", href: "/destinations" },
];
