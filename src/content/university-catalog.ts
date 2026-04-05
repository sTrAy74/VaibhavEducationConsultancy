import type { DestinationCategory } from "@/content/destinations";

/**
 * Programme listings by country (moved from destination guides).
 * Anchors: /universities#russia, #uzbekistan, #kazakhstan, #georgia
 */
export function getUniversityCategoriesForSlug(
  slug: string,
): readonly DestinationCategory[] | undefined {
  return universityCatalog[slug];
}

export const universityCatalog: Record<string, readonly DestinationCategory[]> = {
  russia: [
    {
      title: "1. Most Popular for International Students",
      intro:
        "These universities have a long history of training Indian students and offer a 100% English medium curriculum.",
      universities: [
        {
          name: "Petrozavodsk State University (PSU)",
          description:
            "Located near the Finnish border, it is known for its European-standard campus and strong clinical base.",
        },
        {
          name: "Altai State Medical University (ASMU)",
          description:
            "Based in Barnaul, this is a highly respected government university with very affordable living costs.",
        },
        {
          name: "Kazan Federal University (KFU)",
          description:
            "One of the oldest and most prestigious universities in Russia, located in the sports capital of the country.",
        },
        {
          name: "Bashkir State Medical University",
          description:
            "Located in Ufa, it is a leading center for medical and pharmaceutical sciences in the Russian Federation.",
        },
      ],
    },
    {
      title: "2. High-Ranking Federal Universities",
      intro:
        "These institutions often receive more government funding and have state-of-the-art research facilities.",
      universities: [
        {
          name: "I.M. Sechenov First Moscow State Medical University",
          description:
            "The oldest and most prestigious medical school in Russia.",
        },
        {
          name: "Pirogov Russian National Research Medical University (RNRMU)",
          description: "A leading research center located in Moscow.",
        },
        {
          name: "Far Eastern Federal University (FEFU)",
          description:
            "Located in Vladivostok, it features one of the most modern medical centers in the country.",
        },
        {
          name: "Crimean Federal University",
          description:
            "Located in Simferopol, it has a very large Indian student community.",
        },
      ],
    },
    {
      title: "3. Renowned Regional State Universities",
      intro:
        "These universities offer a great balance between high-quality clinical exposure and lower tuition fees.",
      universities: [
        {
          name: "Orenburg State Medical University",
          description:
            "Known for having a high FMGE (Foreign Medical Graduate Examination) passing rate among Indian students.",
        },
        {
          name: "Mari State University",
          description:
            "Located in Yoshkar-Ola, it provides excellent hostel facilities and modern infrastructure.",
        },
        {
          name: "Perm State Medical University",
          description:
            "One of the top-ranked medical universities in the Ural region.",
        },
        {
          name: "Kursk State Medical University",
          description:
            "Was the first university in Russia to offer a full English-medium medical program.",
        },
      ],
    },
    {
      title: "4. Specialized Research & Regional Centers",
      universities: [
        {
          name: "Volgograd State Medical University",
          description:
            "Highly famous for its dentistry and general medicine programs.",
        },
        {
          name: "Smolensk State Medical University",
          description:
            "A popular choice for students due to its proximity to Moscow.",
        },
        {
          name: "Tver State Medical University",
          description:
            "Historically one of the first choices for international students in Russia.",
        },
      ],
    },
  ],
  uzbekistan: [
    {
      title: '1. The "Big Three" (most popular)',
      intro:
        "These are the most established institutions with the largest number of Indian students and specialised international faculties.",
      universities: [
        {
          name: "Tashkent Medical Academy (TMA)",
          description:
            "Located in the capital, it is the premier medical institution in the country. It has multiple campuses (Old and New) and the highest clinical exposure.",
        },
        {
          name: "Samarkand State Medical University",
          description:
            "One of the oldest and most prestigious. It recently opened a massive, ultra-modern new campus and hospital wing specifically for international students.",
        },
        {
          name: "Bukhara State Medical Institute",
          description:
            "Named after Abu Ali Ibn Sino (Avicenna). It is highly regarded for its academic rigor and has a very strong dedicated hostel system for Indians.",
        },
      ],
    },
    {
      title: "2. Rapidly growing regional universities",
      intro:
        "These universities are excellent for students looking for slightly lower living costs while maintaining high educational standards.",
      universities: [
        {
          name: "Andijan State Medical Institute",
          description:
            "Located in the Fergana Valley, it is known for its friendly environment and strong emphasis on practical surgical training.",
        },
        {
          name: "Fergana State University (Medical Centre)",
          description:
            "A large multi-disciplinary university that has significantly upgraded its medical laboratory facilities in the last three years.",
        },
        {
          name: "Tashkent State Dental Institute",
          description:
            "While specialised in dentistry, it also offers General Medicine (MBBS) programs with a very high standard of English instruction.",
        },
      ],
    },
    {
      title: "3. Specialised & newer options",
      universities: [
        {
          name: "Urgench Branch of Tashkent Medical Academy",
          description:
            "A smaller, more focused branch that offers a more personalised teacher-to-student ratio.",
        },
        {
          name: "Akfa University (Private)",
          description:
            "Located in Tashkent, this is a private university with a Western-style curriculum and very high-end facilities, though the fees are higher than government universities.",
        },
      ],
    },
  ],
  kazakhstan: [
    {
      title: '1. The "Top tier" government universities',
      intro:
        "These are the most prestigious and oldest institutions in the country, located in the major hubs of Almaty and Astana.",
      universities: [
        {
          name: "Asfendiyarov Kazakh National Medical University (KazNMU)",
          description:
            "Located in Almaty, it is the #1 ranked medical university in Kazakhstan. It has the largest clinical base and a massive community of Indian students.",
        },
        {
          name: "Astana Medical University (AMU)",
          description:
            "Located in the capital city (Astana). It is known for its modern, high-tech infrastructure and strong government backing.",
        },
        {
          name: "Semey State Medical University",
          description:
            "One of the oldest universities with a very high FMGE/NExT passing rate history. It is famous for its research in nuclear medicine.",
        },
      ],
    },
    {
      title: "2. High-quality regional universities",
      intro:
        "These options often provide a better student-to-teacher ratio and are located in quieter, student-friendly cities.",
      universities: [
        {
          name: "Karaganda State Medical University",
          description:
            "Historically considered the best for clinical practice. It was the first university in Kazakhstan to get international accreditation for its medical programs.",
        },
        {
          name: "West Kazakhstan Marat Ospanov State Medical University",
          description:
            "Located in Aktobe, it is highly affordable and offers a very focused English-medium environment.",
        },
        {
          name: "South Kazakhstan Medical Academy (SKMA)",
          description:
            "Located in Shymkent, it has become very popular recently due to its modern labs and active student life.",
        },
      ],
    },
    {
      title: "3. Modern international options",
      universities: [
        {
          name: "Al-Farabi Kazakh National University (KazNU)",
          description:
            'A top-ranked multidisciplinary university in Almaty that offers a world-class "International Medical Faculty."',
        },
        {
          name: "Kaspian University (International School of Medicine)",
          description:
            "A private institution in Almaty known for its Western-style teaching methods and high-end campus facilities.",
        },
        {
          name: "North Kazakhstan State University (NKSU)",
          description:
            "Located in Petropavl, offering a very competitive fee structure for budget-conscious families.",
        },
      ],
    },
  ],
  georgia: [
    {
      title: "1. Top-ranked government universities",
      intro:
        "These are the most prestigious and oldest institutions in Georgia, located in the capital city, Tbilisi.",
      universities: [
        {
          name: "Tbilisi State Medical University (TSMU)",
          description:
            "The largest and most famous medical university in Georgia. It has a very strong international reputation and a dedicated department for Indian students.",
        },
        {
          name: "Akaki Tsereteli State University (Kutaisi)",
          description:
            "Located in the historic city of Kutaisi, it offers a high-quality government education at a slightly lower cost of living than the capital.",
        },
        {
          name: "Batumi Shota Rustaveli State University",
          description:
            "Located in the beautiful coastal city of Batumi, it is known for its modern medical faculty and smaller class sizes.",
        },
      ],
    },
    {
      title: '2. High-growth "international" universities',
      intro:
        "These universities are specifically designed for international students, with modern infrastructure and Western-style teaching methods.",
      universities: [
        {
          name: "University of Georgia (UG)",
          description:
            "A top-tier private university in Tbilisi. It is known for its high-tech simulation labs and very strong English-speaking faculty.",
        },
        {
          name: "Caucasus International University (CIU)",
          description:
            "Very popular among Indian students for its clinical rotation facilities and focus on USMLE (USA medical licensing) preparation.",
        },
        {
          name: "East European University (EEU)",
          description:
            "Located in Tbilisi, it features a very modern campus and is known for its partnerships with European and UK medical bodies.",
        },
        {
          name: "New Vision University",
          description:
            'A highly research-oriented university that offers a modern "integrated" curriculum, which is very helpful for passing the NExT/FMGE exams.',
        },
      ],
    },
    {
      title: "3. Emerging options",
      universities: [
        {
          name: "David Tvildiani Medical University (DTMU)",
          description:
            "Famous for its specialised focus on preparing students for the USMLE. It has a very rigorous academic environment.",
        },
        {
          name: "European University (formerly European Teaching University)",
          description:
            "Known for its own university-owned hospitals, ensuring students get direct clinical exposure from the early years.",
        },
        {
          name: "Alte University (formerly Tbilisi Open University)",
          description:
            "Offers a modern, tech-focused medical program in the heart of Tbilisi.",
        },
      ],
    },
  ],
};
