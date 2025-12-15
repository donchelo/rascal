import { MonoText } from "@/components/ui/MonoText";
import { Heading } from "@/components/ui/Heading";

export function Footer() {
  return (
    <footer className="bg-rascal-black text-rascal-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Location */}
          <div>
            <Heading as="h3" size="sm" className="mb-4 text-rascal-cream">
              Base
            </Heading>
            <MonoText className="text-rascal-cream/80">
              Medellín, Colombia
            </MonoText>
          </div>

          {/* Contact */}
          <div>
            <Heading as="h3" size="sm" className="mb-4 text-rascal-cream">
              Señal
            </Heading>
            <div className="space-y-2">
              <MonoText className="text-rascal-cream/80 block">
                <a
                  href="tel:+573128994005"
                  className="hover:text-rascal-red transition-colors"
                >
                  +57 312 654 6102
                </a>
              </MonoText>
              <MonoText className="text-rascal-cream/80 block">
                <a
                  href="mailto:info@rascal.com"
                  className="hover:text-rascal-red transition-colors"
                >
                  info@rascal.com
                </a>
              </MonoText>
              <MonoText className="text-rascal-cream/80 block">
                <a
                  href="#contacto"
                  className="hover:text-rascal-red transition-colors"
                >
                  Más información
                </a>
              </MonoText>
            </div>
          </div>

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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-rascal-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <MonoText className="text-rascal-cream/60 text-sm">
                © 2022 RASCAL E-BIKE.
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

