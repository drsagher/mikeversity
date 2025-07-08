'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaWhatsapp,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaBars,
    FaTimes,
    FaGlobe,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import { Poppins } from 'next/font/google';

// Google Font: Poppins
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const Logo = '/mikeversity.png';

// Type Definitions
interface NavLink {
    href: string;
    label: string;
}

interface Course {
    href: string;
    label: string;
}

interface SocialLink {
    href: string;
    Icon: React.ElementType;
    color: string;
    ariaLabel: string;
}

// Data
const navLinks: NavLink[] = [
    { href: '/pages/programs', label: 'Certifications' },
    { href: '/pages/team', label: 'Team' },
    { href: '/pages/transformation', label: 'Transformation' },
];

const courseLinks: Course[] = [
    { href: '/courses/ai-leadership', label: 'AI Leadership' },
    { href: '/courses/wealth-strategies', label: 'Wealth Strategies' },
    { href: '/courses/transformational-coaching', label: 'Transformational Coaching' },
];

const socialLinks: SocialLink[] = [
    {
        href: 'https://twitter.com',
        Icon: FaTwitter,
        color: 'hover:text-blue-400',
        ariaLabel: 'Visit our Twitter page',
    },
    {
        href: 'https://facebook.com',
        Icon: FaFacebook,
        color: 'hover:text-blue-600',
        ariaLabel: 'Visit our Facebook page',
    },
    {
        href: 'https://instagram.com',
        Icon: FaInstagram,
        color: 'hover:text-pink-500',
        ariaLabel: 'Visit our Instagram page',
    },
];

const topInfoItems: string[] = [
    'Mikeversity: 2025 Global Leadership Award Winner! 🏆',
    'AI Leadership Webinar: May 15, 2025 – Register Now!',
    'New Wealth Strategies Course Launching Soon!',
];

const midInfoItems: string[] = [
    'Join Our Community in 120+ Countries!',
    'Transformational Coaching Program Starts June 2025!',
    'Free AI Workshop This Week – Sign Up Today!',
];

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isCourseOpen, setIsCourseOpen] = useState<boolean>(false);
    const [currentTopInfoIndex, setCurrentTopInfoIndex] = useState<number>(0);
    const [currentMidInfoIndex, setCurrentMidInfoIndex] = useState<number>(0);
    const [language, setLanguage] = useState<string>('en');
    const [mounted, setMounted] = useState<boolean>(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Info tickers rotation
    useEffect(() => {
        const topInterval = setInterval(() => {
            setCurrentTopInfoIndex((prevIndex) => (prevIndex + 1) % topInfoItems.length);
        }, 5000);
        const midInterval = setInterval(() => {
            setCurrentMidInfoIndex((prevIndex) => (prevIndex + 1) % midInfoItems.length);
        }, 6000);
        return () => {
            clearInterval(topInterval);
            clearInterval(midInterval);
        };
    }, []);

    // Toggle functions
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const toggleCourse = () => setIsCourseOpen((prev) => !prev);
    const changeLanguage = (lang: 'en' | 'es') => setLanguage(lang);

    if (!mounted) {
        return null; // Prevent rendering until client-side mount
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className={`sticky top-0 z-50 text-white shadow-2xl ${poppins.className} bg-black/95`}
            role="navigation"
            aria-label="Main navigation"
        >
            {/* Cosmic Black-to-Red Gradient Background with Geometric Animations */}
            <style jsx>{`
                .cosmic-bg {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, #000000, #9f1239, #000000, #9f1239);
                    background-size: 400%;
                    animation: cosmicFlow 15s ease infinite;
                    z-index: -1;
                    overflow: hidden;
                }

                .cosmic-bg::before {
                    content: '';
                    position: absolute;
                    inset: -20px;
                    background: radial-gradient(circle at center, rgba(255, 0, 0, 0.2) 0%, transparent 70%);
                    animation: nebulaPulse 10s ease-in-out infinite;
                    opacity: 0.5;
                    filter: blur(20px);
                }

                .arc-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url('data:image/svg+xml,%3Csvg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 100 A400 400 0 0 1 1000 100" stroke="rgba(255,191,0,0.3)" stroke-width="2" fill="none" /%3E%3C/svg%3E');
                    background-size: cover;
                    animation: arcShift 20s linear infinite;
                    opacity: 0.4;
                }

                .line-grid {
                    position: absolute;
                    inset: 0;
                    background: url('data:image/svg+xml,%3Csvg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cline x1="0" y1="50" x2="1000" y2="50" stroke="rgba(255,191,0,0.2)" stroke-width="1" /%3E%3Cline x1="0" y1="150" x2="1000" y2="150" stroke="rgba(255,191,0,0.2)" stroke-width="1" /%3E%3C/svg%3E');
                    animation: linePulse 12s ease-in-out infinite;
                    opacity: 0.3;
                }

                .hexagon-field {
                    position: absolute;
                    inset: 0;
                    background: url('data:image/svg+xml,%3Csvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpolygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="rgba(255,191,0,0.4)" stroke-width="1" fill="none" /%3E%3C/svg%3E');
                    background-size: 50px;
                    animation: hexDrift 25s linear infinite;
                    opacity: 0.2;
                }

                .triangle-accent {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    width: 40px;
                    height: 40px;
                    background: url('data:image/svg+xml,%3Csvg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpolygon points="20,5 35,35 5,35" fill="rgba(255,191,0,0.3)" /%3E%3C/svg%3E');
                    animation: triangleSpin 15s linear infinite;
                }

                @keyframes cosmicFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes nebulaPulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.4); opacity: 0.2; }
                }

                @keyframes arcShift {
                    0% { background-position: 0 0; }
                    100% { background-position: 1000px 0; }
                }

                @keyframes linePulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }

                @keyframes hexDrift {
                    0% { background-position: 0 0; }
                    100% { background-position: 50px 50px; }
                }

                @keyframes triangleSpin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            <div className="cosmic-bg" aria-hidden="true">
                <div className="arc-overlay" />
                <div className="line-grid" />
                <div className="hexagon-field" />
                <div className="triangle-accent" />
            </div>

            {/* Top Section: Contact, Location, Mid Ticker, Social, Language */}
            <div className="relative z-10 flex flex-wrap justify-between items-center px-3 sm:px-6 py-3 border-b border-white/20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-3 sm:space-x-4 flex-wrap gap-y-2"
                >
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <FaWhatsapp size={18} className="text-green-400 animate-pulse" aria-hidden="true" />
                        <a
                            href="tel:+11234567890"
                            className="text-xs sm:text-sm font-medium text-gray-200 hover:text-amber-400 transition-colors"
                            aria-label="Contact us via WhatsApp"
                        >
                            +1 (123) 456-7890
                        </a>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <FaMapMarkerAlt size={18} className="text-amber-400" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-medium text-gray-200">
                            123 Leadership Lane, New York, NY 10001, USA
                        </span>
                    </div>
                </motion.div>

                <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap gap-y-2">
                    {/* Mid Quick Info Ticker */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gray-900/50 rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-gray-200 max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] truncate"
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentMidInfoIndex}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.5 }}
                                aria-live="polite"
                            >
                                {midInfoItems[currentMidInfoIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-1 sm:space-x-2">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.ariaLabel}
                            >
                                <link.Icon
                                    size={16}
                                    className={`text-gray-200 ${link.color} transition-transform transform hover:scale-125 sm:scale-100 sm:hover:scale-125`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}
                            className="flex items-center space-x-1 text-gray-200 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                            aria-label="Change language"
                        >
                            <FaGlobe size={16} />
                            <span className="text-[10px] sm:text-xs">{language === 'en' ? 'EN' : 'ES'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Section: Logo, Slogan, Navigation */}
            <div className="relative z-10 flex flex-wrap justify-between items-center px-3 sm:px-6 py-3 sm:py-4 bg-gray-900/40 backdrop-blur-md">
                {/* Logo and Slogan */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2 sm:space-x-3"
                >
                    <Link href="/" aria-label="Mikeversity Home">
                        <Image
                            src={Logo}
                            alt="Mikeversity Logo"
                            width={40}
                            height={40}
                            className="rounded-full scale-100 sm:scale-125 lg:scale-150"
                            priority
                        />
                    </Link>
                    <div className="hidden sm:block">
                        <h1 className="text-sm sm:text-base lg:text-lg font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-pink-500">
                            Mikeversity
                        </h1>
                        <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-300 italic">
                            Empowering Growth, Inspiring Excellence
                        </p>
                    </div>
                </motion.div>

                {/* Hamburger Menu for Mobile/Tablet */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Navigation Links */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`${
                        isMenuOpen ? 'flex' : 'hidden'
                    } w-full lg:w-auto lg:flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4 xl:space-x-5 text-xs sm:text-sm lg:text-base font-medium mt-3 sm:mt-4 lg:mt-0`}
                >
                    <AnimatePresence>
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.href}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative group"
                            >
                                <Link
                                    href={link.href}
                                    className="block text-white hover:text-amber-400 transition-all duration-300 transform group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                                {/* Animated underline with arc */}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-pink-500 rounded-full"
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ width: '100%' }}
                                />
                            </motion.div>
                        ))}
                        {/* Course Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={toggleCourse}
                                className="flex items-center space-x-1 text-white hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                                aria-label="Courses menu"
                                aria-expanded={isCourseOpen}
                            >
                                <span>Mike Litman</span>
                                <motion.svg
                                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 transform transition-transform`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    animate={{ rotate: isCourseOpen ? 180 : 0 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </button>
                            <AnimatePresence>
                                {isCourseOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-2 w-44 sm:w-48 bg-gray-900/90 text-white rounded-xl shadow-xl py-2 backdrop-blur-sm overflow-hidden"
                                    >
                                        {courseLinks.map((course) => (
                                            <Link
                                                key={course.href}
                                                href={course.href}
                                                className="block px-4 py-2 text-xs sm:text-sm hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-pink-500/20 hover:text-amber-400 transition-all duration-300 relative"
                                                onClick={() => {
                                                    setIsCourseOpen(false);
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                {course.label}
                                                {/* Hexagon accent on hover */}
                                                <motion.span
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-0 h-0 opacity-0"
                                                    whileHover={{
                                                        width: 16,
                                                        height: 16,
                                                        opacity: 1,
                                                        background: 'url("data:image/svg+xml,%3Csvg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpolygon points=\"8,2 14,5 14,11 8,14 2,11 2,5\" stroke=\"%23FBBF24\" stroke-width=\"1\" fill=\"none\" /%3E%3C/svg%3E")',
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;