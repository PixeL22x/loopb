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
import { Instagram } from "lucide-react";

export function NavbarComponent() {
  const navItems = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Sobre Mí",
      link: "#about",
    },
    {
      name: "Especialidades",
      link: "#services",
    },
    {
      name: "Contacto",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" as={Link} href="https://www.instagram.com/manupinto.imagen" target="_blank">
              <Instagram className="h-4 w-4 mr-2 inline" />
              Instagram
            </NavbarButton>
            <NavbarButton variant="gradient" as={Link} href="#contact">
              Pedir Cita
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                as={Link}
                href="https://www.instagram.com/manupinto.imagen"
                target="_blank"
                className="w-full"
              >
                <Instagram className="h-4 w-4 mr-2 inline" />
                Instagram
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="gradient"
                as={Link}
                href="#contact"
                className="w-full"
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
