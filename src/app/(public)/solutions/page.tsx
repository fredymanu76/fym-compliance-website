"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { solutions } from "@/lib/solutions";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

export default function SolutionsPage() {
  // Split: first solution as featured, rest in grid
  const featured = solutions[0];
  const rest = solutions.slice(1);

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
              What We Deliver
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-tight mb-6 text-white leading-[1.1]">
              The Regnexus{" "}
              <span className="text-corp-blue-light">Ecosystem</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              An integrated suite of platforms powering regulatory, financial,
              and operational capabilities across regulated and specialist
              industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-corporate overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {featured.image && (
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                </div>
              )}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <p className="text-[11px] font-semibold text-corp-blue uppercase tracking-widest mb-3">
                  Flagship Platform
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mb-2">
                  {featured.name}
                </h2>
                <p className="text-sm font-semibold text-corp-blue mb-4">
                  {featured.tagline}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {featured.description}
                </p>
                {featured.url && (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-lg bg-corp-navy text-white hover:bg-corp-navy/90 transition-colors shadow-sm w-fit"
                  >
                    Visit Platform
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Grid — compact cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest">
              Platform Suite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((solution, i) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="card-corporate overflow-hidden group flex flex-col"
              >
                {solution.image && (
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-xs font-semibold text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        {solution.tagline}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-text-primary tracking-tight mb-2">
                    {solution.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {solution.description}
                  </p>
                  {solution.url ? (
                    <a
                      href={solution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-corp-navy hover:text-corp-blue transition-colors"
                    >
                      Visit Solution
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-text-muted italic">
                      Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment — Navy section */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-white">
              Our Commitment to Delivery
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              Every solution is designed, delivered, and maintained in-house by
              FYM Compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Designed for regulated environments",
              "UK data sovereignty",
              "In-house delivery & maintenance",
              "Continuous compliance updates",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5"
              >
                <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm font-semibold text-white">
                  {item}
                </span>
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
              Need a solution for your regulated business?
            </p>
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold rounded-lg bg-white text-corp-navy hover:bg-white/90 transition-colors shadow-sm"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
