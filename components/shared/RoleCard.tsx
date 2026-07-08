"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function RoleCard({ title, stack, icon: Icon }: { title: string; stack: string[]; icon: LucideIcon }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="premium-card group rounded-2xl p-6 transition-all duration-200 hover:shadow-md"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-gray-950">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="premium-chip rounded-full px-3 py-1 text-xs font-medium">
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
