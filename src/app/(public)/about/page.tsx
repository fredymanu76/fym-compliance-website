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
import { CtaSection } from "@/components/sections/cta-section";

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
  "Execution-focused \u2014 not advisory-only",
  "Built on real regulatory experience, not theory",
  "Structured delivery aligned with FCA expectations",
  "Integration of advisory with scalable infrastructure",
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Header */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
                About the Founder
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold heading-tight mb-4 text-text-primary">
                Fred Manu
              </h1>
              <p className="text-base font-semibold text-text-muted mb-6">
                Regulatory Advisor &middot; FCA Authorisation &middot;
                Compliance & Financial Infrastructure
              </p>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                Supporting financial institutions, fintechs, and regulated
                businesses across authorisation, compliance, and scalable
                operational design.
              </p>
            </motion.div>

            {/* Founder photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="relative h-52 w-52 rounded-2xl overflow-hidden bg-corp-navy shadow-lg">
                <Image
                  src="/founder.jpg"
                  alt="Fred Manu — Founder, FYM Compliance"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to initials if image not yet uploaded
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const parent = (e.currentTarget as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.classList.add("flex", "items-center", "justify-center");
                      const span = document.createElement("span");
                      span.className = "text-5xl font-bold text-white tracking-tight";
                      span.textContent = "FM";
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — What I Do */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-50 border border-blue-200/60">
                <Briefcase className="h-5 w-5 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold heading-tight text-text-primary">
                What I Do
              </h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              I advise and support firms on:
            </p>
            <div className="space-y-3 mb-6">
              {services.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ChevronRight className="h-4 w-4 text-corp-blue mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-text-primary leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-muted">
              Delivered through FYM Compliance and supported by the Regnexus
              platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Background */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-200/60">
                <Shield className="h-5 w-5 text-emerald-700" />
              </div>
              <h2 className="text-2xl font-bold heading-tight text-text-primary">
                Background
              </h2>
            </div>
            <div className="space-y-3">
              {background.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border shadow-sm"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-text-primary leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 border border-indigo-200/60">
                <Target className="h-5 w-5 text-indigo-700" />
              </div>
              <h2 className="text-2xl font-bold heading-tight text-text-primary">
                Approach
              </h2>
            </div>
            <div className="space-y-3">
              {approach.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg border-l-4 border-l-indigo-500 bg-white border border-border shadow-sm"
                >
                  <span className="text-sm font-semibold text-text-primary leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — Beyond Advisory */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-50 border border-amber-200/60">
                <Layers className="h-5 w-5 text-amber-700" />
              </div>
              <h2 className="text-2xl font-bold heading-tight text-text-primary">
                Beyond Advisory
              </h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              In addition to advisory work, I develop and support the Regnexus
              platform&mdash;an integrated infrastructure designed to support
              regulatory, financial, and operational capabilities across
              businesses.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              This enables clients to move beyond compliance into structured,
              scalable operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6 — Work With Me */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-bold heading-tight mb-4 text-text-primary">
              Work With Me
            </h2>
            <p className="text-sm text-text-secondary mb-8">
              For FCA authorisation, compliance support, or regulatory strategy:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold rounded-lg bg-corp-navy text-white hover:bg-corp-navy/90 transition-colors shadow-sm"
              >
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold rounded-lg border border-border text-text-primary hover:bg-bg-secondary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
