"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhatsAppButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
            <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg transition-transform hover:scale-110"
                asChild
            >
                <Link
                    href="https://wa.me/34123456789"
                    target="_blank"
                    aria-label="Contactar por WhatsApp"
                >
                    <MessageCircle className="h-8 w-8 text-white" />
                </Link>
            </Button>
        </div>
    )
}
