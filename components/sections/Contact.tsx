"use client";

import { Heading } from "@/components/ui/Heading";
import { MonoText } from "@/components/ui/MonoText";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-rascal-concrete text-rascal-cream"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" size="lg" className="mb-8 text-rascal-cream">
            ¿Te subes o te quedas?
          </Heading>
          <p className="text-lg md:text-xl text-rascal-cream/80 mb-12 max-w-2xl mx-auto">
            No explicamos. Rodamos. Si tienes dudas, pregunta. Si quieres una, escribe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-rascal-black/50 p-6 rounded-lg"
            >
              <Heading as="h3" size="sm" className="mb-4 text-rascal-red">
                Señal
              </Heading>
              <MonoText>
                <a
                  href="tel:+573128994005"
                  className="hover:text-rascal-red transition-colors"
                >
                  +57 312 654 6102
                </a>
              </MonoText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-rascal-black/50 p-6 rounded-lg"
            >
              <Heading as="h3" size="sm" className="mb-4 text-rascal-red">
                Frecuencia
              </Heading>
              <MonoText>
                <a
                  href="mailto:info@rascal.com"
                  className="hover:text-rascal-red transition-colors"
                >
                  info@rascal.com
                </a>
              </MonoText>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-rascal-cream/20 pt-8"
          >
            <MonoText className="text-rascal-cream/60">
              Medellín, Colombia
            </MonoText>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

