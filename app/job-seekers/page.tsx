import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { JobSeekerApplicationForm } from "@/components/job-seekers/JobSeekerApplicationForm";

export const metadata: Metadata = {
  title: "Job Seekers",
  description: "Apply to be considered for current and future roles through NextHire."
};

export default function JobSeekersPage() {
  return (
    <section className="theme-light section-padding pt-32">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            centered={false}
            eyebrow="Careers"
            title="Job Seekers"
            subtitle="Share your details and resume to be considered for current and future roles matched through NextHire."
          />
          <div
            className="min-h-[320px] overflow-hidden rounded-[2rem] border border-primary/20 bg-primary shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(19, 116, 116, 0.42), rgba(19, 116, 116, 0.02)), url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=85')",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
            aria-label="Candidate in a professional interview conversation"
          />
        </div>
        <JobSeekerApplicationForm />
      </div>
    </section>
  );
}
