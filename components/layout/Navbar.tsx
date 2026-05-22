"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Official Custom WhatsApp Icon SVG
const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we are on the homepage
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`w-full py-3 sm:py-6 fixed top-0 z-50 transition-colors duration-300 overflow-x-hidden ${
          isHomePage ? "bg-transparent" : "bg-nb-cream border-b border-nb-black/5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-12 flex items-center justify-between relative min-h-[50px]">
          
          {/* Logo - Added brightness-0 invert to turn the logo sharp white on the homepage */}
          <Link href="/" className={`relative w-32 h-8 sm:w-40 sm:h-10 flex-shrink-0 z-50 ${isHomePage ? "brightness-0 invert" : ""}`}>
            <Image 
              src="/images/logo-transparent.png"
              alt="Naza Bulam Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* --- DESKTOP LAYOUT --- */}
          <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-10 text-[11px] tracking-[0.2em] font-sans uppercase font-medium whitespace-nowrap ${isHomePage ? "text-white drop-shadow-sm" : "text-nb-black"}`}>
            <Link href="/couture" className="hover:text-nb-gold transition-colors">Couture</Link>
            <Link href="/bridal" className="hover:text-nb-gold transition-colors">Bridal</Link>
            <Link href="/ready-to-wear" className="hover:text-nb-gold transition-colors">Ready-to-Wear</Link>
            <Link href="/about" className="hover:text-nb-gold transition-colors">About</Link>
            <Link href="/contact" className="hover:text-nb-gold transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-6 z-50">
            <Link href="/book">
              {/* Changed to sharp white text and border for homepage */}
              <button className={`px-8 py-3 text-[11px] tracking-[0.15em] uppercase transition-colors rounded-none font-semibold whitespace-nowrap ${isHomePage ? "bg-transparent border border-white text-white hover:bg-white hover:text-nb-black" : "bg-nb-black text-nb-cream hover:bg-nb-gold hover:text-nb-black"}`}>
                Book Consultation
              </button>
            </Link>
          </div>

          {/* --- MOBILE LAYOUT (Header) --- */}
          <div className="flex lg:hidden items-center gap-3 z-50">
            <Link href="/book" className="flex-shrink-0">
              <button className={`px-5 py-2.5 text-[10px] tracking-[0.1em] uppercase transition-colors rounded-none font-semibold ${isHomePage ? "bg-transparent border border-white text-white" : "bg-nb-black text-nb-cream"}`}>
                Book
              </button>
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 -mr-2 transition-colors ${isHomePage ? "text-white" : "text-nb-black hover:text-nb-gold"}`}
              aria-label="Open Menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR MENU (Stays unchanged) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-nb-black/60 z-[60] lg:hidden backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 w-[80vw] max-w-sm bg-nb-cream z-[70] flex flex-col px-8 py-8 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-nb-black hover:text-nb-gold transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={28} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-col gap-8 text-[14px] tracking-[0.2em] font-sans text-nb-black uppercase font-medium">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nb-gold transition-colors">Home</Link>
                <Link href="/couture" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nb-gold transition-colors">Couture</Link>
                <Link href="/bridal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nb-gold transition-colors">Bridal</Link>
                <Link href="/ready-to-wear" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nb-gold transition-colors">Ready-to-Wear</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nb-gold transition-colors">About</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nb-gold transition-colors">Contact</Link>
              </div>

              <div className="mt-auto pt-10 border-t border-nb-black/10">
                <Link 
                  href={process.env.NEXT_PUBLIC_WA_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}` : "#"} 
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-[12px] tracking-[0.15em] font-sans text-nb-black hover:text-nb-gold transition-colors uppercase font-medium"
                >
                  <WhatsAppIcon size={18} />
                  <span>Message Us</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}