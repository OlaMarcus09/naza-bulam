export default function Contact() {
  return (
    <section id="contact" className="bg-nb-cream py-24 px-6 md:px-12 xl:px-0 scroll-mt-20">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Contact Info */}
        <div>
          <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
            Contact Us
          </span>
          <h2 className="text-nb-black font-serif text-[44px] md:text-[52px] leading-[1.1] mb-16">
            Lets <br /> Connect
          </h2>

          <div className="space-y-10">
            <div>
              <h4 className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Location</h4>
              <p className="text-nb-black font-serif text-[22px]">Abuja, Nigeria<br/>Appointments Only</p>
            </div>
            <div>
              <h4 className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Email</h4>
              <p className="text-nb-black font-serif text-[22px]">Info@nazabulam.com</p>
            </div>
            <div>
              <h4 className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-4">Whatsapp</h4>
              <a 
                href={process.env.NEXT_PUBLIC_WA_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}` : "#"} 
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-8 py-3 bg-nb-black text-nb-white font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-white transition-colors duration-300 rounded-none border border-transparent">
                  Direct Message
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Minimalist Form */}
        <div>
          <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
            Send us a message
          </span>
          
          {/* THE FIX: Added Web3Forms action and POST method */}
          <form action="https://api.web3forms.com/submit" method="POST" className="mt-8 space-y-10">
            
            {/* Web3Forms required hidden inputs */}
            {/* PASTE YOUR SAME ACCESS KEY HERE */}
            <input type="hidden" name="access_key" value="7286bb64-8e7f-4e63-a62d-f8a4ae55ebff" />
            <input type="hidden" name="subject" value="New General Inquiry - Nazabulam" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">First Name</label>
                <input type="text" name="First Name" required placeholder="Enter your First name" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black" />
              </div>
              <div className="flex flex-col">
                <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Last Name</label>
                <input type="text" name="Last Name" required placeholder="Enter your Last name" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Email Address</label>
              <input type="email" name="Email" required placeholder="your@email.com" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black" />
            </div>
            <div className="flex flex-col">
              <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Subject</label>
              <input type="text" name="Subject" required placeholder="Select subject" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black" />
            </div>
            <div className="flex flex-col">
              <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Your Message</label>
              <textarea 
                name="Message"
                required
                placeholder="How can we help" 
                rows={3}
                className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black resize-none" 
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                className="px-10 py-4 bg-nb-black text-nb-white font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-white transition-colors duration-300 rounded-none border border-transparent w-full sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}