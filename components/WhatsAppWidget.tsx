"use client";

import { useState } from "react";
import Image from "next/image";
import { MonoText } from "@/components/ui/MonoText";

const WHATSAPP_NUMBER = "573128994005";
const WHATSAPP_MESSAGE = "Hola, quiero saber más sobre RASCAL";

export function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Escribir por WhatsApp"
    >
      {/* Main Button */}
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110">
          <Image
            src="/images/RASCAL_SIMBOLO_4.png"
            alt="RASCAL"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
          />
        </div>

        {/* Decorative corners on hover */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-rascal-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-rascal-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-rascal-black border-2 border-rascal-red text-rascal-cream whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
          <MonoText className="text-xs uppercase tracking-wider">
            Escríbenos
          </MonoText>
          <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-rascal-black border-r border-b border-rascal-red"></div>
        </div>
      )}
    </a>
  );
}

