"use client";

import { motion } from "framer-motion";
import {
  Server,
  Mail,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: Server,
    name: "Regnexus OS",
    description:
      "Core infrastructure layer enabling structured workflows, compliance systems, and operational control.",
    note: "Restricted access environment",
    color: { bg: "bg-blue-50", border: "border-blue-200/60", text: "text-blue-700" },
  },
  {
    icon: Mail,
    name: "Regnexus Mail",
    description:
      "Secure and structured communication platform designed for professional and regulated environments.",
    url: "https://mail.reg-nexus.com",
    color: { bg: "bg-emerald-50", border: "border-emerald-200/60", text: "text-emerald-700" },
  },
  {
    icon: BookOpen,
    name: "Regnexus Books",
    description:
      "Financial management and reporting tools supporting operational transparency and control.",
    url: "https://books.reg-nexus.com",
    color: { bg: "bg-indigo-50", border: "border-indigo-200/60", text: "text-indigo-700" },
  },
  {
    icon: GraduationCap,
    name: "Regnexus Cortex",
    description:
      "Scalable training and knowledge delivery platform for regulatory and professional development.",
    note: "Training Platform",
    color: { bg: "bg-amber-50", border: "border-amber-200/60", text: "text-amber-700" },
  },
];

export function ImageBreakSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
            Platform
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
            The Regnexus Platform
          </h2>
          <p className="text-text-secondary text-lg">
            Beyond advisory &mdash; infrastructure for scalable businesses. FYM
            Compliance operates as the advisory and execution arm of the
            Regnexus platform, an integrated infrastructure designed to support
            regulatory, financial, and operational capabilities across
            industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card-corporate p-7 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center justify-center h-11 w-11 rounded-lg border ${product.color.bg} ${product.color.border}`}
                >
                  <product.icon className={`h-5 w-5 ${product.color.text}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary tracking-tight">
                    {product.name}
                  </h3>
                  {product.note && (
                    <span className="text-[11px] font-medium text-text-muted uppercase tracking-wide">
                      {product.note}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {product.description}
              </p>
              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-corp-navy hover:text-corp-blue transition-colors"
                >
                  Visit Platform
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm text-text-muted text-center mt-10"
        >
          Together, these components form a unified ecosystem supporting both
          regulated and non-regulated businesses.
        </motion.p>
      </div>
    </section>
  );
}
