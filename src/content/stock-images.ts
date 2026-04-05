/**
 * Local stock photography under /public/images/stock (JPEG).
 * Destination covers use country-specific landmarks (Pexels / Unsplash; free licenses).
 * Pexels: https://www.pexels.com/license/ · Unsplash: https://unsplash.com/license
 */
const base = "/images/stock";

export const homeHeroImage = {
  src: `${base}/home-hero.jpg`,
  alt: "Diverse group of students talking together on a university campus lawn",
};

/** Covers: Pexels 11955351 (Russia); Uzbekistan — Mavluda Tashbaeva / Pexels (local); 28993655 (Kazakhstan); Unsplash 1555881400 (Georgia). */
export const destinationCoverImages: Record<
  string,
  { src: string; alt: string }
> = {
  russia: {
    src: `${base}/cover-russia.jpg`,
    alt: "Cathedral of Christ the Saviour with golden domes, Moscow, Russia",
  },
  uzbekistan: {
    src: `${base}/cover-uzbekistan-samarkand.jpg`,
    alt: "Intricate blue tilework of an ancient madrasah in Uzbekistan seen through green trees under a clear blue sky",
  },
  kazakhstan: {
    src: `${base}/cover-kazakhstan.jpg`,
    alt: "River promenade with snow-capped mountains above Almaty, Kazakhstan",
  },
  georgia: {
    src: `${base}/cover-georgia.jpg`,
    alt: "Warm sunset sky over a hillside cityscape with closely packed historic rooftops and balconies",
  },
};

export function getDestinationCover(slug: string): { src: string; alt: string } {
  return (
    destinationCoverImages[slug] ?? {
      src: homeHeroImage.src,
      alt: homeHeroImage.alt,
    }
  );
}

/** Guide pages (/universities, /courses, /scholarships) — reuse assets under /public/images/stock. */
export const universitiesPageCover = {
  src: `${base}/service-2.jpg`,
  alt: "Students with notebooks seated in a bright classroom",
};

export const coursesPageCover = {
  src: `${base}/trust.jpg`,
  alt: "Student writing in a notebook during a lecture in a bright hall",
};

export const scholarshipsPageCover = {
  src: `${base}/eligibility.jpg`,
  alt: "Documents and pen on a desk suggesting application paperwork",
};

export const serviceSpotlights = [
  {
    src: `${base}/service-1.jpg`,
    alt: "Healthcare professionals reviewing information together in a clinical setting",
  },
  {
    src: `${base}/service-2.jpg`,
    alt: "Students with notebooks seated in a bright classroom",
  },
  {
    src: `${base}/service-3.jpg`,
    alt: "Colleagues discussing plans over documents on a desk",
  },
  {
    src: `${base}/service-4.jpg`,
    alt: "Travel planning with a map, notebook, and camera on a table",
  },
] as const;

export const trustSectionImage = {
  src: `${base}/trust.jpg`,
  alt: "Student writing in a notebook during a lecture in a bright hall",
};

export const whoWeServeImages = [
  {
    src: homeHeroImage.src,
    alt: "Students talking on a campus lawn",
  },
  {
    src: `${base}/who-family.jpg`,
    alt: "Family spending time together around a table at home",
  },
  {
    src: `${base}/who-professional.jpg`,
    alt: "Professional in business attire smiling in an office setting",
  },
] as const;

export const processSectionImage = {
  src: `${base}/process.jpg`,
  alt: "Person planning with laptop, notebook, and coffee on a desk",
};

export const approachSectionImage = {
  src: `${base}/approach.jpg`,
  alt: "Two colleagues shaking hands across a desk in a professional setting",
};

export const eligibilitySectionImage = {
  src: `${base}/eligibility.jpg`,
  alt: "Documents and pen on a desk suggesting application paperwork",
};

export const contactSectionImage = {
  src: `${base}/contact.jpg`,
  alt: "Bright workspace with laptop, notebook, and natural light",
};
