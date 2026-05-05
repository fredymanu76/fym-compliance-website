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
            <h1 className="text-4xl sm:text-5xl font-bold heading-tight mb-6">
              Domain{" "}
              <span className="diamond-gradient-text">Expertise</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Deep specialist knowledge across 8 domains of regulated financial
              services, each informing the technology solutions we build.
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
              return (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="glass rounded-xl p-7 hover:bg-bg-subtle/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-5">
                    {Icon && (
                      <div
                        className={`flex items-center justify-center h-10 w-10 rounded-lg bg-${domain.color}/10`}
                      >
                        <Icon className={`h-5 w-5 text-${domain.color}`} />
                      </div>
                    )}
                    <h2 className="text-lg font-semibold text-text-primary">
                      {domain.name}
                    </h2>
                  </div>
                  <ul className="space-y-2.5">
                    {domain.areas.map((area) => (
                      <li key={area} className="flex items-start gap-2.5">
                        <div
                          className={`h-1.5 w-1.5 rounded-full bg-${domain.color} mt-1.5 shrink-0`}
                        />
                        <span className="text-sm text-text-muted leading-relaxed">
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

      <CtaSection />
    </>
  );
}
