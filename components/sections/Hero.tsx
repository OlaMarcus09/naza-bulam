"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Expanded to 7 images as requested
const IMAGES = [
  { id: 1, src: "/images/hero/img-1.jpg", alt: "Naza Bulam Creation 1" },
  { id: 2, src: "/images/hero/img-2.jpg", alt: "Naza Bulam Creation 2" },
  { id: 3, src: "/images/hero/img-3.jpg", alt: "Naza Bulam Creation 3" },
  { id: 4, src: "/images/hero/img-4.jpg", alt: "Naza Bulam Creation 4" },
  { id: 5, src: "/images/hero/img-5.jpg", alt: "Naza Bulam Creation 5" },
  { id: 6, src: "/images/hero/img-6.jpg", alt: "Naza Bulam Creation 6" },
  { id: 7, src: "/images/hero/img-7.jpg", alt: "Naza Bulam Creation 7" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  // Helper to determine position class
  const getPosition = (index: number) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + IMAGES.length) % IMAGES.length) return "left";
    if (index === (currentIndex + 1) % IMAGES.length) return "right";
    return "hidden";
  };

  const variants = {
    center: { x: "0%", scale: 1, zIndex: 20, filter: "blur(0px)", opacity: 1 },
    left: { x: "-60%", scale: 0.8, zIndex: 10, filter: "blur(6px)", opacity: 0.5 },
    right: { x: "60%", scale: 0.8, zIndex: 10, filter: "blur(6px)", opacity: 0.5 },
    hidden: { x: "0%", scale: 0.5, zIndex: 0, filter: "blur(10px)", opacity: 0 },
  };

  return (
    <section className="relative min-h-screen bg-nb-black w-full pt-24 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] h-full flex flex-col justify-center">
        
        {/* Main Grid: Changed to push text further right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (cols 1-6): Spread Carousel */}
          <div className="lg:col-span-6 relative w-full aspect-[4/5] md:aspect-[3/4] flex justify-center items-center">
            <AnimatePresence initial={false}>
              {IMAGES.map((image, index) => {
                const position = getPosition(index);

                return (
                  <motion.div
                    key={image.id}
                    className="absolute w-3/4 sm:w-2/3 h-full cursor-pointer shadow-2xl origin-center"
                    variants={variants}
                    initial={false}
                    animate={position}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                    }}
                    onClick={() => {
                      if (position === "left") handlePrev();
                      if (position === "right") handleNext();
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-sm"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={position === "center"}
                    />
                    
                    {/* Dark overlay for the background images to make them recede further */}
                    {position !== "center" && (
                      <div className="absolute inset-0 bg-nb-black/30 pointer-events-none transition-opacity duration-300" />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Column (cols 8-12): Text is shifted right because col-7 is empty */}
          <div className="lg:col-start-8 lg:col-span-5 flex flex-col items-start text-left z-30 mt-12 lg:mt-0">
            
            <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
              Naza Bulam
            </span>
            
            <h1 className="text-nb-cream font-serif text-[48px] md:text-[64px] leading-[1.1] md:leading-[105%] mb-10 uppercase tracking-tight">
              <span>Dressed in</span>
              <br className="hidden md:block" />
              <span className="italic normal-case md:ml-4">Your Story</span>
            </h1>

            <p className="text-nb-white/80 font-sans font-light text-[14px] md:text-[15px] tracking-[0.15em] uppercase leading-relaxed mb-16 max-w-lg">
              Couture · Ready-to-Wear · Bespoke
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              {/* Changed href from /portfolio to /coming-soon */}
              <Link href="/coming-soon" className="w-full sm:w-auto">
                <button className="w-full px-10 py-4 bg-transparent border border-nb-cream text-nb-cream font-sans text-[11px] tracking-[0.15em] uppercase hover:bg-nb-cream hover:text-nb-black transition-colors duration-300 rounded-none whitespace-nowrap">
                  Explore Our Work
                </button>
              </Link>
              <Link href="/book" className="w-full sm:w-auto">
                <button className="w-full px-10 py-4 border border-transparent bg-nb-cream text-nb-black font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-white transition-colors duration-300 rounded-none whitespace-nowrap">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}