"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, MapPin } from "lucide-react";

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Regulatory Expertise",
    description:
      "Deep domain knowledge across 8 areas of regulated financial services, informing every solution we deliver.",
  },
  {
    icon: Award,
    title: "Proven Solutions",
    description:
      "7+ solutions delivered and maintained in-house, powering compliance operations across multiple industries.",
  },
  {
    icon: MapPin,
    title: "UK Incorporated",
    description:
      "Registered in England & Wales with UK data sovereignty as a first-class concern. Regulated data stays within jurisdictional boundaries.",
  },
];

export function WhyFymSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Value propositions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-corp-blue uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold heading-tight mb-4 text-text-primary">
              Why FYM Compliance
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              We combine regulatory expertise with delivery capability to provide
              solutions that understand the landscape they operate in.
            </p>

            <div className="space-y-6">
              {valueProps.map((prop, i) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex gap-4 p-5 rounded-xl bg-bg-secondary border border-border"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-corp-blue shrink-0">
                    <prop.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-1 tracking-tight">
                      {prop.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden card-shadow"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              alt="Professional consultation"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
