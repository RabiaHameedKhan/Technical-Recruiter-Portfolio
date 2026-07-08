import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/job-seekers", label: "Job Seekers" },
  { href: "/hire", label: "Request Candidate" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="theme-brand border-t border-white/20 text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-bold">NextHire</h2>
          <p className="mt-2 max-w-md text-sm font-semibold text-white/90">Your Next Great Hire. Your Next Great Job.</p>
          <p className="mt-3 max-w-md text-white/80">Pre-screened talent, delivered by a focused recruiting team.</p>
          <div className="mt-6 flex gap-3">
            <a aria-label="NextHire LinkedIn" href="https://linkedin.com/company/nexthire" className="rounded-full border border-white/30 bg-transparent p-3 transition-colors hover:bg-white hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="NextHire WhatsApp" href="https://wa.me/923000000000" className="rounded-full border border-white/30 bg-transparent p-3 transition-colors hover:bg-white hover:text-primary">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a aria-label="NextHire Email" href="mailto:hello@nexthire.com" className="rounded-full border border-white/30 bg-transparent p-3 transition-colors hover:bg-white hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <div className="mt-4 grid gap-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <a href="mailto:hello@nexthire.com" className="mt-4 block text-sm text-white/80 transition-colors hover:text-white">
              hello@nexthire.com
            </a>
            <p className="mt-3 text-sm text-white/70">Karachi, Pakistan - working globally remotely</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page text-sm text-white/70">Copyright 2025 NextHire. All rights reserved.</div>
      </div>
    </footer>
  );
}
