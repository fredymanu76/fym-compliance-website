"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Expertise", href: "/expertise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Call", href: "/book" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border card-shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="FYM Compliance" width={36} height={36} className="h-9 w-9" />
            <span className="text-lg font-bold text-corp-navy heading-tight">
              FYM Compliance
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all",
                  pathname === item.href
                    ? "text-corp-navy bg-corp-blue-pale"
                    : "text-text-muted hover:text-corp-navy hover:bg-bg-secondary"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-corp-blue rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold rounded-lg bg-corp-navy text-white hover:bg-corp-navy/90 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <MobileNav items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
