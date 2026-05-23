"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Crown, Sparkles, Gem } from "lucide-react"; 

const BG_IMAGES = [
  "/images/hero/img-4.jpg",
  "/images/hero/our-story.png",
  "/images/hero/img-7.jpg", 
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % BG_IMAGES.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + BG_IMAGES.length) % BG_IMAGES.length);

  // Auto-slide background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full h-[100dvh] bg-[#D5C8B8] overflow-hidden flex flex-col">
      
      {/* MAIN SPLIT-SCREEN CONTENT */}
      <div className="flex-grow flex flex-col lg:flex-row relative z-10 w-full h-full">
        
        {/* LEFT SIDE: Typography & Buttons */}
        <div className="w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 lg:pt-0 z-20">
          {/* Reduced mobile font size slightly so it doesn't hit the screen edges */}
          <h1 
            className="text-[#3b352a] font-serif text-[45px] md:text-[80px] lg:text-[110px] leading-[1] mb-6 lg:mb-12 tracking-wide uppercase drop-shadow-sm"
          >
            Naza Bulam
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/book" className="w-full sm:w-auto">
              <button className="w-full px-10 py-4 bg-[#74624a] text-white font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-nb-black transition-colors duration-300 rounded-none shadow-lg">
                Book Consultation
              </button>
            </Link>
            <Link href="/couture" className="w-full sm:w-auto">
              <button className="w-full px-10 py-4 bg-transparent border border-[#74624a] text-[#3b352a] font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#74624a] hover:text-white transition-colors duration-300 rounded-none">
                Explore Collections
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Image Slider */}
        <div className="w-full lg:w-[55%] h-[60%] lg:h-full relative z-10 overflow-hidden pb-4 lg:pb-0">
          
          {/* THE BLEND EFFECT: Desktop only! Mobile blur has been removed completely. */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#D5C8B8] to-transparent z-20 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) nextImage();
                if (info.offset.x > 50) prevImage();
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              {/* Changed to object-contain on mobile to show the full dress! */}
              <Image
                src={BG_IMAGES[currentImageIndex]}
                alt="Naza Bulam Collections"
                fill
                className="object-contain lg:object-cover object-center lg:object-top"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* BOTTOM FEATURE STRIP */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-[#D5C8B8]/95 backdrop-blur-md border-t border-[#74624a]/20 py-4 lg:py-5">
        <div className="container mx-auto px-4 lg:px-12">
          {/* Changed to grid-cols-2 on mobile for a perfect 2x2 square layout */}
          <div className="grid grid-cols-2 lg:flex lg:flex-nowrap justify-between items-center gap-y-4 gap-x-2 lg:gap-4 text-[#3b352a] font-sans text-[9px] md:text-[11px] tracking-[0.2em] uppercase font-semibold">
            
            <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
              <Scissors size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
              <span>Bespoke Couture</span>
            </div>
            
            <div className="hidden lg:block w-px h-6 bg-[#74624a]/20" />
            
            <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
              <Gem size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
              <span>Premium Craftsmanship</span>
            </div>

            <div className="hidden lg:block w-px h-6 bg-[#74624a]/20" />

            <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
              <Crown size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
              <span>Made For You</span>
            </div>

            <div className="hidden lg:block w-px h-6 bg-[#74624a]/20" />

            <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
              <Sparkles size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
              <span>Timeless Elegance</span>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}