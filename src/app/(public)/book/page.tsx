"use client";

import { motion } from "framer-motion";
import { BookingForm } from "@/components/booking-form";
import { Clock, Shield, Phone, ChevronRight } from "lucide-react";

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
            <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
              Schedule a Call
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold heading-tight mb-6 text-text-primary">
              Book a{" "}
              <span className="text-corp-blue">Consultation</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Schedule a call with our team to discuss your solution
              requirements. Choose a service, pick a time, and we&apos;ll
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
              <div className="card-corporate p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-corp-blue-pale border border-corp-blue/10">
                    <Clock className="h-4 w-4 text-corp-blue" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary">
                    Availability
                  </h3>
                </div>
                <p className="text-sm text-text-secondary">
                  Monday to Friday, 9:00 AM — 5:00 PM (UK time). We aim to
                  confirm all bookings within 2 hours during business hours.
                </p>
              </div>

              <div className="card-corporate p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-corp-blue-pale border border-corp-blue/10">
                    <Shield className="h-4 w-4 text-corp-blue" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary">
                    What to Expect
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "30-minute consultation call",
                    "Discussion of your requirements",
                    "Solution demonstration if requested",
                    "No obligation or commitment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <ChevronRight className="h-3.5 w-3.5 text-corp-blue mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-corporate p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-corp-blue-pale border border-corp-blue/10">
                    <Phone className="h-4 w-4 text-corp-blue" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary">
                    Prefer to Call?
                  </h3>
                </div>
                <p className="text-sm text-text-secondary">
                  Reach us directly on{" "}
                  <a
                    href="tel:+447465991845"
                    className="text-corp-blue hover:underline font-semibold"
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
