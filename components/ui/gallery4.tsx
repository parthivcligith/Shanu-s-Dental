"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Gallery4Item {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface Gallery4Props {
    title?: string;
    description?: string;
    items: Gallery4Item[];
}

const data = [
    {
        id: "shadcn-ui",
        title: "shadcn/ui: Building a Modern Component Library",
        description:
            "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
        href: "https://ui.shadcn.com",
        image:
            "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "tailwind",
        title: "Tailwind CSS: The Utility-First Revolution",
        description:
            "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
        href: "https://tailwindcss.com",
        image:
            "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "astro",
        title: "Astro: The All-in-One Web Framework",
        description:
            "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
        href: "https://astro.build",
        image:
            "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "react",
        title: "React: Pioneering Component-Based UI",
        description:
            "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
        href: "https://react.dev",
        image:
            "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "nextjs",
        title: "Next.js: The React Framework for Production",
        description:
            "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
        href: "https://nextjs.org",
        image:
            "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
];

const Gallery4 = ({
    title = "Case Studies",
    description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
    items = data,
}: Gallery4Props) => {

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-transparent to-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold md:text-5xl lg:text-5xl text-foreground mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Scrollable Container */}
                <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="group relative h-[420px] w-[85vw] sm:w-[350px] lg:w-[400px] shrink-0 snap-center [perspective:1000px] cursor-pointer"
                        >
                            <div className="absolute w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">
                                {/* Front Side */}
                                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 mix-blend-multiply" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                                        <h3 className="text-3xl font-bold tracking-tight text-white">{item.title}</h3>
                                        <div className="mt-6 flex items-center text-sm font-semibold uppercase tracking-widest text-primary">
                                            Hover for details <ArrowRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 w-full h-full rounded-2xl bg-white dark:bg-zinc-900 border-2 border-primary/20 p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                                    <p className="text-base text-muted-foreground mb-8 leading-relaxed line-clamp-5 px-2">
                                        {item.description}
                                    </p>
                                    <a
                                        href={item.href}
                                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-transform hover:scale-105 mt-auto"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Gallery4 };
