import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-nb-cream py-24 px-6 md:px-12 xl:px-0">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Image Area */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          {/* The black offset block from Figma */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-nb-black hidden md:block z-0"></div>
          
          {/* The Image Wrapper */}
          <div className="relative z-10 w-full aspect-[4/5] shadow-2xl">
            <Image 
              src="/images/our-story.png"
              alt="Naza Bulam Our Story"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center">
          <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
            Our Story
          </span>
          
          <h2 className="text-nb-black font-serif text-[44px] md:text-[52px] leading-[1.1] mb-8">
            Where Fabric <br /> Meets Vision
          </h2>

          <div className="text-nb-muted font-sans font-light text-[15px] leading-[1.8] space-y-6 mb-16 max-w-lg">
            <p>
              We are a luxury fashion house rooted in the belief that every woman deserves to be dressed in something that tells her story. From the first sketch to the final stitch, every piece is a conversation between craft and identity.
            </p>
            <p>
              Our atelier crafts bespoke garments, curated ready-to-wear, and bridal collections for the discerning woman who moves through the world with intention.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-nb-black/10 max-w-lg">
            <div>
              <h3 className="font-serif text-[32px] text-nb-black leading-none mb-2">500+</h3>
              <p className="font-sans text-[10px] tracking-[0.15em] text-nb-muted uppercase">Clients</p>
            </div>
            <div>
              <h3 className="font-serif text-[32px] text-nb-black leading-none mb-2">10+</h3>
              <p className="font-sans text-[10px] tracking-[0.15em] text-nb-muted uppercase">Years of Craft</p>
            </div>
            <div>
              <h3 className="font-serif text-[32px] text-nb-black leading-none mb-2">X+</h3>
              <p className="font-sans text-[10px] tracking-[0.15em] text-nb-muted uppercase">Lorem Ipsum</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}