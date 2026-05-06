"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, Building2, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@fymcompliancelimited.com",
    href: "mailto:info@fymcompliancelimited.com",
    color: { bg: "bg-blue-50", border: "border-blue-200/60", text: "text-blue-700" },
  },
  {
    icon: Phone,
    label: "Direct Line",
    value: "+44 7465 991845",
    href: "tel:+447465991845",
    color: { bg: "bg-emerald-50", border: "border-emerald-200/60", text: "text-emerald-700" },
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within business hours",
    color: { bg: "bg-indigo-50", border: "border-indigo-200/60", text: "text-indigo-700" },
  },
  {
    icon: Building2,
    label: "Jurisdiction",
    value: "England & Wales, UK",
    color: { bg: "bg-amber-50", border: "border-amber-200/60", text: "text-amber-700" },
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero — Navy banner */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-corp-blue-light uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-tight mb-6 text-white leading-[1.1]">
              Contact{" "}
              <span className="text-corp-blue-light">Us</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              For FCA authorisation, compliance advisory, or regulatory
              strategy&mdash;reach out and we&apos;ll respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details Strip */}
      <section className="py-10 bg-bg-navy border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className={`flex items-center justify-center h-9 w-9 rounded-lg border ${item.color.bg} ${item.color.border}`}>
                  <item.icon className={`h-4 w-4 ${item.color.text}`} />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-white/40 uppercase tracking-wide">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-white hover:text-corp-blue-light transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left — context */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <h2 className="text-2xl font-bold heading-tight mb-4 text-text-primary">
                Send Us a Message
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-8">
                Describe your requirements and a member of our team will respond
                with a structured outline of how we can support your objectives.
              </p>

              <div className="space-y-5">
                <div className="p-5 rounded-lg bg-bg-secondary border border-border">
                  <p className="text-xs font-semibold text-corp-blue uppercase tracking-wide mb-2">
                    Typical Enquiries
                  </p>
                  <ul className="space-y-2">
                    {[
                      "FCA authorisation & licensing",
                      "Compliance framework design",
                      "Regulatory strategy",
                      "Platform & infrastructure",
                    ].map((item) => (
                      <li key={item} className="text-sm text-text-secondary font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-bg-secondary border border-border">
                  <p className="text-xs font-semibold text-corp-blue uppercase tracking-wide mb-2">
                    Company
                  </p>
                  <div className="text-sm text-text-secondary font-medium space-y-1">
                    <p>FYM Compliance Limited</p>
                    <p>England &amp; Wales, United Kingdom</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
