import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

const footerSolutions = [
  { label: "RegNexus Platform", href: "https://reg-nexus.com", external: true },
  { label: "RegNexus RIOS", href: "/solutions", external: false },
  { label: "FirmMail", href: "https://mail.reg-nexus.com", external: true },
  { label: "Timber OS", href: "https://timber-os.vercel.app", external: true },
  { label: "Care OS", href: "https://care-os-iota.vercel.app", external: true },
  { label: "RegNexus Books", href: "https://books.reg-nexus.com", external: true },
  { label: "RegNexus Cortex", href: "/solutions", external: false },
];

const footerLinks = {
  expertise: [
    { label: "Banking", href: "/expertise" },
    { label: "Compliance", href: "/expertise" },
    { label: "Finance", href: "/expertise" },
    { label: "Remittance Services", href: "/expertise" },
    { label: "Insurance", href: "/expertise" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Call", href: "/book" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="FYM Compliance" width={32} height={32} className="h-8 w-8" />
              <span className="text-base font-semibold text-text-primary">
                FYM Compliance
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              The architects behind regulated technology. UK-incorporated,
              building full-stack solutions for financial services and specialist
              industries.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {footerSolutions.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Expertise
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.expertise.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        {/* Trust strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} FYM Compliance Limited. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-text-muted">
              UK Incorporated Company
            </span>
            <span className="text-xs text-text-muted">
              England &amp; Wales
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
