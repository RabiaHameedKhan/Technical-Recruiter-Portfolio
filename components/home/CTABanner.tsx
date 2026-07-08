import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="theme-brand border-y border-white/20 text-white">
      <div>
        <div className="container-page py-20 text-center">
          <h2 className="font-serif text-4xl font-bold md:text-5xl">Ready to find your next tech hire?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">Submit your requirements and our team will get back to you within 24 hours.</p>
          <Button asChild size="lg" variant="secondary" className="mt-9">
            <Link href="/hire">Submit a Hiring Request</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
