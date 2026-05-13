"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-[#470047]/95 transition-all duration-200",
        scrolled && "border-white/30 shadow-sm backdrop-blur-xl"
      )}
    >
      <nav className="container-page flex min-h-20 items-center justify-between">
        <Link href="/" className="font-serif text-lg font-bold text-white" onClick={() => setOpen(false)}>
          Amna Khan <span className="hidden text-white/80 sm:inline">- Technical Recruiter</span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/85 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
          <Button asChild variant="secondary">
            <Link href="/hire">Hire Through Me</Link>
          </Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/25 bg-[#470047] px-6 py-5 shadow-sm lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-medium text-white/85 hover:bg-white hover:text-[#470047]"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="secondary" className="mt-2 w-full">
              <Link href="/hire" onClick={() => setOpen(false)}>
                Hire Through Me
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
