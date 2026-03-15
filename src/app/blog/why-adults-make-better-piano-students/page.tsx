import type { Metadata } from "next";
import { JsonLd } from "@/lib/structured-data";
import WhyAdultsMakeBetterPianoStudents from "@/components/articles/WhyAdultsMakeBetterPianoStudents";

export const metadata: Metadata = {
  title:
    "Why Adults Make Better Piano Students Than They Think | Juri Nardelli",
  description:
    "The myth of the child prodigy has convinced millions of adults they missed their window. A concert pianist with 4,000+ lessons explains why that is nonsense.",
  keywords: [
    "adult piano students",
    "learning piano as an adult",
    "piano lessons for adults",
    "is it too late to learn piano",
  ],
  openGraph: {
    title: "Why Adults Make Better Piano Students Than They Think",
    description:
      "The myth of the child prodigy has convinced millions of adults they missed their window. Here is why that is nonsense.",
    url: "https://jurinardelli.com/blog/why-adults-make-better-piano-students",
    type: "article",
    publishedTime: "2026-01-01T00:00:00Z",
    authors: ["Juri Nardelli"],
  },
  alternates: {
    canonical:
      "https://jurinardelli.com/blog/why-adults-make-better-piano-students",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Adults Make Better Piano Students Than They Think",
  description:
    "The myth of the child prodigy has convinced millions of adults they missed their window. A concert pianist explains why that is nonsense.",
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
  datePublished: "2026-01-01",
  dateModified: "2026-01-01",
  mainEntityOfPage:
    "https://jurinardelli.com/blog/why-adults-make-better-piano-students",
  image: "https://jurinardelli.com/portrait.jpg",
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <WhyAdultsMakeBetterPianoStudents />
    </>
  );
}
