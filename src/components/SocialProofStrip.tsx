"use client";

import { Flame, Star, Clock } from "lucide-react";
import { motion } from "motion/react";

export function SocialProofStrip() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20 py-3 md:py-4 overflow-hidden"
        >
            <div className="container px-4">
                <div className="flex items-center justify-center gap-6 md:gap-12 text-xs md:text-sm">
                    {/* Bookings Today */}
                    <div className="flex items-center gap-2 text-zinc-300">
                        <Flame className="w-4 h-4 text-primary animate-pulse" />
                        <span className="font-bold text-primary">+12</span>
                        <span className="hidden sm:inline">reservas hoy</span>
                        <span className="sm:hidden">hoy</span>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-4 bg-zinc-700"></div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-zinc-300">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="font-bold text-white">4.9/5</span>
                        <span className="hidden sm:inline text-zinc-400">(500+ reseñas)</span>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-4 bg-zinc-700 hidden md:block"></div>

                    {/* Last Booking */}
                    <div className="items-center gap-2 text-zinc-400 hidden md:flex">
                        <Clock className="w-4 h-4 text-zinc-500" />
                        <span className="text-xs">Última reserva hace 8 min</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
