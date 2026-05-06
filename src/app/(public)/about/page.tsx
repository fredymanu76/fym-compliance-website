"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Shield,
  Briefcase,
  Layers,
  Target,
} from "lucide-react";

const services = [
  "FCA authorisation and regulatory strategy",
  "Compliance and governance frameworks",
  "Financial and prudential structuring",
  "Operational infrastructure design",
];

const background = [
  "10+ years\u2019 experience across banking, payments, and regulated financial services",
  "Specialist in FCA-regulated environments (EMI, API, remittance, fintech)",
  "Experience spanning compliance, risk, finance, and operational design",
  "Track record of successful FCA authorisations and regulatory interventions",
];

const approach = [
  {
    text: "Execution-focused \u2014 not advisory-only",
    sub: "We deliver outcomes, not slide decks",
  },
  {
    text: "Built on real regulatory experience, not theory",
    sub: "Every framework is informed by live engagement",
  },
  {
    text: "Structured delivery aligned with FCA expectations",
    sub: "Regulatory standards built into every deliverable",
  },
  {
    text: "Integration of advisory with scalable infrastructure",
    sub: "Advisory backed by the Regnexus platform",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — Full-width navy banner */}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <p className="text-sm font-semibold text-corp-blue-light uppercase tracking-widest mb-4">
                About the Founder
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-tight mb-5 text-white leading-[1.1]">
                Fred Manu
              </h1>
              <p className="text-lg font-medium text-white/60 mb-6">
                Regulatory Advisor &middot; FCA Authorisation &middot;
                Compliance & Financial Infrastructure
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Supporting financial institutions, fintechs, and regulated
                businesses across authorisation, compliance, and scalable
                operational design.
              </p>
            </motion.div>

            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-2xl overflow-hidden ring-4 ring-white/10 shadow-2xl bg-corp-navy">
                <Image
                  src="/founder.jpg"
                  alt="Fred Manu — Founder, FYM Compliance"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const parent = (e.currentTarget as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.classList.add("flex", "items-center", "justify-center");
                      const el = document.createElement("div");
                      el.className = "text-center";
                      el.innerHTML = '<span class="text-7xl font-bold text-white/30 tracking-tight">FM</span>';
                      parent.appendChild(el);
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do — Two-column with card */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-blue-50 border border-blue-200/60">
                  <Briefcase className="h-5 w-5 text-blue-700" />
                </div>
                <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest">
                  Services
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
                What I Do
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                I advise and support firms navigating regulatory environments,
                delivering structured outcomes across authorisation, compliance,
                and operational design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-corporate p-8 border-t-2 border-t-blue-500"
            >
              <div className="space-y-5">
                {services.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-semibold text-text-primary leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs font-medium text-text-muted">
                  Delivered through FYM Compliance and supported by the Regnexus
                  platform.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background — Cards in a row */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-emerald-50 border border-emerald-200/60">
                <Shield className="h-5 w-5 text-emerald-700" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
              Background
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {background.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="card-corporate p-6 border-t-2 border-t-emerald-500"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-text-primary leading-relaxed">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach — Two-column with numbered items */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-indigo-50 border border-indigo-200/60">
                  <Target className="h-5 w-5 text-indigo-700" />
                </div>
                <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest">
                  Differentiation
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
                Approach
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                A working style built on regulatory execution, not theoretical
                frameworks. Every engagement is structured to deliver
                operational outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {approach.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex gap-4 p-5 rounded-lg bg-white border border-border shadow-sm border-l-4 border-l-indigo-500"
                >
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-text-primary mb-0.5">
                      {item.text}
                    </p>
                    <p className="text-xs text-text-muted">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond Advisory — Full-width accent block */}
      <section className="py-24 bg-bg-navy relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern office"
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
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-white/10 border border-white/20">
                <Layers className="h-5 w-5 text-corp-blue-light" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-6 text-white">
              Beyond Advisory
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-4">
              In addition to advisory work, I develop and support the Regnexus
              platform&mdash;an integrated infrastructure designed to support
              regulatory, financial, and operational capabilities across
              businesses.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              This enables clients to move beyond compliance into structured,
              scalable operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work With Me — CTA section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-blue rounded-2xl p-10 sm:p-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold heading-tight mb-4 text-white">
              Work With Me
            </h2>
            <p className="text-white/80 text-base max-w-xl mx-auto mb-8">
              For FCA authorisation, compliance support, or regulatory strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg bg-white text-corp-navy hover:bg-white/90 transition-colors"
              >
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
