import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-nb-black text-center px-4 overflow-hidden">
      
      {/* Centered Content Wrapper */}
      <div className="flex flex-col items-center z-10 mt-16 max-w-4xl">
        
        {/* Brand Label */}
        <span className="text-nb-gold font-sans text-[12px] tracking-[0.15em] uppercase mb-8">
          Naza Bulam
        </span>
        
        {/* Primary Headline */}
        <h1 className="text-nb-cream flex flex-col mb-8 font-serif text-[70px] md:text-[100px] leading-[100%] tracking-[0.08em] uppercase">
          <span>Dressed in</span>
          <span className="italic normal-case mt-2">Your Story</span>
        </h1>

        {/* Subtitle */}
        <p className="text-nb-white font-sans text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-12">
          Couture · Ready-to-Wear · Bespoke
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link href="/portfolio" className="w-full sm:w-auto">
            <button className="w-full px-10 py-4 bg-transparent border border-nb-cream text-nb-cream font-sans text-[11px] tracking-[0.15em] uppercase hover:bg-nb-cream hover:text-nb-black transition-colors duration-300 rounded-none">
              Explore Our Work
            </button>
          </Link>
          <Link href="/book" className="w-full sm:w-auto">
            <button className="w-full px-10 py-4 border border-transparent bg-nb-cream text-nb-black font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-white transition-colors duration-300 rounded-none">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}