"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const engagements = [
  {
    title: "FCA Authorisation \u2014 Electronic Money Institution (UK)",
    description:
      "Redesigned a failed application, delivering a fully compliant business plan, AML framework, and safeguarding model \u2014 resulting in successful FCA authorisation.",
    outcome: "Successfully authorised",
    border: "border-l-blue-600",
  },
  {
    title: "Authorised Payment Institution \u2014 Compliance Remediation",
    description:
      "Implemented a complete AML and compliance framework, strengthening internal controls and achieving a clean regulatory review outcome.",
    outcome: "Framework implemented and operational",
    border: "border-l-emerald-600",
  },
  {
    title: "Money Remittance Firm \u2014 AML & Governance Transformation",
    description:
      "Designed and deployed a scalable compliance and governance structure to support operational growth and regulatory alignment.",
    outcome: "Regulatory approval obtained",
    border: "border-l-indigo-600",
  },
  {
    title: "Fintech Startup \u2014 UK Market Entry Strategy",
    description:
      "Developed a full regulatory strategy and operating model, enabling structured entry into the UK financial services market.",
    outcome: "Regulatory approval obtained",
    border: "border-l-amber-600",
  },
  {
    title: "Investment Firm \u2014 Prudential Framework (MIFIDPRU)",
    description:
      "Delivered ICARA process, capital modelling, and risk frameworks aligned with new prudential requirements.",
    outcome: "Regulatory approval obtained",
    border: "border-l-violet-600",
  },
];

export function BrandsSection() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
            Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
            Selected Engagements
          </h2>
          <p className="text-text-secondary text-lg">
            Execution delivered across regulated environments. A selection of
            representative mandates demonstrating regulatory execution and
            measurable outcomes.
          </p>
        </motion.div>

        {/* Engagement cards — left-border highlight blocks */}
        <div className="space-y-4">
          {engagements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`bg-white rounded-lg border border-border shadow-sm p-6 border-l-4 ${item.border}`}
            >
              <h3 className="text-base font-bold text-text-primary tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-text-primary">
                  {item.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
