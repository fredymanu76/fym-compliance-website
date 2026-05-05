"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Background gradient orb */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full diamond-gradient opacity-[0.04] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-xs font-medium text-text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-facet-green animate-pulse" />
            UK-incorporated regulatory technology firm
            <ChevronRight className="h-3 w-3" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-tight leading-[1.1] mb-6">
            The architects behind{" "}
            <span className="diamond-gradient-text">
              regulated technology
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-10">
            We build the operating systems that power regulated institutions.
            From FCA compliance platforms to specialist industry solutions —
            designed, architected, and delivered in-house.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg bg-facet-amber text-bg-primary hover:bg-facet-amber/90 transition-colors"
            >
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg glass text-text-primary hover:bg-bg-subtle/80 transition-colors"
            >
              View Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
