"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
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
            Engage Early. Execute with Precision.
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
            Whether you are seeking FCA authorisation, strengthening compliance,
            or building scalable infrastructure, early engagement reduces risk
            and accelerates outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg bg-white text-corp-navy hover:bg-white/90 transition-colors"
            >
              Book a Consultation
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
  );
}
