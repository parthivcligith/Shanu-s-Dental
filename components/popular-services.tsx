"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const services = [
    {
        title: "General Dentistry",
        description: "Comprehensive care offering for all your everyday dental needs to ensure a lifetime of good oral health.",
        image: "/images/generaldentistry.jpeg",
    },
    {
        title: "Routine Dental Checkup",
        description: "Regular examinations to detect issues early and maintain your optimal smile.",
        image: "/images/CHECKUP.jpeg",
    },
    {
        title: "Cosmetic & Restorative Dentistry",
        description: "Transform your smile with aesthetic restorations designed to match your natural teeth perfectly.",
        image: "/images/Cosmetic & Restorative Dentistry.jpeg",
    },
    {
        title: "Root Canal Treatment",
        description: "Saving your natural teeth with modern endodontic procedures focusing on your utmost comfort.",
        image: "/images/. Root Canal Treatment.jpeg",
    },
    {
        title: "Post & Core",
        description: "Strengthening and rebuilding severely damaged teeth to support durable crowns.",
        image: "/images/POSTANDCORE.jpeg",
    },
    {
        title: "Dental Crowns & Bridges",
        description: "Strong, custom-fitted prosthetics that seamlessly replace missing or cracked teeth.",
        image: "/images/Dental Crowns & Bridges.jpeg",
    },
    {
        title: "Tooth Whitening",
        description: "Professional, safe whitening treatments revealing a brighter and more confident smile.",
        image: "/images/Tooth Whitening.jpeg",
    },
    {
        title: "Scaling & Polishing",
        description: "Expert deep cleaning that removes plaque build-up and leaves your teeth brilliantly stain-free.",
        image: "/images/Scaling & Polishing.jpeg",
    },
    {
        title: "Gum Disease Treatment",
        description: "Effective periodontal therapies to heal infections and protect your tooth-supporting tissues.",
        image: "/images/Gum Disease Treatment.jpeg",
    },
    {
        title: "Bad Breath Treatment",
        description: "Targeted solutions diagnosing and eliminating the root causes of halitosis for fresh breath.",
        image: "/images/bad breath treatment.jpeg",
    },
    {
        title: "Preventive Dentistry",
        description: "Proactive measures and education to stop dental issues before they even start.",
        image: "/images/PREVENTIVEDENTISTRY.jpeg",
    },
    {
        title: "Tooth Fillings",
        description: "High-quality composite restorations securely filling cavities while matching your tooth color.",
        image: "/images/TOOTHFILLING.jpeg",
    },
    {
        title: "Composite Bonding",
        description: "Quick and painless molding of tooth-colored resin to rapidly fix chipped or gapped teeth.",
        image: "/images/COMPOSITE BONDING.jpeg",
    },
    {
        title: "Veneers",
        description: "Ultra-thin porcelain laminates flawlessly correcting discolorations and shape imperfections.",
        image: "/images/Veneers.jpeg",
    },
    {
        title: "Hollywood Smile Makeover",
        description: "A complete digital smile design blending multiple procedures to create your perfect red-carpet look.",
        image: "/images/Hollywood smile.jpeg",
    },
    {
        title: "Pediatric Dentistry",
        description: "Gentle, fun, and child-friendly care specialized in ensuring happy smiles for infants and teens.",
        image: "/images/pediatric dentistry.jpeg",
    },
    {
        title: "Extractions (Surgical & Non-Surgical)",
        description: "Safe and smooth removal of damaged or wisdom teeth using state-of-the-art pain relief.",
        image: "/images/extraction.jpeg",
    },
    {
        title: "Complete & Partial Dentures",
        description: "High-quality, flexible dentures providing a comfortable fit and restoring your ability to chew and speak.",
        image: "/images/Complete & Partial Dentures.jpeg",
    },
    {
        title: "Orthodontic Retainers",
        description: "Custom clear and fixed retainers meant to secure and preserve your beautifully aligned teeth.",
        image: "/images/retainers.jpeg",
    },
    {
        title: "Public Health Awareness",
        description: "Community-driven initiatives and workshops advocating for proper oral hygiene habits.",
        image: "/images/public health awareness.jpeg",
    },
    {
        title: "Emergency Dental Care",
        description: "Immediate, expert care for dental emergencies — relieving pain and protecting your smile when it matters most.",
        image: "/images/emergency dental care.jpeg",
    }
];

const firstColumn = services.slice(0, 6);
const secondColumn = services.slice(6, 11);
const thirdColumn = services.slice(11, 16);
const fourthColumn = services.slice(16, 21);

export const PopularServices = () => {
    return (
        <section id="services" className="bg-background my-24 relative overflow-hidden">
            <div className="container z-10 mx-auto px-4 xl:max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="border border-border/40 py-1.5 px-5 rounded-full text-xs font-semibold tracking-widest text-primary uppercase shadow-sm bg-primary/5">
                            Our Expertise
                        </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mt-2 mb-6 text-foreground">
                        Popular Services
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We offer a wide range of dental services to ensure your smile is healthy and beautiful.
                    </p>
                </motion.div>

                {/* Mobile: 2 columns, no images */}
                <div className="flex sm:hidden justify-center flex-row gap-3 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[500px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={35} showImage={false} />
                    <TestimonialsColumn testimonials={secondColumn} duration={45} showImage={false} />
                </div>

                {/* Desktop: all 4 columns, with images */}
                <div className="hidden sm:flex justify-center flex-row gap-4 xl:gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[650px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={35} />
                    <TestimonialsColumn testimonials={secondColumn} duration={45} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden md:block" duration={38} />
                    <TestimonialsColumn testimonials={fourthColumn} className="hidden lg:block" duration={42} />
                </div>
            </div>
        </section>
    );
};
