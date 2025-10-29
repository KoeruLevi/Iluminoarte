import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fundación de Arte Inclusivo",
  description: "Formación, creación y exhibición de obras por artistas con discapacidad intelectual.",
  openGraph: {
    title: "Fundación de Arte Inclusivo",
    description: "Formación, creación y exhibición de obras por artistas con discapacidad intelectual.",
    images: ["/og-default.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundación de Arte Inclusivo",
    description: "Arte inclusivo que transforma vidas.",
    images: ["/og-default.png"],
  },
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <a href="#contenido" className="sr-only focus:not-sr-only">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
