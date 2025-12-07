"use client";
import Image from "next/image";
import { Instagram } from "lucide-react";

const team = [
    {
        name: "Carlos",
        role: "Master Barber",
        specialty: "Fades & Tattoos",
        image: "/team-carlos.png",
        instagram: "@carlos_cuts",
    },
    {
        name: "David",
        role: "Senior Stylist",
        specialty: "Classic Cuts & Shaves",
        image: "/team-david.png",
        instagram: "@david_barber",
    },
    {
        name: "Alex",
        role: "Junior Talent",
        specialty: "Urban Styles & Designs",
        image: "/team-alex.png",
        instagram: "@alex_scissors",
    },
];

export function TeamSection() {
    return (
        <section className="py-24 bg-zinc-900 border-t border-zinc-800">
            <div className="container px-4">
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm">El Equipo</h3>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">CONOCE A TUS BARBEROS</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Habilidad, pasión y años de experiencia tras cada sillón.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <div className="aspect-[3/4] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">{member.role}</p>
                                    <h3 className="text-3xl font-heading text-white font-bold mb-2">{member.name}</h3>
                                    <p className="text-zinc-300 text-sm italic mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        "{member.specialty}"
                                    </p>
                                    <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        <Instagram className="w-4 h-4" />
                                        {member.instagram}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Border */}
                            <div className="absolute -inset-2 border border-zinc-700/50 z-[-1] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:inset-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
