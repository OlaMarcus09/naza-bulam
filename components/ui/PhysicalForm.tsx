"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function PhysicalForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Grab data from the form
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      preferredDate: formData.get("preferredDate"),
      message: formData.get("message"),
    };

    try {
      // Send it to our Next.js backend
      const res = await fetch("/api/book", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to submit. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // If successful, show a clean luxury confirmation message
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in">
        <CheckCircle2 className="w-16 h-16 text-nb-gold mb-6 stroke-[1]" />
        <h3 className="text-nb-black font-serif text-[32px] mb-4">Request Received</h3>
        <p className="text-nb-muted font-sans text-[13px] leading-relaxed max-w-sm">
          Thank you. Our atelier will review your request and contact you shortly to confirm your private consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 animate-in fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">First Name</label>
          <input required name="firstName" type="text" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black" />
        </div>
        <div className="flex flex-col">
          <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Last Name</label>
          <input required name="lastName" type="text" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Email Address</label>
          <input required name="email" type="email" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black" />
        </div>
        <div className="flex flex-col">
          <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Phone Number</label>
          <input required name="phone" type="tel" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black" />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Preferred Date</label>
        <input required name="preferredDate" type="date" className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black uppercase" />
      </div>

      <div className="flex flex-col">
        <label className="text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase mb-2">Additional Notes</label>
        <textarea name="message" rows={3} placeholder="Tell us about the occasion..." className="bg-transparent border-b border-nb-black/20 py-2 focus:outline-none focus:border-nb-black transition-colors font-sans text-[13px] text-nb-black resize-none placeholder:text-nb-black/30" />
      </div>

      <div className="pt-4">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="px-10 py-4 bg-nb-black text-nb-white font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-nb-gold transition-colors duration-300 rounded-none border border-transparent flex items-center justify-center min-w-[200px]"
        >
          {isSubmitting ? <Loader2 className="animate-spin w-4 h-4" /> : "Submit Request"}
        </button>
      </div>
    </form>
  );
}