'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    FaBrain,
    FaHandshake,
    FaUsers,
    FaLightbulb,
    FaComments,
    FaChartLine,
    FaUserTie,
    FaGlobeAmericas,
    FaArrowRight
} from 'react-icons/fa';
import { GiProgression, GiAchievement, GiAbstract024 } from 'react-icons/gi';
import { MdEmojiPeople, MdOutlineAutoGraph, MdDiversity3 } from 'react-icons/md';
import { IoMdRocket } from 'react-icons/io';
import Head from 'next/head';

type SkillCard = {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
    stat: string;
    statDescription: string;
    color: string;
};

type Testimonial = {
    id: string;
    name: string;
    role: string;
    quote: string;
    avatar: string;
};

export default function SoftSkillsDevelopment() {
    const [activeTab, setActiveTab] = useState('all');
    const componentRef = useRef<HTMLDivElement>(null);

    // Scroll animations
    const { scrollYProgress } = useScroll({
        target: componentRef,
        offset: ['start end', 'end start']
    });

    // Parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

    // Soft skills data
    const softSkills: SkillCard[] = [
        {
            id: '1',
            title: 'Communication',
            description: 'Master verbal and non-verbal communication to express ideas clearly and build strong relationships.',
            icon: <FaComments className="text-4xl" />,
            stat: '89%',
            statDescription: 'of employers prioritize this skill',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            id: '2',
            title: 'Emotional Intelligence',
            description: 'Develop self-awareness and empathy to navigate workplace dynamics effectively.',
            icon: <MdEmojiPeople className="text-4xl" />,
            stat: '4.3x',
            statDescription: 'more likely to be promoted',
            color: 'from-red-600 to-purple-600'
        },
        {
            id: '3',
            title: 'Teamwork',
            description: 'Collaborate effectively with diverse teams to achieve common goals.',
            icon: <MdDiversity3 className="text-4xl" />,
            stat: '92%',
            statDescription: 'team performance improvement',
            color: 'from-indigo-600 to-blue-600'
        },
        {
            id: '4',
            title: 'Adaptability',
            description: 'Thrive in changing environments by embracing new challenges and learning opportunities.',
            icon: <GiProgression className="text-4xl" />,
            stat: '3.8x',
            statDescription: 'higher job satisfaction',
            color: 'from-purple-600 to-red-600'
        },
        {
            id: '5',
            title: 'Critical Thinking',
            description: 'Analyze problems objectively and make reasoned judgments for better decision making.',
            icon: <FaBrain className="text-4xl" />,
            stat: '85%',
            statDescription: 'career success correlation',
            color: 'from-blue-600 to-teal-600'
        },
        {
            id: '6',
            title: 'Leadership',
            description: 'Inspire and guide others toward shared objectives with vision and integrity.',
            icon: <FaUserTie className="text-4xl" />,
            stat: '78%',
            statDescription: 'of promotions depend on this',
            color: 'from-red-600 to-blue-600'
        }
    ];

    const testimonials: Testimonial[] = [
        {
            id: '1',
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            quote: 'The soft skills training transformed how I lead my team. My communication and emotional intelligence improvements led to a 40% boost in team productivity.',
            avatar: '/avatars/avatar1.jpg'
        },
        {
            id: '2',
            name: 'Michael Chen',
            role: 'Tech Lead',
            quote: 'Learning adaptability and teamwork skills helped me transition into a leadership role smoothly. I now manage a team of 15 engineers effectively.',
            avatar: '/avatars/avatar2.jpg'
        },
        {
            id: '3',
            name: 'David Rodriguez',
            role: 'Sales Executive',
            quote: 'The communication skills I developed helped me increase my closing rate by 35%. Soft skills truly make the difference in client relationships.',
            avatar: '/avatars/avatar3.jpg'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }),
        hover: {
            y: -10,
            scale: 1.03,
            boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)',
            transition: { type: 'spring', stiffness: 300, damping: 10 }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    return (
        <div>


            <div
                ref={componentRef}
                className="relative overflow-hidden min-h-screen"
            >
                {/* Animated Gradient Background */}
                <motion.div
                    style={{ y: yBg, opacity: opacityBg }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/80 to-blue-900/80"
                >
                    {/* Floating abstract shapes */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/5"
                            style={{
                                fontSize: `${40 + Math.random() * 60}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, Math.random() * 200 - 100],
                                y: [0, Math.random() * 200 - 100],
                                rotate: [0, Math.random() * 360],
                                opacity: [0, 0.1, 0],
                                transition: {
                                    duration: 20 + Math.random() * 30,
                                    repeat: Infinity,
                                    repeatType: "reverse" as const
                                }
                            }}
                        >
                            <GiAbstract024 />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center mb-20 pt-10"
                    >
                        <motion.div
                            variants={fadeIn}
                            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600 rounded-full p-6 mb-8 shadow-xl"
                        >
                            <GiAchievement className="text-white text-5xl" />
                        </motion.div>

                        <motion.h1
                            variants={fadeIn}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat"
                        >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-blue-400 to-white">
                Master Essential
              </span> Soft Skills
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            className="text-xl text-gray-300 max-w-3xl mx-auto font-open-sans mb-10"
                        >
                            Develop the interpersonal skills that drive career success and leadership excellence
                        </motion.p>

                        <motion.div
                            variants={fadeIn}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-xl text-lg shadow-xl"
                            >
                                Start Your Development Journey
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-transparent text-white font-bold rounded-xl text-lg border-2 border-white/20 hover:border-white/40"
                            >
                                Explore Programs
                            </motion.button>
                        </motion.div>
                    </motion.section>

                    {/* Why Soft Skills Matter */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="mb-20"
                    >
                        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
                            <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
                                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Soft Skills</span> Matter
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-gray-300 mb-6 font-open-sans">
                                        In today&apos;s competitive professional landscape, technical skills alone aren&apos;t enough. Soft skills - the interpersonal attributes that enable you to work harmoniously with others - are what differentiate good professionals from exceptional ones.
                                    </p>
                                    <p className="text-gray-300 mb-6 font-open-sans">
                                        Research shows that 85% of career success comes from well-developed soft skills, while only 15% comes from technical skills. Employers consistently rank communication, teamwork, and adaptability among their most sought-after qualities.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-lg p-3 mr-4">
                                            <FaChartLine className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Career Acceleration</h3>
                                            <p className="text-gray-300 font-open-sans">Professionals with strong soft skills are 50% more likely to be promoted to leadership roles.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-lg p-3 mr-4">
                                            <FaHandshake className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Relationship Building</h3>
                                            <p className="text-gray-300 font-open-sans">Effective communication fosters stronger professional networks and client relationships.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Skills Grid */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-12 text-center font-montserrat">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Soft Skills</span> to Develop
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {softSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.id}
                                        custom={index}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        className="group relative bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-red-500/50 overflow-hidden"
                                    >
                                        {/* Shine effect */}
                                        <motion.div
                                            variants={{
                                                hover: {
                                                    x: '100%',
                                                    transition: { duration: 0.8 }
                                                }
                                            }}
                                            className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none -translate-x-full"
                                        />

                                        {/* Icon */}
                                        <div className={`mb-6 p-4 bg-gradient-to-r ${skill.color} rounded-xl w-16 h-16 flex items-center justify-center shadow-md`}>
                                            {skill.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">{skill.title}</h3>
                                        <p className="text-gray-300 mb-6 font-open-sans">{skill.description}</p>

                                        {/* Stats */}
                                        <div className="mt-auto pt-4 border-t border-gray-700/50 flex justify-between items-center">
                                            <div>
                                                <p className="text-3xl font-bold text-white mb-1 font-montserrat">{skill.stat}</p>
                                                <p className="text-sm text-gray-400 font-open-sans">{skill.statDescription}</p>
                                            </div>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="text-blue-400 flex items-center"
                                            >
                                                <span className="mr-2 text-sm font-montserrat">Learn</span>
                                                <FaArrowRight />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.section>

                    {/* Testimonials */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-12 text-center font-montserrat">
                            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Stories</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mr-4">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white font-montserrat">{testimonial.name}</h4>
                                            <p className="text-gray-400 font-open-sans">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic font-open-sans">&quot;{testimonial.quote}&quot;</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600 rounded-full p-6 mb-8 shadow-xl"
                            >
                                <IoMdRocket className="text-white text-5xl" />
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
                                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Transform</span> Your Career?
                            </h2>

                            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-open-sans">
                                Join thousands of professionals who have accelerated their careers through soft skills mastery
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-xl text-lg shadow-xl"
                            >
                                Begin Your Development Journey
                            </motion.button>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
}