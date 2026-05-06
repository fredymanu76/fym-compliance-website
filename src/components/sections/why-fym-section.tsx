"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Proven experience supporting FCA authorisation and compliance delivery",
  "End-to-end execution\u2014from strategy to implementation",
  "Alignment with regulatory expectations and supervisory standards",
  "Integration of advisory with scalable infrastructure (Regnexus platform)",
];

export function WhyFymSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
              Why FYM Compliance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
              Execution. Structure. Regulatory Alignment.
            </h2>
          </motion.div>

          <div className="mt-10 space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 p-5 rounded-lg bg-bg-secondary border border-border"
              >
                <CheckCircle className="h-5 w-5 text-corp-blue mt-0.5 shrink-0" />
                <span className="text-sm font-semibold text-text-primary leading-relaxed">
                  {reason}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
