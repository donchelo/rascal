"use client";

import { Heading } from "@/components/ui/Heading";
import { RascalButton } from "@/components/ui/RascalButton";
import { Marquee } from "@/components/ui/Marquee";
import { StatusBadge } from "@/components/ui/StatusBadge";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-rascal-black text-rascal-cream overflow-hidden">
      {/* Background Image (opcional) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/lifestyle/hero-bg.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      {/* Background Marquee */}
      <div className="absolute top-0 left-0 right-0 z-0">
        <Marquee
          text="MOVE FAST. BURN RULES."
          speed="slow"
          className="text-2xl sm:text-3xl md:text-6xl lg:text-8xl font-bold opacity-10"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center container-standard max-w-6xl">
        <div className="mb-4 md:mb-6 flex justify-center">
           <StatusBadge code="00.01" label="BENEFICIO FUNCIONAL" dark />
        </div>
        <Heading
          as="h1"
          size="xl"
          className="mb-4 md:mb-6 lg:mb-8 text-rascal-cream px-4"
        >
          MOVE FAST.
          <br />
          BURN RULES.
        </Heading>

        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 md:mb-8 lg:mb-12 max-w-2xl mx-auto text-rascal-cream/90 font-medium px-4">
          No vendemos movilidad, vendemos libertad. Diseño afilado, potencia callejera y cero excusas para quedarte quieto.
          <br className="hidden md:block" />
          <span className="block mt-2 text-rascal-cream/80">No te llevamos del punto A al B: te llevamos contra la corriente.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
          <RascalButton
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            onClick={() => {
              document.getElementById("bikes")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            LA MÁQUINA
          </RascalButton>
          <RascalButton
            variant="outline"
            size="lg"
            className="border-rascal-cream text-rascal-cream hover:bg-rascal-cream hover:text-rascal-black w-full sm:w-auto min-w-[200px]"
            onClick={() => {
              document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            El Manifiesto
          </RascalButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-rascal-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rascal-cream/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

