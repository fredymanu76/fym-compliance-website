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
            Ready to discuss your requirements?
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8">
            Whether you need a bespoke regulatory solution, specialist industry
            platform, or advisory services — we deliver.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg bg-white text-corp-navy hover:bg-white/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
