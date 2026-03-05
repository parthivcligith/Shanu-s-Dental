"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const services = [
    {
        title: "General Dentistry",
        description: "Comprehensive care offering for all your everyday dental needs to ensure a lifetime of good oral health.",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787",
    },
    {
        title: "Routine Dental Checkup",
        description: "Regular examinations to detect issues early and maintain your optimal smile.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    },
    {
        title: "Cosmetic & Restorative Dentistry",
        description: "Transform your smile with aesthetic restorations designed to match your natural teeth perfectly.",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe",
    },
    {
        title: "Root Canal Treatment",
        description: "Saving your natural teeth with modern endodontic procedures focusing on your utmost comfort.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    },
    {
        title: "Post & Core",
        description: "Strengthening and rebuilding severely damaged teeth to support durable crowns.",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    },
    {
        title: "Dental Crowns & Bridges",
        description: "Strong, custom-fitted prosthetics that seamlessly replace missing or cracked teeth.",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
    },
    {
        title: "Tooth Whitening",
        description: "Professional, safe whitening treatments revealing a brighter and more confident smile.",
        image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49",
    },
    {
        title: "Scaling & Polishing",
        description: "Expert deep cleaning that removes plaque build-up and leaves your teeth brilliantly stain-free.",
        image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629",
    },
    {
        title: "Gum Disease Treatment",
        description: "Effective periodontal therapies to heal infections and protect your tooth-supporting tissues.",
        image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce",
    },
    {
        title: "Bad Breath Treatment",
        description: "Targeted solutions diagnosing and eliminating the root causes of halitosis for fresh breath.",
        image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9",
    },
    {
        title: "Preventive Dentistry",
        description: "Proactive measures and education to stop dental issues before they even start.",
        image: "https://images.unsplash.com/photo-1498843053639-170ff2122f35",
    },
    {
        title: "Tooth Fillings",
        description: "High-quality composite restorations securely filling cavities while matching your tooth color.",
        image: "https://images.unsplash.com/photo-1667133295315-820bb6481730",
    },
    {
        title: "Composite Bonding",
        description: "Quick and painless molding of tooth-colored resin to rapidly fix chipped or gapped teeth.",
        image: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2",
    },
    {
        title: "Veneers",
        description: "Ultra-thin porcelain laminates flawlessly correcting discolorations and shape imperfections.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
    },
    {
        title: "Hollywood Smile Makeover",
        description: "A complete digital smile design blending multiple procedures to create your perfect red-carpet look.",
        image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3",
    },
    {
        title: "Pediatric Dentistry",
        description: "Gentle, fun, and child-friendly care specialized in ensuring happy smiles for infants and teens.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    },
    {
        title: "Extractions (Surgical & Non-Surgical)",
        description: "Safe and smooth removal of damaged or wisdom teeth using state-of-the-art pain relief.",
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17",
    },
    {
        title: "Complete & Partial Dentures",
        description: "High-quality, flexible dentures providing a comfortable fit and restoring your ability to chew and speak.",
        image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31",
    },
    {
        title: "Orthodontic Retainers",
        description: "Custom clear and fixed retainers meant to secure and preserve your beautifully aligned teeth.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    },
    {
        title: "Public Health Awareness",
        description: "Community-driven initiatives and workshops advocating for proper oral hygiene habits.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    }
];

const firstColumn = services.slice(0, 5);
const secondColumn = services.slice(5, 10);
const thirdColumn = services.slice(10, 15);
const fourthColumn = services.slice(15, 20);

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

                <div className="flex justify-center flex-row gap-4 xl:gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[650px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={35} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden sm:block" duration={45} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden md:block" duration={38} />
                    <TestimonialsColumn testimonials={fourthColumn} className="hidden lg:block" duration={42} />
                </div>
            </div>
        </section>
    );
};
