"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { solutions } from "@/lib/solutions";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";

export default function SolutionsPage() {
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
              What We Deliver
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold heading-tight mb-6 text-text-primary">
              Solutions{" "}
              <span className="text-corp-blue">Ecosystem</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              A connected suite of solutions purpose-built for regulated
              institutions and specialist industries. Each solution is designed,
              delivered, and maintained in-house by FYM Compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold text-corp-blue uppercase tracking-widest mb-8">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-corporate overflow-hidden group"
              >
                {solution.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
                <div className="p-8">
                  <div className="h-0.5 w-16 rounded-full bg-corp-blue mb-5" />
                  <h3 className="text-xl font-bold text-text-primary mb-2 tracking-tight">
                    {solution.name}
                  </h3>
                  <p className="text-sm font-semibold text-corp-blue mb-4">
                    {solution.tagline}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  {solution.url && (
                    <a
                      href={solution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-corp-navy hover:text-corp-blue transition-colors"
                    >
                      Visit Solution
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-corporate p-8 bg-bg-secondary"
          >
            <div className="h-0.5 w-12 bg-corp-blue rounded-full mb-6" />
            <h3 className="text-lg font-bold text-text-primary mb-6">
              Our Commitment to Delivery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Designed for regulated environments",
                "UK data sovereignty",
                "In-house delivery & maintenance",
                "Continuous compliance updates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 px-4 py-4 bg-white rounded-lg border border-border card-shadow"
                >
                  <CheckCircle className="h-5 w-5 text-corp-blue mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
