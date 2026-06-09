import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="theme-light section-padding">
      <div className="container-page">
        <SectionHeading title="What Employers Say" subtitle="A few words from teams that needed practical, personal help with technical hiring." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <TestimonialCard key={item.name} {...item} featured={false} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="ghost">
            <Link href="/testimonials">Read more →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
