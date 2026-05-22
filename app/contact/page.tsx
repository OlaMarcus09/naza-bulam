import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    // Added padding top so the form clears your fixed navbar
    <main className="w-full min-h-screen bg-nb-cream pt-[100px] lg:pt-[120px] pb-24">
      <Contact />
    </main>
  );
}