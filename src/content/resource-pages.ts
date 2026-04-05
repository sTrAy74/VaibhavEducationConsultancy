/**
 * Standalone guides: universities, courses, scholarships.
 * Edit copy here; pages consume via GuidePageLayout.
 */

import {
  coursesPageCover,
  scholarshipsPageCover,
  universitiesPageCover,
} from "@/content/stock-images";

export type GuideSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export type GuideHighlight = {
  title: string;
  body: string;
};

export type GuideRelatedLink = {
  label: string;
  href: string;
};

export type GuidePageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Hero banner below the title block (same pattern as destination guides). */
  heroImage?: { src: string; alt: string };
  highlights?: readonly GuideHighlight[];
  sections: readonly GuideSection[];
  relatedHeading?: string;
  relatedLinks: readonly GuideRelatedLink[];
};

export const universitiesPage = {
  metaTitle: "Universities",
  metaDescription:
    "MBBS university shortlisting and verification, plus grouped programme listings for Russia, Uzbekistan, Kazakhstan, and Georgia - always confirm on official sources.",
  eyebrow: "Planning",
  title: "Universities",
  intro:
    "Choosing a university is not about rankings alone - it is about fit with your budget, academic profile, licensing goals, and comfort with the country. Below is how we think about shortlisting and verification, then programme listings grouped by country (anchors: Russia, Uzbekistan, Kazakhstan, Georgia).",
  heroImage: universitiesPageCover,
  highlights: [
    {
      title: "Recognition & rules",
      body: "Cross-check NMC, WHO, and the university’s own disclosures - not only brochures or agent summaries.",
    },
    {
      title: "Programme structure",
      body: "Academic months, internship placement, hospital affiliation, and English-medium documentation for the full course.",
    },
    {
      title: "Fit, not hype",
      body: "We help you compare trade-offs honestly; the final offer and enrolment decision stay with your family.",
    },
  ],
  sections: [
    {
      id: "shortlisting",
      title: "What goes into a shortlist",
      paragraphs: [
        "A realistic shortlist balances entrance requirements, total cost of study and living, medium of instruction, clinical exposure, and how the programme maps to current Indian regulatory expectations for overseas MBBS graduates.",
        "We start from your NEET profile, target intake year, budget band, and geography preferences, then narrow to institutions where those constraints actually overlap - so you are not chasing options that are unlikely to work.",
      ],
    },
    {
      id: "verification",
      title: "What you must verify on official channels",
      paragraphs: [
        "Before any fee transfer, confirm recognition and programme details on primary sources: NMC communications, WHO Avicenna / recognised lists as applicable, embassy or consulate study guidance where relevant, and the university’s own regulatory filings or offer letter.",
        "Pay particular attention to English as the medium of instruction for the entire course, internship structure and hospital network, and eligibility to register in the country of study - these are recurring themes in NMC-aligned planning.",
      ],
    },
    {
      id: "questions",
      title: "Useful questions for university calls",
      paragraphs: [
        "Ask for written confirmation of duration, internship hours and location, hospital affiliations, licensing of the qualification in the host country, and how international graduates are supported for licensing exams.",
        "Request sample timetables, graduate outcome summaries the institution can substantiate, and clear fee schedules including what is refundable if you withdraw before a defined date.",
      ],
    },
  ],
  relatedHeading: "Explore further",
  relatedLinks: [
    { label: "Country guides", href: "/destinations" },
    { label: "Courses & pathways", href: "/courses" },
    { label: "Scholarships & finance", href: "/scholarships" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
} satisfies GuidePageContent;

export const coursesPage = {
  metaTitle: "Courses",
  metaDescription:
    "MBBS and related medical study pathways abroad: typical duration, English-medium programmes, internship, and how courses relate to licensing back in India.",
  eyebrow: "Programmes",
  title: "Courses & pathways",
  intro:
    "Most families we speak with are weighing undergraduate medical degrees delivered abroad - often framed as MBBS or MD depending on the country. The labels differ; what matters is structure, recognition, and how you plan for licensing after graduation.",
  heroImage: coursesPageCover,
  highlights: [
    {
      title: "Duration",
      body: "Many programmes run about six years including internship-style training; always confirm the exact breakdown in your offer.",
    },
    {
      title: "Language",
      body: "English-medium for the full course should be documented - marketing pages are not enough for regulatory planning.",
    },
    {
      title: "After graduation",
      body: "FMGE/NExT and internship rules in India evolve; we orient you at a high level - formal coaching stays with specialist providers.",
    },
  ],
  sections: [
    {
      id: "mbbs-md",
      title: "MBBS, MD, and naming",
      paragraphs: [
        "In several countries the first professional degree in medicine is called MD while Indian families often say MBBS. For planning purposes, focus on total duration, curricular phases, clinical rotations, and how the qualification is registered in the host country - not the label alone.",
        "Foundation or pre-medical years may be part of the package for some intakes. Understand whether those years count toward the academic and internship totals your regulators care about.",
      ],
    },
    {
      id: "clinical",
      title: "Classroom vs clinical training",
      paragraphs: [
        "Strong programmes combine early patient contact with structured pre-clinical science. Ask how hospitals are assigned, whether training is centralised or dispersed, and what support exists for international students during rotations.",
        "If you compare two universities at similar fee points, clinical breadth and supervision quality often matter more than brochure photography.",
      ],
    },
    {
      id: "licensing",
      title: "Linking your course choice to licensing",
      paragraphs: [
        "Indian students generally plan for NMC requirements after graduation, including screening exams and internship rules as they stand in your cohort year. We help you understand the categories of requirements so you can time NEET, application, and graduation realistically.",
        "We do not replace NMC, university, or coaching providers - we keep your paperwork and expectations aligned so fewer surprises appear late in the journey.",
      ],
    },
  ],
  relatedHeading: "Explore further",
  relatedLinks: [
    { label: "Universities", href: "/universities" },
    { label: "Scholarships & finance", href: "/scholarships" },
    { label: "Study destinations", href: "/destinations" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
} satisfies GuidePageContent;

export const scholarshipsPage = {
  metaTitle: "Scholarships",
  metaDescription:
    "Realistic guidance on scholarships and finance for MBBS abroad: institutional aid, external schemes, documentation for banks, and how consultancies can help.",
  eyebrow: "Finance",
  title: "Scholarships & finance",
  intro:
    "Very few overseas MBBS places are fully funded by generic “scholarships” in the way families hope. Most students combine family savings, education loans, and occasionally merit or early-bird fee discounts from institutions. Here is an honest framing so you can plan early.",
  heroImage: scholarshipsPageCover,
  highlights: [
    {
      title: "Institutional aid",
      body: "Some universities publish merit or early-enrolment discounts - terms change yearly; verify in writing on the offer.",
    },
    {
      title: "External schemes",
      body: "Government or private schemes exist but are competitive and eligibility-specific; we can point to categories, not guarantees.",
    },
    {
      title: "Loans",
      body: "We do not lend money; we help you understand typical documents banks ask for alongside your admission letter.",
    },
  ],
  sections: [
    {
      id: "expectations",
      title: "Set expectations early",
      paragraphs: [
        "If an advertisement promises a “full scholarship” for MBBS abroad with minimal detail, treat it as a red flag until you see official terms from the university or a named programme with published criteria.",
        "Most families should assume tuition plus living costs for the full course unless a written award letter states otherwise.",
      ],
    },
    {
      id: "budget",
      title: "Building a budget band",
      paragraphs: [
        "We encourage a simple band: tuition per year, housing and food, travel home, insurance, exam fees, and a contingency for currency movement. Compare countries and cities within the same band so you are not optimising on tuition alone.",
        "Once you hold a conditional or final offer, update the band with actual numbers from the fee note and a realistic rent range from current students or housing offices.",
      ],
    },
    {
      id: "how-we-help",
      title: "How we can help",
      paragraphs: [
        "We can outline categories of aid to research, timelines that align with application rounds, and the admission paperwork banks commonly request. We do not process loan applications or negotiate discounts on your behalf unless explicitly agreed in scope.",
        "If your priority is minimising total cost, we factor that into country and university shortlisting alongside licensing and quality considerations - trade-offs are unavoidable, but they should be visible before you commit.",
      ],
    },
  ],
  relatedHeading: "Explore further",
  relatedLinks: [
    { label: "Universities", href: "/universities" },
    { label: "Courses & pathways", href: "/courses" },
    { label: "Study destinations", href: "/destinations" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
} satisfies GuidePageContent;
