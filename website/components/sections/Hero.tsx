"use client";

import { Heading } from "@/components/ui/Heading";
import { RascalButton } from "@/components/ui/RascalButton";
import { Marquee } from "@/components/ui/Marquee";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-rascal-black text-rascal-cream overflow-hidden">
      {/* Background Image (opcional) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/lifestyle/hero-bg.jpg"
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
          className="text-4xl md:text-6xl lg:text-8xl font-bold opacity-10"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Heading
          as="h1"
          size="xl"
          className="mb-6 md:mb-8 text-rascal-cream"
        >
          MOVE FAST.
          <br />
          BURN RULES.
        </Heading>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto text-rascal-cream/90">
          Surfear la ciudad. La bicicleta eléctrica que rompe las reglas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RascalButton
            variant="secondary"
            size="lg"
            onClick={() => {
              document.getElementById("bikes")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver las Bikes
          </RascalButton>
          <RascalButton
            variant="outline"
            size="lg"
            className="border-rascal-cream text-rascal-cream hover:bg-rascal-cream hover:text-rascal-black"
            onClick={() => {
              document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            El Manifiesto
          </RascalButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rascal-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rascal-cream/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

