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
    <footer className="theme-purple border-t border-[#F5F0FF]/20 text-[#F5F0FF]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-bold">Amna Khan</h2>
          <p className="mt-3 max-w-md text-[#F5F0FF]/80">Pre-screened Tech Talent, Delivered Personally.</p>
          <div className="mt-6 flex gap-3">
            <a aria-label="LinkedIn" href="https://linkedin.com/in/amnakhan" className="rounded-full border border-[#F5F0FF]/30 bg-transparent p-3 transition-colors hover:bg-[#FFFFFF] hover:text-[#4A0E4E]">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="WhatsApp" href="https://wa.me/923000000000" className="rounded-full border border-[#F5F0FF]/30 bg-transparent p-3 transition-colors hover:bg-[#FFFFFF] hover:text-[#4A0E4E]">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="mailto:amna@example.com" className="rounded-full border border-[#F5F0FF]/30 bg-transparent p-3 transition-colors hover:bg-[#FFFFFF] hover:text-[#4A0E4E]">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <div className="mt-4 grid gap-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#F5F0FF]/80 transition-colors hover:text-[#F5F0FF]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <a href="mailto:amna@example.com" className="mt-4 block text-sm text-[#F5F0FF]/80 transition-colors hover:text-[#F5F0FF]">
              amna@example.com
            </a>
            <p className="mt-3 text-sm text-[#F5F0FF]/70">Karachi, Pakistan - working globally remotely</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#F5F0FF]/10 py-5">
        <div className="container-page text-sm text-[#F5F0FF]/70">© 2025 Amna Khan. All rights reserved.</div>
      </div>
    </footer>
  );
}
