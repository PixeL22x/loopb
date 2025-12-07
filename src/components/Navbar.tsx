"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { Instagram, Scissors } from "lucide-react";

export function NavbarComponent() {
  const navItems = [
    {
      name: "INICIO",
      link: "/",
    },
    {
      name: "SERVICIOS",
      link: "#servicios",
    },
    {
      name: "NOSOTROS",
      link: "#nosotros",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      <Navbar className="bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center gap-2">
            <Scissors className="w-6 h-6 text-primary rotate-[-45deg]" />
            <Link href="/" className="text-xl font-bold tracking-tighter uppercase text-white font-heading">
              LOOP <span className="text-primary">BARBERSHOP</span>
            </Link>
          </div>

          <NavItems items={navItems} className="text-sm font-medium tracking-widest text-zinc-400 hover:text-white" />

          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" as={Link} href="https://instagram.com" target="_blank" className="hidden md:flex bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 border border-white/10">
              <Instagram className="h-4 w-4" />
            </NavbarButton>
            <NavbarButton variant="primary" as={Link} href="#contact" className="bg-primary text-black font-bold uppercase tracking-wide hover:bg-primary/90 rounded-none px-6">
              Reservar
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="bg-zinc-950 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Scissors className="w-5 h-5 text-primary" />
              <span className="font-bold text-white uppercase tracking-tighter">Loop Barbershop</span>
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/10"
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-zinc-950 border-t border-white/5"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-zinc-300 hover:text-primary py-4 text-center uppercase tracking-widest text-sm font-bold border-b border-white/5 last:border-0"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4 px-4 pb-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                as={Link}
                href="#contact"
                className="w-full bg-primary text-black font-bold uppercase"
              >
                Pedir Cita
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
