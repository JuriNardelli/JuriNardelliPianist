import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ContactContent } from "@/components/ContactContent";

export const metadata = {
  title: "Contact | Juri Nardelli",
  description: "Get in touch with Juri Nardelli. Inquiries about performances, collaborations, piano lessons, and more.",
  keywords: ["contact pianist", "book pianist", "piano inquiries", "Juri Nardelli contact"],
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
