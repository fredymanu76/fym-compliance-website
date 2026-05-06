"use client";

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

export function ExpertiseCards() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
            Specialist Knowledge
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
            Regulatory & Commercial Expertise
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Deep specialist knowledge across 8 domains of regulated financial
            services, informing every engagement we deliver.
          </p>
        </motion.div>

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
                      <Icon
                        className={`h-5 w-5 ${colors.iconText} group-hover:text-white transition-colors`}
                      />
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-text-primary tracking-tight">
                    {domain.name}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {domain.areas.slice(0, 4).map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2.5"
                    >
                      <ChevronRight className={`h-3.5 w-3.5 ${colors.chevron} mt-0.5 shrink-0`} />
                      <span className="text-xs font-medium text-text-secondary leading-relaxed">
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
  );
}
