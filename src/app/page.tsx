"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TeamSection } from "@/components/TeamSection";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { VintagePriceList } from "@/components/VintagePriceList";
import { Reveal } from "@/components/Reveal";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { Scissors, Sun, User, Calendar, Sparkles, Clock, MapPin, Quote, Star, ChevronRight, ArrowRight, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      title: "Corte Loop",
      description: "Asesoramiento personalizado, lavado relajante y corte de precisión. Acabado con peinado profesional.",
      price: "20€",
      duration: "45 min",
      image: "/barber-cut.png"
    },
    {
      title: "Arreglo de Barba",
      description: "Perfilado con navaja, rebajado y tratamiento con toalla caliente y aceites esenciales.",
      price: "15€",
      duration: "30 min",
      image: "/barber-shave.png"
    },
    {
      title: "Combo Completo",
      description: "La experiencia definitiva. Corte de cabello y arreglo de barba premium con ritual de bienestar.",
      price: "32€",
      duration: "75 min",
      image: "/barber-hero.png"
    },
    {
      title: "Afeitado Clásico",
      description: "Ritual tradicional con toalla caliente, espuma de alta calidad y masaje facial post-afeitado.",
      price: "20€",
      duration: "40 min",
      image: "/barber-shave.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground pb-20 md:pb-0" ref={containerRef}>
      <MobileStickyCTA />

      {/* Modern Hero Section with Parallax */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
          <Image
            src="/barbershop-hero.png"
            alt="Barbershop Interior"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/20 z-10" />
        </motion.div>

        {/* Decorative Marquee (Background) */}
        <div className="absolute top-1/4 left-0 w-full z-10 opacity-10 rotate-[-5deg] pointer-events-none mix-blend-overlay">
          <InfiniteMarquee items={["STYLE", "PRECISION", "LUXURY", "BARBER", "CLASSIC", "MODERN"]} speed="slow" />
        </div>

        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4"
          >
            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 md:right-20 -mt-20 hidden md:flex items-center justify-center w-32 h-32 rounded-full border border-primary/30 text-primary uppercase text-[10px] tracking-widest font-bold"
            >
              <div className="absolute inset-0 flex items-center justify-center text-center">EST.<br />2024</div>
            </motion.div>

            <h2 className="text-primary uppercase tracking-[0.5em] text-xs md:text-sm font-bold animate-fadeIn drop-shadow-md">
              Barcelona's Finest
            </h2>

            {/* Massive Typography */}
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 font-heading leading-none mix-blend-overlay opacity-50 absolute top-0 left-0 w-full transform -translate-y-4 blur-sm select-none">
                LOOP
              </h1>
              <h1 className="relative text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-white font-heading leading-none drop-shadow-2xl z-10">
                LOOP
              </h1>
            </div>

            <p className="text-2xl md:text-4xl lg:text-5xl font-light text-zinc-300 tracking-wide font-heading uppercase">
              Barbershop
            </p>

            <div className="h-1 w-24 bg-primary mx-auto my-8 rounded-full"></div>

            {/* Modern Barber Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link href="https://wa.me/34123456789?text=Hola%20Loop,%20quiero%20reservar%20una%20cita." target="_blank" className="relative group overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10 skew-x-12 origin-left"></div>
                <Button size="lg" className="relative bg-primary text-black hover:bg-primary hover:text-black font-bold uppercase tracking-wide px-12 h-16 text-base w-full sm:w-auto rounded-none border-0 shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all group-hover:shadow-[0_0_35px_rgba(234,179,8,0.7)] group-hover:-translate-y-1">
                  <Calendar className="mr-2 h-5 w-5" /> Reservar Ahora
                </Button>
              </Link>

              <Link href="#servicios" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-white/20 bg-white/5 backdrop-blur-md text-zinc-100 hover:bg-white hover:text-black hover:border-white uppercase tracking-wide px-12 h-16 text-base w-full sm:w-auto rounded-none transition-all duration-300 group">
                  <span className="mr-2">Ver Servicios</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Glass Strip of Marquee */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-black/20 backdrop-blur-md border-t border-white/10 flex items-center overflow-hidden z-20">
          <div className="w-full animate-marquee whitespace-nowrap flex items-center text-zinc-400 text-sm font-mono tracking-widest gap-16 uppercase opacity-70">
            <span>• Corte Clásico</span>
            <span>• Afeitado Tradicional</span>
            <span>• Ambiente Exclusivo</span>
            <span>• Cerveza & Café</span>
            <span>• Corte Clásico</span>
            <span>• Afeitado Tradicional</span>
            <span>• Ambiente Exclusivo</span>
            <span>• Cerveza & Café</span>
            <span>• Corte Clásico</span>
            <span>• Afeitado Tradicional</span>
            <span>• Ambiente Exclusivo</span>
            <span>• Cerveza & Café</span>
            <span>• Corte Clásico</span>
            <span>• Afeitado Tradicional</span>
            <span>• Ambiente Exclusivo</span>
            <span>• Cerveza & Café</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="pt-4 pb-24 md:py-24 bg-background relative">
        {/* Premium Divider */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        <div className="container px-4">
          <Reveal>
            <div className="text-center mb-8 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground uppercase tracking-tight">Nuestros Servicios</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="text-zinc-500 max-w-2xl mx-auto pt-4">
                Cortes diseñados para encajar con tu estilo de vida.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <VintagePriceList />
          </Reveal>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="nosotros" className="py-24 bg-zinc-900/50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Placeholder */}
            <Reveal delay={0.2}>
              <div className="order-2 lg:order-1 relative h-[500px] bg-zinc-800 border-r-4 border-b-4 border-primary/20 group overflow-hidden">
                <Image
                  src="/barber-interior.png"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  alt="Interior Loop Barbershop"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2 space-y-8">
              <Reveal>
                <div className="space-y-2">
                  <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Nuestra Filosofía</h3>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                    La Experiencia Loop
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
                  <p>
                    En <strong>Loop Barbershop</strong>, creemos que el estilo es cíclico pero la calidad es atemporal. Combinamos las técnicas de la vieja escuela con las tendencias más actuales para ofrecerte un look que te defina.
                  </p>
                  <p>
                    Nuestro espacio está diseñado para que te desconectes del ruido de la ciudad. Buena música, café de especialidad y profesionales que se toman el tiempo necesario para lograr la perfección en cada detalle.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-6 border border-zinc-800 bg-black/20 text-center">
                    <h3 className="text-4xl font-bold text-white mb-2 font-heading">+500</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Clientes Felices</p>
                  </div>
                  <div className="p-6 border border-zinc-800 bg-black/20 text-center">
                    <h3 className="text-4xl font-bold text-white mb-2 font-heading">100%</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Estilo Genuino</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Strategy: Team Section (Building Authority) */}
      <TeamSection />

      {/* Testimonials */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        <div className="container px-4">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl font-bold font-heading text-white mb-4">LO QUE DICEN ELLOS</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <TestimonialCard
                name="Carlos Ruiz"
                text="El mejor degradado que me han hecho en años. El ambiente es brutal y la atención de 10."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <TestimonialCard
                name="David M."
                text="Un trato espectacular. Se nota que saben lo que hacen. El arreglo de barba con toalla caliente es otro nivel."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <TestimonialCard
                name="Alex Torres"
                text="Mi barbería de confianza desde que abrieron. Buen precio para la calidad que ofrecen. Recomendadísimo."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location / Info Strip */}
      <section className="py-16 bg-primary text-primary-foreground border-y border-yellow-600/20">
        <div className="container px-4 flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">
          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-black/10 rounded-none transform rotate-3 group-hover:rotate-0 transition-transform">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-xl uppercase font-heading">Visítanos</h4>
              <p className="text-primary-foreground/80 font-mono text-sm">Carrer de Ejemplo 123, BCN</p>
            </div>
          </div>
          <div className="w-px h-16 bg-black/10 hidden md:block"></div>
          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-black/10 rounded-none transform -rotate-3 group-hover:rotate-0 transition-transform">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-xl uppercase font-heading">Horario</h4>
              <p className="text-primary-foreground/80 font-mono text-sm">Lun - Vie: 10h - 20h</p>
            </div>
          </div>
          <div className="w-px h-16 bg-black/10 hidden md:block"></div>
          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-black/10 rounded-none transform rotate-3 group-hover:rotate-0 transition-transform">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-xl uppercase font-heading">Reservas</h4>
              <p className="text-primary-foreground/80 font-mono text-sm">Online o WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string, text: string }) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-8 hover:border-primary/50 transition-colors group">
      <div className="flex text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
        <Star className="w-4 h-4 fill-current" />
        <Star className="w-4 h-4 fill-current" />
        <Star className="w-4 h-4 fill-current" />
        <Star className="w-4 h-4 fill-current" />
        <Star className="w-4 h-4 fill-current" />
      </div>
      <p className="text-zinc-400 italic mb-6 leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-zinc-800 flex items-center justify-center font-bold text-zinc-500 rounded-full text-xs">
          {name.charAt(0)}
        </div>
        <span className="font-bold text-white uppercase text-sm tracking-wide">{name}</span>
      </div>
    </div>
  )
}
