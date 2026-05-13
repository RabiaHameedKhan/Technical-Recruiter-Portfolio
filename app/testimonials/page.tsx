import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Employer testimonials for Amna Khan's freelance technical recruiting work."
};

export default function TestimonialsPage() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="theme-purple section-padding pt-32">
      <div className="container-page">
        <SectionHeading eyebrow="Testimonials" title="Direct Recruiting, Remembered Well" subtitle="Placeholder stories from employers who value thoughtful shortlists and clear communication." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <TestimonialCard {...featured} featured />
          {rest.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
