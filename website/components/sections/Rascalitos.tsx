"use client";

import { Heading } from "@/components/ui/Heading";
import { MonoText } from "@/components/ui/MonoText";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Rascalitos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const products = [
    { title: "Balance Bikes", desc: "Primeros pasos sobre ruedas", image: "balance-bike.jpg" },
    { title: "Cascos", desc: "Seguridad con estilo multicolor", image: "helmet-kids.jpg" },
    { title: "Merch Kids", desc: "Ropa y accesorios para pequeños troublemakers", image: "merch-kids.jpg" },
  ];

  return (
    <section
      id="rascalitos"
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-rascal-red text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading as="h2" size="lg" className="mb-4 text-white">
            Rascalitos
          </Heading>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            La submarca infantil. Cascos, balance bikes y merchandising para los más pequeños.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden group hover:bg-white/20 transition-colors"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={`/images/rascalitos/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="p-8">
                <Heading as="h3" size="sm" className="mb-4 text-white">
                  {item.title}
                </Heading>
                <p className="text-white/80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

