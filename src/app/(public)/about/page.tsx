"use client";

import { motion } from "framer-motion";
import { CtaSection } from "@/components/sections/cta-section";

const founderDomains = [
  { name: "Banking", color: "bg-facet-blue" },
  { name: "Compliance", color: "bg-facet-green" },
  { name: "Finance", color: "bg-facet-amber" },
  { name: "Business Development", color: "bg-facet-orange" },
  { name: "Media", color: "bg-facet-red" },
  { name: "Remittance Services", color: "bg-facet-blue" },
  { name: "Structured Finance", color: "bg-facet-green" },
  { name: "Insurance", color: "bg-facet-orange" },
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
            <h1 className="text-4xl sm:text-5xl font-bold heading-tight mb-6">
              About{" "}
              <span className="diamond-gradient-text">FYM Compliance</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              A UK-incorporated technology firm that bridges deep regulatory
              knowledge with full-stack engineering delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold heading-tight mb-4">
                Our Approach
              </h2>
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p>
                  FYM Compliance Limited exists at the intersection of regulatory
                  expertise and technology architecture. We don&apos;t just
                  advise on compliance — we build the systems that power it.
                </p>
                <p>
                  Every platform in our ecosystem is designed from first
                  principles, informed by real-world regulatory experience across
                  banking, payments, insurance, and specialist industries.
                </p>
                <p>
                  This means our clients receive solutions that understand the
                  regulatory landscape they operate in — not generic software
                  retrofitted for compliance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold heading-tight mb-4">
                Philosophy
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-facet-amber mb-2">
                    &ldquo;Build what we advise on, advise on what we
                    build&rdquo;
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Our advisory work directly informs our product development,
                    and our products are validated by real regulatory
                    requirements. This creates a continuous feedback loop between
                    knowledge and implementation.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-2">
                    Full-Stack Ownership
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    From infrastructure and architecture through to user
                    interface and deployment — we own every layer. No
                    third-party dependencies, no vendor lock-in, no compromise on
                    quality.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-2">
                    UK Data Sovereignty
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    All platforms are built with UK data residency as a
                    first-class concern. Regulated data stays within
                    jurisdictional boundaries.
                  </p>
                </div>
              </div>
            </motion.div>
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
            className="glass-strong rounded-2xl p-10"
          >
            <h2 className="text-2xl font-bold heading-tight mb-2">
              Founder & Principal Architect
            </h2>
            <p className="text-sm text-text-muted mb-8">
              Specialist knowledge spanning 8 domains of regulated financial
              services and technology delivery.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {founderDomains.map((domain, i) => (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-bg-subtle/60 border border-border"
                >
                  <div className={`h-2 w-2 rounded-full ${domain.color}`} />
                  <span className="text-xs font-medium text-text-primary">
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
            className="glass rounded-xl p-8"
          >
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Company Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-text-muted mb-1">Registered Name</p>
                <p className="text-sm font-medium text-text-primary">
                  FYM Compliance Limited
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Jurisdiction</p>
                <p className="text-sm font-medium text-text-primary">
                  England &amp; Wales
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Domain</p>
                <p className="text-sm font-medium text-text-primary">
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
