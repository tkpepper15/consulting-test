import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    // Base classes for our scrappy creative style
    const baseClasses = "font-sans font-extrabold text-heading relative";
    
    // Get existing classes from children
    const existingClasses = children.props.className || "";
    
    // Combine classes, ensuring no duplicates
    const combinedClasses = `${baseClasses} ${existingClasses}`;

    // Clone the element with our combined classes and add the wavy underline
    const enhancedChild = React.cloneElement(children, {
        className: combinedClasses
    });
    
    // Wrap with our scrappy underline container
    return (
        <span className="relative inline-block pb-2">
            {enhancedChild}
            <svg className="absolute bottom-0 left-0 w-full -z-20" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
            </svg>
        </span>
    );
};

export default SectionTitle;