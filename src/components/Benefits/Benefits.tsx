'use client';

import { benefits } from '@/data/benefits';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaLightbulb, FaClipboardCheck, FaFileAlt, FaChartLine, FaUserGraduate, FaComments, FaBriefcase } from 'react-icons/fa';
import { MdChecklist, MdPerson, MdDescription } from 'react-icons/md';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsCardChecklist, BsCalendarCheck } from 'react-icons/bs';

// Setup benefit title icons based on title text
const getBenefitTitleIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('application')) return <FaClipboardCheck className="text-primary" size={24} />;
    if (titleLower.includes('essay')) return <HiOutlinePencil className="text-primary" size={24} />;
    if (titleLower.includes('interview')) return <FaComments className="text-primary" size={24} />;
    return <FaGraduationCap className="text-primary" size={24} />;
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
        <MdChecklist key="icon-checklist" className="text-primary" size={16} />,
        <FaFileAlt key="icon-file" className="text-primary" size={16} />,
        <FaChartLine key="icon-chart" className="text-primary" size={16} />
    ];
    
    return fallbackIcons[index % fallbackIcons.length];
};

// CSS for masonry layout
const masonryStyles = `
  .masonry-benefits {
    column-count: 1;
    column-gap: 1rem;
  }
  
  @media (min-width: 768px) {
    .md\\:masonry-md {
      column-count: 2;
    }
  }
  
  @media (min-width: 1024px) {
    .lg\\:masonry-lg {
      column-count: 3;
    }
  }
  
  .break-inside-avoid {
    break-inside: avoid;
  }
`;

const Benefits = () => {
    return (
        <section className="relative py-8 overflow-hidden bg-white w-full">
            <style jsx>{masonryStyles}</style>
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:20px_20px] opacity-25"></div>
            <div className="w-full mx-auto px-1 sm:px-3 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1 % 0.4,
                                ease: "easeOut" 
                            }}
                            className="w-full"
                        >
                            <div className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all duration-300 flex flex-col w-full">
                                {/* Colorful gradient bar at top */}
                                <div className="h-1.5 bg-gradient-to-r from-primary to-accent w-full"></div>
                                
                                <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-grow">
                                    {/* Title with icon */}
                                    <div className="flex flex-col items-center mb-6">
                                        <div className="w-16 h-16 rounded-full bg-slate-50 shadow-md flex items-center justify-center mb-4">
                                            {getBenefitTitleIcon(benefit.title)}
                                        </div>
                                        <h3 className="text-xl font-bold text-heading text-center">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Description */}
                                    <p className="text-sm text-muted text-center mb-6">
                                        {benefit.description}
                                    </p>
                                    
                                    {/* Features list */}
                                    <div className="mt-auto pt-4 border-t border-slate-100">
                                        <h4 className="text-sm font-semibold text-heading mb-3">Key Features</h4>
                                        <ul className="space-y-3">
                                            {benefit.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 mt-0.5">
                                                        {getFeatureIcon(feature, i)}
                                                    </span>
                                                    <span className="text-sm text-muted">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;