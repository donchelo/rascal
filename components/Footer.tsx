import { MonoText } from "@/components/ui/MonoText";
import { Heading } from "@/components/ui/Heading";

export function Footer() {
  return (
    <footer className="bg-rascal-black text-rascal-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Heading as="h3" size="sm" className="mb-4 text-rascal-cream">
              RASCAL
            </Heading>
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
                className="hover:text-rascal-red transition-colors"
              >
                Contacto
              </a>
            </MonoText>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-rascal-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <MonoText className="text-rascal-cream/60 text-sm">
                © 2026 RASCAL E-BIKE.
              </MonoText>
            <MonoText className="text-rascal-cream/60 text-sm mt-4 md:mt-0">
              www.rascal.com
            </MonoText>
          </div>
        </div>
      </div>
    </footer>
  );
}

