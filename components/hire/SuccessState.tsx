import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SuccessState() {
  return (
    <div className="premium-card rounded-2xl p-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
        <CheckCircle2 className="h-8 w-8" />
      </div>
      <h2 className="mt-6 font-serif text-3xl font-bold text-gray-950">Thank you! We&apos;ve received your hiring request.</h2>
      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">Our team will review your requirements and be in touch within 24 hours.</p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
