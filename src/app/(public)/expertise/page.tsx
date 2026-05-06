"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { expertiseDomains } from "@/lib/expertise";
import {
  Landmark,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Megaphone,
  ArrowLeftRight,
  Building2,
  Shield,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Megaphone,
  ArrowLeftRight,
  Building2,
  Shield,
};

const domainColors: Record<string, { iconBg: string; iconBorder: string; iconText: string; iconHoverBg: string; iconHoverBorder: string; chevron: string; topBorder: string }> = {
  Banking: { iconBg: "bg-blue-50", iconBorder: "border-blue-200/60", iconText: "text-blue-700", iconHoverBg: "group-hover:bg-blue-700", iconHoverBorder: "group-hover:border-blue-700", chevron: "text-blue-500", topBorder: "border-t-blue-500" },
  Compliance: { iconBg: "bg-emerald-50", iconBorder: "border-emerald-200/60", iconText: "text-emerald-700", iconHoverBg: "group-hover:bg-emerald-700", iconHoverBorder: "group-hover:border-emerald-700", chevron: "text-emerald-500", topBorder: "border-t-emerald-500" },
  Finance: { iconBg: "bg-indigo-50", iconBorder: "border-indigo-200/60", iconText: "text-indigo-700", iconHoverBg: "group-hover:bg-indigo-700", iconHoverBorder: "group-hover:border-indigo-700", chevron: "text-indigo-500", topBorder: "border-t-indigo-500" },
  "Business Development": { iconBg: "bg-amber-50", iconBorder: "border-amber-200/60", iconText: "text-amber-700", iconHoverBg: "group-hover:bg-amber-700", iconHoverBorder: "group-hover:border-amber-700", chevron: "text-amber-500", topBorder: "border-t-amber-500" },
  Media: { iconBg: "bg-rose-50", iconBorder: "border-rose-200/60", iconText: "text-rose-700", iconHoverBg: "group-hover:bg-rose-700", iconHoverBorder: "group-hover:border-rose-700", chevron: "text-rose-500", topBorder: "border-t-rose-500" },
  "Remittance Services": { iconBg: "bg-teal-50", iconBorder: "border-teal-200/60", iconText: "text-teal-700", iconHoverBg: "group-hover:bg-teal-700", iconHoverBorder: "group-hover:border-teal-700", chevron: "text-teal-500", topBorder: "border-t-teal-500" },
  "Structured Finance": { iconBg: "bg-slate-100", iconBorder: "border-slate-300/60", iconText: "text-slate-700", iconHoverBg: "group-hover:bg-slate-700", iconHoverBorder: "group-hover:border-slate-700", chevron: "text-slate-500", topBorder: "border-t-slate-500" },
  Insurance: { iconBg: "bg-violet-50", iconBorder: "border-violet-200/60", iconText: "text-violet-700", iconHoverBg: "group-hover:bg-violet-700", iconHoverBorder: "group-hover:border-violet-700", chevron: "text-violet-500", topBorder: "border-t-violet-500" },
};

const defaultColors = domainColors.Banking;

const engagements = [
  {
    title: "FCA Authorisation \u2014 EMI Applicant (UK)",
    challenge: "Application rejected due to weak AML and safeguarding model",
    intervention: "Rebuilt business plan, AML framework, governance map",
    outcome: "Authorisation secured on resubmission",
    border: "border-l-blue-600",
  },
  {
    title: "Money Remittance Firm \u2014 Compliance Remediation",
    challenge: "Regulatory gaps in AML monitoring and reporting",
    intervention: "Implemented full AML/CTF framework and SAR procedures",
    outcome: "Passed regulatory review with no material findings",
    border: "border-l-emerald-600",
  },
  {
    title: "Payment Institution \u2014 Governance Overhaul",
    challenge: "Incomplete SM&CR framework and compliance monitoring",
    intervention: "Full SM&CR implementation, board reporting redesign",
    outcome: "Framework implemented and operational",
    border: "border-l-indigo-600",
  },
  {
    title: "Fintech Startup \u2014 Market Entry Strategy",
    challenge: "Undefined regulatory pathway for UK launch",
    intervention: "Designed authorisation strategy and operating model",
    outcome: "Clear FCA roadmap and investor-ready regulatory structure",
    border: "border-l-amber-600",
  },
  {
    title: "Investment Firm \u2014 Prudential Compliance",
    challenge: "MIFIDPRU gaps with no prudential reporting capability",
    intervention: "ICAAP/ILAAP design, capital modelling, reporting build",
    outcome: "Regulatory approval obtained",
    border: "border-l-violet-600",
  },
];

export default function ExpertisePage() {
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
              What We Know
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold heading-tight mb-6 text-text-primary">
              Regulatory & Commercial{" "}
              <span className="text-corp-blue">Expertise</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Deep specialist knowledge across 8 domains of regulated financial
              services, informing every engagement we deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseDomains.map((domain, i) => {
              const Icon = iconMap[domain.icon];
              const colors = domainColors[domain.name] || defaultColors;
              return (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`card-corporate p-7 group border-t-2 ${colors.topBorder}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    {Icon && (
                      <div className={`flex items-center justify-center h-11 w-11 rounded-lg border ${colors.iconBg} ${colors.iconBorder} ${colors.iconHoverBg} ${colors.iconHoverBorder} transition-colors`}>
                        <Icon className={`h-5 w-5 ${colors.iconText} group-hover:text-white transition-colors`} />
                      </div>
                    )}
                    <h2 className="text-lg font-bold text-text-primary tracking-tight">
                      {domain.name}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {domain.areas.map((area) => (
                      <li key={area} className="flex items-start gap-3">
                        <ChevronRight className={`h-4 w-4 ${colors.chevron} mt-0.5 shrink-0`} />
                        <span className="text-sm font-medium text-text-secondary leading-relaxed">
                          {area}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Engagements */}
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
              What We&apos;ve Delivered
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
              Selected Engagements
            </h2>
            <p className="text-text-secondary text-lg">
              Practical examples of regulatory execution and client outcomes
              across payments, banking, and fintech.
            </p>
          </motion.div>

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
                <h3 className="text-base font-bold text-text-primary tracking-tight mb-4">
                  {item.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1">
                      Intervention
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.intervention}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1">
                      Outcome
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                      <p className="text-sm font-semibold text-text-primary leading-relaxed">
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conversion CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-14 text-center"
          >
            <p className="text-text-secondary text-base mb-5">
              Planning an FCA application or facing regulatory scrutiny?
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

      <CtaSection />
    </>
  );
}
