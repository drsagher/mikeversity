'use client';

import { FaWhatsapp } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Link from "next/link";

export default function CommunityComponent() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerChildren = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
        hidden: { opacity: 0 },
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-blue-600 p-6 sm:p-12 lg:p-16">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={staggerChildren}
                className="flex flex-col items-center text-center space-y-6 max-w-2xl"
            >
                {/* Heading */}
                <motion.p
                    variants={fadeInUp}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-poppins"
                >
                    Join Our Community
                </motion.p>

                {/* Description */}
                <motion.p
                    variants={fadeInUp}
                    className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-open-sans"
                >
                    Stay connected and inspired by joining our WhatsApp community or subscribing to our success letter.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    {/* WhatsApp Button */}
                    <Link
                        href={'https://chat.whatsapp.com/EALguFiO83nJ4i6fe8m16J'}
                        className="flex items-center justify-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-colors duration-300"
                        target={'_blank'}
                    >
                        <FaWhatsapp size={24} className="mr-2" />
                        Join WhatsApp Group
                    </Link>

                    {/* Email Subscription Form */}
                    <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <button
                            type="submit"
                            className="bg-amber-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
}