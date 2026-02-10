import { Navbar } from "@/components/Navbar";
import { SpaceshipBio } from "@/components/SpaceshipBio";
import { SaturnGallery } from "@/components/SaturnGallery";
import { Footer } from "@/components/Footer";
import { BiographyCTA } from "@/components/BiographyCTA";

export const metadata = {
  title: "Biography | Juri Nardelli - Concert Pianist",
  description: "Juri Nardelli's journey from Italy to the international concert stage. Trained at G. Verdi Conservatory Milan, ISSM Siena, and Conservatorium van Maastricht under Igor Roma.",
  keywords: ["Juri Nardelli", "concert pianist biography", "Italian pianist", "classical pianist"],
};

export default function BiographyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <SpaceshipBio />
        <SaturnGallery />
        <BiographyCTA />
      </main>
      <Footer />
    </>
  );
}
