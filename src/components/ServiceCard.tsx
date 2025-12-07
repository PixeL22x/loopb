"use client";
import Image from "next/image"
import { Clock, ArrowUpRight } from "lucide-react"

interface ServiceCardProps {
    title: string
    description: string
    price: string
    duration: string
    image: string
}

export function ServiceCard({ title, description, price, duration, image }: ServiceCardProps) {
    return (
        <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">

            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />

                {/* Floating Price Tag */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1">
                    <span className="text-primary font-bold font-heading tracking-widest text-lg">{price}</span>
                </div>
            </div>

            {/* Content Section (Overlapping Image) */}
            <div className="relative -mt-12 p-6 flex flex-col flex-1 isolate">
                <div className="mb-4">
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400 border border-zinc-800 px-2 py-1 bg-black/50 mb-3 group-hover:border-primary/30 transition-colors">
                        <Clock className="w-3 h-3" /> {duration}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-heading tracking-tight uppercase group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                    {description}
                </p>

                {/* Bottom Action - Slide Up */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group/btn cursor-pointer">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                        Reservar Cita
                    </span>
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                    </div>
                </div>
            </div>
        </div>
    )
}
