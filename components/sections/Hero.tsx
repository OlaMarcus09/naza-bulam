"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

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

  // Improved drag handler for a smoother "scroll" feel
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 30; // Lower threshold for easier swiping
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const getPosition = (index: number) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + IMAGES.length) % IMAGES.length) return "left";
    if (index === (currentIndex + 1) % IMAGES.length) return "right";
    return "hidden";
  };

  const variants = {
    center: { x: "0%", scale: 1, zIndex: 20, filter: "blur(0px)", opacity: 1 },
    // Reduced the spread (x) and scale slightly to make images smaller/more elegant
    left: { x: "-50%", scale: 0.7, zIndex: 10, filter: "blur(10px)", opacity: 0.3 },
    right: { x: "50%", scale: 0.7, zIndex: 10, filter: "blur(10px)", opacity: 0.3 },
    hidden: { x: "0%", scale: 0.3, zIndex: 0, filter: "blur(15px)", opacity: 0 },
  };

  return (
    <section className="relative min-h-screen bg-nb-black w-full pt-24 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-30 mt-12 lg:mt-0 order-2 lg:order-1">
            <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
              Naza Bulam
            </span>
            
            <h1 className="text-nb-cream font-serif text-[48px] md:text-[64px] leading-[1.1] md:leading-[1] mb-10 uppercase">
              <span className="block tracking-tight">Dressed in</span>
              <span className="italic normal-case text-nb-gold block mt-2">Your Story</span>
            </h1>

            <p className="text-nb-white/80 font-sans font-light text-[14px] md:text-[15px] tracking-[0.15em] uppercase leading-relaxed mb-16 max-w-lg">
              Couture · Ready-to-Wear · Bespoke
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link href="/coming-soon" className="w-full sm:w-auto">
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

          {/* Right Column: Interactive Carousel */}
          <div className="lg:col-start-7 lg:col-span-6 relative w-full aspect-[4/5] md:aspect-[3/4] flex justify-center items-center order-1 lg:order-2">
            <AnimatePresence initial={false}>
              {IMAGES.map((image, index) => {
                const position = getPosition(index);

                return (
                  <motion.div
                    key={image.id}
                    drag="x" // Enables horizontal "scrolling" via drag
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    // Reduced width from 65% to 55% for a smaller, more focused look
                    className="absolute w-[55%] md:w-[50%] h-full cursor-grab active:cursor-grabbing shadow-2xl origin-center"
                    variants={variants}
                    initial={false}
                    animate={position}
                    transition={{
                      type: "spring",
                      stiffness: 180, // Snappier response
                      damping: 22,
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
                      className="object-cover rounded-sm pointer-events-none"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={position === "center"}
                    />
                    {/* Darker overlay on background images to make the center pop */}
                    {position !== "center" && (
                      <div className="absolute inset-0 bg-nb-black/50 pointer-events-none transition-opacity duration-300" />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}