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
            const sections = ['team', 'features', 'pricing', 'faq', 'contact'];
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
        <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
            {/* Decorative top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600"></div>
            
            <div className="px-4 sm:px-6 mx-auto max-w-7xl">
                <nav className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image 
                            src="/images/logo.png" 
                            alt={siteDetails.siteName} 
                            width={32} 
                            height={32} 
                            className="h-7 w-auto transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="font-sans text-sm font-bold text-heading group-hover:text-purple-600 transition-colors">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu - with pill-shaped active indicator */}
                    <ul className="hidden md:flex items-center">
                        <div className="flex items-center bg-slate-100/80 rounded-md px-2 mr-3">
                            {menuItems.map((item) => {
                                const isActive = activeSection && item.url.includes(activeSection);
                                return (
                                    <li key={item.text} className="relative mx-1">
                                        <Link 
                                            href={item.url} 
                                            className={`relative z-10 font-sans text-sm font-medium px-4 py-2.5 rounded-md transition-all duration-300 inline-block ${
                                                isActive 
                                                    ? 'text-white' 
                                                    : 'text-slate-600 hover:text-purple-600 hover:bg-slate-200/50'
                                            }`}
                                        >
                                            {/* Active background with better positioning */}
                                            {isActive && (
                                                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-md -z-10 shadow-sm"></span>
                                            )}
                                            
                                            {item.text}
                                        </Link>
                                    </li>
                                );
                            })}
                        </div>
                        <li>
                            <Link 
                                href="#pricing" 
                                className="group relative z-10 font-sans text-sm font-bold text-white bg-primary px-4 py-2 rounded-md transform hover:-translate-y-0.5 transition-all duration-200 inline-block"
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
                            className="relative z-10 font-sans w-10 h-10 flex items-center justify-center rounded-md bg-purple-100 text-purple-600"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-5 w-5" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-5 w-5" aria-hidden="true" />
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
                <div id="mobile-menu" className="md:hidden bg-white border-t border-purple-100 shadow-md">
                    {/* Simple gradient background instead of complex decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/50"></div>
                    
                    <ul className="flex flex-col space-y-2 py-4 px-6 relative z-10">
                        {menuItems.map((item) => {
                            const isActive = activeSection && item.url.includes(activeSection);
                            return (
                                <li key={item.text}>
                                    <Link 
                                        href={item.url} 
                                        className={`font-sans text-sm block py-2 px-3 rounded-md transition-all duration-200 ${
                                            isActive 
                                                ? 'text-white bg-gradient-to-r from-purple-500 to-violet-500 font-medium' 
                                                : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
                                        }`}
                                        onClick={toggleMenu}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            );
                        })}
                        <div className="flex gap-3 items-center pt-3 mt-1">
                            <Link 
                                href="#pricing" 
                                className="group relative z-10 font-sans inline-block text-sm font-bold text-white bg-primary px-4 py-2 rounded-md flex-1 text-center" 
                                onClick={toggleMenu}
                            >
                                <span className="absolute inset-0 bg-black/70 translate-x-1 translate-y-1 rounded-md -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></span>
                                Get Started
                            </Link>
                        </div>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
