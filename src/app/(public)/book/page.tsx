"use client";

import { motion } from "framer-motion";
import { BookingForm } from "@/components/booking-form";
import { Clock, Shield, Phone } from "lucide-react";

export default function BookPage() {
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
              Book a{" "}
              <span className="diamond-gradient-text">Consultation</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Schedule a call with our team to discuss your regulatory
              technology needs. Choose a service, pick a time, and we&apos;ll
              confirm your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Grid */}
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
              <BookingForm />
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
                  <Clock className="h-5 w-5 text-facet-amber" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    Availability
                  </h3>
                </div>
                <p className="text-sm text-text-muted">
                  Monday to Friday, 9:00 AM — 5:00 PM (UK time). We aim to
                  confirm all bookings within 2 hours during business hours.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-facet-green" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    What to Expect
                  </h3>
                </div>
                <ul className="text-sm text-text-muted space-y-2">
                  <li>30-minute consultation call</li>
                  <li>Discussion of your requirements</li>
                  <li>Platform demonstration if requested</li>
                  <li>No obligation or commitment</li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="h-5 w-5 text-facet-blue" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    Prefer to Call?
                  </h3>
                </div>
                <p className="text-sm text-text-muted">
                  Reach us directly on{" "}
                  <a
                    href="tel:+447465991845"
                    className="text-facet-amber hover:underline font-medium"
                  >
                    +44 7465 991845
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
