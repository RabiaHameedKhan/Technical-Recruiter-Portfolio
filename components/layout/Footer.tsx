import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/hire", label: "Hire Through Me" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="theme-purple border-t border-white/20 text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-bold">Amna Khan</h2>
          <p className="mt-3 max-w-md text-white/80">Pre-screened Tech Talent, Delivered Personally.</p>
          <div className="mt-6 flex gap-3">
            <a aria-label="LinkedIn" href="https://linkedin.com/in/amnakhan" className="rounded-full border border-white/30 bg-transparent p-3 transition-colors hover:bg-white hover:text-[#470047]">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="WhatsApp" href="https://wa.me/923000000000" className="rounded-full border border-white/30 bg-transparent p-3 transition-colors hover:bg-white hover:text-[#470047]">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="mailto:amna@example.com" className="rounded-full border border-white/30 bg-transparent p-3 transition-colors hover:bg-white hover:text-[#470047]">
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
            <a href="mailto:amna@example.com" className="mt-4 block text-sm text-white/80 transition-colors hover:text-white">
              amna@example.com
            </a>
            <p className="mt-3 text-sm text-white/70">Karachi, Pakistan - working globally remotely</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page text-sm text-white/70">© 2025 Amna Khan. All rights reserved.</div>
      </div>
    </footer>
  );
}
