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

export function ExpertiseCards() {
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
            Domain Expertise
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Deep specialist knowledge across regulated financial services and
            beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertiseDomains.map((domain, i) => {
            const Icon = iconMap[domain.icon];
            return (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="glass rounded-xl p-5 hover:bg-bg-subtle/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && (
                    <Icon
                      className={`h-5 w-5 text-${domain.color} group-hover:scale-110 transition-transform`}
                    />
                  )}
                  <h3 className="text-sm font-semibold text-text-primary">
                    {domain.name}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {domain.areas.slice(0, 4).map((area) => (
                    <li
                      key={area}
                      className="text-xs text-text-muted leading-relaxed"
                    >
                      {area}
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
