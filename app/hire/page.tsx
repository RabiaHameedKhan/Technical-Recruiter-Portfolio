import type { Metadata } from "next";
import { HireForm } from "@/components/hire/HireForm";

export const metadata: Metadata = {
  title: "Hire Through Me",
  description: "Submit a detailed hiring request to Amna Khan for technical recruitment support."
};

export default function HirePage() {
  return (
    <>
      <section className="theme-purple pt-32 text-white">
        <div className="container-page py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">Hire Through Me</p>
          <h1 className="mt-4 font-serif text-4xl font-bold md:text-6xl">Submit a Hiring Request</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Fill in the details below and I&apos;ll review your requirements and get back to you within 24 hours.</p>
        </div>
      </section>
      <section className="theme-purple section-padding">
        <div className="container-page max-w-4xl">
          <HireForm />
        </div>
      </section>
    </>
  );
}
