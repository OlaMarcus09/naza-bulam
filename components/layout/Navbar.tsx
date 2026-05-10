"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-nb-cream py-4 sticky top-0 z-50 border-b border-nb-black/5">
      <div className="container mx-auto px-6 flex items-center justify-between relative min-h-[50px]">
        
        {/* Logo (Pinned to the Left) */}
        <Link href="/" className="relative w-32 h-10 flex-shrink-0">
          <Image 
            src="/images/logo-transparent.png" 
            alt="Naza Bulam Logo" 
            fill 
            className="object-contain object-left"
          />
        </Link>

        {/* Navigation Links (Centered using Absolute Positioning) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-[11px] tracking-[0.15em] font-sans text-nb-black uppercase font-medium">
          <Link href="/" className="hover:text-nb-gold transition-colors">Home</Link>
          <Link href="/coming-soon" className="hover:text-nb-gold transition-colors">Shop</Link>
          <Link href="/coming-soon" className="hover:text-nb-gold transition-colors">Collection</Link>
          <Link href="#contact" className="hover:text-nb-gold transition-colors">Contact</Link>
        </div>

        {/* Right Side Actions (Pinned to the Right) */}
        <div className="flex items-center gap-6">
          <Link 
            href={process.env.NEXT_PUBLIC_WA_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}` : "#"} 
            target="_blank"
            className="flex items-center gap-2 text-[11px] tracking-[0.15em] font-sans text-nb-black hover:text-nb-gold transition-colors uppercase font-medium"
          >
            <MessageCircle size={14} className="text-nb-black" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Link>

          <Link href="/book">
            <button className="bg-nb-black text-nb-cream px-8 py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-black transition-colors rounded-none font-semibold">
              Book Appointment
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}