"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { X, Home, Monitor, ArrowRight } from "lucide-react";
import PhysicalForm from "@/components/ui/PhysicalForm";

type BookingStep = "SELECT" | "PHYSICAL_FORM";

function BookingContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<BookingStep>("SELECT");

  // Automatically skip to form if 'physical' is in the URL
  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "physical") {
      setStep("PHYSICAL_FORM");
    } else if (type === "virtual") {
      // If it's virtual, we can optionally redirect them immediately
      const calUrl = process.env.NEXT_PUBLIC_CAL_URL;
      if (calUrl) window.location.href = calUrl;
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-4xl py-12 md:py-0">
      {step === "SELECT" && (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <div className="text-center mb-12">
            <span className="text-nb-gold font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 block">
              Private Appointments
            </span>
            <h1 className="text-nb-cream font-serif text-[40px] md:text-[52px] leading-[1.1]">
              Choose Your Experience
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
              onClick={() => setStep("PHYSICAL_FORM")}
              className="group bg-nb-cream p-12 flex flex-col items-start transition-all duration-500 hover:bg-nb-white text-left h-full"
            >
              <Home className="w-8 h-8 text-nb-black mb-8 stroke-[1.5]" />
              <h3 className="text-nb-black font-serif text-[28px] mb-8">In-Person Visit</h3>
              <div className="mt-auto flex items-center gap-2 text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase group-hover:text-nb-gold transition-colors">
                <span>Continue to Form</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>

            <a 
              href={process.env.NEXT_PUBLIC_CAL_URL || "#"} 
              target="_blank"
              rel="noreferrer"
              className="group bg-nb-cream p-12 flex flex-col items-start transition-all duration-500 hover:bg-nb-white text-left h-full"
            >
              <Monitor className="w-8 h-8 text-nb-black mb-8 stroke-[1.5]" />
              <h3 className="text-nb-black font-serif text-[28px] mb-8">Virtual Session</h3>
              <div className="mt-auto flex items-center gap-2 text-nb-muted font-sans text-[10px] tracking-[0.15em] uppercase group-hover:text-nb-gold transition-colors">
                <span>Open Calendar</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          </div>
        </div>
      )}

      {step === "PHYSICAL_FORM" && (
        <div className="animate-in slide-in-from-right-8 fade-in duration-500 bg-nb-cream p-8 md:p-16 relative">
          <button 
            onClick={() => setStep("SELECT")}
            className="text-nb-muted hover:text-nb-black font-sans text-[10px] tracking-[0.15em] uppercase mb-8 flex items-center gap-2 transition-colors"
          >
            ← Back to Options
          </button>
          <h2 className="text-nb-black font-serif text-[36px] mb-8">Request an Appointment</h2>
          <PhysicalForm />
        </div>
      )}
    </div>
  );
}

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-nb-black flex items-center justify-center p-6 fixed inset-0 z-[100] overflow-y-auto">
      <Link href="/" className="absolute top-8 right-8 text-nb-cream hover:text-nb-gold transition-colors z-10">
        <X size={32} strokeWidth={1} />
      </Link>
      
      {/* Suspense is required when using useSearchParams in Next.js */}
      <Suspense fallback={<div className="text-nb-gold">Loading...</div>}>
        <BookingContent />
      </Suspense>
    </main>
  );
}