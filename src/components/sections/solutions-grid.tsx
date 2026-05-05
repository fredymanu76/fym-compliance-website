"use client";

import { motion } from "framer-motion";
import { solutions } from "@/lib/solutions";
import { ExternalLink } from "lucide-react";

export function SolutionsGrid() {
  const primarySolutions = solutions.filter((s) => s.tier === "primary");
  const otherSolutions = solutions.filter((s) => s.tier !== "primary");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4">
            Solutions Ecosystem
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A connected suite of platforms purpose-built for regulated
            industries and specialist operations.
          </p>
        </motion.div>

        {/* Primary Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {primarySolutions.map((solution, i) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 hover:bg-bg-subtle/50 transition-colors group"
            >
              <div
                className={`h-1 w-12 rounded-full bg-${solution.color} mb-4`}
              />
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {solution.name}
              </h3>
              <p className="text-sm text-facet-amber font-medium mb-3">
                {solution.tagline}
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {solution.description}
              </p>
              {solution.url && (
                <a
                  href={solution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-facet-blue hover:text-facet-blue/80 transition-colors"
                >
                  Visit Platform
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Other Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherSolutions.map((solution, i) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass rounded-lg p-5 hover:bg-bg-subtle/50 transition-colors"
            >
              <div
                className={`h-0.5 w-8 rounded-full bg-${solution.color} mb-3`}
              />
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {solution.name}
              </h3>
              <p className="text-xs text-text-muted">{solution.tagline}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
