"use client"

import { motion } from "framer-motion"

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-24 bg-background overflow-hidden"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide">
                            WHO WE ARE
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                            Redefining Dental Care in Dubai
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Welcome to Shanu's Dental, where your smile is our masterpiece. Located in the vibrant heart of Dubai, we are more than just a dental clinic — we are a sanctuary for oral health and aesthetic excellence.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our philosophy is built on the belief that dental visits should be comfortable, transparent, and empowering. With a team of internationally trained specialists and a facility equipped with cutting-edge technology, we deliver precision treatments tailored to your unique needs. From preventative care to transformative smile makeovers, we are dedicated to elevating your dental experience.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</h3>
                            <p className="text-base font-medium text-muted-foreground">Years of Excellence</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">5k+</h3>
                            <p className="text-base font-medium text-muted-foreground">Happy Patients</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</h3>
                            <p className="text-base font-medium text-muted-foreground">Expert Specialists</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</h3>
                            <p className="text-base font-medium text-muted-foreground">Google Rating</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
