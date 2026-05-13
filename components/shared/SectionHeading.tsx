"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(centered && "mx-auto text-center", "max-w-3xl", className)}
    >
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-violet-600">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-bold text-gray-950 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">{subtitle}</p> : null}
    </motion.div>
  );
}
