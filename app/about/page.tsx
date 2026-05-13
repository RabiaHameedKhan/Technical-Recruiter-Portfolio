import type { Metadata } from "next";
import Link from "next/link";
import { Award, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Amna Khan, an independent technical recruiter helping companies hire remote tech talent personally."
};

const values = [
  {
    icon: Handshake,
    title: "Personal Attention",
    description: "You deal directly with me, no junior consultants or account handoffs."
  },
  {
    icon: Sparkles,
    title: "Quality Over Quantity",
    description: "I send 3-5 strong candidates, not 20 profiles that make your team do the screening."
  },
  {
    icon: ShieldCheck,
    title: "No Risk",
    description: "Commission only on successful placement. Zero upfront cost."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="theme-purple section-padding pt-32">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card relative mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center rounded-[2rem]">
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#470047] font-serif text-5xl font-bold text-white shadow-lg">AK</div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-violet-600">About Me</p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-gray-950 md:text-6xl">Hi, I&apos;m Amna Khan - Your Personal Tech Recruiter.</h1>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
              <p>
                I&apos;m an independent technical recruiter based in Karachi, working remotely with companies around the world. For the past 6+ years, I&apos;ve helped teams hire software engineers, product builders, cloud specialists, QA talent, and design professionals.
              </p>
              <p>
                I chose independent recruiting because the best hiring work is personal. Employers deserve direct context, honest market feedback, and candidates who have been properly screened before they reach an interview panel.
              </p>
              <p>
                My approach is simple: listen carefully, move quickly, protect everyone&apos;s time, and only introduce people I would be comfortable putting my name behind.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/amna-khan-cv.pdf">Download CV</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="theme-light section-padding">
        <div className="container-page">
          <SectionHeading title="My Approach" subtitle="Boutique recruiting support for teams that want fewer handoffs and better signal." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="premium-card rounded-2xl p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#470047] text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="theme-purple section-padding">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading centered={false} title="Background & Skills" subtitle="A practical mix of technical recruiting experience, sourcing systems, and remote hiring fluency." />
          <div className="space-y-6">
            {[
              "6+ years recruiting for engineering, data, DevOps, QA, product, and design roles.",
              "Experience across SaaS, fintech, e-commerce, healthtech, edtech, AI startups, and enterprise teams.",
              "Hands-on with LinkedIn Recruiter, ATS workflows, Boolean sourcing, referrals, talent mapping, and structured screening.",
              "Comfortable supporting remote-first hiring across Pakistan, MENA, Europe, North America, and global distributed teams."
            ].map((item) => (
              <div key={item} className="premium-card flex gap-4 rounded-2xl p-5">
                <Award className="mt-1 h-5 w-5 shrink-0 text-[#470047]" />
                <p className="leading-7 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
