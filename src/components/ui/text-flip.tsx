"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TextFlipProps {
    words: string[]
    className?: string
}

export function TextFlip({ words, className = "" }: TextFlipProps) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 2500)

        return () => clearInterval(interval)
    }, [words.length])

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={className}
            >
                {words[index]}
            </motion.span>
        </AnimatePresence>
    )
}
