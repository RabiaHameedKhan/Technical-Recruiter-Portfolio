"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, UserRoundSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 28 };

  return (
    <section className="theme-purple relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p initial={initial} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-white/80">
            Independent Technical Recruiter
          </motion.p>
          <motion.h1 initial={initial} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="max-w-4xl font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            The Right Tech Talent, Delivered Personally.
          </motion.h1>
          <motion.p initial={initial} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            I connect growing companies with pre-screened software engineers and tech professionals fast, direct, and without the agency overhead.
          </motion.p>
          <motion.div initial={initial} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/hire">Submit a Hiring Request</Link>
            </Button>
            <Button asChild size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-[#470047]">
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </motion.div>
          <motion.div initial={initial} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }} className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white/85">
            {["No upfront fees", "Candidates in 3-5 days", "Direct access to me"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-white" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute inset-0 rounded-[3rem] bg-white opacity-10 blur-2xl" />
          <div className="premium-card relative flex h-full items-center justify-center overflow-hidden rounded-[2rem] p-8 shadow-xl">
            <div className="absolute right-8 top-8 rounded-full border border-[#470047]/20 bg-white p-3 shadow-sm">
              <Sparkles className="h-6 w-6 text-[#470047]" />
            </div>
            <div className="relative text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#470047] text-white shadow-lg">
                <UserRoundSearch className="h-16 w-16" />
              </div>
              <h2 className="mt-8 font-serif text-3xl font-bold text-[#470047]">Amna Khan</h2>
              <p className="mt-2 text-sm font-medium text-[#470047]">Technical Recruiter - Remote Hiring Specialist</p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-left">
                <div className="rounded-2xl border border-[#470047]/20 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-[#470047]">6+</p>
                  <p className="text-xs text-[#470047]/75">Years Experience</p>
                </div>
                <div className="rounded-2xl border border-[#470047]/20 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-[#470047]">50+</p>
                  <p className="text-xs text-[#470047]/75">Placements</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
