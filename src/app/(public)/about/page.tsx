"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";

const founderDomains = [
  { name: "Banking" },
  { name: "Compliance" },
  { name: "Finance" },
  { name: "Business Development" },
  { name: "Media" },
  { name: "Remittance Services" },
  { name: "Structured Finance" },
  { name: "Insurance" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
              Our Company
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold heading-tight mb-6 text-text-primary">
              About{" "}
              <span className="text-corp-blue">FYM Compliance</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              A UK-incorporated solutions provider that bridges deep regulatory
              knowledge with comprehensive delivery capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-corporate p-8"
            >
              <div className="h-0.5 w-12 bg-corp-blue rounded-full mb-6" />
              <h2 className="text-2xl font-bold heading-tight mb-5 text-text-primary">
                Our Approach
              </h2>
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>
                  FYM Compliance Limited exists at the intersection of regulatory
                  expertise and solution delivery. We don&apos;t just
                  advise on compliance — we deliver the solutions that power it.
                </p>
                <p>
                  Every solution in our ecosystem is designed from first
                  principles, informed by real-world regulatory experience across
                  banking, payments, insurance, and specialist industries.
                </p>
                <p>
                  This means our clients receive solutions that understand the
                  regulatory landscape they operate in — not generic tools
                  retrofitted for compliance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-corporate p-8"
            >
              <div className="h-0.5 w-12 bg-corp-blue rounded-full mb-6" />
              <h2 className="text-2xl font-bold heading-tight mb-5 text-text-primary">
                Philosophy
              </h2>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-corp-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-corp-navy mb-1">
                      &ldquo;Deliver what we advise on, advise on what we
                      deliver&rdquo;
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Our advisory work directly informs our solution development,
                      and our solutions are validated by real regulatory
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-corp-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-text-primary mb-1">
                      Full-Stack Ownership
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      From infrastructure and design through to user
                      interface and deployment — we own every layer. No
                      third-party dependencies, no vendor lock-in.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="h-5 w-5 text-corp-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-text-primary mb-1">
                      UK Data Sovereignty
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      All solutions are delivered with UK data residency as a
                      first-class concern. Regulated data stays within
                      jurisdictional boundaries.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Imagery */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden card-shadow">
            <Image
              src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&q=80"
              alt="Professional team environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-corp-navy/40" />
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-corporate p-10 bg-bg-secondary"
          >
            <div className="h-0.5 w-12 bg-corp-blue rounded-full mb-6" />
            <h2 className="text-2xl font-bold heading-tight mb-2 text-text-primary">
              Founder & Principal Consultant
            </h2>
            <p className="text-sm text-text-secondary mb-8">
              Specialist knowledge spanning 8 domains of regulated financial
              services and solution delivery.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {founderDomains.map((domain, i) => (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-white border border-border card-shadow"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-corp-blue" />
                  <span className="text-xs font-bold text-text-primary tracking-tight">
                    {domain.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Details */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-corporate p-8"
          >
            <h2 className="text-lg font-bold text-text-primary mb-6">
              Company Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-bg-secondary border border-border">
                <p className="text-xs font-semibold text-corp-blue uppercase tracking-wide mb-1">Registered Name</p>
                <p className="text-sm font-bold text-text-primary">
                  FYM Compliance Limited
                </p>
              </div>
              <div className="p-4 rounded-lg bg-bg-secondary border border-border">
                <p className="text-xs font-semibold text-corp-blue uppercase tracking-wide mb-1">Jurisdiction</p>
                <p className="text-sm font-bold text-text-primary">
                  England &amp; Wales
                </p>
              </div>
              <div className="p-4 rounded-lg bg-bg-secondary border border-border">
                <p className="text-xs font-semibold text-corp-blue uppercase tracking-wide mb-1">Domain</p>
                <p className="text-sm font-bold text-text-primary">
                  fymcompliancelimited.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
