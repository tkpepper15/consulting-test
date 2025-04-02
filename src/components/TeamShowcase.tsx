"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import StaggeredContainer from './StaggeredContainer';
import { FaGraduationCap, FaUniversity, FaAward, FaCertificate, FaMedal, FaBook } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

// Array of achievement icons
const achievementIcons = [
    <FaAward key="award-icon" size={12} />,
    <FaMedal key="medal-icon" size={12} />,
    <FaCertificate key="certificate-icon" size={12} />,
    <FaBook key="book-icon" size={12} />
];

// Name underline styles
const nameUnderlineStyles = [
    <svg key="name-underline-1" width="100%" height="5" viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,3 Q25,0 50,3 T100,3" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
    </svg>,
    <svg key="name-underline-2" width="100%" height="5" viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,3 L20,4 L40,2 L60,4 L80,1 L100,3" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
    </svg>
];

const TeamShowcase: React.FC = () => {
    return (
        <section
            id="team"
            className="relative py-12 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-4">
                <StaggeredContainer 
                    className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4"
                    staggerChildren={0.06}
                    delay={0.2}
                    type="scale"
                >
                    {teamMembers.map((member, index) => {
                        return (
                            <motion.div 
                                key={member.name}
                                variants={{}}
                                className="relative"
                            >
                                <div className={`bg-white border border-slate-200 rounded-lg overflow-hidden transform ${index % 2 === 0 ? 'rotate-[0.2deg]' : 'rotate-[-0.2deg]'} hover:shadow-md transition-shadow relative group`}>
                                    {/* Corner decoration */}
                                    <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
                                        <div className={`absolute transform rotate-45 ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'} w-8 h-8 -top-4 -right-4 opacity-40`}></div>
                                    </div>
                                    
                                    {/* Top colorful bar - alternating colors */}
                                    <div className={`h-1 ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'} w-full`}></div>
                                    
                                    {/* Image container */}
                                    <div className="relative h-40 overflow-hidden border-b border-slate-100">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                                        
                                        {/* Stylized image placeholder */}
                                        <div className="h-full w-full flex items-center justify-center">
                                            <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-primary/80' : 'bg-accent/80'}`}></div>
                                            
                                            {/* Placeholder design elements */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="relative w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                                                    <div className="absolute w-16 h-16 rounded-full border-2 border-dashed border-white/60 animate-spin-slow"></div>
                                                    <span className="font-sans font-bold text-white text-3xl">{member.name.charAt(0)}</span>
                                                </div>
                                                
                                                {/* Decorative pattern */}
                                                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:10px_10px] opacity-50"></div>
                                                
                                                {/* Decorative accent lines */}
                                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/30 to-transparent"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-3">
                                        <h3 className="font-sans font-bold text-sm text-heading relative inline-block">
                                            {member.name}
                                            <span className="relative block h-2.5 mt-0.5 overflow-hidden">
                                                {React.cloneElement(nameUnderlineStyles[index % nameUnderlineStyles.length], { className: "absolute top-0 left-0 w-full" })}
                                            </span>
                                        </h3>
                                        <p className="text-xs font-medium text-primary/80 mb-2 flex items-center">
                                            {index % 2 === 0 ? <FaGraduationCap className="mr-1 text-primary/60" size={12} /> : <FaUniversity className="mr-1 text-accent/60" size={12} />}
                                            {member.role}
                                        </p>
                                        
                                        <div className="mb-2 inline-flex items-center gap-1">
                                            <MdSchool className={`text-${index % 2 === 0 ? 'primary' : 'accent'}/60`} size={14} />
                                            <span className="text-xs font-medium text-heading">{member.education}</span>
                                        </div>
                                        
                                        <ul className="space-y-1">
                                            {member.accomplishments.slice(0, 2).map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-1.5 text-xs">
                                                    <span className="flex-shrink-0 mt-0.5 text-primary/60">
                                                        {achievementIcons[i % achievementIcons.length]}
                                                    </span>
                                                    <span className="text-muted">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </StaggeredContainer>
            </div>
        </section>
    );
};

export default TeamShowcase; 