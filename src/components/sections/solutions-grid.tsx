"use client";

import { motion } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  TrendingUp,
  Compass,
  ChevronRight,
} from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "FCA Authorisation & Licensing",
    description:
      "Structured support for firms seeking regulatory approval in the UK.",
    items: [
      "EMI, API, and Small PI applications",
      "Business plans and regulatory submissions",
      "Safeguarding and governance frameworks",
      "FCA engagement and application management",
    ],
    color: {
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-200/60",
      iconText: "text-blue-700",
      hoverBg: "group-hover:bg-blue-700",
      hoverBorder: "group-hover:border-blue-700",
      chevron: "text-blue-500",
      topBorder: "border-t-blue-500",
    },
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Governance Frameworks",
    description:
      "Robust systems aligned with regulatory expectations and operational realities.",
    items: [
      "AML / CTF frameworks and risk assessments",
      "Compliance monitoring programmes",
      "SM&CR governance structures",
      "Regulatory reporting and controls",
    ],
    color: {
      iconBg: "bg-emerald-50",
      iconBorder: "border-emerald-200/60",
      iconText: "text-emerald-700",
      hoverBg: "group-hover:bg-emerald-700",
      hoverBorder: "group-hover:border-emerald-700",
      chevron: "text-emerald-500",
      topBorder: "border-t-emerald-500",
    },
  },
  {
    icon: TrendingUp,
    title: "Financial & Prudential Structuring",
    description:
      "Design of financial frameworks required under evolving regulatory regimes.",
    items: [
      "ICARA and prudential risk frameworks",
      "Capital and liquidity modelling",
      "Financial projections and stress testing",
    ],
    color: {
      iconBg: "bg-indigo-50",
      iconBorder: "border-indigo-200/60",
      iconText: "text-indigo-700",
      hoverBg: "group-hover:bg-indigo-700",
      hoverBorder: "group-hover:border-indigo-700",
      chevron: "text-indigo-500",
      topBorder: "border-t-indigo-500",
    },
  },
  {
    icon: Compass,
    title: "Regulatory Strategy & Market Entry",
    description:
      "Clear pathways for firms entering or expanding within regulated markets.",
    items: [
      "UK market entry strategy",
      "Licensing and structuring models",
      "Regulatory roadmap development",
    ],
    color: {
      iconBg: "bg-amber-50",
      iconBorder: "border-amber-200/60",
      iconText: "text-amber-700",
      hoverBg: "group-hover:bg-amber-700",
      hoverBorder: "group-hover:border-amber-700",
      chevron: "text-amber-500",
      topBorder: "border-t-amber-500",
    },
  },
];

export function SolutionsGrid() {
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
          <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
            What We Deliver
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
            Regulatory Advisory and Execution
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We provide end-to-end regulatory and compliance solutions designed
            to support authorisation, operational readiness, and sustainable
            growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`card-corporate p-7 group border-t-2 ${pillar.color.topBorder}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center justify-center h-11 w-11 rounded-lg border ${pillar.color.iconBg} ${pillar.color.iconBorder} ${pillar.color.hoverBg} ${pillar.color.hoverBorder} transition-colors`}
                >
                  <pillar.icon
                    className={`h-5 w-5 ${pillar.color.iconText} group-hover:text-white transition-colors`}
                  />
                </div>
                <h3 className="text-base font-bold text-text-primary tracking-tight">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {pillar.description}
              </p>
              <ul className="space-y-2.5">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <ChevronRight
                      className={`h-3.5 w-3.5 ${pillar.color.chevron} mt-0.5 shrink-0`}
                    />
                    <span className="text-sm font-medium text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
