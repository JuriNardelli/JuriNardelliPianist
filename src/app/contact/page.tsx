import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactContent } from "@/components/ContactContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Juri Nardelli",
  description:
    "Get in touch with Juri Nardelli. Inquiries about performances, collaborations, piano lessons, and more.",
  keywords: [
    "contact pianist",
    "book pianist",
    "piano inquiries",
    "Juri Nardelli contact",
  ],
  openGraph: {
    title: "Contact | Juri Nardelli",
    description:
      "Get in touch for performances, collaborations, and piano lesson inquiries.",
    url: "https://jurinardelli.com/contact",
  },
  alternates: {
    canonical: "https://jurinardelli.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
