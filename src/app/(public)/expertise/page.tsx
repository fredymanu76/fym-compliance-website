"use client";

import Image from "next/image";
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
    summary: "Rebuilt a failed application with compliant business plan, AML framework, and safeguarding model.",
    outcome: "Authorisation secured on resubmission",
    border: "border-l-blue-600",
  },
  {
    title: "Payment Institution \u2014 Compliance Remediation",
    summary: "Implemented full AML/CTF framework and SM&CR governance structure from the ground up.",
    outcome: "Framework implemented and operational",
    border: "border-l-emerald-600",
  },
  {
    title: "Fintech Startup \u2014 Market Entry Strategy",
    summary: "Designed authorisation strategy and operating model for structured UK market entry.",
    outcome: "Investor-ready regulatory structure delivered",
    border: "border-l-amber-600",
  },
  {
    title: "Investment Firm \u2014 Prudential Compliance",
    summary: "Delivered ICARA process, capital modelling, and risk frameworks aligned with MIFIDPRU.",
    outcome: "Regulatory approval obtained",
    border: "border-l-violet-600",
  },
];

export default function ExpertisePage() {
  return (
    <>
      {/* Hero — Navy banner */}
      <section className="relative overflow-hidden bg-bg-navy py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Corporate skyline"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-corp-blue-light uppercase tracking-widest mb-4">
              Specialist Knowledge
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-tight mb-6 text-white leading-[1.1]">
              Regulatory & Commercial{" "}
              <span className="text-corp-blue-light">Expertise</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Deep domain knowledge across 8 areas of regulated financial
              services, informing every engagement we deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid — compact 4-col, 3 items max */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  className={`card-corporate p-6 group border-t-2 ${colors.topBorder}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    {Icon && (
                      <div className={`flex items-center justify-center h-10 w-10 rounded-lg border ${colors.iconBg} ${colors.iconBorder} ${colors.iconHoverBg} ${colors.iconHoverBorder} transition-colors`}>
                        <Icon className={`h-5 w-5 ${colors.iconText} group-hover:text-white transition-colors`} />
                      </div>
                    )}
                    <h2 className="text-sm font-bold text-text-primary tracking-tight">
                      {domain.name}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {domain.areas.slice(0, 3).map((area) => (
                      <li key={area} className="flex items-start gap-2">
                        <ChevronRight className={`h-3.5 w-3.5 ${colors.chevron} mt-0.5 shrink-0`} />
                        <span className="text-xs font-medium text-text-secondary leading-snug">
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

      {/* Selected Engagements — Navy section */}
      <section className="py-24 bg-bg-navy relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Office environment"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-corp-blue-light uppercase tracking-widest mb-3">
              Track Record
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-white">
              Selected Engagements
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Representative mandates demonstrating regulatory execution and
              measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {engagements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 border-l-4 ${item.border}`}
              >
                <h3 className="text-sm font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {item.summary}
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-white">
                    {item.outcome}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-14 text-center"
          >
            <p className="text-white/50 text-sm mb-5">
              Planning an FCA application or facing regulatory scrutiny?
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold rounded-lg bg-white text-corp-navy hover:bg-white/90 transition-colors shadow-sm"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
