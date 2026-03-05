"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { whatsappUrl } from "@/lib/whatsapp"
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
    <AuroraBackground
      ref={containerRef}
      id="home"
      className="relative min-h-screen h-auto flex items-center justify-center pt-20"
      style={{ overflowX: "clip" }}
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
            SHANU'S DENTAL
          </span>
          <span
            className="absolute text-[12vw] font-medium tracking-tight whitespace-nowrap text-foreground/[0.03] blur-[1px]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              transform: "translate(4px, 4px)",
            }}
          >
            SHANU'S DENTAL
          </span>
          {/* Main text */}
          <span
            className="text-[12vw] font-medium tracking-tight whitespace-nowrap text-foreground/[0.06]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            SHANU'S DENTAL
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
                Comfortable Dentistry
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
                SHANU'S DENTAL
              </span>
              <span
                className="absolute inset-0 text-accent/20 blur-[0.5px]"
                style={{ transform: "translate(2px, 2px)" }}
                aria-hidden="true"
              >
                SHANU'S DENTAL
              </span>
              {/* Main text */}
              <span className="relative">SHANU'S DENTAL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-foreground/70 max-w-md mb-8 leading-relaxed"
            >
              Modern treatment without pain and fear — in a calm atmosphere, with care for every member of your family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href={whatsappUrl("Hello! I'd like to learn more about your dental services and book an appointment.")} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-base rounded-full group"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Tooth with Depth & Overlay */}
          <motion.div className="relative flex items-center justify-center z-20 will-change-transform" style={{ y: toothY, scale: toothScale }}>
            {/* Pedestal Shadow */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-foreground/5 rounded-full blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Pedestal */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-48 h-6 bg-gradient-to-b from-muted to-accent/30 rounded-full shadow-lg" />
              <div className="w-40 h-4 bg-gradient-to-b from-accent/40 to-accent/20 rounded-full mx-auto -mt-1" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Main Tooth Image with floating animation */}
              <motion.img
                src="/images/tooth-hero.png"
                alt="3D Tooth Model"
                className="relative w-96 sm:w-[30rem] lg:w-[42rem] h-auto drop-shadow-2xl will-change-transform"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Overlay glow effect on tooth */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-white/40 rounded-full blur-2xl" />
                <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
              </motion.div>
            </motion.div>

            {/* Floating Subtitle Right */}

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
    </AuroraBackground>
  )
}
