import Link from "next/link";
import { Home, Monitor, ArrowRight } from "lucide-react";

export default function Booking() {
  return (
    <section className="bg-nb-cream py-24 px-6 md:px-12 xl:px-0">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
            Private Appointments
          </span>
          <h2 className="text-nb-black font-serif text-[44px] md:text-[52px] leading-[1.1]">
            Reserve Your <br /> Consultation
          </h2>
        </div>

        {/* Appointment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: In-Person */}
          <Link href="/book?type=physical" className="group">
            <div className="bg-nb-white p-12 flex flex-col items-start border border-transparent transition-all duration-500 hover:shadow-xl hover:border-nb-black/5 h-full rounded-md">
              <Home className="w-8 h-8 text-nb-black mb-8 stroke-[1.5]" />
              
              <h3 className="text-nb-black font-serif text-[28px] mb-12">
                In-Person Visit
              </h3>
              
              <div className="mt-auto flex items-center gap-2 text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase group-hover:text-nb-gold transition-colors">
                <span>Book Physical</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>

          {/* Card 2: Virtual */}
          <Link href="/book?type=virtual" className="group">
            <div className="bg-nb-white p-12 flex flex-col items-start border border-transparent transition-all duration-500 hover:shadow-xl hover:border-nb-black/5 h-full rounded-md">
              <Monitor className="w-8 h-8 text-nb-black mb-8 stroke-[1.5]" />
              
              <h3 className="text-nb-black font-serif text-[28px] mb-12">
                Virtual Session
              </h3>
              
              <div className="mt-auto flex items-center gap-2 text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase group-hover:text-nb-gold transition-colors">
                <span>Book Online</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}