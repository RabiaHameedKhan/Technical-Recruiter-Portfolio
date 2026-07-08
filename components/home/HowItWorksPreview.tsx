"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  ["You Submit", "Fill out the hiring form with your role requirements."],
  ["We Source", "Our recruiters source, review, and screen candidates for fit."],
  ["We Deliver", "You receive a shortlist of pre-vetted profiles."],
  ["You Hire", "Interview, select, and hire. Commission is due only on success."]
];

export function HowItWorksPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="theme-light section-padding">
      <div className="container-page">
        <SectionHeading title="Simple, Fast, Direct" subtitle="A focused recruiting process built around clarity, speed, and direct communication." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <motion.article
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</div>
              <h3 className="text-lg font-bold text-gray-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="ghost">
            <Link href="/how-it-works">See the full process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
