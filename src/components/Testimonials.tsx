"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import TestimonialAvatar from './TestimonialAvatar';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Array of subtle purple shades for testimonial backgrounds
const purpleShades = [
  { bg: 'bg-purple-100', accent: 'bg-purple-400', accentLight: 'bg-purple-400/20', text: 'text-purple-800' },
  { bg: 'bg-indigo-50', accent: 'bg-indigo-400', accentLight: 'bg-indigo-400/20', text: 'text-indigo-700' },
  { bg: 'bg-violet-50', accent: 'bg-violet-300', accentLight: 'bg-violet-300/20', text: 'text-violet-700' },
  { bg: 'bg-fuchsia-50', accent: 'bg-fuchsia-300', accentLight: 'bg-fuchsia-300/20', text: 'text-fuchsia-700' },
  { bg: 'bg-purple-200', accent: 'bg-purple-500', accentLight: 'bg-purple-500/20', text: 'text-purple-900' },
  { bg: 'bg-indigo-100', accent: 'bg-indigo-500', accentLight: 'bg-indigo-500/20', text: 'text-indigo-800' },
];

// Function to get a deterministic but seemingly random shade for each testimonial
const getTestimonialShade = (index: number) => {
  // Use a prime number to create variation
  return purpleShades[(index * 17) % purpleShades.length];
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
                        // Get a purple shade for this testimonial
                        const colors = getTestimonialShade(index);
                        
                        // Add some visual randomness by varying the angle slightly
                        const rotation = index % 2 === 0 
                            ? `rotate(${0.2 + Math.random() * 0.4}deg)` 
                            : `rotate(-${0.2 + Math.random() * 0.4}deg)`;
                        
                        return (
                            <motion.div
                                key={index}
                                className={`bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 relative group h-full`}
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
                                <div className={`h-1.5 ${colors.accent} w-full`}></div>
                                
                                {/* Content */}
                                <div className="p-5 md:p-6 flex flex-col h-full">
                                    <div className="relative mb-auto">
                                        <FaQuoteLeft className={`absolute -top-1 -left-1 ${colors.text}/30 text-lg`} />
                                        <p className="text-slate-700 text-sm leading-relaxed z-10 pt-3 pb-2 px-2">
                                            {testimonial.message}
                                        </p>
                                        <FaQuoteRight className={`absolute -bottom-1 -right-1 ${colors.text}/30 text-lg`} />
                                    </div>
                                    
                                    <div className="flex items-center pt-4 mt-4 border-t border-slate-100">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                            {/* Pass the new color index to maintain consistency */}
                                            <TestimonialAvatar 
                                                name={testimonial.name} 
                                                colorIndex={index} 
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className={`text-sm font-bold ${colors.text} relative inline-block mb-0 pb-0 leading-tight`}>
                                                {testimonial.name}
                                            </h3>
                                            <p className={`text-xs ${colors.text}/80 mt-0 leading-tight`}>{testimonial.role}</p>
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
