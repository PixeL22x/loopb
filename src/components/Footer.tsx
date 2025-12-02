import Link from "next/link"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
            <div className="container px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4 md:col-span-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Manu Pinto
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                            Enfermero Dermoestético especializado en tratamientos faciales, corporales y capilares.
                            8 años de experiencia cuidando de tu belleza y salud en Clínica Ferrus, Barcelona.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">Contacto</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                                <span>Clínica Ferrus, Barcelona</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                                <a href="mailto:contacto@manupinto.com" className="hover:text-primary transition-colors">
                                    contacto@manupinto.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                                <a href="tel:+34123456789" className="hover:text-primary transition-colors">
                                    +34 123 456 789
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">Enlaces</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="#about" className="hover:text-primary transition-colors">
                                    Sobre Mí
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-primary transition-colors">
                                    Tratamientos
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-primary transition-colors">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/manupinto.imagen" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <Instagram className="h-4 w-4" />
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {new Date().getFullYear()} Manu Pinto. Todos los derechos reservados.
                        </p>
                        <p className="text-xs text-muted-foreground text-center md:text-right">
                            Enfermería Dermoestética Profesional
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
