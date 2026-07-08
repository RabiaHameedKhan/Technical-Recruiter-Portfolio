"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" }
];

const secondaryLinks = [
  { href: "/services", label: "Services" },
  { href: "/job-seekers", label: "Job Seekers" },
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
        "fixed left-0 right-0 top-0 z-50 border-b border-primary/20 bg-white/95 shadow-sm backdrop-blur-2xl transition-all duration-200",
        scrolled && "shadow-md"
      )}
    >
      <nav className="container-page flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="font-serif text-2xl font-bold text-primary md:text-3xl" onClick={() => setOpen(false)}>
          NextHire
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          {secondaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Button asChild variant="outline">
            <Link href="/job-seekers">Apply for Jobs</Link>
          </Button>
          <Button asChild>
            <Link href="/hire">Request Candidate</Link>
          </Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary bg-white text-primary shadow-sm backdrop-blur-xl lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-primary/20 bg-white/95 px-6 py-5 shadow-sm backdrop-blur-2xl lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-medium text-gray-700 hover:bg-primary hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-medium text-gray-700 hover:bg-primary hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="outline" className="mt-2 w-full">
              <Link href="/job-seekers" onClick={() => setOpen(false)}>
                Apply for Jobs
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/hire" onClick={() => setOpen(false)}>
                Request Candidate
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
