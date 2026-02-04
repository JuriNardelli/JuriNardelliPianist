import { Navbar } from "@/components/Navbar";
import { AcademyFunnel } from "@/components/AcademyFunnel";

export const metadata = {
  title: "Piano Lessons & Mentorship | Juri Nardelli Academy",
  description: "Private online piano lessons for adults. Weekly 1-on-1 lessons, unlimited feedback, workshops & exclusive community. Learn from a concert pianist trained at G. Verdi Milan. Apply now.",
  keywords: ["piano lessons online", "adult piano lessons", "private piano teacher", "piano mentorship", "learn piano online", "piano coaching"],
};

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <AcademyFunnel />
      </main>
    </>
  );
}
