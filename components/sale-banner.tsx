"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { whatsappUrl } from "@/lib/whatsapp"



export function SaleBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [150, -150])
  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#e8ecef] via-[#f0f3f5] to-[#e8ecef]"
    >
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.06, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <span className="text-[12rem] sm:text-[18rem] lg:text-[22rem] font-extrabold text-foreground tracking-tighter">
          SALE
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Dental
              <br />
              Crowns
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Restore the strength and beauty of your smile with our premium dental crowns. We provide custom-fitted, durable, and natural-looking crowns designed to protect damaged teeth and enhance your overall oral health. Experience a comfortable, seamless process from preparation to final placement with guaranteed transparent pricing.
            </motion.p>

            {/* Crown Types — subtle editorial strip */}
            <motion.div
              className="mb-8 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.28 }}
            >
              <div className="grid grid-cols-2 divide-x divide-border/30 border-t border-border/30 pt-5">
                {/* Zirconia */}
                <div className="pr-5 space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 font-medium">Zirconia Crown</p>
                  <p className="text-xs font-semibold text-foreground/80 leading-snug">For strength &amp; longevity</p>
                  <div className="flex flex-col gap-1 pt-1">
                    {["Metal-free", "15+ yr lifespan", "Ideal for molars", "Biocompatible"].map((f) => (
                      <span key={f} className="text-[11px] text-muted-foreground/70 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-400/70 shrink-0 inline-block" />{f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* IPS Emax */}
                <div className="pl-5 space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 font-medium">IPS Emax Crown</p>
                  <p className="text-xs font-semibold text-foreground/80 leading-snug">For aesthetics &amp; clarity</p>
                  <div className="flex flex-col gap-1 pt-1">
                    {["All-ceramic", "High translucency", "Ideal for front teeth", "Stain-resistant"].map((f) => (
                      <span key={f} className="text-[11px] text-muted-foreground/70 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0 inline-block" />{f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href={whatsappUrl("Hello! I'd like to get more details about your Dental Crowns service and pricing at Shanu's Dental Clinic.")} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 font-medium px-6 py-5 text-sm rounded-full group"
                >
                  More Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Implant Image with Features */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Features removed as requested */}

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div style={{ y: parallaxY, rotate }}>
                {/* Shadow beneath implant */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/15 rounded-full blur-xl" />

                <Image
                  src="/images/equipment-removebg-preview.png"
                  alt="Dental Implant"
                  width={600}
                  height={900}
                  className="relative z-10 object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -top-12 -right-4 lg:-top-24 lg:-right-4 z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="relative"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {/* Badge */}
                <div className="w-32 h-32 sm:w-56 sm:h-56 rounded-full bg-background/90 backdrop-blur-md border border-border/30 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <span className="block text-xs sm:text-sm font-medium text-foreground/70">Get</span>
                    <span className="block text-3xl sm:text-5xl font-bold text-foreground">15%</span>
                    <span className="block text-xs sm:text-sm font-medium text-foreground/70">discount</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
