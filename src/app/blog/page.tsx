import type { Metadata } from "next";
import { BlogContent } from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Blog | Juri Nardelli - Thoughts on Piano",
  description:
    "Notes on teaching, learning, and the piano life. Articles by concert pianist and teacher Juri Nardelli.",
  keywords: [
    "piano blog",
    "piano teaching",
    "adult piano lessons",
    "learn piano",
    "piano tips",
  ],
  openGraph: {
    title: "Blog | Juri Nardelli",
    description:
      "Notes on teaching, learning, and the piano life from a concert pianist.",
    url: "https://jurinardelli.com/blog",
  },
  alternates: {
    canonical: "https://jurinardelli.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
