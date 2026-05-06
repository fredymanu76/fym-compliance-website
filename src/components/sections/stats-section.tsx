"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Solutions Delivered" },
  { value: "8", label: "Expertise Domains" },
  { value: "5+", label: "Industries Served" },
  { value: "UK", label: "Incorporated & Operated" },
];

export function StatsSection() {
  return (
    <section className="py-20 gradient-blue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
