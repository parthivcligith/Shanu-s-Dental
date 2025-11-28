"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Implantation",
    description: "We use modern implant materials and ensure long-lasting aesthetic results.",
    image: "/dental-implant-procedure-modern-clinic.jpg",
  },
  {
    title: "Professional Hygiene",
    description: "A deep cleaning procedure that removes tartar, plaque, and keeps your smile healthy.",
    image: "/dental-hygiene-cleaning-teeth-whitening.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, aesthetic restorations, and smile design.",
    image: "/cosmetic-dentistry-beautiful-smile-veneers.jpg",
  },
  {
    title: "Orthodontics",
    description: "Bite correction for kids and adults. Braces, aligners, individual treatment plans.",
    image: "/orthodontics-braces-aligners-teeth.jpg",
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle and caring dental treatment for children in a friendly environment.",
    image: "/pediatric-dentist-child-patient.jpg",
  },
  {
    title: "Root Canal Treatment",
    description: "Saving natural teeth with modern endodontic procedures and pain-free treatment.",
    image: "/root-canal-treatment-endodontics.jpg",
  },
  {
    title: "Dental Surgery",
    description: "Complex surgical procedures including extractions and bone grafting performed by experts.",
    image: "/dental-surgery-procedure.jpg",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="services" className="py-24 bg-secondary/30">
      <div className="w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Popular Services
          </h2>
        </motion.div>

        {/* Services Horizontal Scroll */}
        <div className="overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          <div className="flex gap-6 px-4 sm:px-6 lg:px-8 min-w-max">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 w-[300px] sm:w-[350px] flex-shrink-0"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-foreground hover:text-foreground/80 group/btn"
                  >
                    View Service
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
