import Link from "next/link";
import { ctaDetails } from "@/data/cta";

const CTA: React.FC = () => {
    // List of features to display
    const features = [
        "Ivy League+ Mentors",
        "Admissions Experts",
        "Essay Development",
        "Interview Prep",
        "Application Strategy",
        "Scholarship Guidance"
    ];
    
    return (
        <section id="contact" className="my-10 lg:my-16">
            <div className="relative w-full z-10 mx-auto px-5 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="relative bg-white shadow-md rounded-xl overflow-hidden border border-slate-100">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(#f0f4f8_1px,transparent_1px)] bg-[length:16px_16px] opacity-20"></div>
                        
                        {/* Decorative circles */}
                        <div className="absolute -top-6 -right-6 w-36 h-36 border-2 border-primary/10 rounded-full rotate-12"></div>
                        <div className="absolute -bottom-6 -left-6 w-36 h-36 border-2 border-accent/10 rounded-full -rotate-12"></div>
                        
                        {/* Colorful edges */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/80 via-primary to-accent/80"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/80 via-primary to-primary/80"></div>
                        
                        {/* Content area */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-10 pt-10 pb-10">
                            {/* Badge */}
                            <div className="relative inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-primary/30 font-sans text-xs font-bold uppercase tracking-wider text-primary mb-4 transform -rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.04)]">
                                <div className="w-2 h-2 bg-primary rounded-sm transform rotate-45"></div>
                                Get Started
                            </div>
                            
                            {/* Heading */}
                            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-heading mb-3 max-w-xl relative">
                                <span className="relative inline-block">
                                    {ctaDetails.heading}
                                    <svg className="absolute -bottom-2 left-0 w-full -z-20" viewBox="0 0 100 15" preserveAspectRatio="none">
                                        <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
                                    </svg>
                                </span>
                            </h2>

                            {/* Subheading */}
                            <p className="mx-auto max-w-xl text-muted mb-5 font-sans">{ctaDetails.subheading}</p>

                            {/* Button */}
                            <div className="mb-1">
                                <Link 
                                    href={ctaDetails.buttonUrl}
                                    className="group relative font-sans font-bold text-white bg-primary px-8 py-3 inline-block transform hover:-translate-y-0.5 transition-transform rounded-md"
                                >
                                    <span className="absolute inset-0 bg-black/70 translate-x-1.5 translate-y-1.5 rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></span>
                                    {ctaDetails.buttonText}
                                </Link>
                            </div>
                            
                            {/* Feature list */}
                            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs sm:text-sm max-w-2xl mx-auto">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="flex-shrink-0 w-3.5 h-3.5 bg-primary/10 rounded relative transform rotate-45">
                                            <div className="absolute inset-1 bg-primary rounded-sm"></div>
                                        </div>
                                        <span className="font-sans text-heading">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;