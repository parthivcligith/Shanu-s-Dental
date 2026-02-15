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
                            Excellence in Badminton Training
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Welcome to James Badminton Academy, where passion meets performance. Founded by elite badminton professionals, we are more than just a training facility — we are a launchpad for champions who aspire to master the sport.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our philosophy is built on personalized training, competitive excellence, and holistic athlete development. With world-class coaches, state-of-the-art facilities, and proven coaching methodologies, we transform beginners into competitive players and elevate champions to the next level. From fundamentals to advanced techniques, we are committed to your badminton journey.
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
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">12+</h3>
                            <p className="text-base font-medium text-muted-foreground">Years of Excellence</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">2k+</h3>
                            <p className="text-base font-medium text-muted-foreground">Trained Athletes</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</h3>
                            <p className="text-base font-medium text-muted-foreground">Elite Coaches</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</h3>
                            <p className="text-base font-medium text-muted-foreground">Athletes Rating</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
