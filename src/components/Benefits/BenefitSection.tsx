"use client"
import clsx from "clsx";
import { motion, Variants } from "framer-motion"
import Image from 'next/image';
import { IBenefit } from "@/types";
import LazyAnimation from '../LazyAnimation';
import { FaGraduationCap, FaUniversity, FaBook, FaPencilAlt, FaLightbulb, FaClipboardCheck, FaFileAlt, FaChartLine, FaUserGraduate, FaComments, FaBriefcase } from 'react-icons/fa';
import { MdSchool, MdAssignment, MdChecklist, MdPerson, MdDescription } from 'react-icons/md';
import { HiOutlineAcademicCap, HiOutlinePencil } from 'react-icons/hi';
import { BsCardChecklist, BsPersonCheck, BsCalendarCheck } from 'react-icons/bs';

interface BenefitSectionProps {
    benefit: IBenefit;
    index: number;
    isImageLeft: boolean;
}

// Setup benefit title icons based on title text
const getBenefitTitleIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('application')) return <FaClipboardCheck className="text-primary" size={20} />;
    if (titleLower.includes('essay')) return <HiOutlinePencil className="text-primary" size={20} />;
    if (titleLower.includes('interview')) return <FaComments className="text-primary" size={20} />;
    return <FaGraduationCap className="text-primary" size={20} />;
};

// Setup feature icons based on content
const getFeatureIcon = (feature: string, index: number) => {
    const featureLower = feature.toLowerCase();
    
    // First try content-based matching
    if (featureLower.includes('timeline') || featureLower.includes('schedule')) 
        return <BsCalendarCheck className="text-primary" size={16} />;
    if (featureLower.includes('selection') || featureLower.includes('school')) 
        return <FaUniversity className="text-primary" size={16} />;
    if (featureLower.includes('management') || featureLower.includes('tracking')) 
        return <BsCardChecklist className="text-primary" size={16} />;
    if (featureLower.includes('statement') || featureLower.includes('essay')) 
        return <MdDescription className="text-primary" size={16} />;
    if (featureLower.includes('interview') || featureLower.includes('mock')) 
        return <MdPerson className="text-primary" size={16} />;
    if (featureLower.includes('response') || featureLower.includes('technique')) 
        return <FaUserGraduate className="text-primary" size={16} />;
    if (featureLower.includes('question') || featureLower.includes('preparation')) 
        return <FaLightbulb className="text-primary" size={16} />;
    if (featureLower.includes('activity') || featureLower.includes('extracurricular')) 
        return <FaBriefcase className="text-primary" size={16} />;
    
    // Fallback to index-based icons if no match
    const fallbackIcons = [
        <MdChecklist className="text-primary" size={16} />,
        <FaFileAlt className="text-primary" size={16} />,
        <FaChartLine className="text-primary" size={16} />
    ];
    
    return fallbackIcons[index % fallbackIcons.length];
};

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 20
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.6,
            delayChildren: 0.05,
            staggerChildren: 0.08,
        }
    }
};

const childVariants = {
    offscreen: {
        opacity: 0,
        y: 10,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.4,
        }
    },
};

// Illustration component instead of using external images
const Illustration: React.FC<{index: number}> = ({ index }) => {
    // Different patterns based on index
    return (
        <div className="w-full h-full relative flex items-center justify-center bg-slate-50">
            {/* Base pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:10px_10px]"></div>
            
            {index === 0 && (
                <>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-36 h-36 border-4 border-primary/20 rounded-full relative">
                            <div className="absolute inset-2 border-2 border-dashed border-primary/40 rounded-full"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-lg transform rotate-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-primary/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3L18 7.5V16.5L12 21L6 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 12L18 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 12L6 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
            {index === 1 && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-32 border-2 border-accent/30 rounded-lg transform rotate-1 flex items-center justify-center">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-accent/40"></div>
                        <div className="w-36 h-20 bg-white flex flex-col px-3 py-2">
                            <div className="w-full h-2 bg-slate-200 rounded-full mb-2"></div>
                            <div className="w-3/4 h-2 bg-slate-200 rounded-full mb-2"></div>
                            <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>
                </div>
            )}
            
            {index === 2 && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex flex-col items-center">
                        <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                            <div className="w-24 h-24 bg-white rounded-full border-2 border-primary/20 flex items-center justify-center">
                                <svg className="w-10 h-10 text-primary/60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.077 19.692 7.8 19.142L3 20L4.056 16.099C3.409 14.918 3 13.541 3 12C3 7.582 7.03 4 12 4C16.97 4 21 7.582 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Common decorative elements */}
            <div className="absolute top-5 left-5 w-10 h-10 bg-primary/10 rounded-md transform rotate-12"></div>
            <div className="absolute bottom-5 right-5 w-10 h-10 bg-accent/10 rounded-md transform -rotate-12"></div>
        </div>
    );
};

// Get decorative elements based on benefit type
const getBenefitDecorativeElements = (title: string, index: number) => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('application')) {
        return (
            <>
                {/* Calendar / timeline visualization for application strategy */}
                <div className="absolute w-32 h-32 rounded-lg border border-primary/30 bg-white/30"></div>
                
                {/* Calendar grid lines */}
                <div className="absolute w-28 h-28 grid grid-cols-3 grid-rows-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`rounded-sm ${i % 2 === 0 ? 'bg-primary/5' : 'bg-accent/5'}`}></div>
                    ))}
                </div>
                
                {/* Calendar highlight markers */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent/40 rounded-full"></div>
                
                {/* Timeline indicators */}
                <div className="absolute -bottom-2 -right-2 h-8 w-2 bg-primary/20 rounded-full"></div>
                <div className="absolute -bottom-2 right-6 h-16 w-2 bg-accent/20 rounded-full"></div>
                <div className="absolute -bottom-2 right-14 h-12 w-2 bg-primary/10 rounded-full"></div>
            </>
        );
    }
    
    if (titleLower.includes('essay')) {
        return (
            <>
                {/* Document/paper metaphor for essay development */}
                <div className="absolute w-32 h-40 bg-white/50 border border-primary/20 rounded-md transform rotate-3 shadow-sm"></div>
                <div className="absolute w-32 h-40 bg-white/50 border border-accent/20 rounded-md transform -rotate-3 translate-x-2 shadow-sm"></div>
                
                {/* Text lines on the paper */}
                <div className="absolute w-24 h-32 flex flex-col justify-center gap-2 transform rotate-3">
                    <div className="h-1 bg-primary/10 rounded-full w-full"></div>
                    <div className="h-1 bg-primary/10 rounded-full w-5/6"></div>
                    <div className="h-1 bg-primary/10 rounded-full w-4/6"></div>
                    <div className="h-1 bg-primary/10 rounded-full w-full"></div>
                    <div className="h-1 bg-primary/10 rounded-full w-3/4"></div>
                </div>
                
                {/* Pencil illustration */}
                <div className="absolute -bottom-4 -right-4 w-16 h-3 bg-accent/20 rounded-full transform rotate-45"></div>
                <div className="absolute -bottom-1 -right-1 w-10 h-3 bg-primary/40 rounded-full transform rotate-45"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-accent/40 rounded-full"></div>
            </>
        );
    }
    
    if (titleLower.includes('interview')) {
        return (
            <>
                {/* Conversation bubbles for interview */}
                <div className="absolute top-1/3 -left-4 w-24 h-16 bg-white/60 border border-primary/20 rounded-lg transform -rotate-3"></div>
                <div className="absolute bottom-1/3 -right-4 w-28 h-16 bg-white/60 border border-accent/20 rounded-lg transform rotate-3"></div>
                
                {/* Speech bubble details */}
                <div className="absolute top-1/3 left-2 w-16 flex flex-col gap-1 transform -rotate-3">
                    <div className="h-1 bg-primary/20 rounded-full w-full"></div>
                    <div className="h-1 bg-primary/20 rounded-full w-3/4"></div>
                </div>
                
                <div className="absolute bottom-1/3 right-2 w-20 flex flex-col gap-1 transform rotate-3">
                    <div className="h-1 bg-accent/20 rounded-full w-full"></div>
                    <div className="h-1 bg-accent/20 rounded-full w-4/5"></div>
                    <div className="h-1 bg-accent/20 rounded-full w-3/5"></div>
                </div>
                
                {/* People indicators */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary/30"></div>
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent/30"></div>
                </div>
            </>
        );
    }
    
    // Default decorations if none of the above match
    return (
        <>
            <div className="absolute w-28 h-28 border-2 border-primary/10 rounded-full"></div>
            <div className="absolute w-20 h-20 border-2 border-accent/10 rounded-full transform translate-x-6 translate-y-6"></div>
            <div className="absolute w-6 h-6 bg-primary/20 rounded-md top-6 left-6 transform rotate-12"></div>
            <div className="absolute w-6 h-6 bg-accent/20 rounded-md bottom-6 right-6 transform -rotate-12"></div>
        </>
    );
};

// Get large icon for placeholder based on benefit type
const getBenefitLargeIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('application')) {
        return (
            <svg className="w-8 h-8 text-primary/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    }
    
    if (titleLower.includes('essay')) {
        return (
            <svg className="w-8 h-8 text-primary/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    }
    
    if (titleLower.includes('interview')) {
        return (
            <svg className="w-8 h-8 text-primary/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18V15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21ZM13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    }
    
    // Default icon
    return (
        <svg className="w-8 h-8 text-primary/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

const BenefitSection: React.FC<BenefitSectionProps> = ({ benefit, index, isImageLeft }) => {
    // Get lowercase benefit title for conditional styling
    const titleLower = benefit.title.toLowerCase();
    
    return (
        <LazyAnimation 
            className={`mb-10 rounded-lg border border-slate-100 bg-white overflow-hidden relative shadow-sm
                ${isImageLeft ? 'md:pr-1' : 'md:pl-1'}`} 
            delay={0.1 * index}
            type={isImageLeft ? 'slide' : 'fade'}
            yOffset={isImageLeft ? -30 : 30}
        >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            {/* Content with flex layout */}
            <div className={`relative flex flex-col md:flex-row ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} p-5 md:p-6 gap-8 items-center`}>
                {/* Image column */}
                <motion.div 
                    className="w-full md:w-2/5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-sm border border-slate-200">
                        {benefit.image ? (
                            <Image
                                src={benefit.image}
                                alt={benefit.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/15 overflow-hidden">
                                {/* Patterned background */}
                                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:10px_10px]"></div>
                                
                                {/* Benefit-specific decorative elements */}
                                {getBenefitDecorativeElements(benefit.title, index)}
                                
                                {/* Initials with background - with appropriate styling per benefit */}
                                <div className={`relative z-10 bg-white/80 backdrop-blur-sm shadow-sm w-16 h-16 
                                    ${titleLower.includes('application') ? 'rounded-md border-2 border-primary/20' : 
                                    titleLower.includes('essay') ? 'rounded-lg border border-primary/20 rotate-6' : 
                                    'rounded-full border border-primary/20'} 
                                    flex items-center justify-center transform hover:rotate-0 transition-transform`}>
                                    <span className="font-sans font-bold text-primary text-2xl">
                                        {benefit.title.split(' ').map(word => word[0]).join('')}
                                    </span>
                                </div>
                                
                                {/* Benefit title label */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-sm border border-slate-100">
                                    <span className="flex items-center gap-1.5 text-xs font-medium text-heading">
                                        {getBenefitTitleIcon(benefit.title)}
                                        <span>{benefit.title.split(' ')[0]}</span>
                                    </span>
                                </div>
                            </div>
                        )}
                        {/* Image decorative element */}
                        <div className={`absolute ${isImageLeft ? '-right-2 bottom-2' : '-left-2 bottom-2'} w-12 h-12 border-2 border-primary/20 border-dashed rounded-full transform ${isImageLeft ? 'rotate-12' : '-rotate-12'} -z-10`}></div>
                    </div>
                </motion.div>
                
                {/* Content column */}
                <div className="w-full md:w-3/5">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="font-sans text-xl font-bold text-heading mb-3 relative inline-block">
                            <span className="relative inline-block">
                                {benefit.title}
                                <span className="relative block h-4 mt-1 overflow-hidden">
                                    <svg className="absolute top-0 left-0 w-full" width="100%" height="8" viewBox="0 0 100 8" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0,4 C20,1 50,7 80,3 C90,2 95,4 100,3" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
                                    </svg>
                                </span>
                            </span>
                        </h3>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-muted text-sm leading-relaxed mb-4">{benefit.description}</p>
                    </motion.div>
                    
                    <motion.ul 
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        {benefit.features.map((feature, i) => (
                            <motion.li 
                                key={i} 
                                className="flex items-start gap-2 text-sm text-muted"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                            >
                                <span className="flex-shrink-0 mt-0.5 text-primary/80">
                                    {getFeatureIcon(feature, i)}
                                </span>
                                <span>{feature}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </LazyAnimation>
    );
};

export default BenefitSection