'use client';

import { benefits } from '@/data/benefits';
import BenefitSection from './BenefitSection';
import StaggeredContainer from '../StaggeredContainer';

const Benefits = () => {
    return (
        <StaggeredContainer delay={0.2} staggerChildren={0.15}>
            {benefits.map((benefit, index) => (
                <BenefitSection 
                    key={index} 
                    benefit={benefit} 
                    index={index}
                    isImageLeft={index % 2 === 0}
                />
            ))}
        </StaggeredContainer>
    );
};

export default Benefits;