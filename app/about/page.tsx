import type { Metadata } from "next";
import Link from "next/link";
import { Award, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NextHire, a focused recruitment agency helping companies hire technical and non-technical talent."
};

const values = [
  {
    icon: Handshake,
    title: "Direct Collaboration",
    description: "You work directly with our recruiters, with clear context and no unnecessary handoffs."
  },
  {
    icon: Sparkles,
    title: "Quality Over Quantity",
    description: "We send focused shortlists, not a pile of profiles that make your team do the screening."
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
      <section className="theme-light section-padding pt-32">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card mx-auto w-full max-w-md overflow-hidden rounded-[2rem]">
            <div
              className="h-72 bg-primary"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(19, 116, 116, 0.22), rgba(19, 116, 116, 0.02)), url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85')",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
              aria-hidden="true"
            />
            <div className="bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary/75">Talent partners</p>
              <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-gray-950">Shortlists with real signal.</h2>
              <p className="mt-4 text-sm font-medium leading-6 text-gray-600">
                Focused recruitment support for teams that need quality candidates without hiring noise.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4 text-sm font-semibold">
                <div className="rounded-2xl bg-primary/10 p-4">
                  <p className="font-serif text-3xl text-primary">0</p>
                  <p className="mt-1 text-gray-600">Upfront cost</p>
                </div>
                <div className="rounded-2xl bg-primary/10 p-4">
                  <p className="font-serif text-3xl text-primary">2x</p>
                  <p className="mt-1 text-gray-600">Better hiring focus</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-violet-600">About NextHire</p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-gray-950 md:text-6xl">Recruitment Support Built for Better Shortlists.</h1>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
              <p>
                NextHire helps companies find pre-screened technical and non-technical talent without adding friction to the hiring process.
              </p>
              <p>
                Our team works with employers to understand role requirements, screen candidates carefully, and deliver practical shortlists with useful context.
              </p>
              <p>
                The approach is simple: listen carefully, move quickly, protect everyone&apos;s time, and introduce candidates who are genuinely aligned with the role.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/hire">Request Candidate</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="theme-light section-padding">
        <div className="container-page">
          <SectionHeading title="Our Approach" subtitle="We help growing teams meet carefully screened candidates faster, with clear communication at every step." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="premium-card rounded-2xl p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="theme-light section-padding">
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
                <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
