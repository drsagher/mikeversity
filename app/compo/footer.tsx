'use client';

import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FooterComponent() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <footer className="bg-gradient-to-r from-red-900 via-black to-blue-900 text-white py-10 px-6">
            {/* Footer Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Office Address Section */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                >
                    <h2 className="text-xl font-bold uppercase text-amber-400 mb-4 flex items-center gap-2">
                        <FaMapMarkerAlt size={20} /> Our Offices
                    </h2>
                    <address className="text-gray-200 not-italic space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt size={16} /> USA Office:
                        </p>
                        <p className="ml-6">123 Main Street, New York, NY 10001</p>
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt size={16} /> Oman Office:
                        </p>
                        <p className="ml-6">456 Sultan Qaboos Street, Muscat</p>
                    </address>
                    <div className="mt-4 space-y-2">
                        <p className="flex items-center gap-2 text-gray-200">
                            <FaPhoneAlt size={16} /> USA: +1(929) 563-0647
                        </p>
                        <p className="flex items-center gap-2 text-gray-200">
                            <FaPhoneAlt size={16} /> Oman: +96872270480
                        </p>
                        <p className="flex items-center gap-2 text-gray-200">
                            <FaEnvelope size={16} /> Email: info@mikeversity.com
                        </p>
                    </div>
                </motion.div>

                {/* Quick Links Section */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                >
                    <h2 className="text-xl font-bold uppercase text-amber-400 mb-4 flex items-center gap-2">
                        Mike Litman
                    </h2>
                    <ul className="text-gray-200 space-y-2 text-sm">
                        <li><Link href="/pages/about" className="hover:text-amber-400">Profile</Link></li>
                        <li><Link href="/pages/biography" className="hover:text-amber-400">Biography</Link></li>
                        <li><Link href="/pages/awards" className="hover:text-amber-400">Awards</Link></li>
                    </ul>
                </motion.div>

                {/* Social Media Section */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                >
                    <h2 className="text-xl font-bold uppercase text-amber-400 mb-4 flex items-center gap-2">
                        Follow Us
                    </h2>
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                            <FaFacebook size={24} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                            <FaTwitter size={24} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                            <FaInstagram size={24} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                            <FaLinkedin size={24} />
                        </Link>
                    </div>
                </motion.div>

                {/* Working Hours Section */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                >
                    <h2 className="text-xl font-bold uppercase text-amber-400 mb-4 flex items-center gap-2">
                        <FaClock size={20} /> Working Hours
                    </h2>
                    <div className="text-gray-200 space-y-2 text-sm">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </motion.div>
            </div>

            {/* Copyright Section */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="text-center mt-10 text-sm text-gray-300 border-t border-gray-400 pt-4"
            >
                <p>&copy; 2024 Mikeversity. All Rights Reserved.</p>
                <p>Developed by <Link href="https://www.linkedin.com/in/drsagher/" target="_blank" className="text-amber-300">Abubakar Siddique</Link></p>
            </motion.div>
        </footer>
    );
}