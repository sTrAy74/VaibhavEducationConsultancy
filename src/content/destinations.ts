export type DestinationUniversity = {
  name: string;
  description: string;
};

export type DestinationCategory = {
  title: string;
  intro?: string;
  universities: DestinationUniversity[];
};

export type ComparisonTable = {
  title: string;
  headers: readonly [string, string];
  rows: readonly { feature: string; advantage: string }[];
};

export type Destination = {
  slug: string;
  shortName: string;
  headline: string;
  teaser: string;
  intro: readonly string[];
  keyRequirements?: {
    title: string;
    intro: string;
    items: readonly string[];
  };
  comparisonTable?: ComparisonTable;
};

export const destinations: readonly Destination[] = [
  {
    slug: "russia",
    shortName: "Russia",
    headline: "MBBS in Russia",
    teaser:
      "WHO-recognized universities, strong clinical training, and English-medium options popular with Indian students.",
    intro: [
      "Russia is one of the most popular destinations for Indian students pursuing an MBBS degree due to the high quality of education and affordable fee structures. All of the universities in our Russia listings on the Universities page are recognized by the World Health Organization (WHO) and are compliant with the National Medical Commission (NMC) guidelines — confirm every institution on official WHO/NMC and university sources before you apply.",
      "Here is how we group top medical universities in Russia — by popularity and region — on that Universities page (anchor: Russia).",
    ],
    keyRequirements: {
      title: "Key Requirements for Admission (NMC 2021 Gazette)",
      intro:
        "When choosing a university, ensure they meet these three criteria required to practice in India later:",
      items: [
        "Course duration: Minimum 54 months of study + 12 months of internship in the same hospital.",
        "Medium of instruction: Must be 100% English for the entire duration.",
        "Registration: The degree must allow you to register as a medical practitioner in Russia.",
      ],
    },
  },
  {
    slug: "uzbekistan",
    shortName: "Uzbekistan",
    headline: "MBBS in Uzbekistan",
    teaser:
      "6-year fully English-medium programs, modern campuses, and a practical alternative to Russia under NMC 2021 rules.",
    intro: [
      "Uzbekistan has become a top alternative to Russia for Indian medical students, especially after the 2021 NMC Gazette, because most of its top universities moved to a 6-year fully English medium curriculum.",
      "Institutions here are often known for recently upgraded infrastructure. Programme listings by category are on our Universities page under Uzbekistan.",
    ],
    comparisonTable: {
      title: "Why Uzbekistan is trending for 2026 admissions",
      headers: ["Feature", "Advantage"] as const,
      rows: [
        {
          feature: "Duration",
          advantage:
            "6 years (5+1), fully matching the NMC 2021 Gazette.",
        },
        {
          feature: "Distance",
          advantage: "Only a 3-hour flight from Delhi to Tashkent.",
        },
        {
          feature: "Culture",
          advantage:
            "Very similar food (kebabs, pilaf/pulao) and high respect for Indians.",
        },
        {
          feature: "Climate",
          advantage:
            "Much milder winters compared to Russia (Siberia/Ural regions).",
        },
      ],
    },
  },
  {
    slug: "kazakhstan",
    shortName: "Kazakhstan",
    headline: "MBBS in Kazakhstan",
    teaser:
      "Budget-friendly options in Central Asia with NMC-aligned durations and strong clinical training in Almaty and beyond.",
    intro: [
      "Kazakhstan has rapidly become a top choice for Indian students because it offers some of the most budget-friendly MBBS programs in Central Asia. Most universities here have adapted their curricula to be fully compliant with the NMC 2021 Gazette (5.5 to 6 years duration).",
      "See Kazakhstan on the Universities page for grouped institution lists.",
    ],
    comparisonTable: {
      title: "Why choose Kazakhstan for 2026?",
      headers: ["Feature", "Advantage for your consultancy"] as const,
      rows: [
        {
          feature: "Budget",
          advantage:
            "Often ₹3 to ₹5 lakhs cheaper than Russia or Georgia over the full 6 years.",
        },
        {
          feature: "NMC compliance",
          advantage:
            "Most universities offer the mandatory 54 months of study + 12 months internship.",
        },
        {
          feature: "Direct flights",
          advantage:
            "Only 3.5 to 4 hours from Delhi to Almaty, making it very accessible for parents.",
        },
        {
          feature: "Education quality",
          advantage:
            'Extensive use of simulators and "virtual patients" in top Almaty universities.',
        },
      ],
    },
  },
  {
    slug: "georgia",
    shortName: "Georgia",
    headline: "MBBS in Georgia",
    teaser:
      "European-style MD programs, strong safety profile, and NMC-aligned 6-year pathways favoured by many Indian families.",
    intro: [
      'Georgia has become the "premium" destination for Indian medical students in recent years. It is highly favoured by South Indian families from cities like Bengaluru because of its safe environment, European lifestyle, and high educational standards.',
      "Most Georgian universities offer a 6-year MD program (equivalent to MBBS) that is fully compliant with the NMC 2021 Gazette. Grouped university lists are on our Universities page under Georgia.",
    ],
    comparisonTable: {
      title: 'Why Georgia is the "premium choice" for your clients',
      headers: ["Feature", "The Georgia advantage"] as const,
      rows: [
        {
          feature: "Safety",
          advantage:
            "Regularly ranked among the top 10 safest countries in the world.",
        },
        {
          feature: "Education style",
          advantage:
            "Follows the European Credit Transfer System (ECTS), making it easier to pursue PG in Europe or the UK later.",
        },
        {
          feature: "NMC compliance",
          advantage:
            "6-year duration (360 ECTS credits) perfectly matches the 54+12 months requirement.",
        },
        {
          feature: "Lifestyle",
          advantage:
            'High quality of life with a very "European" feel, which many parents in Bengaluru prefer for their children.',
        },
      ],
    },
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
