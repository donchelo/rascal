"use client";

import { Heading } from "@/components/ui/Heading";
import { MonoText } from "@/components/ui/MonoText";
import { StatusBadge } from "@/components/ui/StatusBadge";
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
      className="section-padding-large bg-rascal-concrete text-rascal-cream relative overflow-hidden"
    >
      {/* Decorative border elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-rascal-red/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-rascal-red/20"></div>

      <div className="container-standard max-w-6xl">
        {/* Panel de Control Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="border-4 border-rascal-cream bg-rascal-black/50 relative"
        >
          {/* Cabecera del Panel - Status Strip */}
          <div className="border-b-4 border-rascal-cream bg-rascal-black/70 p-3 sm:p-3.5 md:p-4 flex items-center justify-between flex-wrap gap-2 sm:gap-3 md:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap min-w-0 flex-1">
              <StatusBadge code="RASCAL" label="COMM_LINK" dark={true} />
              <MonoText size="sm" className="text-rascal-cream/60 text-xs sm:text-sm whitespace-nowrap">
                COMMUNICATION ARRAY
              </MonoText>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <StatusBadge code="STATUS" label="LIVE" dark={true} />
              {/* Indicador de estado animado */}
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 bg-rascal-red border-2 border-rascal-cream flex-shrink-0"
              />
            </div>
          </div>

          {/* Área de Mensaje - Mission Brief */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
            className="p-6 md:p-8 lg:p-12 border-b-4 border-rascal-cream"
          >
            <div className="mb-4">
              <StatusBadge code="FIG.0" label="MISSION BRIEF" dark={true} />
            </div>
            <Heading as="h2" size="lg" className="mb-4 text-rascal-cream">
              ¿TE SUBES O TE QUEDAS?
            </Heading>
            <MonoText size="lg" className="text-rascal-cream/90 block leading-relaxed">
              No explicamos. Rodamos. Si tienes dudas, pregunta. Si quieres una, escribe.
            </MonoText>
          </motion.div>

          {/* La Grilla de Contacto - The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-rascal-cream">
            {/* Módulo 1: Señal (WhatsApp) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "linear" }}
              className="p-6 md:p-8 lg:p-12 relative group"
            >
              <div className="mb-6">
                <StatusBadge code="CH.01" label="SEÑAL" dark={true} />
              </div>
              <Heading as="h3" size="sm" className="mb-6 text-rascal-red">
                WHATSAPP
              </Heading>
              <MonoText size="lg" className="mb-6 block text-rascal-cream/90">
                +57 312 899 4005
              </MonoText>
              <a
                href="tel:+573128994005"
                className="inline-block border-2 border-rascal-red bg-rascal-red/10 px-4 py-2 hover:bg-rascal-red hover:text-rascal-cream transition-all duration-200 font-mono text-sm uppercase tracking-wider text-rascal-red relative group/btn"
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-rascal-red opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-rascal-red opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                <span className="relative">[CONNECT]</span>
              </a>
            </motion.div>

            {/* Módulo 2: Frecuencia (Email) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "linear" }}
              className="p-6 md:p-8 lg:p-12 relative group"
            >
              <div className="mb-6">
                <StatusBadge code="CH.02" label="FRECUENCIA" dark={true} />
              </div>
              <Heading as="h3" size="sm" className="mb-6 text-rascal-red">
                EMAIL
              </Heading>
              <MonoText size="lg" className="mb-6 block text-rascal-cream/90 break-all select-all">
                info@rascal.com
              </MonoText>
              <a
                href="mailto:info@rascal.com"
                className="inline-block border-2 border-rascal-red bg-rascal-red/10 px-4 py-2 hover:bg-rascal-red hover:text-rascal-cream transition-all duration-200 font-mono text-sm uppercase tracking-wider text-rascal-red relative group/btn"
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-rascal-red opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-rascal-red opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                <span className="relative">[WRITE]</span>
              </a>
            </motion.div>

            {/* Módulo 3: Red (Instagram) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "linear" }}
              className="p-6 md:p-8 lg:p-12 relative group"
            >
              <div className="mb-6">
                <StatusBadge code="CH.03" label="RED" dark={true} />
              </div>
              <Heading as="h3" size="sm" className="mb-6 text-rascal-red">
                INSTAGRAM
              </Heading>
              <MonoText size="lg" className="mb-6 block text-rascal-cream/90">
                @rascal_ebikes
              </MonoText>
              <a
                href="https://www.instagram.com/rascal_ebikes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-rascal-red bg-rascal-red/10 px-4 py-2 hover:bg-rascal-red hover:text-rascal-cream transition-all duration-200 font-mono text-sm uppercase tracking-wider text-rascal-red relative group/btn"
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-rascal-red opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-rascal-red opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                <span className="relative">[VIEW]</span>
              </a>
            </motion.div>
          </div>

          {/* Pie de Panel - Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "linear" }}
            className="border-t-4 border-rascal-cream bg-rascal-black/70 p-3 sm:p-3.5 md:p-4 flex items-center justify-between flex-wrap gap-2 sm:gap-3 md:gap-4"
          >
            <MonoText size="sm" className="text-rascal-cream/80 text-xs sm:text-sm">
              LOC: MEDELLÍN, COLOMBIA // SECTOR 4
            </MonoText>
            <MonoText size="sm" className="text-rascal-cream/60 text-xs sm:text-sm">
              SN: RSCL-2024-001
            </MonoText>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

