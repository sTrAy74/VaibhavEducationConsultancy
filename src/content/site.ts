/**
 * Site copy - replace strings below with your friend’s real content.
 * Optional fields can be left empty string to hide UI blocks.
 */
export const site = {
  orgName: "Vaibhav Medical Education Consultancy",
  /** Brand mark + wordmark (public/). */
  logo: {
    src: "/vaibhav-logo.jpeg",
    alt: "Vaibhav Medical Education Consultancy",
  } as const,
  tagline: "Guidance for medical admissions, exams, and career pathways.",
  description:
    "Independent consultancy for Indian students exploring MBBS abroad: shortlisting, NMC-aware planning, applications, and pre-departure support - with clear, honest guidance.",

  nav: [
    { label: "Services", href: "/#services" },
    { label: "Destinations", href: "/destinations" },
    { label: "Universities", href: "/universities" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/#contact" },
  ],

  trustStrip: {
    title: "What families typically look for",
    points: [
      "NMC 2021 Gazette–aware university shortlisting",
      "Transparent scope: what we do and do not handle",
      "Document checklists and realistic timelines",
      "Support through offer, visa basics, and pre-departure briefing",
    ],
  },

  hero: {
    eyebrow: "Medical education consultancy",
    headline: "Clarity for your next step in medicine.",
    subhead:
      "We help Indian students and parents compare MBBS abroad options with honest, structured advice - from country and university fit to paperwork and what comes after graduation.",
    primaryCta: { label: "Book a consultation", href: "/#contact" },
    secondaryCta: { label: "Browse country guides", href: "/destinations" },
  },

  services: {
    title: "How we can help",
    intro:
      "Every family is different. We combine regulatory awareness with practical planning so you are not guessing alone.",
    items: [
      {
        title: "University shortlisting & fit",
        body: "We align budget, academic profile, English-medium confirmation, internship structure, and NMC criteria with a realistic list of institutions.",
      },
      {
        title: "Applications & documentation",
        body: "Offer tracking, document preparation guidance, and coordination checkpoints so deadlines do not slip.",
      },
      {
        title: "Exam & licensing orientation",
        body: "High-level orientation on FMGE/NExT preparation timelines and how your study destination affects your plan - without replacing formal coaching.",
      },
      {
        title: "Pre-departure briefing",
        body: "What to pack, banking and communication basics, and what to expect in the first weeks on campus.",
      },
    ],
  },

  whoWeServe: {
    title: "Who we work with",
    intro:
      "We support students and families at different stages - from first exploration to holding multiple offers.",
    cards: [
      {
        title: "Students",
        body: "Class 12 freshers, gap-year applicants, and transfers evaluating a move abroad.",
      },
      {
        title: "Parents & guardians",
        body: "Those comparing safety, cost of living, visa rules, and long-term licensing pathways for their child.",
      },
      {
        title: "Working professionals",
        body: "Anyone revisiting medical study options and needing a structured refresher on current rules of the road.",
      },
    ],
  },

  process: {
    title: "How it works",
    intro:
      "A straightforward process modelled on how established study-abroad consultancies typically engage - without pressure tactics.",
    steps: [
      {
        step: 1,
        title: "Discovery call",
        body: "We learn your goals, budget, timeline, and concerns. You receive a plain-language summary of realistic options.",
      },
      {
        step: 2,
        title: "Shortlist & verification plan",
        body: "We narrow countries and universities and outline what you must verify on official channels (NMC, WHO, university).",
      },
      {
        step: 3,
        title: "Applications",
        body: "Guided preparation of forms and documents, with a shared checklist and milestone dates.",
      },
      {
        step: 4,
        title: "Offer & enrolment",
        body: "Support interpreting offer letters, fee schedules, and next steps for acceptance.",
      },
      {
        step: 5,
        title: "Pre-departure",
        body: "A concise briefing so travel, housing, and first-semester expectations feel manageable.",
      },
    ],
  },

  approach: {
    title: "Our principles",
    paragraphs: [
      "We are advisers, not recruiters. Recommendations follow your constraints - we do not push a single destination or partner institution.",
      "Regulations change. We point you to primary sources (NMC, WHO, embassy, university) for final verification and keep our notes current to the best of our ability.",
      "Fees for our services are discussed upfront in writing. Typical consultancy areas such as coaching, flights, or insurance sit outside our scope unless explicitly agreed.",
    ],
  },

  eligibility: {
    title: "Before you shortlist: NMC-aware checks",
    intro:
      "These checkpoints mirror what reputable consultancies emphasise post–2021 NMC rules. Always confirm on official portals before you pay any university.",
    items: [
      "Minimum 54 months of academic study plus 12 months of internship, in the same institution’s hospital network where required.",
      "English as the medium of instruction for the entire course - documented in offer or regulatory filings, not only marketing pages.",
      "Eligibility to register and practise in the country where you study, so your qualification is licensed in its home jurisdiction.",
      "Valid NEET score for the relevant academic year if you are an Indian national seeking an overseas MBBS (as per current NMC guidance).",
      "Passport, financial documentation, and medical fitness requirements ready before application peaks (typically spring for autumn intake).",
    ],
  },

  faqs: [
    {
      question: "Do you guarantee admission or a visa?",
      answer:
        "No ethical consultancy can guarantee outcomes. We improve your preparation and presentation; admissions and visas are decided by universities and governments.",
    },
    {
      question: "Is MBBS abroad valid in India?",
      answer:
        "Graduates must meet current NMC requirements (including FMGE/NExT and internship rules) and follow the registration process. We help you understand the criteria; licensing decisions rest with the regulator.",
    },
    {
      question: "Which country is “best”?",
      answer:
        "There is no universal best - only what fits budget, climate preference, English-medium certainty, clinical exposure, and your comfort with distance from home. We compare trade-offs honestly.",
    },
    {
      question: "Do you charge a fee?",
      answer:
        "Yes, professional consultancies charge for structured counselling and application support. We explain deliverables and fees before you commit - no hidden instalments.",
    },
    {
      question: "Can you choose the university for us?",
      answer:
        "We recommend; you decide. Final choice should always follow your own verification calls with the institution and reading of official recognition lists.",
    },
    {
      question: "Do you provide loans or scholarships?",
      answer:
        "We can outline typical financing routes and documentation banks ask for, but we do not lend money or award scholarships.",
    },
    {
      question: "What if rules change after we enrol?",
      answer:
        "Immigration and medical education rules can change. We help you monitor official announcements, but ongoing compliance is the student’s and university’s responsibility.",
    },
  ],

  ctaBanner: {
    title: "Ready to map your options?",
    body: "Send a short note with your class/year, target intake, and budget band. We will reply with next steps.",
    ctaLabel: "Email the team",
    href: "/#contact",
  },

  contact: {
    title: "Contact",
    intro:
      "Use email for the fastest paper trail, or call us on the numbers below. Include your city, academic stage, and whether you are comparing specific countries.",
    email: "admission@vaibhavmedicaleducationconsultancy.com",
    /** Indian mobile numbers as shown to visitors; 10-digit values use +91 in tel: links. Leave empty to hide. */
    phones: ["8310258398", "6361394820"],
    /** Office address; keep "" to hide. Use \n for a line break in the contact card. */
    location:
      "#534, 1st Floor, 3rd Block, BDA Layout\nNagarbhavi, Bengaluru 560072",
    hours: "Weekdays, 10:00 – 18:00 (by appointment)",
  },

  footer: {
    note: "© {year} Vaibhav Medical Education Consultancy. All rights reserved.",
    legal:
      "Information provided is for educational planning purposes and does not constitute medical, legal, or regulatory advice. Verify all recognition, fee, and programme details with NMC, WHO, embassies, and universities.",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Universities", href: "/universities" },
      { label: "Courses", href: "/courses" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "Study destinations", href: "/destinations" },
      { label: "How it works", href: "/#process" },
      { label: "Our principles", href: "/#approach" },
      { label: "FAQs", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
    ],
  },
} as const;

export type SiteNavLink = (typeof site.nav)[number];

/** Build tel: href for {@link site.contact.phones}; 10-digit Indian mobiles default to +91. */
export function contactTelHref(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith("+")) {
    return `tel:${trimmed.replace(/\s/g, "")}`;
  }
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+91${digits}`;
  return `tel:${digits}`;
}
