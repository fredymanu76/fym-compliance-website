"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, TrendingUp, Rocket } from "lucide-react";

const segments = [
  { icon: Building2, label: "Payment Institutions (EMI / API / SPI)" },
  { icon: Cpu, label: "Fintech and Digital Platforms" },
  { icon: TrendingUp, label: "Investment and Financial Firms" },
  { icon: Rocket, label: "Emerging and Scaling Businesses" },
];

export function StatsSection() {
  return (
    <section className="py-10 bg-bg-navy border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-widest text-center mb-6">
          Supporting
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 justify-center"
            >
              <seg.icon className="h-4 w-4 text-corp-blue-light shrink-0" />
              <span className="text-sm font-medium text-white/70">
                {seg.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
