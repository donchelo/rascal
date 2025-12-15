"use client";

import { Heading } from "@/components/ui/Heading";
import { MonoText } from "@/components/ui/MonoText";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Lifestyle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const merchItems = [
    { name: "Hoodies", desc: "Script Bordado.", image: "hoodie.jpeg" },
    { name: "Camisetas", desc: "Velocidad Gráfica.", image: "t-shirt.jpeg" },
    { name: "Gorras", desc: "Two-tone. Sin grises.", image: "cap.jpeg" },
    { name: "Medias", desc: "Trouble. Maker.", image: "socks.jpeg" },
  ];

  return (
    <section
      id="merch"
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-rascal-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading as="h2" size="lg" className="mb-4">
            Merch & Lifestyle
          </Heading>
          <p className="text-lg md:text-xl text-rascal-concrete/80 max-w-2xl mx-auto">
            No es moda. Es uniforme de batalla.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {merchItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-rascal-black text-rascal-cream rounded-lg overflow-hidden hover:bg-rascal-red transition-colors cursor-pointer group"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={`/images/merch/${item.image}`}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rascal-black/90 to-transparent flex items-end p-6">
                  <div>
                    <Heading as="h3" size="sm" className="mb-2 text-rascal-cream group-hover:text-white">
                      {item.name}
                    </Heading>
                    <MonoText className="text-rascal-cream/70 text-sm">
                      {item.desc}
                    </MonoText>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <MonoText className="text-rascal-concrete/60">
            Próximamente disponible
          </MonoText>
        </motion.div>
      </div>
    </section>
  );
}

