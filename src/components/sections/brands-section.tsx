"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Scale,
  TrendingUp,
  Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Category =
  | "All"
  | "Authorisation & Licensing"
  | "Compliance & Governance"
  | "Financial & Prudential"
  | "Market Entry & Strategy";

interface Engagement {
  clientType: string;
  category: Category;
  challenge: string;
  engagement: string;
  outcome: string;
  metric?: string;
}

const engagements: Engagement[] = [
  {
    clientType: "UK EMI Applicant",
    category: "Authorisation & Licensing",
    challenge:
      "Initial FCA application rejected due to inadequate safeguarding arrangements and governance framework.",
    engagement:
      "Full redesign of business plan, safeguarding model, AML/CTF framework, and board governance structure.",
    outcome: "FCA authorisation secured on resubmission.",
    metric: "Successfully authorised",
  },
  {
    clientType: "Money Remittance Startup",
    category: "Authorisation & Licensing",
    challenge:
      "New entrant requiring FCA registration as a Small Payment Institution with no prior regulatory engagement.",
    engagement:
      "End-to-end regulatory strategy, business plan drafting, compliance framework design, and FCA liaison.",
    outcome: "Successfully registered with the FCA.",
    metric: "Successfully authorised",
  },
  {
    clientType: "Authorised Payment Institution",
    category: "Compliance & Governance",
    challenge:
      "Weak SM&CR framework and incomplete compliance monitoring programme identified during internal review.",
    engagement:
      "Full SM&CR implementation, governance mapping, compliance monitoring programme, and board reporting redesign.",
    outcome: "Framework implemented and operational with no regulatory breaches.",
    metric: "Framework implemented and operational",
  },
  {
    clientType: "FCA-Regulated Investment Firm",
    category: "Financial & Prudential",
    challenge:
      "MIFIDPRU compliance gaps with no internal prudential reporting capability.",
    engagement:
      "ICAAP/ILAAP framework design, capital adequacy modelling, and prudential reporting implementation.",
    outcome: "Firm fully MIFIDPRU compliant with regulatory approval obtained.",
    metric: "Regulatory approval obtained",
  },
  {
    clientType: "Trade Finance Lender",
    category: "Financial & Prudential",
    challenge:
      "Capital structuring gaps preventing scaled lending operations across multiple jurisdictions.",
    engagement:
      "Credit risk assessment models, asset-backed lending structures, and regulatory capital framework.",
    outcome:
      "Lending operations scaled with structured capital framework in place.",
    metric: "Framework implemented and operational",
  },
  {
    clientType: "Fintech Scaling to EU",
    category: "Market Entry & Strategy",
    challenge:
      "UK-authorised firm seeking market entry into EU jurisdictions with no cross-border regulatory strategy.",
    engagement:
      "Cross-border regulatory mapping, passporting strategy, and partnership model design for EU distribution.",
    outcome:
      "Market entry framework established across multiple EU jurisdictions.",
    metric: "Regulatory approval obtained",
  },
];

const categories: { label: Category; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: "All", icon: Shield },
  { label: "Authorisation & Licensing", icon: Scale },
  { label: "Compliance & Governance", icon: Shield },
  { label: "Financial & Prudential", icon: TrendingUp },
  { label: "Market Entry & Strategy", icon: Rocket },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Authorisation & Licensing": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Compliance & Governance": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Financial & Prudential": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  "Market Entry & Strategy": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
};

export function BrandsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? engagements
      : engagements.filter((e) => e.category === activeCategory);

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
            Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
            Selected Engagements
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Examples of how we support regulated firms across authorisation,
            compliance, and growth.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map(({ label }) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className={cn(
                "px-4 py-2 text-sm font-semibold rounded-lg transition-all border",
                activeCategory === label
                  ? "bg-corp-navy text-white border-corp-navy"
                  : "bg-white text-text-secondary border-border hover:border-corp-blue hover:text-corp-navy"
              )}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Engagement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => {
            const colors = categoryColors[item.category];
            return (
              <motion.div
                key={`${item.clientType}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="card-corporate p-7 flex flex-col"
              >
                {/* Category Badge + Client Type */}
                <div className="mb-5">
                  <span
                    className={cn(
                      "inline-block px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide rounded-md border mb-3",
                      colors.bg,
                      colors.text,
                      colors.border
                    )}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-text-primary tracking-tight">
                    {item.clientType}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
                    Challenge
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Engagement */}
                <div className="mb-4">
                  <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
                    Engagement
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.engagement}
                  </p>
                </div>

                {/* Outcome */}
                <div className="mt-auto pt-4 border-t border-border">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-text-primary leading-relaxed">
                        {item.outcome}
                      </p>
                      {item.metric && (
                        <p className="text-xs font-bold text-corp-blue mt-1">
                          {item.metric}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proof Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "Multiple", label: "Successful FCA Authorisations" },
            { value: "Zero", label: "Regulatory Breaches Post-Implementation" },
            { value: "Proven", label: "Compliance Frameworks Delivered" },
            { value: "Operational", label: "Solutions Across Regulated Sectors" },
          ].map((proof, i) => (
            <div
              key={proof.label}
              className="card-corporate p-5 text-center"
            >
              <p className="text-2xl font-bold text-corp-navy mb-1">
                {proof.value}
              </p>
              <p className="text-xs font-medium text-text-muted leading-snug">
                {proof.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Strategic CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-text-secondary text-base mb-5">
            Planning an FCA application or strengthening your compliance
            framework?
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold rounded-lg bg-corp-navy text-white hover:bg-corp-navy/90 transition-colors shadow-sm"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
