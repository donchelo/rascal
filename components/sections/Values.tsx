"use client";

import { Heading } from "@/components/ui/Heading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  "LIBERTAD",
  "CARÁCTER",
  "REBELDÍA",
  "TIEMPO",
  "VIDA",
  "AMISTAD",
  "FUTURO",
];

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-rascal-black text-rascal-cream overflow-hidden">
      <div className="container-standard">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="mb-4">
              <StatusBadge code="00.03" label="VALORES" dark />
            </div>
            <Heading as="h2" size="lg" className="mb-8 text-rascal-red">
              BRAND VALUES
            </Heading>
            <p className="text-lg md:text-xl lg:text-2xl text-rascal-cream/80 max-w-md">
              No creemos en permisos. Creemos en velocidad con alma.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-rascal-concrete pb-2"
              >
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter hover:text-rascal-red transition-colors duration-300 cursor-default">
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

