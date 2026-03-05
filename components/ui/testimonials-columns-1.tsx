"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type ServiceItem = {
    title: string;
    description: string;
    image: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: ServiceItem[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-background rounded-3xl"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ description, image, title }, i) => (
                                <div className="p-5 sm:p-6 rounded-3xl border shadow-lg shadow-primary/5 w-[85vw] sm:w-[280px] xl:w-[300px] bg-white" key={i}>
                                    <div className="flex flex-col gap-4">
                                        <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-2">
                                            <Image
                                                src={image}
                                                alt={title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="font-bold text-lg sm:text-xl tracking-tight leading-6 text-foreground">{title}</div>
                                        <div className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{description}</div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
