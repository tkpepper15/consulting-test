"use client"
import { IBenefit } from "@/types";
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaLightbulb, FaClipboardCheck, FaFileAlt, FaChartLine, FaUserGraduate, FaComments, FaBriefcase } from 'react-icons/fa';
import { MdChecklist, MdPerson, MdDescription } from 'react-icons/md';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsCardChecklist, BsCalendarCheck } from 'react-icons/bs';

interface BenefitSectionProps {
    benefit: IBenefit;
    index: number;
}

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

// Get color scheme based on index
const getColorScheme = (index: number) => {
    if (index % 3 === 0) {
        return {
            base: 'bg-primary',
            light: 'bg-primary/10',
            text: 'text-primary',
            hover: 'bg-primary/5',
            border: 'border-primary/40'
        };
    } else if (index % 3 === 1) {
        return {
            base: 'bg-accent',
            light: 'bg-accent/10',
            text: 'text-accent',
            hover: 'bg-accent/5',
            border: 'border-accent/40'
        };
    } else {
        return {
            base: 'bg-emerald-400',
            light: 'bg-emerald-400/10',
            text: 'text-emerald-500',
            hover: 'bg-emerald-400/5',
            border: 'border-emerald-400/40'
        };
    }
};

const BenefitSection: React.FC<BenefitSectionProps> = ({ benefit, index }) => {    
    const colors = getColorScheme(index);
    
    return (
        <motion.div
            className="h-full"
            whileHover={{ translateY: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="bg-white h-full rounded-xl shadow-md border border-slate-200/80 overflow-hidden hover:shadow-lg transition-all duration-300 relative group">
                {/* Top accent bar - more subtle and elegant */}
                <div className={`h-1.5 w-full ${colors.base} opacity-80`}></div>
                
                {/* Icon area with improved aesthetics */}
                <div className="pt-10 pb-6 flex justify-center">
                    <div className={`w-16 h-16 rounded-full ${colors.light} flex items-center justify-center shadow-sm group-hover:shadow transition-shadow duration-300`}>
                        {getBenefitTitleIcon(benefit.title)}
                    </div>
                </div>
                
                {/* Content */}
                <div className="px-7 pb-7">
                    {/* Title with refined underline animation */}
                    <h3 className="text-xl font-bold text-heading text-center mb-4 relative">
                        {benefit.title}
                        <div className="relative mt-3 overflow-hidden flex flex-col items-center">
                            <motion.div 
                                className={`h-0.5 ${colors.base} rounded-full opacity-90`}
                                initial={{ width: 0 }}
                                animate={{ width: 64 }}
                                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                            ></motion.div>
                            <motion.div 
                                className={`h-0.5 ${colors.base} rounded-full mt-1.5 opacity-60`}
                                initial={{ width: 0 }}
                                animate={{ width: 36 }}
                                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                            ></motion.div>
                            <motion.div 
                                className={`h-0.5 w-0 ${colors.base} rounded-full mt-1.5 opacity-40 group-hover:w-24 transition-all duration-300`}
                            ></motion.div>
                        </div>
                    </h3>
                    
                    {/* Description with improved typography */}
                    <p className="text-slate-600 text-sm text-center mb-8 leading-relaxed max-w-md mx-auto">
                        {benefit.description}
                    </p>
                    
                    {/* Feature list with refined styling */}
                    <ul className="space-y-3">
                        {benefit.features.map((feature, i) => {
                            // Split the feature string at the first colon to separate label and description
                            const parts = feature.split(': ');
                            const hasColon = parts.length > 1;
                            const label = hasColon ? parts[0] : '';
                            const description = hasColon ? parts[1] : feature;
                            
                            return (
                                <li 
                                    key={i} 
                                    className={`flex gap-3 items-start px-4 py-3 rounded-lg group/item bg-slate-50/80 hover:${colors.hover} transition-colors duration-200 border border-transparent hover:${colors.border}`}
                                >
                                    <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/item:${colors.light} mt-0.5 transition-colors duration-200`}>
                                        {getFeatureIcon(feature, i)}
                                    </div>
                                    <div className="flex-1">
                                        {hasColon ? (
                                            <>
                                                <span className={`text-sm font-medium ${colors.text}`}>
                                                    {label}
                                                </span>
                                                <span className="text-sm text-slate-600 block mt-0.5 leading-relaxed">
                                                    {description}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-sm text-slate-600 leading-relaxed">
                                                {description}
                                            </span>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                {/* Refined corner decoration */}
                <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden">
                    <div className={`absolute transform rotate-45 ${colors.base} w-10 h-10 -top-5 -right-5 opacity-15`}></div>
                </div>
            </div>
        </motion.div>
    );
};

export default BenefitSection;