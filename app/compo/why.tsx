'use client';

import { FaChalkboardTeacher, FaGlobe, FaMedal, FaGraduationCap, FaLightbulb, FaUsers, FaChartLine, FaStar, FaRegLightbulb, FaUserTie } from 'react-icons/fa';
import { GiDiamondTrophy, GiDiamondHard, GiArtificialIntelligence } from 'react-icons/gi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gem, Zap, Globe, BarChart2, BookOpen, BrainCircuit, Network, Rocket, ShieldCheck } from 'lucide-react';

export default function WhyMikeversity() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
            {/* Animated background elements */}
            <motion.div
                style={{ y: backgroundY }}
                className="fixed inset-0 -z-10 overflow-hidden opacity-20"
            >
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            opacity: [0, 0.2, 0],
                            transition: {
                                duration: 15 + Math.random() * 30,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                        className="absolute text-emerald-400/20"
                        style={{
                            fontSize: `${20 + Math.random() * 40}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    >
                        <GiDiamondHard />
                    </motion.div>
                ))}
            </motion.div>

            {/* Main Content */}
            <div className="min-h-screen text-white">
                {/* Hero Section */}
                <section className="relative pt-40 pb-28 px-6 max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center justify-center mb-8"
                        >
                            <GiDiamondTrophy className="text-emerald-400 text-5xl mr-3" />
                            <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                                The Mikeversity Edge
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16"
                        >
                            Where <span className="text-emerald-400 font-medium">visionaries</span> become <span className="text-cyan-400 font-medium">industry disruptors</span> through revolutionary education
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <FeatureCard
                            icon={<GiArtificialIntelligence className="text-emerald-400 text-4xl" />}
                            title="AI-Enhanced Learning"
                            description="Our adaptive platform uses machine learning to customize curriculum pacing, difficulty, and content focus based on your performance and goals."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={<FaChalkboardTeacher className="text-cyan-400 text-4xl" />}
                            title="Industry Titans"
                            description="Learn directly from Fortune 100 executives, Nobel laureates, and industry pioneers who have shaped modern business and technology."
                            delay={0.2}
                            highlighted
                        />
                        <FeatureCard
                            icon={<Network className="text-emerald-400 text-4xl" />}
                            title="Global Power Network"
                            description="Gain lifetime access to our 30,000+ alumni network spanning 120 countries, with members in executive positions at top companies worldwide."
                            delay={0.3}
                        />
                        <FeatureCard
                            icon={<Rocket className="text-cyan-400 text-4xl" />}
                            title="Career Hyperdrive"
                            description="Our graduates experience an average 4.2x salary increase within 18 months, with 78% receiving promotions within their first year."
                            delay={0.4}
                        />
                    </div>
                </section>

                {/* Impact Section */}
                <section className="py-24 bg-gradient-to-r from-gray-900/50 to-gray-950/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                                    Transformative Results
                                </h2>
                                <p className="text-lg text-gray-300 mb-8">
                                    Mikeversity graduates consistently outperform industry standards, achieving career milestones at unprecedented speeds. Our data-driven approach ensures measurable outcomes.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <StatCard
                                        value="94%"
                                        label="Executive Placement"
                                        icon={<FaUserTie className="text-emerald-400" />}
                                        description="Of graduates reach C-suite or VP-level positions within 5 years"
                                    />
                                    <StatCard
                                        value="5.0/5"
                                        label="Alumni Satisfaction"
                                        icon={<FaStar className="text-cyan-400" />}
                                        description="Average rating from graduates on career impact and education quality"
                                    />
                                    <StatCard
                                        value="18 Mos"
                                        label="Avg. Promotion Time"
                                        icon={<FaChartLine className="text-emerald-400" />}
                                        description="Time to first major promotion post-graduation"
                                    />
                                    <StatCard
                                        value="4.2x"
                                        label="Salary Growth"
                                        icon={<GiDiamondTrophy className="text-cyan-400" />}
                                        description="Average compensation increase within 18 months"
                                    />
                                </div>
                            </div>
                            <div className="bg-gray-900/50 p-10 rounded-2xl border border-gray-700/50">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <Globe className="mr-3 text-cyan-400" />
                                    Global Learning Infrastructure
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-emerald-400/10 p-1 rounded-full mr-3 mt-1">
                                            <FaGlobe className="text-emerald-400 text-sm" />
                                        </div>
                                        <span className="text-gray-300">3 physical campuses across North America, Europe, and Asia with state-of-the-art facilities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-cyan-400/10 p-1 rounded-full mr-3 mt-1">
                                            <Zap className="text-cyan-400 text-sm" />
                                        </div>
                                        <span className="text-gray-300">Virtual reality classrooms enabling immersive global collaboration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-emerald-400/10 p-1 rounded-full mr-3 mt-1">
                                            <BookOpen className="text-emerald-400 text-sm" />
                                        </div>
                                        <span className="text-gray-300">24/7 access to our digital learning platform with 5,000+ course modules</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-cyan-400/10 p-1 rounded-full mr-3 mt-1">
                                            <BarChart2 className="text-cyan-400 text-sm" />
                                        </div>
                                        <span className="text-gray-300">Real-time performance analytics dashboard for continuous improvement</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Methodology Section */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
                    >
                        The Mikeversity Method
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <MethodologyCard
                            icon={<BrainCircuit className="text-emerald-400" />}
                            title="Cognitive Mastery"
                            description="We employ neuroscience-based learning techniques including spaced repetition, interleaved practice, and retrieval exercises to accelerate skill acquisition by 3x compared to traditional methods."
                            number="01"
                        />
                        <MethodologyCard
                            icon={<ShieldCheck className="text-cyan-400" />}
                            title="Challenge-Based"
                            description="Students solve real-world problems from our corporate partners like Google, SpaceX, and McKinsey. 87% of student solutions get implemented by partner organizations."
                            number="02"
                            highlighted
                        />
                        <MethodologyCard
                            icon={<Network className="text-emerald-400" />}
                            title="Network Effect"
                            description="Our global community provides exponential growth opportunities through mastermind groups, accountability partnerships, and cross-industry collaboration."
                            number="03"
                        />
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-950">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-16"
                        >
                            <div className="text-center">
                                <h2 className="text-3xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                                    Alumni Success Stories
                                </h2>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    Hear how Mikeversity has transformed careers and empowered leaders across industries
                                </p>
                            </div>

                            <div className="bg-gray-900/50 p-10 rounded-2xl border border-gray-700/50">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-xl italic text-gray-200 mb-6">
                                    &quot;The Mikeversity experience completely rewired my approach to leadership. Within 6 months of graduating, I was leading a team twice the size of my previous role with confidence I never thought possible. The cognitive frameworks I learned continue to give me an edge in executive decision-making.&quot;
                                </blockquote>
                                <div className="text-emerald-300 font-medium">
                                    — Jamal Williams, Director of Product at TechNova
                                </div>
                                <div className="mt-4 text-sm text-gray-400">
                                    Advanced Leadership Program, Class of 2022 | 320% salary increase within 2 years
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-lg italic text-gray-200 mb-6">
                                        &quot;The AI curriculum at Mikeversity put me lightyears ahead of my peers. I went from mid-level data scientist to Head of Machine Learning at a Fortune 500 in under 18 months.&quot;
                                    </blockquote>
                                    <div className="text-cyan-300 font-medium">
                                        — Dr. Priya Patel, Head of ML at Vertex Systems
                                    </div>
                                </div>
                                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-lg italic text-gray-200 mb-6">
                                        &quot;The global network alone was worth the investment. My current startup was co-founded with two Mikeversity alumni I met during the program, and we&apos;ve secured $14M in Series A funding.&quot;
                                    </blockquote>
                                    <div className="text-emerald-300 font-medium">
                                        — Marcus Chen, CEO of NeuroLink AI
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}

// Enhanced Feature Card
function FeatureCard({ icon, title, description, delay = 0, highlighted = false }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
    highlighted?: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{
                y: -8,
                borderColor: highlighted ? "rgba(74, 222, 128, 0.8)" : "rgba(74, 222, 128, 0.3)",
                boxShadow: highlighted ? "0 10px 30px -10px rgba(74, 222, 128, 0.3)" : "0 5px 20px -5px rgba(74, 222, 128, 0.1)"
            }}
            className={`bg-white/5 p-8 rounded-2xl border ${
                highlighted
                    ? "border-cyan-400/50 shadow-lg shadow-cyan-500/10 relative z-10"
                    : "border-emerald-400/20"
            } transition-all h-full flex flex-col backdrop-blur-sm`}
        >
            <div className="text-4xl mb-6">{icon}</div>
            <h3 className="text-xl font-serif font-medium text-white mb-3">{title}</h3>
            <p className="text-gray-300 flex-1">{description}</p>
            {highlighted && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                </div>
            )}
        </motion.div>
    );
}

// Enhanced Stat Card with description
function StatCard({ value, label, icon, description }: {
    value: string;
    label: string;
    icon: React.ReactNode;
    description?: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-emerald-400/30 transition-all"
        >
            <div className="text-3xl font-bold text-white mb-2 flex items-center">
                {value}
                <span className="ml-3">{icon}</span>
            </div>
            <div className="text-gray-400 uppercase text-sm tracking-wider mb-2">{label}</div>
            {description && (
                <p className="text-gray-500 text-xs">{description}</p>
            )}
        </motion.div>
    );
}

function MethodologyCard({ icon, title, description, number, highlighted = false }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    number: string;
    highlighted?: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-2xl border ${
                highlighted
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-400/30 shadow-lg shadow-cyan-500/10"
                    : "bg-gray-900/50 border-gray-700/50"
            }`}
        >
            <div className="text-5xl font-bold text-gray-700/50 absolute top-4 right-6">{number}</div>
            <div className="text-4xl mb-6">{icon}</div>
            <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    );
}

// Enhanced Faculty Highlight with achievements
function FacultyHighlight({ name, title, credential, achievements = [], icon, highlighted = false }: {
    name: string;
    title: string;
    credential: string;
    achievements?: string[];
    icon: React.ReactNode;
    highlighted?: boolean;
}) {
    return (
        <motion.div
            whileHover={{ x: 5 }}
            className={`p-6 rounded-xl border ${
                highlighted
                    ? "border-cyan-400/30 bg-gradient-to-r from-gray-900/50 to-gray-800/50"
                    : "border-gray-700/50 bg-gray-900/30"
            } transition-all`}
        >
            <div className="flex items-start space-x-4">
                <div className="text-3xl mt-1">{icon}</div>
                <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">{name}</h3>
                    <p className="text-emerald-400 text-sm mb-1">{title}</p>
                    <p className="text-gray-400 text-sm mb-3">{credential}</p>
                    {achievements.length > 0 && (
                        <ul className="space-y-2">
                            {achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-emerald-400 mr-2">•</span>
                                    <span className="text-gray-400 text-sm">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </motion.div>
    );
}