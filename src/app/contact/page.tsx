import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Juri Nardelli",
  description: "Get in touch with Juri Nardelli. Inquiries about performances, collaborations, piano lessons, and more.",
  keywords: ["contact pianist", "book pianist", "piano inquiries", "Juri Nardelli contact"],
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center">
            <p className="text-sm font-light tracking-[0.3em] uppercase text-zinc-500">
              Get in Touch
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact
            </h1>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
            <p className="mx-auto mt-6 max-w-md text-lg text-zinc-400">
              Have a question or want to work together? Send me a message and I'll get back to you soon.
            </p>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
