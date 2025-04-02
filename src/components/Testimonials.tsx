"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import TestimonialAvatar from './TestimonialAvatar';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Predefined color classes to avoid Tailwind's dynamic class limitations
const colorClasses = {
    emerald: {
        accent: 'bg-emerald-500',
        accentLight: 'bg-emerald-500/20',
        text: 'text-emerald-700'
    },
    blue: {
        accent: 'bg-blue-500',
        accentLight: 'bg-blue-500/20',
        text: 'text-blue-700'
    },
    amber: {
        accent: 'bg-amber-500',
        accentLight: 'bg-amber-500/20',
        text: 'text-amber-700'
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3
        }
    }
};

const Testimonials: React.FC = () => {
    return (
        <section className="py-14 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    className="grid gap-6 md:gap-7 lg:gap-8 max-w-5xl w-full mx-auto md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {testimonials.map((testimonial, index) => {
                        // Determine color scheme based on index
                        const colorSchemeKey = index % 3 === 0 ? 'emerald' : index % 3 === 1 ? 'blue' : 'amber';
                        const colors = colorClasses[colorSchemeKey];
                        
                        // Add some visual randomness by varying the angle slightly
                        const rotation = index % 2 === 0 
                            ? `rotate(${0.2 + Math.random() * 0.4}deg)` 
                            : `rotate(-${0.2 + Math.random() * 0.4}deg)`;
                        
                        return (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 relative group h-full"
                                style={{transform: rotation}}
                                variants={itemVariants}
                                whileHover={{
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {/* Corner decoration */}
                                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                                    <div className={`absolute transform rotate-45 ${colors.accentLight} w-10 h-10 -top-5 -right-5 group-hover:opacity-90 transition-opacity`}></div>
                                </div>
                                
                                {/* Top colorful bar */}
                                <div className={`h-1 ${colors.accent} w-full`}></div>
                                
                                {/* Content */}
                                <div className="p-5 md:p-6 flex flex-col h-full">
                                    <div className="relative mb-auto">
                                        <FaQuoteLeft className="absolute -top-1 -left-1 text-primary/30 text-lg" />
                                        <p className="text-muted text-sm leading-relaxed z-10 pt-3 pb-2 px-2">
                                            {testimonial.message}
                                        </p>
                                        <FaQuoteRight className="absolute -bottom-1 -right-1 text-primary/30 text-lg" />
                                    </div>
                                    
                                    <div className="flex items-center pt-4 mt-4 border-t border-slate-100">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                            {/* Use the proper TestimonialAvatar component */}
                                            <TestimonialAvatar 
                                                name={testimonial.name} 
                                                colorIndex={index} 
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-bold text-heading relative inline-block mb-0 pb-0 leading-tight">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-xs text-primary/80 mt-0 leading-tight">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
