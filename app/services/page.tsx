import type { Metadata } from "next";
import { technologies } from "@/data/roles";
import { RolesGrid } from "@/components/shared/RolesGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description: "Technical recruitment services for software, cloud, data, QA, product, and design hiring."
};

export default function ServicesPage() {
  return (
    <>
      <section className="theme-purple section-padding pt-32">
        <div className="container-page">
          <SectionHeading eyebrow="Services" title="Technical Recruiting for Focused Hiring Teams" subtitle="I help companies define, source, screen, and shortlist candidates for technical roles across remote and hybrid markets." />
          <RolesGrid />
        </div>
      </section>
      <section className="theme-light section-padding">
        <div className="container-page">
          <SectionHeading title="Technologies I Recruit For" subtitle="Modern stacks, cloud platforms, data tooling, mobile frameworks, QA systems, and design workflows." />
          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="premium-chip rounded-full px-5 py-2 text-sm font-medium shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="theme-purple section-padding">
        <div className="container-page">
          <SectionHeading title="Experience Levels" subtitle="Support for individual contributor and leadership roles, from early-career talent to experienced technical managers." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {["Junior", "Mid-Level", "Senior", "Lead", "Manager"].map((level) => (
              <div key={level} className="premium-card rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-gray-950">{level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
