import { Navbar } from "@/components/Navbar";
import { AcademyFunnel } from "@/components/AcademyFunnel";

export const metadata = {
  title: "Academy | Juri Nardelli",
  description: "Private piano mentorship with Juri Nardelli. Transform your playing with personalized guidance from an internationally acclaimed pianist.",
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
