
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Sparkles, User, Syringe, MapPin, Calendar, Star, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TextFlip } from "@/components/ui/text-flip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-6 pb-12 md:pb-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Professional Photo - Shows FIRST on mobile */}
            <div className="mx-auto lg:ml-auto flex justify-center relative order-1 lg:order-2">
              <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/FotoManuPintoEnPersona.jpg"
                  alt="Manu Pinto - Enfermero Dermoestético"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                  priority
                />
              </div>
            </div>

            {/* Text Content - Shows SECOND on mobile */}
            <div className="flex flex-col justify-center space-y-3 md:space-y-4 order-2 lg:order-1">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary w-fit font-medium">
                Enfermería Dermoestética Avanzada
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Realza tu <TextFlip words={["belleza natural", "mejor versión", "esencia única"]} className="text-slate-900 bg-slate-100 px-2 rounded" /> con <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Manu Pinto</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-base md:text-xl">
                Especialista en tratamientos faciales, corporales y capilares con 8 años de experiencia.
                Tu bienestar en las mejores manos en Clínica Ferrus, Barcelona.
              </p>
              <div className="flex flex-col gap-2 w-full pt-2">
                <Button size="lg" asChild className="w-full">
                  <Link href="#contact">
                    <Calendar className="mr-2 h-4 w-4" />
                    Reserva tu Cita
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <Link href="#services">
                    Ver Tratamientos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-l from-slate-100 to-transparent opacity-50" />
      </section>

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/FotoManuPinto2.jpg"
                alt="Manu Pinto - Enfermero Dermoestético"
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                <span className="bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">Sobre Mí</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Soy Manu Pinto, enfermero dermoestético con una trayectoria de 8 años dedicados al cuidado de la piel y la estética.
              </p>
              <p className="text-muted-foreground">
                Mi filosofía se basa en resultados naturales y armónicos, utilizando las técnicas más avanzadas y seguras.
                Actualmente paso consulta en la prestigiosa <strong>Clínica Ferrus</strong> en Barcelona, donde ofrezco un trato personalizado y cercano a cada paciente.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-medium">8 Años de Experiencia</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Clínica Ferrus, Barcelona</span>
                </li>
                <li className="flex items-center gap-2">
                  <Syringe className="h-5 w-5 text-primary" />
                  <span className="font-medium">Técnicas Avanzadas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Mis Especialidades</span>
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Tratamientos personalizados diseñados para realzar tu belleza y mejorar tu bienestar.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Facial"
              description="Rejuvenecimiento facial, hidratación profunda, corrección de arrugas y mejora de la calidad de la piel con tratamientos mínimamente invasivos."
              icon={Sparkles}
              image="/1.jpg"
            />
            <ServiceCard
              title="Corporal"
              description="Tratamientos reductores, reafirmantes y anticelulíticos. Moldea tu figura y mejora la textura de tu piel con aparatología de última generación."
              icon={User}
              image="/2.jpg"
            />
            <ServiceCard
              title="Capilar"
              description="Mesoterapia capilar y tratamientos para fortalecer el cabello, frenar la caída y estimular el crecimiento de forma efectiva."
              icon={Syringe}
              image="/3.jpg"
            />
          </div>
        </div>
      </section>



      {/* Success Cases Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Casos de Éxito</span>
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Resultados reales que hablan por sí mismos. Descubre cómo hemos ayudado a nuestros pacientes a potenciar su belleza.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/4.jpg"
                  alt="Tratamiento Facial Resultado"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Rejuvenecimiento Facial</h3>
                <p className="text-muted-foreground">Mejora visible de la textura y luminosidad de la piel tras 3 sesiones de mesoterapia facial.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/5.jpg"
                  alt="Tratamiento Corporal Resultado"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Remodelación Corporal</h3>
                <p className="text-muted-foreground">Reducción de volumen y reafirmación en zona abdominal con nuestro protocolo combinado.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/6.jpg"
                  alt="Tratamiento Capilar Resultado"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Recuperación Capilar</h3>
                <p className="text-muted-foreground">Aumento de la densidad y grosor del cabello tras completar el ciclo de tratamiento capilar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-700 font-medium mb-2">
              Dudas Comunes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Preguntas Frecuentes</span>
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl">
              Resolvemos tus dudas principales antes de tu visita.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-slate-200">
                <AccordionTrigger className="text-left hover:text-indigo-600 transition-colors">
                  ¿Los tratamientos son dolorosos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  La mayoría de nuestros tratamientos son mínimamente invasivos y muy bien tolerados. Utilizamos anestesia tópica cuando es necesario para asegurar tu máximo confort.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-slate-200">
                <AccordionTrigger className="text-left hover:text-indigo-600 transition-colors">
                  ¿Cuánto tiempo duran los resultados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  La duración varía según el tratamiento y el paciente. Por ejemplo, los rellenos con ácido hialurónico suelen durar entre 6 y 12 meses, mientras que los tratamientos de calidad de piel requieren mantenimiento periódico.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-slate-200">
                <AccordionTrigger className="text-left hover:text-indigo-600 transition-colors">
                  ¿Ofrecéis primera consulta gratuita?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, la primera consulta de valoración es totalmente gratuita. En ella analizamos tu caso y diseñamos un plan de tratamiento personalizado sin compromiso.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="text-left hover:text-indigo-600 transition-colors">
                  ¿Puedo hacer vida normal después del tratamiento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  En la gran mayoría de los casos, sí. Puedes reincorporarte a tu rutina inmediatamente. Te daremos pautas específicas de cuidados posteriores según el procedimiento realizado.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Lo que dicen mis pacientes</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Marta Rodríguez"
              text="Llevaba tiempo buscando un especialista que entendiera que quería resultados naturales. Manu me recomendó un plan de armonización facial y no puedo estar más feliz. Me veo descansada y radiante, pero sigo siendo yo."
            />
            <TestimonialCard
              name="Javier Méndez"
              text="Acudí a Manu por la caída del cabello y su tratamiento de mesoterapia ha sido un cambio radical. En pocos meses he notado mucha más densidad y fuerza. Su trato en la Clínica Ferrus es impecable, te hace sentir muy cómodo."
            />
            <TestimonialCard
              name="Sofía Almagro"
              text="Me realicé un tratamiento corporal para mejorar la flacidez y los resultados han superado mis expectativas. Manu es muy honesto con lo que se puede conseguir y eso me dio mucha confianza. ¡Un 10 como profesional!"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Pide tu Cita</span>
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Ven a visitarme a Clínica Ferrus. La primera consulta de valoración es clave para diseñar tu plan de tratamiento personalizado.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ubicación</h3>
                    <p className="text-muted-foreground">Carrer de Example, 123, 08000 Barcelona</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Horario</h3>
                    <p className="text-muted-foreground">Lunes a Viernes: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/ClinicaFerrus.jpg"
                alt="Clínica Ferrus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ className, children }: { className?: string, children: React.ReactNode }) {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
}

function TestimonialCard({ name, text }: { name: string, text: string }) {
  return (
    <Card className="p-6 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <Quote className="h-8 w-8 text-primary/20" />
        <p className="text-muted-foreground italic">"{text}"</p>
      </div>
      <div className="mt-6 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <div className="flex text-yellow-400">
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
          </div>
        </div>
      </div>
    </Card>
  )
}

