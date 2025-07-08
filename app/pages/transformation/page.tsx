'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    FaUserTie,
    FaBuilding,
    FaUsers,
    FaLightbulb,
    FaChartLine,
    FaHandshake,
    FaGlobeAmericas,
    FaArrowRight,
    FaQuoteLeft,
    FaChevronDown
} from 'react-icons/fa';
import { GiProgression, GiAchievement, GiAbstract024 } from 'react-icons/gi';
import { MdEmojiPeople, MdOutlineAutoGraph } from 'react-icons/md';
import { IoMdRocket } from 'react-icons/io';
import Head from 'next/head';

type TransformationCard = {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
    benefits: string[];
    color: string;
};

type Testimonial = {
    id: string;
    name: string;
    role: string;
    quote: string;
    company: string;
};

type ProcessStep = {
    step: number;
    title: string;
    description: string;
    icon: JSX.Element;
};

export default function TransformationPage() {
    const [activeTab, setActiveTab] = useState('leaders');
    const componentRef = useRef<HTMLDivElement>(null);

    // Scroll animations
    const { scrollYProgress } = useScroll({
        target: componentRef,
        offset: ['start end', 'end start']
    });

    // Parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

    const transformations: TransformationCard[] = [
        {
            id: 'leaders',
            title: 'Leader Transformation',
            description: 'Empower leaders to reach their highest potential through personalized development programs',
            icon: <FaUserTie className="text-4xl" />,
            benefits: [
                'Enhanced decision-making capabilities',
                'Improved emotional intelligence',
                'Stronger strategic vision',
                'Authentic leadership presence'
            ],
            color: 'from-red-600 to-blue-600'
        },
        {
            id: 'institutions',
            title: 'Institutional Transformation',
            description: 'Redefine educational and cultural institutions for the modern era',
            icon: <FaBuilding className="text-4xl" />,
            benefits: [
                'Future-ready curriculum design',
                'Cultural alignment with values',
                'Sustainable operational models',
                'Enhanced community impact'
            ],
            color: 'from-blue-600 to-gray-900'
        },
        {
            id: 'organizations',
            title: 'Organizational Transformation',
            description: 'Catalyze business evolution through strategic change management',
            icon: <FaUsers className="text-4xl" />,
            benefits: [
                'Agile transformation frameworks',
                'High-performance team building',
                'Innovation-driven culture',
                'Digital transformation roadmaps'
            ],
            color: 'from-gray-900 to-red-600'
        },
        {
            id: 'self',
            title: 'Personal Transformation',
            description: 'Unlock your fullest potential through conscious self-development',
            icon: <MdEmojiPeople className="text-4xl" />,
            benefits: [
                'Mindset mastery techniques',
                'Purpose discovery process',
                'Emotional resilience training',
                'Peak performance strategies'
            ],
            color: 'from-blue-600 to-red-600'
        }
    ];

    const testimonials: Testimonial[] = [
        {
            id: '1',
            name: 'Sarah Johnson',
            role: 'CEO',
            company: 'Fortune 500 Company',
            quote: 'The leadership transformation program completely changed how I approach challenges. My executive team has noticed a dramatic improvement in my strategic decision-making.'
        },
        {
            id: '2',
            name: 'Michael Chen',
            role: 'University Chancellor',
            company: 'Prestigious University',
            quote: 'Our institutional transformation has led to a 40% increase in student satisfaction and a complete revitalization of our curriculum for the digital age.'
        },
        {
            id: '3',
            name: 'David Rodriguez',
            role: 'COO',
            company: 'Global Tech Firm',
            quote: 'The organizational transformation framework helped us navigate a complete restructuring while maintaining employee morale and actually increasing productivity.'
        }
    ];

    const processSteps: ProcessStep[] = [
        {
            step: 1,
            title: 'Assessment',
            description: 'Comprehensive evaluation of current state and transformation potential',
            icon: <FaChartLine className="text-3xl" />
        },
        {
            step: 2,
            title: 'Visioning',
            description: 'Co-creation of aspirational yet achievable transformation goals',
            icon: <FaLightbulb className="text-3xl" />
        },
        {
            step: 3,
            title: 'Strategy',
            description: 'Development of customized roadmap for transformation journey',
            icon: <GiProgression className="text-3xl" />
        },
        {
            step: 4,
            title: 'Implementation',
            description: 'Execution with continuous feedback and adjustment mechanisms',
            icon: <IoMdRocket className="text-3xl" />
        },
        {
            step: 5,
            title: 'Sustainment',
            description: 'Embedding changes into culture and systems for lasting impact',
            icon: <GiAchievement className="text-3xl" />
        }
    ];

    const stats = [
        { value: '87%', label: 'Success Rate', description: 'of transformation initiatives achieve their goals' },
        { value: '4.2x', label: 'ROI', description: 'average return on transformation investments' },
        { value: '10K+', label: 'Leaders Transformed', description: 'across 30 countries' },
        { value: '95%', label: 'Satisfaction', description: 'client satisfaction rating' }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <Head>
                <title>Transformation Hub | Leaders, Institutions, Organizations & Self</title>
                <meta name="description" content="Comprehensive transformation programs for leaders, institutions, organizations and personal growth" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
            </Head>

            <div
                ref={componentRef}
                className="relative overflow-hidden min-h-screen"
            >
                {/* Animated Gradient Background */}
                <motion.div
                    style={{ y: yBg, opacity: opacityBg }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-blue-900"
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
                                    repeatType: "reverse"
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
                        variants={staggerContainer}
                        className="text-center mb-20 pt-10"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600 rounded-full p-6 mb-8 shadow-xl">
                            <GiProgression className="text-white text-5xl" />
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-blue-400 to-white">
                Transformational Excellence
              </span> for All
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-xl text-gray-300 max-w-3xl mx-auto font-open-sans mb-10">
                            Elevate leaders, reinvent institutions, revolutionize organizations, and rediscover yourself through our proven transformation frameworks
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-xl text-lg shadow-xl"
                            >
                                Begin Your Transformation
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-transparent text-white font-bold rounded-xl text-lg border-2 border-white/20 hover:border-white/40"
                            >
                                Explore Our Approach
                            </motion.button>
                        </motion.div>
                    </motion.section>

                    {/* Stats Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="mb-20"
                    >
                        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-8 text-center font-montserrat">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Impact</span> By Numbers
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeIn}
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 rounded-xl p-6 text-center border border-gray-700/50"
                                    >
                                        <p className="text-4xl font-bold text-white mb-2 font-montserrat">{stat.value}</p>
                                        <p className="text-xl font-semibold text-red-400 mb-2">{stat.label}</p>
                                        <p className="text-gray-300 font-open-sans">{stat.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Transformation Types */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="mb-20"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-12 text-center font-montserrat">
                            Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Transformation</span>
                        </motion.h2>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {transformations.map((transformation) => (
                                <motion.button
                                    key={transformation.id}
                                    variants={fadeIn}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActiveTab(transformation.id)}
                                    className={`px-6 py-3 rounded-lg font-medium ${
                                        activeTab === transformation.id
                                            ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    {transformation.title}
                                </motion.button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {transformations.map(
                                (transformation) =>
                                    activeTab === transformation.id && (
                                        <motion.div
                                            key={transformation.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className={`bg-gradient-to-br ${transformation.color} rounded-2xl p-8 shadow-lg`}
                                        >
                                            <div className="flex flex-col md:flex-row gap-8">
                                                <div className="flex flex-col items-center md:items-start">
                                                    <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-6 w-24 h-24 flex items-center justify-center">
                                                        {transformation.icon}
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-2 font-montserrat text-center md:text-left">
                                                        {transformation.title}
                                                    </h3>
                                                    <p className="text-gray-200 mb-6 font-open-sans text-center md:text-left">
                                                        {transformation.description}
                                                    </p>
                                                    <button className="flex items-center text-white font-medium px-6 py-2 rounded-lg bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
                                                        Learn More <FaArrowRight className="ml-2" />
                                                    </button>
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className="text-xl font-semibold text-white mb-4 font-montserrat">Key Benefits:</h4>
                                                    <ul className="space-y-3">
                                                        {transformation.benefits.map((benefit, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                                                                    <FaChevronDown className="text-white text-xs rotate-90" />
                                                                </div>
                                                                <span className="text-gray-200 font-open-sans">{benefit}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                    </motion.section>

                    {/* Transformation Process */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="mb-20"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-12 text-center font-montserrat">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Proven Process</span>
                        </motion.h2>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-blue-600 to-gray-900 transform -translate-x-1/2 hidden md:block"></div>

                            <div className="space-y-12 md:space-y-0">
                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={step.step}
                                        variants={fadeIn}
                                        className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} items-center`}
                                    >
                                        {index % 2 === 0 ? (
                                            <>
                                                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                                                    <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">{step.title}</h3>
                                                    <p className="text-gray-300 font-open-sans">{step.description}</p>
                                                </div>
                                                <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                                                    <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center text-white">
                                                        {step.icon}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="md:w-1/2 md:pr-12 flex justify-center md:justify-end">
                                                    <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-full p-6 w-20 h-20 flex items-center justify-center text-white">
                                                        {step.icon}
                                                    </div>
                                                </div>
                                                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                                                    <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">{step.title}</h3>
                                                    <p className="text-gray-300 font-open-sans">{step.description}</p>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Testimonials */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="mb-20"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-12 text-center font-montserrat">
                            Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Success Stories</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    variants={fadeIn}
                                    whileHover={{ y: -10 }}
                                    className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                                >
                                    <div className="flex justify-center mb-6 text-yellow-400">
                                        <FaQuoteLeft className="text-4xl opacity-30" />
                                    </div>
                                    <p className="text-gray-300 italic mb-6 font-open-sans">&quot;{testimonial.quote}&quot;</p>
                                    <div className="border-t border-gray-700/50 pt-4">
                                        <h4 className="text-xl font-bold text-white font-montserrat">{testimonial.name}</h4>
                                        <p className="text-gray-400 font-open-sans">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Final CTA */}
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
                                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Begin</span> Your Transformation?
                            </h2>

                            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-open-sans">
                                Join thousands of leaders, institutions and organizations who have achieved breakthrough transformations
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-xl text-lg shadow-xl"
                            >
                                Schedule Consultation
                            </motion.button>
                        </div>
                    </motion.section>
                </div>
            </div>
        </>
    );
}