'use client';

import { benefits } from '@/data/benefits';
import BenefitSection from './BenefitSection';
import StaggeredContainer from '../StaggeredContainer';

const Benefits = () => {
    return (
        <div className="relative py-4">
            {/* Subtle decorative background elements */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-accent/3 to-transparent rounded-full blur-3xl -z-10"></div>
            
            {/* Subtle dot pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-20 -z-10"></div>
            
            <StaggeredContainer 
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10"
                delay={0.2} 
                staggerChildren={0.15}
            >
                {benefits.map((benefit, index) => (
                    <BenefitSection 
                        key={index} 
                        benefit={benefit} 
                        index={index}
                        isImageLeft={index % 2 === 0}
                    />
                ))}
            </StaggeredContainer>
            
            {/* Subtle connecting lines between cards (only visible on desktop) */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200/50 hidden lg:block -z-5"></div>
        </div>
    );
};

export default Benefits;