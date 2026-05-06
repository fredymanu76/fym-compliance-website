"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Building2,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const domains = [
  { icon: ArrowLeftRight, label: "Payment Systems & Open Banking Integration", chevron: "text-blue-500" },
  { icon: Scale, label: "Prudential Regulation (Basel, MIFIDPRU)", chevron: "text-emerald-500" },
  { icon: AlertTriangle, label: "AML, Financial Crime, and Risk Management", chevron: "text-indigo-500" },
  { icon: ShieldCheck, label: "Regulatory Compliance & Governance", chevron: "text-amber-500" },
  { icon: Building2, label: "Corporate and SME Banking Structures", chevron: "text-teal-500" },
  { icon: BarChart3, label: "Financial Modelling and Business Planning", chevron: "text-violet-500" },
];

export function ExpertiseCards() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
            Specialist Knowledge
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
            Regulatory & Commercial Expertise
          </h2>
          <p className="text-text-secondary text-lg">
            Deep domain expertise across financial services, fintech, and
            regulatory environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-3 bg-white rounded-lg border border-border shadow-sm p-5"
            >
              <ChevronRight className={`h-4 w-4 ${domain.chevron} shrink-0`} />
              <span className="text-sm font-semibold text-text-primary leading-snug">
                {domain.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
