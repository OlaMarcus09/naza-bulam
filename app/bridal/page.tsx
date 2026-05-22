import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BridalPage() {
  return (
    // Added padding-top to account for the fixed transparent navbar
    <main className="w-full flex flex-col pt-[70px] lg:pt-[90px]">
      
      {/* 1. CREAM HERO SECTION (True Edge-to-Edge Split Screen) */}
      <section className="bg-nb-cream w-full relative overflow-hidden flex flex-col lg:flex-row min-h-[80vh]">
        
        {/* Left Side: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:pl-20 xl:pl-32 py-16 lg:py-24 z-20">
          <div className="max-w-xl">
            <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
              Nazabulam Bridal
            </span>
            
            <h1 className="text-nb-black font-serif text-[56px] md:text-[72px] lg:text-[80px] leading-[1.1] mb-8">
              Your Most <br /> Beautiful Day
            </h1>

            <p className="text-nb-black/70 font-sans font-light text-[14px] md:text-[15px] leading-relaxed mb-12">
              Designed for the bride who desires timeless elegance, refined craftsmanship, and an unforgettable silhouette.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href={process.env.NEXT_PUBLIC_WA_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}` : "#"} 
                target="_blank"
                className="w-full sm:w-auto"
              >
                <button className="w-full px-10 py-4 bg-transparent border border-nb-gold text-nb-gold font-sans text-[11px] tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-white transition-colors duration-300 rounded-none font-semibold">
                  Chat on WhatsApp
                </button>
              </Link>
              <Link href="/book" className="w-full sm:w-auto">
                <button className="w-full px-10 py-4 border border-transparent bg-[#B89454] text-white font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-black transition-colors duration-300 rounded-none">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Edge-to-Edge Video with Seamless Fade */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto min-h-[500px]">
          
          {/* THE BLEND EFFECT: Gradient overlays to melt the video into the cream background */}
          {/* Desktop: Fade the left edge */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-nb-cream to-transparent z-10 pointer-events-none" />
          
          {/* Mobile: Fade the top edge into the text section above it */}
          <div className="block lg:hidden absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-nb-cream to-transparent z-10 pointer-events-none" />

          <video
            src="/bridal.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. DARK FEATURES SECTION */}
      <section className="bg-nb-black w-full py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#1c1c1c] p-10 rounded-xl hover:-translate-y-2 transition-transform duration-500">
              <span className="text-nb-gold font-serif text-[40px] italic block mb-6">1.</span>
              <h3 className="text-nb-cream font-serif text-[24px] mb-4 tracking-wide">
                Bespoke Bridal Experience
              </h3>
              <p className="text-nb-white/60 font-sans font-light text-[13px] leading-relaxed">
                Each bridal piece is thoughtfully created to celebrate individuality, beauty, and confidence on your special day.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1c1c1c] p-10 rounded-xl hover:-translate-y-2 transition-transform duration-500">
              <span className="text-nb-gold font-serif text-[40px] italic block mb-6">2.</span>
              <h3 className="text-nb-cream font-serif text-[24px] mb-4 tracking-wide">
                Craftsmanship & Detail
              </h3>
              <p className="text-nb-white/60 font-sans font-light text-[13px] leading-relaxed">
                From luxurious fabrics to intricate hand-finished details, every gown is designed with precision and artistry.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1c1c1c] p-10 rounded-xl hover:-translate-y-2 transition-transform duration-500">
              <span className="text-nb-gold font-serif text-[40px] italic block mb-6">3.</span>
              <h3 className="text-nb-cream font-serif text-[24px] mb-4 tracking-wide">
                Timeless Elegance
              </h3>
              <p className="text-nb-white/60 font-sans font-light text-[13px] leading-relaxed">
                Classic sophistication reimagined through modern couture tailoring and refined silhouettes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <section className="bg-nb-cream w-full py-20 px-6 border-t border-nb-black/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-nb-black font-serif text-[36px] md:text-[48px] leading-[1.1] mb-8">
            Begin Your Bridal Journey
          </h2>
          <Link href="/book">
            <button className="px-10 py-4 bg-nb-black text-nb-cream font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-black transition-colors duration-300 rounded-none inline-flex items-center gap-3">
              Book a Bridal Consultation <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}