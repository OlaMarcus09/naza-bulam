import Link from "next/link";

export default function Booking() {
  return (
    <section className="bg-nb-cream min-h-screen py-24 px-6 md:px-12 xl:px-0 lg:pt-[120px]">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Booking Info */}
        <div className="flex flex-col justify-center">
          <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
            Private Appointments
          </span>
          <h2 className="text-nb-black font-serif text-[44px] md:text-[52px] leading-[1.1] mb-12">
            Reserve Your <br /> Consultation
          </h2>

          <div className="space-y-8">
            <p className="text-nb-black/70 font-sans font-light text-[14px] leading-relaxed max-w-md">
              Whether you prefer an in-person fitting at our Abuja studio or a virtual consultation from the comfort of your home, we are dedicated to bringing your vision to life.
            </p>
            
            <div>
              <h4 className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Important Note</h4>
              <p className="text-nb-black font-sans font-light text-[13px] leading-relaxed max-w-md">
                Please fill out the form with your preferred details. Our team will review your request and reply via email with pricing, availability, and next steps to secure your slot.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: The Booking Form */}
        <div>
          {/* Note: To make this send an email, create a free account at web3forms.com, get your Access Key, and replace "YOUR_ACCESS_KEY_HERE" */}
          <form action="https://api.web3forms.com/submit" method="POST" className="bg-nb-white p-8 md:p-12 shadow-sm space-y-10 rounded-sm">
            
            {/* Web3Forms required hidden input */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="New Booking Request - Nazabulam" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">First Name</label>
                <input type="text" name="First Name" required placeholder="Enter first name" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black" />
              </div>
              <div className="flex flex-col">
                <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Last Name</label>
                <input type="text" name="Last Name" required placeholder="Enter last name" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Email Address</label>
                <input type="email" name="Email" required placeholder="your@email.com" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black" />
              </div>
              <div className="flex flex-col">
                <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Phone / WhatsApp</label>
                <input type="tel" name="Phone" required placeholder="+234..." className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Consultation Type</label>
                <select name="Consultation Type" required className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black appearance-none cursor-pointer">
                  <option value="" disabled selected>Select Type</option>
                  <option value="In-Person (Abuja)">In-Person (Abuja Studio)</option>
                  <option value="Virtual">Virtual Session</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Service of Interest</label>
                <select name="Service" required className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black appearance-none cursor-pointer">
                  <option value="" disabled selected>Select Service</option>
                  <option value="Bespoke Couture">Bespoke Couture</option>
                  <option value="Bridal">Bridal</option>
                  <option value="Ready-to-Wear Customization">Ready-to-Wear</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Preferred Date (Optional)</label>
              <input type="date" name="Preferred Date" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black" />
            </div>

            <div className="flex flex-col">
              <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Additional Details</label>
              <textarea 
                name="Message"
                placeholder="Tell us about the occasion, your style preferences, or any questions..." 
                rows={3}
                className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] placeholder:text-nb-black/30 text-nb-black resize-none" 
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                className="px-10 py-4 bg-nb-black text-nb-white font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-gold hover:text-nb-white transition-colors duration-300 rounded-none border border-transparent w-full"
              >
                Request Appointment
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

