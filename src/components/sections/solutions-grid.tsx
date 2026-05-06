"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { solutions } from "@/lib/solutions";
import { ExternalLink, ArrowRight } from "lucide-react";

export function SolutionsGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
            What We Deliver
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
            Solutions Ecosystem
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A connected suite of solutions purpose-built for regulated
            industries and specialist operations.
          </p>
        </motion.div>

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
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <div className="h-0.5 w-12 bg-corp-blue rounded-full mb-4" />
                <h3 className="text-lg font-bold text-text-primary mb-1 tracking-tight">
                  {solution.name}
                </h3>
                <p className="text-sm font-semibold text-corp-blue mb-3">
                  {solution.tagline}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
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
  );
}
