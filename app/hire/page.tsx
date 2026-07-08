import type { Metadata } from "next";
import { HireForm } from "@/components/hire/HireForm";

export const metadata: Metadata = {
  title: "Request Candidate",
  description: "Submit a detailed hiring request to NextHire for recruitment support."
};

export default function HirePage() {
  return (
    <>
      <section className="theme-brand pt-32 text-white">
        <div className="container-page grid items-center gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">Request Candidate</p>
            <h1 className="mt-4 font-serif text-4xl font-bold md:text-6xl">Submit a Hiring Request</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Fill in the details below and our recruiters will review your requirements and get back to you within 24 hours.</p>
          </div>
          <div
            className="min-h-[320px] overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(19, 116, 116, 0.65), rgba(19, 116, 116, 0.08)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85')",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
            aria-label="Hiring team reviewing candidate profiles"
          />
        </div>
      </section>
      <section className="theme-light section-padding">
        <div className="container-page max-w-4xl">
          <HireForm />
        </div>
      </section>
    </>
  );
}
