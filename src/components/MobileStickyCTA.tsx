"use client";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion } from "motion/react";

export function MobileStickyCTA() {
    // Always visible - no scroll trigger needed for maximum conversion

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 z-50 md:hidden flex gap-3 shadow-2xl"
        >
            <a href="tel:+34123456789" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-none h-12 uppercase font-bold tracking-wide">
                    <Phone className="mr-2 h-4 w-4" /> Llamar
                </Button>
            </a>
            <a href="https://wa.me/34123456789?text=Hola%20Loop,%20quiero%20reservar%20una%20cita." target="_blank" rel="noopener noreferrer" className="flex-[2]">
                <Button className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-12 uppercase font-bold tracking-wide shadow-lg shadow-primary/20">
                    <Calendar className="mr-2 h-4 w-4" /> Reservar
                </Button>
            </a>
        </motion.div>
    );
}
