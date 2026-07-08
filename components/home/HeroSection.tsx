"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 28 };

  return (
    <section
      className="relative flex min-h-[86vh] items-center overflow-hidden bg-primary pt-24 text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=85')",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/78 to-primary/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gray-950/40" aria-hidden="true" />
      <div className="container-page relative py-20 md:py-28">
        <motion.div initial={initial} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">Recruitment agency</p>
          <h1 className="mt-5 font-serif text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            NextHire
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-2xl font-semibold italic leading-9 text-white drop-shadow-md md:text-3xl">
            Your Next Great Hire. Your Next Great Job.
          </p>
          <div className="mt-4 h-1 w-24 rounded-full bg-white/85" aria-hidden="true" />
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white md:text-xl">
            Connecting growing teams with pre-screened technical and non-technical talent, quickly and without hiring friction.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/hire">I&apos;m Hiring</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/job-seekers">I&apos;m Looking for a Job</Link>
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white/85">
            {["Zero upfront cost", "Work directly with our recruiters"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-white" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
