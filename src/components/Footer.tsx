import Link from "next/link"
import { Instagram, MapPin, Phone, Scissors, Facebook, Twitter, Video } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <Scissors className="w-6 h-6 text-primary rotate-[-45deg]" />
                            <h3 className="text-2xl font-bold uppercase tracking-tighter text-white font-heading">
                                Loop <span className="text-primary">Barbershop</span>
                            </h3>
                        </div>
                        <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
                            Tu barbería de confianza en Barcelona. Recuperamos el arte del buen corte en un ambiente exclusivo y relajado.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-all">
                                <Video className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest">Contacto</h3>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                                <span>Carrer de Ejemplo 123<br />08000 Barcelona</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                                <a href="tel:+34000000000" className="hover:text-white transition-colors">
                                    +34 000 000 000
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest">Menú</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Inicio</Link>
                            </li>
                            <li>
                                <Link href="#servicios" className="hover:text-primary transition-colors">Servicios</Link>
                            </li>
                            <li>
                                <Link href="#nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-primary transition-colors">Reservar</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>
                        © {new Date().getFullYear()} Loop Barbershop. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-zinc-400">Privacidad</Link>
                        <Link href="#" className="hover:text-zinc-400">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
