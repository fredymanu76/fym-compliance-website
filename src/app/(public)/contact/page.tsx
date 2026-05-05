"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { Mail, Clock, Building2 } from "lucide-react";

export default function ContactPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold heading-tight mb-6">
              Get in{" "}
              <span className="diamond-gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Whether you need a bespoke regulatory platform, specialist
              industry solution, or want to discuss technology advisory — reach
              out and we&apos;ll respond shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <ContactForm />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="h-5 w-5 text-facet-amber" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    Email
                  </h3>
                </div>
                <p className="text-sm text-text-muted">
                  info@fymcompliancelimited.com
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-facet-green" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    Response Time
                  </h3>
                </div>
                <p className="text-sm text-text-muted mb-2">
                  We aim to respond to all enquiries promptly during business hours.
                </p>
                <p className="text-sm text-text-muted">
                  Direct line:{" "}
                  <a href="tel:+447465991845" className="text-facet-amber hover:underline font-medium">
                    +44 7465 991845
                  </a>
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="h-5 w-5 text-facet-blue" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    Company
                  </h3>
                </div>
                <div className="text-sm text-text-muted space-y-1">
                  <p>FYM Compliance Limited</p>
                  <p>England &amp; Wales</p>
                  <p>United Kingdom</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
