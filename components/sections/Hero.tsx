"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const IMAGES = [
  { id: 1, src: "https://res.cloudinary.com/dkgkdcsjc/image/upload/v1778635954/img-1_1_ljpf2j.jpg", alt: "Naza Bulam Creation 1" },
  { id: 2, src: "https://res.cloudinary.com/dkgkdcsjc/image/upload/v1778635967/img-2_1_y1t45f.jpg", alt: "Naza Bulam Creation 2" },
  { id: 3, src: "https://res.cloudinary.com/dkgkdcsjc/image/upload/v1778633495/img-3_h2fybs.jpg", alt: "Naza Bulam Creation 3" },
  { id: 4, src: "https://res.cloudinary.com/dkgkdcsjc/image/upload/v1778633491/img-4_lozbqh.png", alt: "Naza Bulam Creation 4" },
  { id: 5, src: "https://res.cloudinary.com/dkgkdcsjc/image/upload/v1778633491/img-5_otxjmo.png", alt: "Naza Bulam Creation 5" },
  { id: 6, src: "https://res.cloudinary.com/dkgkdcsjc/image/upload/v1778633492/img-6_ymoge0.png", alt: "Naza Bulam Creation 6" },
  { id: 7, src: "https://res.cloudinary.com/dkgkdcsjc/image/upload/v1778633493/img-7_o4i0jn.png", alt: "Naza Bulam Creation 7" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 30; 
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
    left: { x: "-50%", scale: 0.7, zIndex: 10, filter: "blur(10px)", opacity: 0.3 },
    right: { x: "50%", scale: 0.7, zIndex: 10, filter: "blur(10px)", opacity: 0.3 },
    hidden: { x: "0%", scale: 0.3, zIndex: 0, filter: "blur(15px)", opacity: 0 },
  };

  return (
    <section className="relative min-h-screen bg-nb-black w-full pt-24 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content - Now order-1 on mobile */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-30 mt-12 lg:mt-0 order-1 lg:order-1">
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

          {/* Right Column: Interactive Carousel - Now order-2 on mobile */}
          <div className="lg:col-start-7 lg:col-span-6 relative w-full max-w-md mx-auto aspect-[4/5] flex justify-center items-center order-2 lg:order-2">
            <AnimatePresence initial={false}>
              {IMAGES.map((image, index) => {
                const position = getPosition(index);

                return (
                  <motion.div
                    key={image.id}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    style={{ touchAction: "pan-y" }} 
                    className="absolute w-full h-full cursor-grab active:cursor-grabbing shadow-2xl origin-center"
                    variants={variants}
                    initial={false}
                    animate={position}
                    transition={{
                      type: "spring",
                      stiffness: 180,
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
