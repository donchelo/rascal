import Image from "next/image";
import { MonoText } from "@/components/ui/MonoText";
import { Heading } from "@/components/ui/Heading";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function Footer() {
  return (
    <footer className="bg-rascal-black text-rascal-cream py-16 md:py-24 border-t-4 border-rascal-cream/20">
      <div className="container-standard">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <StatusBadge code="RASCAL" label="BRAND" dark />
            </div>
            <div className="mb-4">
              <Image
                src="/images/RASCAL_LOGOTIPO_3.png"
                alt="RASCAL"
                width={180}
                height={60}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </div>
            <MonoText className="text-rascal-cream/80">
              ESTD / 20.22
            </MonoText>
            <MonoText className="text-rascal-cream/60 mt-2 block">
              Move fast. Burn rules.
            </MonoText>
          </div>

          {/* Link to Contact */}
          <div className="text-center md:text-right">
            <MonoText className="text-rascal-cream/80 block mb-4">
              <a
                href="#contacto"
                className="hover:text-rascal-red transition-colors border-b border-transparent hover:border-rascal-red"
              >
                Contacto
              </a>
            </MonoText>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-rascal-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <MonoText className="text-rascal-cream/60 text-sm">
              © 2026 RASCAL E-BIKE.
            </MonoText>
            <MonoText className="text-rascal-cream/60 text-sm">
              LOC: MEDELLÍN, COLOMBIA
            </MonoText>
            <MonoText className="text-rascal-cream/60 text-sm">
              www.rascal.com
            </MonoText>
          </div>
        </div>
      </div>
    </footer>
  );
}

