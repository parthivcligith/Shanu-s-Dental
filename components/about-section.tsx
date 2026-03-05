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
                        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase">
                            Our Philosophy
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                            About Us
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            In the rhythm of your everyday hustle, your smile is your greatest asset. At Dr. SHANU'S DENTAL CLINIC we don’t just treat your teeth, we care for you. We have designed every part of our practice to ensure your comfort, from our modern technology to gentle approach. Our goal is simple, we want every patient to walk out of our doors with a great smile and heartfelt sense of confidence and care.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We provide you with personalised care and treatment tailored to your unique lifestyle and goals. We understand no two smiles are the same, which is why we give customised, advanced treatment and comprehensive range of services with complete transparency of the treatment plan.
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
