"use client";

import { Heading } from "@/components/ui/Heading";
import { MonoText } from "@/components/ui/MonoText";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const manifestoText = [
    "No nacimos para seguir el tráfico. Nacimos para abrir camino.",
    "Nos mueve la corriente eléctrica, pero no seguimos la corriente de nadie.",
    "Somos ruido en calles dormidas, chispa en ciudades cansadas.",
    "No creemos en permisos, ni en pedales dóciles. Creemos en velocidad con alma, en rebeldía con propósito.",
    "Cada giro es un acto de resistencia. Cada kilómetro, una declaración de independencia.",
    "No buscamos agradar. Buscamos despertar. Encender y Provocar.",
  ];

  return (
    <section
      id="manifesto"
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-rascal-cream"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading as="h2" size="lg" className="mb-4">
            El Manifiesto
          </Heading>
          <MonoText size="sm" className="text-rascal-concrete">
            ESTD / 20.22
          </MonoText>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {manifestoText.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Heading as="h3" size="md" className="text-rascal-red">
            RASCAL — Move fast. Burn rules.
          </Heading>
        </motion.div>
      </div>
    </section>
  );
}

