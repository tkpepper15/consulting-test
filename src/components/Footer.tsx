import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-12 pb-8 relative overflow-hidden">
            {/* Decorative bg pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#f0f4f8_1px,transparent_1px)] bg-[length:20px_20px] opacity-25 pointer-events-none"></div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full transform -skew-x-12 -z-10 blur-xl"></div>
            <div className="absolute -bottom-20 -left-10 w-32 h-32 bg-accent/5 rounded-full transform skew-x-12 -z-10 blur-xl"></div>
            
            <div className="max-w-5xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                {/* Logo and company description */}
                <div className="relative">
                    <Link href="/" className="inline-flex items-center gap-2 group">
                        <Image 
                            src="/images/logo.png" 
                            alt={siteDetails.siteName} 
                            width={32} 
                            height={32} 
                            className="h-8 w-auto"
                        />
                        <span className="font-sans text-base font-bold text-heading relative inline-block">
                            {siteDetails.siteName}
                            <span className="absolute w-full h-0.5 bg-primary/20 bottom-0 left-0 transform -skew-x-12 hidden group-hover:block transition-all"></span>
                        </span>
                    </Link>
                    <p className="mt-3 text-muted font-sans text-sm leading-relaxed">
                        {footerDetails.subheading}
                    </p>
                    
                    {/* Social links for mobile */}
                    {footerDetails.socials && (
                        <div className="mt-4 flex items-center gap-3 flex-wrap md:hidden">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="transform hover:scale-110 transition-transform text-muted hover:text-primary"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                                return null;
                            })}
                        </div>
                    )}
                </div>
                
                {/* Quick links section */}
                <div className="relative">
                    <h4 className="font-sans text-sm font-bold mb-4 text-heading relative inline-block pb-1 border-b border-primary/20">
                        Quick Links
                    </h4>
                    <ul className="text-muted font-sans text-sm grid grid-cols-2 gap-2">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text}>
                                <Link 
                                    href={link.url} 
                                    className="hover:text-primary transition-colors inline-flex items-center"
                                >
                                    <span className="w-1 h-1 bg-primary/40 rounded-full mr-2"></span>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Contact section */}
                <div className="relative">
                    <h4 className="font-sans text-sm font-bold mb-4 text-heading relative inline-block pb-1 border-b border-primary/20">
                        Contact Us
                    </h4>

                    {footerDetails.email && (
                        <a 
                            href={`mailto:${footerDetails.email}`} 
                            className="block font-sans text-sm text-muted hover:text-primary mb-2 transition-colors"
                        >
                            <span className="font-medium">Email:</span> {footerDetails.email}
                        </a>
                    )}

                    {footerDetails.telephone && (
                        <a 
                            href={`tel:${footerDetails.telephone}`} 
                            className="block font-sans text-sm text-muted hover:text-primary mb-5 transition-colors"
                        >
                            <span className="font-medium">Phone:</span> {footerDetails.telephone}
                        </a>
                    )}

                    {/* Social links for desktop */}
                    {footerDetails.socials && (
                        <div className="hidden md:flex items-center gap-3 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="transform hover:scale-110 transition-transform text-muted hover:text-primary"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                                return null;
                            })}
                        </div>
                    )}
                </div>
            </div>
            
            {/* Copyright section */}
            <div className="mt-10 text-center text-muted px-6 relative">
                <div className="max-w-4xl mx-auto pt-6 border-t border-primary/10">
                    <p className="font-sans text-sm">© {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                    <p className="font-sans text-xs mt-1 text-primary/60">
                        Success starts with expert guidance
                    </p>
                    <p className="font-sans text-xs mt-2 text-slate-400 hover:text-primary/70 transition-colors">
                        Designed by <a href="https://www.tejjaskaul.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-primary transition-colors">tejjask</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
