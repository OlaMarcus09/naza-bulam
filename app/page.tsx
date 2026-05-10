import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import Services from "@/components/sections/Services";
import Booking from "@/components/sections/Booking";
import BoutiqueTeaser from "@/components/sections/BoutiqueTeaser";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-nb-black w-full">
      <Hero />
      <OurStory />
      <Services />
      <Booking />
      <BoutiqueTeaser />
      <Contact />
    </main>
  );
}