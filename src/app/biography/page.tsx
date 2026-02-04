import { Navbar } from "@/components/Navbar";
import { BiographyStory } from "@/components/BiographyStory";
import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata = {
  title: "Biography | Juri Nardelli",
  description: "The story of Juri Nardelli - from early beginnings to the concert stage.",
};

export default function BiographyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <BiographyStory />
        <PhotoGallery />
      </main>
    </>
  );
}
