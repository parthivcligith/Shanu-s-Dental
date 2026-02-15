"use client"

import { useState, useEffect } from "react"
import { LumaSpin } from "@/components/ui/luma-spin"
import { motion } from "framer-motion"

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
            <div className="flex flex-col items-center gap-4">
                <LumaSpin />
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm font-medium tracking-widest text-muted-foreground uppercase"
                >
                    Loading
                </motion.p>
            </div>
        </motion.div>
    )
}
