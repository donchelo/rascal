import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Rascalitos } from "@/components/sections/Rascalitos";
import { Lifestyle } from "@/components/sections/Lifestyle";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <ProductShowcase />
      <Rascalitos />
      <Lifestyle />
      <Contact />
    </main>
  );
}
