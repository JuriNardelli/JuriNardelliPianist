import type { Metadata } from "next";
import { JsonLd } from "@/lib/structured-data";
import WhyChopinIsPerfectForAdultLearners from "@/components/articles/WhyChopinIsPerfectForAdultLearners";

export const metadata: Metadata = {
  title:
    "Why Chopin Is the Perfect Composer for Adult Learners | Juri Nardelli",
  description:
    "A piano teacher explains why Chopin is ideal for adult learners: accessible entry points from Preludes to Nocturnes, natural technical progression, and emotional depth that rewards life experience.",
  keywords: [
    "chopin for beginners",
    "easy chopin pieces",
    "chopin piano adult learners",
    "chopin prelude e minor",
    "chopin nocturne beginner",
    "best chopin pieces to learn",
  ],
  openGraph: {
    title: "Why Chopin Is the Perfect Composer for Adult Learners",
    description:
      "Accessible entry points, natural progression, and emotional depth — why Chopin is the composer who makes adults fall in love with piano.",
    url: "https://jurinardelli.com/blog/why-chopin-is-perfect-for-adult-learners",
    type: "article",
    publishedTime: "2025-10-01T00:00:00Z",
    authors: ["Juri Nardelli"],
  },
  alternates: {
    canonical:
      "https://jurinardelli.com/blog/why-chopin-is-perfect-for-adult-learners",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Chopin Is the Perfect Composer for Adult Learners",
  description:
    "A piano teacher explains why Chopin's music is ideal for adult learners, from accessible Preludes to emotionally rich Nocturnes.",
  author: {
    "@type": "Person",
    name: "Juri Nardelli",
    url: "https://jurinardelli.com",
  },
  publisher: {
    "@type": "Person",
    name: "Juri Nardelli",
    url: "https://jurinardelli.com",
  },
  datePublished: "2025-10-01",
  dateModified: "2025-10-01",
  mainEntityOfPage:
    "https://jurinardelli.com/blog/why-chopin-is-perfect-for-adult-learners",
  image: "https://jurinardelli.com/portrait.jpg",
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <WhyChopinIsPerfectForAdultLearners />
    </>
  );
}
