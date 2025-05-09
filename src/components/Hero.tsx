import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 md:pt-20 md:pb-14 px-5 overflow-hidden"
        >
            {/* Hero-specific top and bottom accent bars */}
            <div className="absolute inset-0 -z-10">
                {/* Top and bottom accent bars */}
                <div className="absolute left-0 right-0 top-0 h-6 bg-gradient-to-r from-primary/80 to-primary/90" style={{ transformOrigin: 'center' }}></div>
                <div className="absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-r from-accent/70 to-accent/80" style={{ transformOrigin: 'center' }}></div>
            </div>

            <motion.div 
                className="relative max-w-4xl mx-auto z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 0.03, 0.26, 1.0] }}
                style={{ transformOrigin: 'center' }}
            >
                {/* Site badge with improved design */}
                <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-primary/70 rounded-lg mb-5 shadow-md"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 0.03, 0.26, 1.0] }}
                    style={{ transformOrigin: 'center' }}
                >
                    <HiOutlineAcademicCap className="text-primary text-lg" />
                    <span className="font-sans text-xs font-bold text-primary">Reserve for the &apos;30 Cycle</span>
                </motion.div>
                
                {/* Main heading with improved wave underline */}
                <motion.h1 
                    className="font-sans text-4xl md:text-6xl font-extrabold text-heading leading-tight text-center mb-4 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 0.03, 0.26, 1.0] }}
                    style={{ transformOrigin: 'center' }}
                >
                    <span className="relative inline-block pb-8 md:pb-16" style={{ transformOrigin: 'center' }}>
                        {heroDetails.heading}
                        <svg className="absolute bottom-0 left-0 w-full -z-20" viewBox="0 0 100 15" preserveAspectRatio="none" style={{ transformOrigin: 'center' }}>
                            <motion.path 
                                d="M0,7 C20,1 50,13 80,5 C90,3 95,7 100,6" 
                                fill="none" 
                                stroke="var(--primary-lighter)" 
                                strokeWidth="4" 
                                strokeLinecap="round" 
                                strokeOpacity="0.8"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                                style={{ transformOrigin: 'center' }}
                            />
                        </svg>
                    </span>
                </motion.h1>
                
                {/* Subheading */}
                <motion.p 
                    className="font-sans text-base md:text-lg text-muted max-w-2xl mx-auto text-center leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 0.03, 0.26, 1.0] }}
                    style={{ transformOrigin: 'center' }}
                >
                    {heroDetails.subheading}
                </motion.p>
                
                {/* CTA buttons with improved styling */}
                <motion.div 
                    className="mt-8 flex flex-row items-center justify-center gap-4 w-full mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 0.03, 0.26, 1.0] }}
                    style={{ transformOrigin: 'center' }}
                >
                    <Link 
                        href="#contact"
                        className="btn btn-primary inline-flex items-center justify-center relative overflow-hidden group w-32"
                        style={{ transformOrigin: 'center' }}
                    >
                        <span className="relative z-10 text-sm sm:text-base">Get Started</span>
                        <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ transformOrigin: 'center' }}></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ transformOrigin: 'center' }}></div>
                    </Link>
                    <Link 
                        href="mailto:Hellouniprep@gmail.com" 
                        className="btn btn-secondary inline-flex items-center justify-center relative overflow-hidden group w-32"
                        style={{ transformOrigin: 'center' }}
                    >
                        <span className="relative z-10 text-sm sm:text-base">Contact Us</span>
                        <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ transformOrigin: 'center' }}></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-accent/10 blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ transformOrigin: 'center' }}></div>
                    </Link>
                </motion.div>
                
                {/* Mentor badge - updated to Ivy League+ */}
                <motion.div 
                    className="mt-10 flex items-center justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 0.03, 0.26, 1.0] }}
                    style={{ transformOrigin: 'center' }}
                >
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
