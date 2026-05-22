"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  // If we are on the homepage, do not render the footer at all
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="bg-nb-black py-24 px-6 md:px-12 xl:px-0">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row justify-between gap-16">
        
        {/* Brand / Logo */}
        <div className="max-w-xs">
          <div className="relative w-64 h-28 mb-8 invert opacity-90"> 
            <Image 
              src="/images/logo-transparent.png" 
              alt="Naza Bulam Logo" 
              fill 
              className="object-contain object-left"
            />
          </div>
          <p className="text-nb-muted font-sans font-light text-[13px] leading-[1.8]">
            A luxury fashion house dedicated to dressing the woman who knows herself.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-16 lg:gap-32 pt-4">
          <div>
            <h4 className="text-nb-gold font-sans text-[10px] font-semibold tracking-[0.2em] uppercase mb-8 block">
              Navigate
            </h4>
            <ul className="space-y-5 text-[13px] font-sans font-light text-nb-cream">
              <li><Link href="/couture" className="hover:text-nb-gold transition-colors">Couture</Link></li>
              <li><Link href="/bridal" className="hover:text-nb-gold transition-colors">Bridal</Link></li>
              <li><Link href="/ready-to-wear" className="hover:text-nb-gold transition-colors">Ready-to-Wear</Link></li>
              <li><Link href="/about" className="hover:text-nb-gold transition-colors">About</Link></li>
              <li><Link href="/#contact" className="hover:text-nb-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-nb-gold font-sans text-[10px] font-semibold tracking-[0.2em] uppercase mb-8 block">
              Connect
            </h4>
            <ul className="space-y-5 text-[13px] font-sans font-light text-nb-cream">
              <li><Link href="#" className="hover:text-nb-gold transition-colors">Instagram</Link></li>
              <li>
                <Link 
                  href={process.env.NEXT_PUBLIC_WA_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}` : "#"} 
                  target="_blank"
                  className="hover:text-nb-gold transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
              <li><Link href="/book" className="hover:text-nb-gold transition-colors">Book an Appointment</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}