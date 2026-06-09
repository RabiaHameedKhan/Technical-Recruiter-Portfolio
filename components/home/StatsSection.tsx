"use client";

import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Candidates Placed" },
  { value: 30, suffix: "+", label: "Companies Served" },
  { value: 5, prefix: "3-", label: "Days Avg. Turnaround" },
  { value: 100, suffix: "%", label: "Commission-Based" }
];

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="theme-light section-padding">
      <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="premium-card rounded-2xl p-6 text-center"
          >
            <p className="font-serif text-4xl font-bold text-violet-700">
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </p>
            <p className="mt-3 text-sm font-semibold text-gray-600">{stat.label}</p>
            {stat.value === 100 ? <p className="mt-1 text-xs text-gray-500">No Upfront Cost</p> : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
