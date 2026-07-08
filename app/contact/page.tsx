import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NextHire for recruiting enquiries and remote hiring support."
};

export default function ContactPage() {
  return (
    <section className="theme-light section-padding pt-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-violet-600">Contact</p>
          <h1 className="font-serif text-4xl font-bold text-gray-950 md:text-6xl">Let&apos;s Talk Hiring</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            For general enquiries, send a message here. For active hiring needs, use the detailed request form so our team can review the role properly.
          </p>
          <div className="mt-8 space-y-4">
            <a href="mailto:hello@nexthire.com" className="flex items-center gap-3 text-gray-700 transition-colors hover:text-violet-700">
              <Mail className="h-5 w-5 text-violet-600" />
              hello@nexthire.com
            </a>
            <a href="https://linkedin.com/company/nexthire" className="flex items-center gap-3 text-gray-700 transition-colors hover:text-violet-700">
              <Linkedin className="h-5 w-5 text-violet-600" />
              linkedin.com/company/nexthire
            </a>
            <a href="https://wa.me/923000000000" className="flex items-center gap-3 text-gray-700 transition-colors hover:text-violet-700">
              <MessageCircle className="h-5 w-5 text-violet-600" />
              +92-300-0000000
            </a>
          </div>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/hire">Submit a Hiring Request</Link>
          </Button>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
