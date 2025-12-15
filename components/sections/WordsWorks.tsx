"use client";

import { Marquee } from "@/components/ui/Marquee";

export function WordsWorks() {
  const words = [
    "FELICIDAD",
    "DISRUPTIVO",
    "CONTRAVÍA",
    "ELÉCTRICA",
    "JOVEN",
    "ATREVIDO",
    "LIBERAR ENDORFINAS",
    "BIENESTAR",
  ];

  const repeatedWords = Array(4).fill(words).flat().join(" — ");

  return (
    <section className="py-12 bg-rascal-red text-rascal-cream border-y-4 border-rascal-black overflow-hidden">
        <Marquee
          text={repeatedWords}
          speed="normal"
          className="text-4xl md:text-6xl font-bold uppercase"
        />
    </section>
  );
}

