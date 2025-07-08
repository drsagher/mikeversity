'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPeace, FaGlobeAmericas, FaTrophy, FaMicrophone, FaBookOpen, FaUsers, FaQuoteLeft, FaHandshake, FaBrain, FaBalanceScale } from 'react-icons/fa';
import { GiJusticeStar, GiInspiration } from 'react-icons/gi';
import { RiTeamLine } from 'react-icons/ri';

interface Testimonial {
    quote: string;
    author: string;
}

interface Principle {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
    duration: string;
}

const SuccessTrainerPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const testimonials: Testimonial[] = [
        {
            quote: "John's training transformed our executive team's approach to ethical leadership. In just 6 months, we saw a 40% improvement in employee satisfaction while maintaining record profits.",
            author: "Sarah Johnson, Fortune 500 CEO",
        },
        {
            quote: "As a social entrepreneur, I needed guidance on balancing purpose and profit. John's framework helped me scale my impact 3x while becoming financially sustainable.",
            author: "Michael Chen, Founder of GreenFuture",
        },
        {
            quote: "The peace leadership certification changed how I mediate conflicts in my community. We've resolved 85% of disputes without litigation using these techniques.",
            author: "David Martinez, Community Organizer",
        },
    ];

    const corePrinciples: Principle[] = [
        {
            icon: <FaBalanceScale className="text-3xl" />,
            title: "Ethical Success",
            description: "Achieving goals without compromising values or harming others",
        },
        {
            icon: <FaHandshake className="text-3xl" />,
            title: "Collaborative Leadership",
            description: "Creating win-win outcomes through inclusive decision-making",
        },
        {
            icon: <GiInspiration className="text-3xl" />,
            title: "Conscious Innovation",
            description: "Developing solutions that benefit both business and society",
        },
    ];

    const services: Service[] = [
        {
            icon: <FaMicrophone className="text-3xl" />,
            title: "Keynote Speeches",
            description: "Inspirational talks on:",
            details: ["The Peaceful Path to Prosperity", "Leading with Moral Courage", "Conscious Capitalism in Practice", "Conflict Resolution for Growth"],
            duration: "60-90 minutes",
        },
        {
            icon: <FaBookOpen className="text-3xl" />,
            title: "Workshops",
            description: "Interactive sessions including:",
            details: ["3-Day Ethical Leadership Intensive", "Peaceful Negotiation Masterclass", "Values-Based Decision Making", "Sustainable Success Blueprinting"],
            duration: "Half-day to 3-day formats",
        },
        {
            icon: <RiTeamLine className="text-3xl" />,
            title: "Executive Coaching",
            description: "Personalized programs for:",
            details: ["Purpose-Driven Leadership Development", "Stakeholder Alignment Strategies", "Crisis Leadership with Compassion", "Legacy Building Roadmaps"],
            duration: "3-12 month engagements",
        },
    ];

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    if (!isMounted) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100">
            {/* Hero Section */}
            <section className="relative py-24 px-6">
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mb-8"
                        >
                            <FaPeace className="text-5xl mx-auto text-blue-400" />
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-blue-400">Conscious Leadership</span> for <br />
                            Transformational Success
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
                            Bridging business excellence with social impact through research-backed methodologies
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/70 px-6 py-3 rounded-lg border border-gray-700"
                            >
                                <span className="font-bold text-white">15+ Years</span> Experience
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/70 px-6 py-3 rounded-lg border border-gray-700"
                            >
                                <span className="font-bold text-white">27 Countries</span> Served
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/70 px-6 py-3 rounded-lg border border-gray-700"
                            >
                                <span className="font-bold text-white">94%</span> Client Satisfaction
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
                    >
                        About <span className="text-blue-400">Dr. John Doe</span>
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div
                            className="flex-1 space-y-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg leading-relaxed text-gray-200">
                                Dr. John Doe is a Harvard-educated leadership philosopher and practitioner who has dedicated his career to developing frameworks for success that create value for all stakeholders. With a PhD in Organizational Psychology and certification in Conflict Resolution, he brings academic rigor to practical leadership challenges.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                His <span className="font-bold text-blue-400">Peaceful Prosperity Framework™</span> has been adopted by Fortune 500 companies, government agencies, and NGOs worldwide, demonstrating that ethical leadership drives superior financial performance.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: "15,000+", label: "Leaders Trained" },
                                    { value: "4.9/5", label: "Average Rating" },
                                    { value: "3", label: "Bestselling Books" },
                                    { value: "200+", label: "Keynotes Delivered" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-800/70 p-4 rounded-lg border border-gray-700"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="font-bold text-blue-400 text-xl">{stat.value}</div>
                                        <div className="text-gray-300">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1 relative"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full h-96 bg-gray-800 rounded-xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 flex items-center justify-center">
                                    <FaBrain className="text-8xl opacity-30" />
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -left-5 bg-blue-500 text-white px-6 py-2 rounded-lg font-bold shadow-lg">
                                Featured in:
                            </div>
                            <div className="absolute -bottom-5 -right-5 bg-gray-800/90 px-6 py-2 rounded-lg border border-gray-700 shadow-lg">
                                <div className="text-sm text-white">Harvard Business Review</div>
                                <div className="text-sm text-white">TED Global</div>
                                <div className="text-sm text-white">Forbes Leadership</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Principles Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
                    >
                        Core <span className="text-blue-400">Principles</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {corePrinciples.map((principle, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/70 p-8 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="text-blue-400 flex justify-center mb-6">
                                    {principle.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center text-white">{principle.title}</h3>
                                <p className="text-gray-300 text-center">{principle.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
                    >
                        Signature <span className="text-blue-400">Programs</span>
                    </motion.h2>

                    <div className="space-y-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/70 p-8 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex flex-col lg:flex-row gap-8 items-center">
                                    <div className="text-blue-400 flex items-center justify-center lg:justify-start">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                                        <p className="text-gray-300 mb-4">{service.description}</p>
                                        <ul className="mb-4 space-y-2">
                                            {service.details.map((detail, i) => (
                                                <li key={i} className="flex items-start text-gray-300">
                                                    <span className="text-blue-400 mr-2">•</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-sm text-gray-400">{service.duration}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
                    >
                        Measurable <span className="text-blue-400">Impact</span>
                    </motion.h2>

                    <div className="relative h-96 md:h-80">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                className="absolute inset-0 bg-gray-800/70 p-8 rounded-xl border border-gray-700 flex flex-col justify-center"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaQuoteLeft className="text-blue-400 text-2xl mb-6" />
                                <p className="text-xl italic mb-8 text-gray-200">{testimonials[currentTestimonial].quote}</p>
                                <p className="font-bold text-blue-400">— {testimonials[currentTestimonial].author}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition ${currentTestimonial === index ? 'bg-blue-400' : 'bg-gray-600'}`}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessTrainerPage;