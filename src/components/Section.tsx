'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LazyAnimation from './LazyAnimation';
import StaggeredContainer from './StaggeredContainer';
import { FaGraduationCap, FaBook } from 'react-icons/fa';
import { HiOutlineAcademicCap, HiOutlineDocumentReport } from 'react-icons/hi';
import { BsStars, BsAward, BsPeople, BsPersonCheck, BsChatQuote } from 'react-icons/bs';
import { MdOutlineQuiz } from 'react-icons/md';

interface Props {
    id: string;
    title: string;
    description: string;
}

// Header underline styles
const headingUnderlineStyles = [
    <svg key="underline-1" width="100%" height="10" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>,
    <svg key="underline-2" width="100%" height="10" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,7 L10,3 L20,7 L30,2 L40,9 L50,4 L60,9 L70,3 L80,8 L90,3 L100,7" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>,
    <svg key="underline-3" width="100%" height="10" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,8 C10,4 20,10 35,6 C50,2 65,10 80,6 C90,4 95,8 100,7" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>
];

// Badge shapes with icons
const badgeIcons = {
    services: <HiOutlineAcademicCap size={14} />,
    benefits: <BsAward size={14} />,
    features: <BsStars size={14} />,
    pricing: <HiOutlineDocumentReport size={14} />,
    testimonials: <BsChatQuote size={14} />,
    team: <BsPeople size={14} />,
    about: <FaBook size={14} />,
    faq: <MdOutlineQuiz size={14} />,
    contact: <BsPersonCheck size={14} />
};

// Decorative background shapes
const decorativeShapes = [
    // Dashed circle
    (rotation: string) => (
        <div className={`border-2 border-dashed border-primary/10 rounded-full ${rotation}`}></div>
    ),
    // Solid square
    (rotation: string) => (
        <div className={`bg-primary/5 rounded-md ${rotation}`}></div>
    ),
    // Dotted border
    (rotation: string) => (
        <div className={`border-2 border-dotted border-accent/10 rounded-lg ${rotation}`}></div>
    )
];

// Rotation classes for decorative elements
const rotationClasses = [
  "-rotate-1",
  "rotate-1",
  "-rotate-2", 
  "rotate-2",
  "rotate-0"
];

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    // Choose styles based on section id to keep them consistent for each section
    const sectionIndex = id.charCodeAt(0) % 3; // Use first character code for deterministic randomness
    const headingStyle = headingUnderlineStyles[sectionIndex];
    
    // Get appropriate icon for the section or use default if not found
    const badgeIcon = badgeIcons[id as keyof typeof badgeIcons] || <FaGraduationCap size={14} />;
    
    // Create decorative elements with different shapes based on section
    const DecoShape1 = decorativeShapes[sectionIndex % decorativeShapes.length];
    const DecoShape2 = decorativeShapes[(sectionIndex + 1) % decorativeShapes.length];
    
    // Create a custom style for the feature section
    const isFeatureSection = id === 'features';
    
    return (
        <section
            id={id}
            className={`relative py-6 overflow-hidden ${isFeatureSection ? 'pb-12' : ''}`}
        >
            {/* Additional decorative elements for features section */}
            {isFeatureSection && (
                <>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50/50 to-transparent -z-5"></div>
                    <div className="absolute -top-10 md:-top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full border-8 border-primary/5 -z-10 opacity-50"></div>
                </>
            )}
            
            {/* Decorative elements - reduced visibility */}
            <div className="absolute -top-4 right-10 w-16 h-16 -z-10 hidden md:block opacity-50">
                {DecoShape1(rotationClasses[Math.floor(Math.random() * rotationClasses.length)])}
            </div>
            <div className="absolute -bottom-4 left-10 w-16 h-16 -z-10 hidden md:block opacity-50">
                {DecoShape2(rotationClasses[Math.floor(Math.random() * rotationClasses.length)])}
            </div>
            
            {/* Subtle decorative notebook style dot */}
            <div className="absolute left-[32px] md:left-[64px] top-1/2 w-1.5 h-1.5 bg-primary/25 rounded-full transform -translate-y-1/2 hidden md:block"></div>
            
            <StaggeredContainer 
                className={`text-center mb-10 relative z-10 px-4 max-w-3xl mx-auto ${isFeatureSection ? 'mb-16' : ''}`} 
                delay={0.1} 
                type="fade"
            >
                {/* Section badge - more subtle */}
                <motion.div variants={{}} className={`inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 border border-primary/25 font-sans text-xs font-bold text-primary mb-4 transform shadow-sm rounded-md ${rotationClasses[Math.floor(Math.random() * rotationClasses.length)]}`}>
                    <span className="text-primary/80">{badgeIcon}</span>
                    <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                </motion.div>
                
                {/* Heading with wave underline */}
                <motion.h2 variants={{}} className="relative font-sans text-2xl md:text-3xl font-bold text-heading leading-tight">
                    <span className="relative inline-block">
                        {title}
                        {id === 'features' ? (
                            <span className="relative block h-7 mt-2 overflow-hidden">
                                <svg width="100%" height="10" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full">
                                    <motion.path 
                                        d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" 
                                        fill="none" 
                                        stroke="var(--primary)" 
                                        strokeWidth="3" 
                                        strokeLinecap="round" 
                                        strokeOpacity="0.8"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.2, duration: 1.0, ease: "easeOut" }}
                                    />
                                </svg>
                            </span>
                        ) : isFeatureSection ? (
                            <span className="relative block h-1 mt-2 bg-gradient-to-r from-primary/30 via-primary/70 to-primary/30 rounded-full"></span>
                        ) : (
                            <span className="relative block h-5 mt-1 overflow-hidden">
                                {React.cloneElement(headingStyle, { className: "absolute top-0 left-0 w-full" })}
                            </span>
                        )}
                    </span>
                </motion.h2>
                
                {/* Description */}
                <motion.p variants={{}} className={`mt-3 mx-auto text-slate-600 font-sans text-sm leading-relaxed max-w-2xl ${isFeatureSection ? 'md:text-base' : ''}`}>
                    {description}
                </motion.p>
                
                {/* Additional decorative elements for features section */}
                {isFeatureSection && (
                    <div className="flex justify-center mt-7 space-x-2">
                        <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                        <span className="w-1 h-1 bg-primary/50 rounded-full"></span>
                        <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                    </div>
                )}
            </StaggeredContainer>
            
            <LazyAnimation 
                className="relative z-10 px-4 mx-auto" 
                delay={0.3}
                type="fade"
            >
                {children}
            </LazyAnimation>
        </section>
    )
}

export default Section;