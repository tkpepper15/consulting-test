"use client"
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { faqs } from "@/data/faq";
import { footerDetails } from "@/data/footer";

const FAQ: React.FC = () => {
    const [open, setOpen] = useState<number | null>(0);
    
    const toggleQuestion = (index: number) => {
        setOpen(open === index ? null : index);
    };
    
    return (
        <div className="relative">
            <div className="flex flex-col lg:flex-row gap-6 relative z-10">
                {/* Contact sidebar */}
                <div className="lg:sticky lg:top-16 lg:self-start lg:w-1/3">
                    <div className="relative bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transform rotate-[-0.3deg]">
                        {/* Decorative elements */}
                        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-accent/60 rounded-full"></div>
                        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-primary/60 rounded-full"></div>
                        <div className="absolute top-0 left-6 right-6 h-1 bg-primary/50 transform skew-x-12"></div>
                        
                        <div className="p-5">
                            <h3 className="font-sans text-lg font-bold mb-2 text-heading relative inline-block pb-1">
                                Still have questions?
                            </h3>
                            <p className="font-sans text-sm text-muted mb-4">
                                We&apos;re here to help with any questions you might have about our services or application process.
                            </p>
                            <a 
                                href={`mailto:${footerDetails.email}`} 
                                className="btn btn-primary"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="w-full lg:w-2/3">
                    {/* FAQ accordion */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`bg-white border ${open === index ? 'border-primary/40' : 'border-slate-200'} rounded-lg overflow-hidden transition-all ${open === index ? 'shadow-sm' : ''} transform ${index % 2 === 0 ? 'rotate-[0.3deg]' : 'rotate-[-0.3deg]'}`}
                            >
                                <button className="w-full px-5 py-3 flex items-center justify-between text-left" onClick={() => toggleQuestion(index)}>
                                    <h3 className="font-sans font-medium text-sm text-heading pr-6">{faq.question}</h3>
                                    <span className={`flex items-center justify-center w-5 h-5 rounded ${open === index ? 'bg-primary/15' : 'bg-accent/10'} flex-shrink-0`}>
                                        {open === index ? 
                                        <BiMinus className={`w-3.5 h-3.5 ${open === index ? 'text-primary' : 'text-accent'}`} /> :
                                        <BiPlus className={`w-3.5 h-3.5 ${open === index ? 'text-primary' : 'text-accent'}`} />
                                        }
                                    </span>
                                </button>
                                
                                <div className={`px-5 overflow-hidden transition-all duration-200 ${open === index ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                                    <p className="text-sm text-muted">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;