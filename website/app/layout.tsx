import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const coreSans = localFont({
  src: [
    {
      path: "../public/fonts/CoreSansA15Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/CoreSansA35Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/CoreSansA45Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CoreSansA55Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CoreSansA65Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-core-sans",
  display: "swap",
});

const silkaMono = localFont({
  src: "../public/fonts/SilkaMono-Regular.otf",
  variable: "--font-silka-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RASCAL — Move fast. Burn rules.",
  description: "Surfear la ciudad. La bicicleta eléctrica que rompe las reglas. No vendemos movilidad, vendemos libertad.",
  keywords: ["bicicleta eléctrica", "e-bike", "Medellín", "movilidad urbana", "RASCAL", "bicicleta eléctrica Medellín"],
  authors: [{ name: "RASCAL E-BIKE" }],
  openGraph: {
    title: "RASCAL — Move fast. Burn rules.",
    description: "Surfear la ciudad. La bicicleta eléctrica que rompe las reglas.",
    type: "website",
    locale: "es_CO",
    siteName: "RASCAL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${coreSans.variable} ${silkaMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
