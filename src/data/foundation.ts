export interface Executive {
  name?: string;
  role?: string;
  /** Optimized web derivative used in cards/grid */
  image: string;
  /** Best available source shown in the lightbox */
  modalImage: string;
  width: number;
  height: number;
  alt: string;
}

/** Shared shape for lightboxable media beyond the executive cards */
export interface MediaAsset {
  image: string;
  modalImage: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export interface ActivityVideo {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
}

export const foundation = {
  name: "DA’AFAA Charity Foundation",
  shortName: "DA’AFAA",
  tagline: "Giving Hope, Touching Lives",
  established: "2nd February, 2026",
  headlessEstablishment: "Established 2nd February, 2026",
  aboutLead:
    "DA’AFAA Charity Foundation is a humanitarian and community-based organization established on 2nd February, 2026, with a commitment to supporting the less privileged, orphans, widows, widowers, and vulnerable members of society across Nigeria.",
  aboutPrinciples:
    "The foundation was founded on the principles of compassion, kindness, service to humanity, and the belief that every individual deserves dignity, hope, and an opportunity to live a better life. Through charitable activities and community support, DA’AFAA Charity Foundation seeks to bring positive change to individuals and families facing hardship.",
  vision:
    "To build a compassionate and supportive society in which the less privileged, orphans, widows, widowers, and vulnerable people can live with dignity, hope, and opportunities for a better future.",
  mission:
    "To provide humanitarian assistance, empower vulnerable individuals, and promote the welfare and development of disadvantaged communities across Nigeria through charitable services, partnerships, and sustainable community initiatives.",
  objectives: [
    "To provide food, clothing, and essential support to less privileged individuals and families.",
    "To support orphans, widows, widowers, and vulnerable children in need.",
    "To promote education and opportunities for children and young people from disadvantaged backgrounds.",
    "To organize charitable programs that improve the welfare and living conditions of beneficiaries.",
    "To encourage individuals, organizations, and communities to participate in acts of charity and social responsibility.",
    "To establish partnerships and develop sustainable projects that strengthen humanitarian services across Nigeria.",
  ],
  progress: {
    intro:
      "Since its establishment, DA’AFAA Charity Foundation has been dedicated to building a foundation of service, compassion, and community development. Its charitable work focuses on identifying people in need, connecting with beneficiaries, and mobilizing support to address their essential needs.",
    areas: [
      "Assistance to widows and widowers",
      "Support for orphans and vulnerable children",
      "Distribution of food and clothing",
      "Community-based welfare initiatives",
    ],
    development:
      "DA’AFAA Charity Foundation also seeks to strengthen its humanitarian work through partnerships, volunteer participation, and the development of a permanent office to support its growing charitable activities.",
  },
  commitment: [
    "DA’AFAA Charity Foundation remains committed to serving humanity with honesty, compassion, and accountability. We believe that every act of kindness, no matter how small, can make a meaningful difference in someone’s life.",
    "Through the support of donors, volunteers, partners, and the general public, the foundation continues to work toward a society where vulnerable individuals and families receive care, encouragement, and opportunities to thrive.",
  ],
};

export const founder = {
  name: "Abdulwahab Wumi Dauda",
  honorific: "Founder & CEO, DA’AFAA Charity Foundation",
  address: "New Kutunku, Back of Abattoir, Gwagwalada, Abuja, Nigeria",
  phone: "08059119917",
  leadership: [
    "Abdulwahab Wumi Dauda is passionate about assisting people facing hardship, particularly widows, widowers, orphans, and vulnerable families. His desire to contribute to the welfare of others led him to establish DA’AFAA Charity Foundation, through which he seeks to mobilize support, promote compassion, and create opportunities for disadvantaged members of society.",
  ],
  values: [
    "As a Muslim, Abdulwahab Wumi Dauda is guided by the principles of compassion, sincerity, honesty, humility, and service to humanity. His commitment to helping orphans and people in need reflects the Islamic encouragement of charity and kindness. The Qur’an, in Surah An-Nisa 4:114, teaches that acts of charity, kindness, and reconciliation, when done seeking Allah’s pleasure, carry great reward.",
    "He believes that serving humanity is an opportunity to demonstrate good character, strengthen community bonds, and seek the pleasure of Allah. His humanitarian vision is rooted in the values of generosity, respect for human dignity, fairness, and concern for the welfare of others.",
    "Abdulwahab is a well-trained and community-minded individual who values education, personal development, responsible leadership, and the importance of supporting those in need. He is unmarried and remains focused on his personal growth, professional development, and humanitarian responsibilities.",
  ],
  future: [
    "Through DA’AFAA Charity Foundation, Abdulwahab Wumi Dauda aspires to build a lasting platform for charitable service, support vulnerable families, encourage educational opportunities, and contribute to the development of a more compassionate society in Nigeria.",
    "His vision is to see a society where orphans, widows, widowers, and less privileged individuals receive care, encouragement, and opportunities to improve their lives.",
  ],
};

export interface ExecutiveEntry extends Executive {
  id: string;
}

/**
 * Client-required executive order — this order must remain unchanged.
 * Executive 4 (executive-04 asset) has no independently verified name or
 * role text, so it is intentionally unnamed rather than guessed.
 */
export const executives: ExecutiveEntry[] = [
  {
    id: "executive-01",
    name: "Abdulwahab Wumi Dauda",
    role: "CEO / President",
    image: "/executive-01.webp",
    modalImage: "/executive-01.jpeg",
    width: 590,
    height: 885,
    alt: "Official DA’AFAA executive identity card of Abdulwahab Wumi Dauda, CEO / President",
  },
  {
    id: "executive-02",
    name: "Muazu Dangana",
    role: "Editor in Chief",
    image: "/executive-02.webp",
    modalImage: "/executive-02.jpeg",
    width: 590,
    height: 885,
    alt: "Official DA’AFAA executive identity card of Muazu Dangana, Editor in Chief",
  },
  {
    id: "executive-03",
    name: "Aminu Major Tijjani",
    role: "Director of Fund Raising and Partnership",
    image: "/executive-03.webp",
    modalImage: "/executive-03.jpeg",
    width: 590,
    height: 885,
    alt: "Official DA’AFAA executive identity card of Aminu Major Tijjani, Director of Fund Raising and Partnership",
  },
  {
    id: "executive-04",
    image: "/executive-04.webp",
    modalImage: "/executive-04.jpeg",
    width: 341,
    height: 512,
    alt: "Official DA’AFAA executive identity card",
  },
  {
    id: "executive-05",
    name: "Aisha Yakubu",
    role: "Director of Welfare",
    image: "/executive-05.webp",
    modalImage: "/executive-05.webp",
    width: 590,
    height: 898,
    alt: "Official DA’AFAA executive identity card of Aisha Yakubu, Director of Welfare",
  },
  {
    id: "executive-06",
    name: "Fatima Abubakar Edogi",
    role: "Director of Women and Children Affairs",
    image: "/executive-06.webp",
    modalImage: "/executive-06.jpeg",
    width: 590,
    height: 885,
    alt: "Official DA’AFAA executive identity card of Fatima Abubakar Edogi, Director of Women and Children Affairs",
  },
];

export const support = {
  intro:
    "Every act of kindness — no matter how small — can make a meaningful difference in someone’s life. Through the support of donors, volunteers, partners, and the general public, DA’AFAA Charity Foundation works toward a society where vulnerable individuals and families receive care, encouragement, and opportunities to thrive.",
  accountName: "Abdulwahab Wumi Dauda",
  accountNumber: "5114267874",
  bank: "Moniepoint MFB",
};

export const contact = {
  address: "New Kutunku, Back of Abattoir, Gwagwalada, Abuja, Nigeria",
  phone: "08059119917",
  phoneHref: "tel:+2348059119917",
};

export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "founder", label: "Founder" },
  { id: "leadership", label: "Leadership" },
  { id: "office-project", label: "Office Project" },
  { id: "support", label: "Support" },
  { id: "contact", label: "Contact" },
];

export const activities = {
  eyebrow: "Activities",
  title: "Our Impact",
  description:
    "Charity in action — DA’AFAA Charity Foundation documents the humanitarian activities it carries out in service of its mission.",
  featureTitle: "Ramadan Food Distribution 2026",
  featureIntro:
    "During Ramadan 2026, DA’AFAA Charity Foundation carried out food distribution to support people and families in need. These photographs and videos document the activity.",
  videosTitle: "Watch the distribution",
  videosIntro:
    "Videos supplied by the foundation showing the food distribution activity.",
  photos: [
    {
      image: "/media/activities/food-donation-1.webp",
      modalImage: "/media/activities/food-donation-1.webp",
      width: 614,
      height: 1280,
      alt: "Photograph from DA’AFAA Charity Foundation’s Ramadan 2026 food distribution",
      caption: "Ramadan food distribution — 2026",
    },
    {
      image: "/media/activities/food-donation-2.webp",
      modalImage: "/media/activities/food-donation-2.webp",
      width: 614,
      height: 1280,
      alt: "Photograph from DA’AFAA Charity Foundation’s Ramadan 2026 food distribution",
      caption: "Ramadan food distribution — 2026",
    },
    {
      image: "/media/activities/food-donation-3.webp",
      modalImage: "/media/activities/food-donation-3.webp",
      width: 960,
      height: 1280,
      alt: "Photograph from DA’AFAA Charity Foundation’s Ramadan 2026 food distribution",
      caption: "Ramadan food distribution — 2026",
    },
    {
      image: "/media/activities/food-donation-4.webp",
      modalImage: "/media/activities/food-donation-4.webp",
      width: 960,
      height: 1280,
      alt: "Photograph from DA’AFAA Charity Foundation’s Ramadan 2026 food distribution",
      caption: "Ramadan food distribution — 2026",
    },
    {
      image: "/media/activities/food-donation-5.webp",
      modalImage: "/media/activities/food-donation-5.webp",
      width: 960,
      height: 1280,
      alt: "Photograph from DA’AFAA Charity Foundation’s Ramadan 2026 food distribution",
      caption: "Ramadan food distribution — 2026",
    },
  ],
  videos: [
    {
      src: "/media/activities/food-donation-1.mp4",
      poster: "/media/activities/food-donation-1-poster.jpg",
      width: 360,
      height: 640,
      label: "Food distribution in progress",
    },
    {
      src: "/media/activities/food-donation-2.mp4",
      poster: "/media/activities/food-donation-2-poster.jpg",
      width: 360,
      height: 640,
      label: "Food distribution in progress",
    },
  ],
} as const;

export const officeProject = {
  eyebrow: "Current Project",
  title: "Our Office Project",
  description:
    "DA’AFAA Charity Foundation is working toward developing a permanent office facility to support its humanitarian activities, and is seeking support for the office project.",
  land: {
    image: "/media/office-project/land-picture.webp",
    modalImage: "/media/office-project/land-picture.webp",
    width: 1280,
    height: 960,
    alt: "Photograph of the land for DA’AFAA Charity Foundation’s proposed office facility",
    caption: "Photograph of the land for the foundation’s proposed office facility",
  },
  landNote:
    "DA’AFAA Charity Foundation is working toward developing a permanent office facility to strengthen its humanitarian activities. The foundation is seeking financial support to build the office, and every contribution brings the project closer to completion.",
  steps: ["The Land", "The Blueprint", "Design & Support"],
  blueprint: {
    image: "/media/office-project/blueprint.webp",
    modalImage: "/media/office-project/blueprint.webp",
    width: 1280,
    height: 853,
    alt: "The office blueprint for DA’AFAA Charity Foundation’s proposed facility",
    caption: "The foundation’s office blueprint",
  },
  blueprintNote:
    "A blueprint for the office facility, designed for the foundation. Tap the blueprint to zoom in and inspect it.",
  graphics: [
    {
      image: "/media/office-project/land-design.webp",
      modalImage: "/media/office-project/land-design.webp",
      width: 853,
      height: 1280,
      alt: "Office project campaign graphic designed by the foundation",
      caption: "Office project campaign graphic",
    },
    {
      image: "/media/office-project/land-blueprint-design.webp",
      modalImage: "/media/office-project/land-blueprint-design.webp",
      width: 853,
      height: 1280,
      alt: "Office project campaign graphic with blueprint design, supplied by the foundation",
      caption: "Office project campaign graphic — blueprint design",
    },
  ],
  cta: "Support Our Office Project",
  ctaHref: "#support",
} as const;

export const assets = {
  logo: "/logo.webp",
  founderPhoto: "/founder.webp",
  groupExecutives: "/group-executives.webp",
};