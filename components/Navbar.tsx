"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MonoText } from "@/components/ui/MonoText";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rascal-cream border-b-2 border-rascal-black">
      {/* Ruler markings (decorative) */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex overflow-hidden pointer-events-none opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-rascal-black h-full relative">
             {i % 5 === 0 && <div className="absolute bottom-0 left-0 w-full h-[150%] bg-rascal-black w-[1px]"></div>}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <div className="absolute -inset-2 border border-dashed border-transparent group-hover:border-rascal-black/20 transition-all duration-300"></div>
            <Image
              src="/images/RASCAL_LOGOTIPO_1.png"
              alt="RASCAL"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto relative z-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {["Bikes", "Rascalitos", "Merch", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 group"
              >
                <span className="relative z-10 text-sm font-bold uppercase tracking-wider text-rascal-black group-hover:text-rascal-cream transition-colors duration-200">
                  {item}
                </span>
                <span className="absolute inset-0 bg-rascal-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
            ))}
            
            <div className="ml-4 pl-4 border-l-2 border-rascal-black h-8 flex items-center">
               <MonoText size="sm" className="text-rascal-red font-bold">EST. 2025</MonoText>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-rascal-black hover:bg-rascal-black hover:text-rascal-cream transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
               <span className={cn("h-0.5 bg-current w-full transition-transform", isOpen && "rotate-45 translate-y-2")}></span>
               <span className={cn("h-0.5 bg-current w-full transition-opacity", isOpen && "opacity-0")}></span>
               <span className={cn("h-0.5 bg-current w-full transition-transform", isOpen && "-rotate-45 -translate-y-2")}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 border-t-2 border-rascal-black bg-rascal-cream",
            isOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <div className="flex flex-col divide-y-2 divide-rascal-black">
            {["Bikes", "Rascalitos", "Merch", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-bold uppercase tracking-wider hover:bg-rascal-red hover:text-rascal-cream transition-colors flex justify-between group"
              >
                <span>{item}</span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100">{'->'}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
