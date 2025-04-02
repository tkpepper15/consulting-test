import React from 'react'

interface Props {
    className?: string;
    usePaper?: boolean;
}

const Container: React.FC<React.PropsWithChildren<Props>> =({ 
    children, 
    className,
    usePaper = true
}: React.PropsWithChildren<Props>) => {
    return (
        <div className={`px-5 w-full max-w-6xl mx-auto ${usePaper ? 'relative bg-white/95 shadow-sm my-6 py-6 border border-slate-200/30 rounded-sm' : ''} ${className ? className : ""}`}>
            {usePaper && (
                <>
                    {/* Subtle top and bottom dividing lines */}
                    <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                    
                    {/* Single subtle decorative corner mark */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/15 -translate-x-px -translate-y-px rounded-tl-sm"></div>
                </>
            )}
            {children}
        </div>
    )
}

export default Container