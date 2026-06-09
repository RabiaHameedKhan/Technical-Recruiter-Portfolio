import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="theme-purple border-y border-[#F5F0FF]/20 text-[#F5F0FF]">
      <div>
        <div className="container-page py-20 text-center">
          <h2 className="font-serif text-4xl font-bold md:text-5xl">Ready to find your next tech hire?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#F5F0FF]/80">Submit your requirements and I&apos;ll get back to you within 24 hours.</p>
          <Button asChild size="lg" variant="secondary" className="mt-9">
            <Link href="/hire">Submit a Hiring Request</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
