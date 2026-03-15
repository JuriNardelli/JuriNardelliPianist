export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const PERSON_JSONLD = {
  "@type": "Person",
  name: "Juri Nardelli",
  url: "https://jurinardelli.com",
  image: "https://jurinardelli.com/portrait.jpg",
  jobTitle: "Concert Pianist & Piano Teacher",
  description:
    "Concert pianist and piano teacher trained at G. Verdi Conservatory Milan and Conservatorium van Maastricht. Offering private online piano mentorship for adults.",
  sameAs: [
    "https://www.instagram.com/jnpianist/",
    "https://www.youtube.com/channel/UCW__wlOO7iwwM2lGz8J8ywQ",
    "https://www.tiktok.com/@jnpianist",
  ],
  knowsAbout: [
    "Classical Piano",
    "Piano Performance",
    "Piano Teaching",
    "Music Education",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "G. Verdi Conservatory of Music, Milan",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "ISSM Rinaldo Franci, Siena",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Conservatorium van Maastricht",
    },
  ],
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Juri Nardelli",
  url: "https://jurinardelli.com",
  description:
    "Concert pianist and piano teacher offering private piano lessons and mentorship for adults.",
  author: PERSON_JSONLD,
};

export const COURSE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Piano Mentorship Program",
  description:
    "Private online piano lessons for adults. Weekly 1-on-1 lessons, unlimited feedback, workshops and exclusive community. Learn from a concert pianist.",
  provider: {
    "@type": "Person",
    name: "Juri Nardelli",
    url: "https://jurinardelli.com",
  },
  url: "https://jurinardelli.com/academy",
  courseMode: "Online",
  offers: {
    "@type": "Offer",
    price: "499",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://jurinardelli.com/academy",
    description: "Monthly subscription. Cancel anytime.",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    instructor: {
      "@type": "Person",
      name: "Juri Nardelli",
    },
  },
};
