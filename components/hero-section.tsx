"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  })

  const toothY = useTransform(smoothProgress, [0, 1], [0, 500])
  const toothScale = useTransform(smoothProgress, [0, 1], [1, 1.8])
  const textY = useTransform(smoothProgress, [0, 1], [0, 50])
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative min-h-screen h-auto flex items-center justify-center pt-20"
      style={{
        overflowX: "clip",
        backgroundImage: "url('/images/cloud-mattress-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative will-change-transform"
        >
          {/* Shadow/depth layers */}
          <span
            className="absolute text-[12vw] font-medium tracking-tight whitespace-nowrap text-foreground/[0.02] blur-[2px]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              transform: "translate(8px, 8px)",
            }}
          >
            FEZA MATTRESSES
          </span>
          <span
            className="absolute text-[12vw] font-medium tracking-tight whitespace-nowrap text-foreground/[0.03] blur-[1px]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              transform: "translate(4px, 4px)",
            }}
          >
            FEZA MATTRESSES
          </span>
          {/* Main text */}
          <span
            className="text-[12vw] font-medium tracking-tight whitespace-nowrap text-foreground/[0.06]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            FEZA MATTRESSES
          </span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Side - Text */}
          <motion.div className="flex flex-col justify-center pt-20 lg:pt-0 will-change-transform" style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-sm font-medium tracking-widest text-foreground/60 uppercase">
                Premium Sleep Comfort
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative text-7xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              {/* Depth shadow layers */}
              <span
                className="absolute inset-0 text-accent/30 blur-[1px]"
                style={{ transform: "translate(4px, 4px)" }}
                aria-hidden="true"
              >
                FEZA MATTRESSES
              </span>
              <span
                className="absolute inset-0 text-accent/20 blur-[0.5px]"
                style={{ transform: "translate(2px, 2px)" }}
                aria-hidden="true"
              >
                FEZA MATTRESSES
              </span>
              {/* Main text */}
              <span className="relative">FEZA MATTRESSES</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-foreground/70 max-w-md mb-8 leading-relaxed"
            >
              Experience cloud-like comfort and superior support for restorative sleep. Crafted with premium materials for every member of your family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-base rounded-full group"
              >
                Shop Mattresses
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Mattress with Cloud Comfort */}
          <motion.div className="relative flex items-center justify-center z-20 will-change-transform" style={{ y: toothY, scale: toothScale }}>
            {/* Shadow beneath mattress */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-12 bg-black/10 rounded-full blur-2xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Floating Mattress Container */}
              <motion.div
                className="relative will-change-transform"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {/* Mattress Design - 3D perspective box */}
                <div className="relative w-80 h-48 sm:w-96 sm:h-56 lg:w-[28rem] lg:h-64">
                  {/* Front face - White mattress */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl border-2 border-white/60 transform perspective"
                    style={{
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
                    }}>
                    {/* Quilted texture pattern */}
                    <div className="absolute inset-4 grid grid-cols-4 gap-2 opacity-20">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg" />
                      ))}
                    </div>
                    {/* Comfort text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-blue-600 font-bold text-lg sm:text-xl">Feza</p>
                        <p className="text-blue-400 text-xs sm:text-sm">Premium Sleep</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Side perspective */}
                  <div className="absolute top-4 -right-2 w-8 h-40 bg-gradient-to-b from-blue-200 to-blue-300 rounded-r-2xl shadow-lg opacity-80" />
                </div>
              </motion.div>

              {/* Glow effect around mattress */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-blue-300/20 rounded-full blur-3xl" />
              </motion.div>

              {/* Floating comfort label */}
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <p className="text-sm font-semibold text-foreground/70">Cloud-like Comfort</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>



      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}
