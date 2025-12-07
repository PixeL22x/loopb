"use client";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800 z-50 md:hidden flex gap-3"
                >
                    <a href="tel:+34123456789" className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent border-zinc-700 text-zinc-300 rounded-none h-12 uppercase font-bold tracking-wide">
                            <Phone className="mr-2 h-4 w-4" /> Llamar
                        </Button>
                    </a>
                    <a href="https://wa.me/34123456789?text=Hola%20Loop,%20quiero%20reservar%20una%20cita." target="_blank" rel="noopener noreferrer" className="flex-[2]">
                        <Button className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-12 uppercase font-bold tracking-wide shadow-lg shadow-primary/20">
                            <Calendar className="mr-2 h-4 w-4" /> Reservar
                        </Button>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
