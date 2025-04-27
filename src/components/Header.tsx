'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaUserGraduate } from 'react-icons/fa';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            
            // Update active section based on scroll position
            const sections = ['team', 'features', 'pricing', 'testimonials', 'faq', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            setActiveSection(currentSection || '');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-[2px] transition-all duration-300 ${scrolled ? 'py-1 shadow-sm' : 'py-2'}`}>
            {/* Decorative top line - more subtle */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"></div>
            
            <div className="px-4 sm:px-6 mx-auto max-w-7xl">
                <nav className="flex justify-between items-center h-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1.5 group">
                        <Image 
                            src="/images/logo.png" 
                            alt={siteDetails.siteName} 
                            width={32} 
                            height={32} 
                            className="h-8 w-auto"
                        />
                        <span className="font-sans text-sm font-bold text-heading">
                            {siteDetails.siteName}
                            <span className="absolute w-full h-0.5 bg-primary/20 bottom-0 left-0 transform -skew-x-12 hidden group-hover:block transition-all"></span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center">
                        {menuItems.map((item) => {
                            const isActive = activeSection && item.url.includes(activeSection);
                            return (
                                <li key={item.text} className="relative mx-1">
                                    <Link 
                                        href={item.url} 
                                        className={`relative z-10 font-sans text-xs font-medium ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'} px-3 py-1.5 transition-colors inline-block`}
                                    >
                                        {item.text}
                                        {item.text === "Our Team" && (
                                            <span className="absolute right-0 top-0 transform translate-x-1 -translate-y-1">
                                                <span className="flex h-1.5 w-1.5 relative">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                                </span>
                                            </span>
                                        )}
                                        {isActive && (
                                            <span className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-primary/30 transform skew-x-12"></span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="ml-3">
                            <Link 
                                href="#pricing" 
                                className="group relative z-10 font-sans text-xs font-bold text-white bg-primary px-3.5 py-1 rounded-md transform hover:-translate-y-0.5 transition-transform inline-block"
                            >
                                <span className="absolute inset-0 bg-black/70 translate-x-1 translate-y-1 rounded-md -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></span>
                                Get Started
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="relative z-10 font-sans w-7 h-7 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="absolute -inset-0.5 bg-primary/10 rounded rotate-3 -z-10"></span>
                            {isOpen ? (
                                <HiOutlineXMark className="h-4 w-4 text-primary" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-4 w-4 text-primary" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
            >
                <div id="mobile-menu" className="md:hidden bg-white border-t border-dashed border-primary/20 shadow-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(#f0f4f8_1px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none -z-10"></div>
                    <ul className="flex flex-col space-y-2 py-3 px-5 relative z-10">
                        {menuItems.map((item) => {
                            const isActive = activeSection && item.url.includes(activeSection);
                            return (
                                <li key={item.text}>
                                    <Link 
                                        href={item.url} 
                                        className={`font-sans text-xs ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'} block transform hover:-translate-x-1 transition-transform py-1 flex items-center gap-1.5`} 
                                        onClick={toggleMenu}
                                    >
                                        {item.text === "Our Team" && (
                                            <FaUserGraduate className="text-primary w-3 h-3" />
                                        )}
                                        {item.text}
                                        {item.text === "Our Team" && (
                                            <span className="flex h-1.5 w-1.5 relative ml-1">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="pt-1">
                            <Link 
                                href="#pricing" 
                                className="group relative z-10 font-sans inline-block text-xs font-bold text-white bg-primary px-3.5 py-1 rounded-md" 
                                onClick={toggleMenu}
                            >
                                <span className="absolute inset-0 bg-black/70 translate-x-1 translate-y-1 rounded-md -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></span>
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
