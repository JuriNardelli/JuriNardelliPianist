import type { Metadata } from "next";
import { JsonLd } from "@/lib/structured-data";
import FivePiecesEveryAdultBeginnerShouldLearn from "@/components/articles/FivePiecesEveryAdultBeginnerShouldLearn";

export const metadata: Metadata = {
  title:
    "5 Pieces Every Adult Beginner Should Learn First | Juri Nardelli",
  description:
    "A concert pianist recommends the 5 best piano pieces for adult beginners: Für Elise, Gymnopédie No. 1, Chopin Prelude in E minor, Clair de Lune, and Bach Prelude in C Major. What each teaches and how long they take.",
  keywords: [
    "easy piano pieces for adults",
    "best piano pieces for beginners",
    "adult beginner piano repertoire",
    "classical piano pieces beginners",
    "first piano pieces to learn",
    "für elise beginner",
  ],
  openGraph: {
    title: "5 Pieces Every Adult Beginner Should Learn First",
    description:
      "The 5 best piano pieces for adult beginners — what each teaches, how long they take, and why they're worth learning.",
    url: "https://jurinardelli.com/blog/five-pieces-every-adult-beginner-should-learn",
    type: "article",
    publishedTime: "2026-03-01T00:00:00Z",
    authors: ["Juri Nardelli"],
  },
  alternates: {
    canonical:
      "https://jurinardelli.com/blog/five-pieces-every-adult-beginner-should-learn",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Pieces Every Adult Beginner Should Learn First",
  description:
    "A concert pianist recommends the 5 best piano pieces for adult beginners, with practical timelines and what each piece teaches.",
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
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  mainEntityOfPage:
    "https://jurinardelli.com/blog/five-pieces-every-adult-beginner-should-learn",
  image: "https://jurinardelli.com/portrait.jpg",
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <FivePiecesEveryAdultBeginnerShouldLearn />
    </>
  );
}
