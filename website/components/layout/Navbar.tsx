"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rascal-cream/95 backdrop-blur-sm border-b border-rascal-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/RASCAL_LOGOTIPO_1.png"
              alt="RASCAL"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#bikes"
              className="text-sm font-medium uppercase tracking-wider hover:text-rascal-red transition-colors"
            >
              Bikes
            </Link>
            <Link
              href="#rascalitos"
              className="text-sm font-medium uppercase tracking-wider hover:text-rascal-red transition-colors"
            >
              Rascalitos
            </Link>
            <Link
              href="#merch"
              className="text-sm font-medium uppercase tracking-wider hover:text-rascal-red transition-colors"
            >
              Merch
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium uppercase tracking-wider hover:text-rascal-red transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-rascal-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-rascal-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-rascal-black"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href="#bikes"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-wider hover:text-rascal-red transition-colors"
            >
              Bikes
            </Link>
            <Link
              href="#rascalitos"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-wider hover:text-rascal-red transition-colors"
            >
              Rascalitos
            </Link>
            <Link
              href="#merch"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-wider hover:text-rascal-red transition-colors"
            >
              Merch
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-wider hover:text-rascal-red transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

