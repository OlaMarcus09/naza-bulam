export default function Services() {
  const services = [
    {
      number: "1.",
      title: "Bespoke Couture",
      description: "Garments conceived and constructed solely for you. Every measurement, every drape, every seam — a testament to your singular presence."
    },
    {
      number: "2.",
      title: "Ready to Wear",
      description: "Thoughtfully designed pieces available now. Luxury made accessible without compromising on the quality or intention of each garment."
    },
    {
      number: "3.",
      title: "Bridal",
      description: "Your wedding gown is the most personal garment you will ever wear. We approach every bridal commission with reverence and devotion."
    }
  ];

  return (
    <section className="bg-nb-black py-24 px-6 md:px-12 xl:px-0">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
            What We Offer
          </span>
          <h2 className="text-nb-cream font-serif text-[44px] md:text-[52px] leading-[1.1]">
            The Art of <br /> Getting Dressed
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border border-[#2A2A2A] p-10 flex flex-col items-start transition-colors duration-500 hover:border-nb-gold/50 cursor-default"
            >
              <span className="text-nb-gold font-serif text-[32px] italic mb-8">
                {service.number}
              </span>
              <h3 className="text-nb-cream font-serif text-[26px] mb-4">
                {service.title}
              </h3>
              <p className="text-nb-muted font-sans font-light text-[13px] leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}