"use client";

import { motion } from "framer-motion";
import { solutions } from "@/lib/solutions";
import { ExternalLink } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";

export default function SolutionsPage() {
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
              Solutions{" "}
              <span className="diamond-gradient-text">Ecosystem</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              A connected suite of platforms purpose-built for regulated
              institutions and specialist industries. Each solution is designed,
              built, and maintained in-house by FYM Compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Platforms */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-facet-amber uppercase tracking-wider mb-8">
            Our Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-8 hover:bg-bg-subtle/50 transition-colors"
              >
                <div
                  className={`h-1.5 w-16 rounded-full bg-${solution.color} mb-5`}
                />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {solution.name}
                </h3>
                <p className="text-sm text-facet-amber font-medium mb-4">
                  {solution.tagline}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {solution.description}
                </p>
                {solution.url && (
                  <a
                    href={solution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-facet-blue hover:text-facet-blue/80 transition-colors"
                  >
                    Visit Platform
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8 text-center"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Technology Stack
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Next.js",
                "TypeScript",
                "React 19",
                "PostgreSQL",
                "Prisma",
                "Tailwind CSS",
                "Docker",
                "UK Data Residency",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-xs font-medium rounded-full bg-bg-subtle text-text-muted border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
