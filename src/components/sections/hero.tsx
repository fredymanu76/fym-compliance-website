"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Corporate skyline"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Navy overlay */}
      <div className="absolute inset-0 -z-10 bg-bg-navy/80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-corp-blue-light animate-pulse" />
            UK-incorporated regulatory advisory
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-tight leading-[1.1] mb-6 text-white">
            Regulatory Infrastructure, Authorisation, and Compliance{" "}
            <span className="text-corp-blue-light">
              Built for Modern Financial and Digital Businesses
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10">
            FYM Compliance delivers FCA authorisation, compliance frameworks,
            and regulatory strategy&mdash;while powering scalable business
            infrastructure through the Regnexus platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg bg-white text-corp-navy hover:bg-white/90 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Explore Our Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
