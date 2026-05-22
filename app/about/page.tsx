import Contact from "@/components/sections/Contact";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col pt-16">
      
      {/* 1. CREAM HERO SECTION */}
      <section className="bg-nb-cream w-full py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
            About
          </span>
          
          <h1 className="text-nb-black font-serif text-[48px] md:text-[64px] leading-[1.1] mb-10">
            The House of <br className="hidden md:block" /> Nazabulam
          </h1>

          <p className="text-nb-black/80 font-sans font-light text-[15px] leading-relaxed max-w-3xl mx-auto">
            Nazabulam is a luxury fashion brand dedicated to creating timeless pieces that embody elegance, confidence, and refined femininity. Rooted in craftsmanship and intentional design, the brand specializes in couture, bridal, and elevated ready-to-wear for women who desire sophistication with unforgettable presence.
          </p>
        </div>
      </section>

      {/* 2. DARK BRAND PILLARS SECTION */}
      <section className="bg-nb-black w-full py-24 px-6 border-y border-nb-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Column 1: Brand Story */}
            <div className="flex flex-col">
              <h3 className="text-nb-gold font-serif text-[28px] mb-6 border-b border-nb-white/10 pb-4">
                Brand Story
              </h3>
              <p className="text-nb-white/70 font-sans font-light text-[14px] leading-relaxed">
                Founded with a passion for artistry and detail, Nazabulam was created to celebrate the beauty, individuality, and confidence of every woman. Each piece is thoughtfully designed to blend structure, luxury, and modern femininity while maintaining a timeless aesthetic.
              </p>
            </div>

            {/* Column 2: Craftsmanship */}
            <div className="flex flex-col">
              <h3 className="text-nb-gold font-serif text-[28px] mb-6 border-b border-nb-white/10 pb-4">
                Craftsmanship
              </h3>
              <p className="text-nb-white/70 font-sans font-light text-[14px] leading-relaxed">
                At Nazabulam, every design is approached with precision and care. From hand-finished embellishments to carefully selected fabrics and sculpted silhouettes, each creation reflects a commitment to quality, elegance, and exceptional craftsmanship.
              </p>
            </div>

            {/* Column 3: Philosophy */}
            <div className="flex flex-col">
              <h3 className="text-nb-gold font-serif text-[28px] mb-6 border-b border-nb-white/10 pb-4">
                Philosophy
              </h3>
              <p className="text-nb-white/70 font-sans font-light text-[14px] leading-relaxed">
                We believe fashion should do more than dress the body — it should leave a lasting impression. Every Nazabulam piece is designed to make women feel confident, elevated, and unforgettable.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONTACT SECTION (Imported directly from your sections!) */}
      <div className="w-full bg-nb-cream pt-12 pb-8">
        <Contact />
      </div>

    </main>
  );
}