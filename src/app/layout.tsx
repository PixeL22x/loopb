import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { NavbarComponent as Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Loop Barbershop | Estilo y Precisión",
  description: "Barbería premium en Barcelona. Cortes de caballero, arreglos de barba y afeitados clásicos en un ambiente exclusivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={cn(inter.className, oswald.variable, "min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden")}>
        <div className="bg-noise"></div>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
