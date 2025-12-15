"use client";

import { Heading } from "@/components/ui/Heading";
import { MonoText } from "@/components/ui/MonoText";
import { RascalButton } from "@/components/ui/RascalButton";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const specs = [
    { label: "Potencia", value: "750W" },
    { label: "Velocidad Máx", value: "45 km/h" },
    { label: "Autonomía", value: "80 km" },
    { label: "Peso", value: "28 kg" },
  ];

  return (
    <section
      id="bikes"
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-rascal-black text-rascal-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading as="h2" size="lg" className="mb-4 text-rascal-cream">
            La E-Bike
          </Heading>
          <p className="text-lg md:text-xl text-rascal-cream/80 max-w-2xl mx-auto">
            Diseño afilado, potencia callejera y cero excusas para quedarte quieto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square bg-rascal-concrete rounded-lg overflow-hidden group"
          >
            <Image
              src="/images/product/bike-main.jpg"
              alt="RASCAL E-Bike - Diseño afilado, potencia callejera"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={(e) => {
                // Fallback si la imagen no existe
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.parentElement?.querySelector(".image-fallback");
                if (fallback) {
                  (fallback as HTMLElement).style.display = "flex";
                }
              }}
            />
            <div className="image-fallback absolute inset-0 flex items-center justify-center hidden">
              <div className="text-center">
                <MonoText className="text-rascal-cream/50 text-4xl">
                  [BIKE IMAGE]
                </MonoText>
                <p className="text-sm text-rascal-cream/40 mt-2">
                  Coloca bike-main.jpg en /images/product/
                </p>
              </div>
            </div>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <Heading as="h3" size="md" className="mb-6 text-rascal-cream">
                Especificaciones Técnicas
              </Heading>
              <div className="grid grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="border border-rascal-cream/20 p-4 rounded"
                  >
                    <MonoText className="text-rascal-cream/60 text-sm mb-2">
                      {spec.label}
                    </MonoText>
                    <MonoText className="text-rascal-red text-xl font-bold">
                      {spec.value}
                    </MonoText>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-rascal-cream/90">
                No te llevamos del punto A al B: te llevamos contra la corriente.
              </p>
              <RascalButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Consultar Disponibilidad
              </RascalButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

