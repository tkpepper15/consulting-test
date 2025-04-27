"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import { FaTrophy, FaMedal, FaStar, FaAward, FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Function to get the college logo path based on education name
const getCollegeLogo = (education: string): string => {
    if (education.includes('Harvard')) return '/images/Harvard.png';
    if (education.includes('Duke')) return '/images/Duke.png';
    if (education.includes('Penn')) return '/images/Penn.png';
    // Default fallback
    return '/images/logo.png';
};

// Function to get logo size class based on education
const getLogoSizeClass = (education: string): string => {
    if (education.includes('Penn')) return 'h-16 w-auto';
    return 'h-12 w-auto'; 
};

// Array of refined achievement icons with larger size
const achievementIcons = [
    <FaAward key="award-icon" size={18} className="text-primary" />,
    <FaTrophy key="trophy-icon" size={18} className="text-primary" />,
    <FaMedal key="medal-icon" size={18} className="text-primary" />,
    <FaStar key="star-icon" size={18} className="text-primary" />,
    <FaGraduationCap key="cap-icon" size={18} className="text-primary" />
];

// CSS for masonry layout
const masonryStyles = `
  .masonry {
    column-count: 1;
    column-gap: 1rem;
  }
  
  .sm\\:masonry-sm {
    column-count: 1;
  }
  
  @media (min-width: 768px) {
    .md\\:masonry-md {
      column-count: 2;
    }
  }
  
  @media (min-width: 1024px) {
    .lg\\:masonry-lg {
      column-count: 2;
    }
  }
  
  @media (min-width: 1280px) {
    .xl\\:masonry-xl {
      column-count: 3;
    }
  }
  
  .break-inside-avoid {
    break-inside: avoid;
  }
`;

const TeamShowcase: React.FC = () => {
    const [expandedBios, setExpandedBios] = useState<{[key: string]: boolean}>({});
    
    const toggleBio = (name: string) => {
        setExpandedBios(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    return (
        <section
            id="team"
            className="relative py-12 overflow-hidden bg-white w-full"
        >
            <style jsx>{masonryStyles}</style>
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:20px_20px] opacity-25"></div>
            <div className="w-full mx-auto px-4 sm:px-6 relative">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                    {teamMembers.map((member, index) => {
                        const isExpanded = expandedBios[member.name] || false;
                        
                        return (
                            <motion.div 
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1 % 0.4,
                                    ease: "easeOut" 
                                }}
                                className="w-full"
                                style={{ height: 'fit-content' }}
                            >
                                <div className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all duration-300 flex flex-col w-full h-full">
                                    {/* Colorful gradient bar at top - use member.id to ensure consistent rendering */}
                                    <div className="h-1.5 bg-gradient-to-r from-primary to-primary/80 w-full"></div>
                                    
                                    <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-grow">
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                                            {/* Headshot Image */}
                                            <div className="w-28 h-28 rounded-full overflow-hidden shadow-md flex-shrink-0 ring-2 ring-slate-50">
                                                <Image 
                                                    src={member.imageSrc} 
                                                    alt={`${member.name} Headshot`} 
                                                    width={112} 
                                                    height={112}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            
                                            <div className="text-center sm:text-left">
                                                <h3 className="font-sans font-bold text-xl text-heading mt-3 sm:mt-0">
                                                    {member.name}
                                                </h3>
                                                
                                                <div className="flex items-center justify-center sm:justify-start mt-3">
                                                    <Image 
                                                        src={getCollegeLogo(member.education)}
                                                        alt={member.education}
                                                        width={140}
                                                        height={45}
                                                        className={`${getLogoSizeClass(member.education)} object-contain`}
                                                        priority
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Bio with Read More */}
                                        <div className="mb-6">
                                            <div className={`relative text-sm text-muted leading-relaxed ${!isExpanded ? 'max-h-[150px] overflow-hidden' : ''}`}>
                                                <p>
                                                    {member.bio}
                                                </p>
                                                {!isExpanded && member.bio.length > 150 && (
                                                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                                                )}
                                            </div>
                                            {member.bio.length > 150 && (
                                                <button 
                                                    onClick={() => toggleBio(member.name)} 
                                                    className="mt-2 font-medium text-primary hover:underline inline-flex items-center text-xs transition-colors duration-200"
                                                    aria-expanded={isExpanded}
                                                >
                                                    {isExpanded ? (
                                                        <>Read less <FaChevronUp size={10} className="ml-1.5" /></>
                                                    ) : (
                                                        <>Read more <FaChevronDown size={10} className="ml-1.5" /></>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                        
                                        {/* Achievements with refined icons */}
                                        <div className="mt-auto pt-4 border-t border-slate-100">
                                            <h4 className="text-sm font-semibold text-heading mb-3">Key Achievements</h4>
                                            <ul className="space-y-3">
                                                {member.accomplishments.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 mt-0.5">
                                                            {achievementIcons[i % achievementIcons.length]}
                                                        </span>
                                                        <span className="text-sm text-muted">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamShowcase; 