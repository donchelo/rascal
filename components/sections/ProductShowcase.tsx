"use client";

import { Heading } from "@/components/ui/Heading";
import { MonoText } from "@/components/ui/MonoText";
import { RascalButton } from "@/components/ui/RascalButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const specs = [
    { label: "POTENCIA", value: "750W", code: "PWR-01" },
    { label: "VELOCIDAD MÁX", value: "45 KM/H", code: "SPD-MX" },
    { label: "AUTONOMÍA", value: "80 KM", code: "RNG-80" },
    { label: "PESO", value: "28 KG", code: "WGT-28" },
    { label: "BATERÍA", value: "48V 14AH", code: "BAT-48" },
    { label: "FRENOS", value: "HYDRAULIC", code: "BRK-HY" },
  ];

  return (
    <section
      id="bikes"
      ref={ref}
      className="section-padding-large bg-rascal-black text-rascal-cream relative"
    >
      {/* Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container-standard relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 border-b-2 border-rascal-cream/20 pb-6 md:pb-8"
        >
          <div className="flex justify-between items-end mb-4">
             <StatusBadge code="00.04" label="PRODUCT SPECIFICATION" dark />
             <MonoText className="text-rascal-red hidden md:block">FIG. 2A — E-BIKE</MonoText>
          </div>
          
          <Heading as="h2" size="lg" className="text-rascal-cream uppercase tracking-tighter">
            La Máquina
          </Heading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-rascal-concrete relative border-2 border-rascal-cream/20 group">
              {/* Corner Markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-rascal-red z-20"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-rascal-red z-20"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-rascal-red z-20"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-rascal-red z-20"></div>

              <Image
                src="/images/product/bike-main.jpg"
                alt="RASCAL E-Bike"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              
               <div className="absolute bottom-4 left-4 bg-rascal-black/80 backdrop-blur px-2 py-1 border border-rascal-cream/20">
                  <MonoText size="sm" className="text-rascal-cream/60">IMG_REF: 8842-A</MonoText>
               </div>
            </div>
          </motion.div>

          {/* Specs Table */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="border-2 border-rascal-cream/20 mb-6 md:mb-8 bg-rascal-black">
              <div className="border-b-2 border-rascal-cream/20 p-4 sm:p-3 md:p-4 bg-rascal-cream/5">
                <MonoText className="font-bold text-sm sm:text-xs md:text-sm">TECHNICAL DATA</MonoText>
              </div>
              
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex border-b border-rascal-cream/20 last:border-b-0 hover:bg-rascal-cream/5 transition-colors"
                >
                  <div className="w-16 sm:w-20 md:w-24 p-3 sm:p-2.5 md:p-3 border-r border-rascal-cream/20 flex items-center justify-center bg-rascal-cream/5">
                     <MonoText size="sm" className="text-rascal-cream/40 text-[10px] sm:text-xs">{spec.code}</MonoText>
                  </div>
                  <div className="flex-1 p-3 sm:p-2.5 md:p-3 pl-4 sm:pl-3 md:pl-6 border-r border-rascal-cream/20 flex items-center">
                    <MonoText className="text-rascal-cream/80 text-sm sm:text-xs md:text-sm font-bold leading-tight">{spec.label}</MonoText>
                  </div>
                  <div className="flex-1 p-3 sm:p-2.5 md:p-3 flex items-center justify-end pr-4 sm:pr-3 md:pr-6">
                    <MonoText className="text-rascal-red font-bold text-sm sm:text-xs md:text-sm">{spec.value}</MonoText>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-6">
              <div className="border-l-4 border-rascal-red pl-4 md:pl-6 py-2">
                <p className="text-base md:text-lg lg:text-xl text-rascal-cream font-medium max-w-md">
                  "No vendemos movilidad. Vendemos libertad en su forma más pura."
                </p>
              </div>
              <RascalButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                CONFIGURAR UNIDAD
              </RascalButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
