import Link from "next/link";

export default function BoutiqueTeaser() {
  return (
    <section className="bg-nb-black py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center border-t border-[#1a1a1a]">
      
      {/* Label */}
      <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
        The Boutique
      </span>

      {/* Main Headline */}
      <h2 className="text-nb-cream font-serif text-[44px] md:text-[52px] leading-[1.1] mb-8">
        Something <br className="hidden md:block" /> Beautiful <br className="hidden md:block" />
        Is Coming
      </h2>

      {/* Description - Updated for better readability */}
      <p className="text-nb-cream/90 font-sans font-normal text-[14px] leading-[1.8] max-w-md mb-12">
        Our online boutique is currently being curated with care. Every detail is being refined to create a premium shopping experience.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
        <Link href="/book" className="w-full sm:w-auto">
          <button className="w-full px-8 py-3 bg-transparent border border-nb-cream text-nb-cream font-sans text-[11px] tracking-[0.15em] uppercase hover:bg-nb-cream hover:text-nb-black transition-colors duration-300 rounded-none">
            Book Appointment
          </button>
        </Link>
        
        <Link 
          href={process.env.NEXT_PUBLIC_WA_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}` : "#"} 
          target="_blank"
          className="w-full sm:w-auto"
        >
          <button className="w-full px-8 py-3 bg-nb-cream text-nb-black font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-white transition-colors duration-300 rounded-none border border-transparent">
            Chat on WhatsApp
          </button>
        </Link>
      </div>

    </section>
  );
}