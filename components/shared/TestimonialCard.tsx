"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  quote,
  name,
  company,
  role,
  featured = false
}: {
  quote: string;
  name: string;
  company: string;
  role: string;
  featured?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={cn(
        "premium-card relative rounded-2xl p-6 transition-shadow duration-200 hover:shadow-md",
        featured && "md:col-span-2"
      )}
    >
      <Quote className="mb-5 h-9 w-9 text-[#470047]" />
      <p className="text-base leading-7 text-gray-700">{quote}</p>
      <div className="mt-5 flex gap-1 text-[#470047]" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <div className="mt-5">
        <p className="font-bold text-gray-950">{name}</p>
        <p className="text-sm text-gray-500">
          {role}, {company}
        </p>
      </div>
    </motion.article>
  );
}
