'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';

// Import Google Font
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });

// Interface for TypeScript
interface TemplateProps {
    children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Animation variants for the main container
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.75,
                when: 'beforeChildren',
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { ease: 'easeInOut', duration: 0.5 },
        },
    };

    // Random particle data for background effect
    const particles = isClient
        ? Array.from({ length: 8 }, (_, i) => ({
            id: i,
            size: Math.random() * 100 + 50,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 10 + 5,
            delay: Math.random() * 2,
        }))
        : [];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`relative min-h-screen bg-gradient-to-br from-black via-red-900 to-blue-900 text-white overflow-hidden ${inter.className}`}
        >
            {/* Random Particle Effects */}
            {isClient && (
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                top: `${particle.top}%`,
                                left: `${particle.left}%`,
                                filter: 'blur(20px)',
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.1, 0.3, 0.1],
                                transition: {
                                    duration: particle.duration,
                                    delay: particle.delay,
                                    repeat: Infinity,
                                    repeatType: 'loop' as const,
                                },
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Content Wrapper */}
            <div className="relative z-10">
                <AnimatePresence mode="wait">{children}</AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Template;