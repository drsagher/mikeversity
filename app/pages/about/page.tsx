'use client';
import MikePic from '@/public/mike2.jpg'
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGraduationCap, FaUsers, FaChalkboardTeacher, FaBriefcase, FaLightbulb, FaHandshake } from 'react-icons/fa';
import Image from "next/image";

// Client Card Component
const ClientCard: React.FC<{ name: string; logo: string }> = ({ name, logo }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <img src={logo} alt={name} className="w-16 h-16 object-contain" />
            <p className="text-lg text-white font-['Open_Sans'] text-center">{name}</p>
        </motion.div>
    );
};

const ProfilePage: React.FC = () => {
    // Animation variants for Framer Motion
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Client data
    const clients = [
        { name: 'Google', logo: '/path/to/google-logo.png' },
        { name: 'Microsoft', logo: '/path/to/microsoft-logo.png' },
        { name: 'UNICEF', logo: '/path/to/unicef-logo.png' },
        { name: 'Tesla', logo: '/path/to/tesla-logo.png' },
        { name: 'Amazon', logo: '/path/to/amazon-logo.png' },
        { name: 'Apple', logo: '/path/to/apple-logo.png' },
        { name: 'World Bank', logo: '/path/to/world-bank-logo.png' },
        { name: 'Nike', logo: '/path/to/nike-logo.png' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.header
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-white font-['Poppins']">Mike Litman</h1>
                    <p className="mt-4 text-lg text-blue-200 font-['Open_Sans']">
                        Global Awards Winning Leader
                    </p>
                </motion.header>

                {/* Mission Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mb-6 flex items-center gap-2">
                        <FaLightbulb className="text-blue-400" /> Mission
                    </h2>
                    <p className="text-lg text-blue-100 font-['Open_Sans']">
                        Our mission is to empower individuals and organizations through innovative training programs, fostering growth, and achieving excellence in their respective fields. We believe in creating sustainable change through leadership, collaboration, and continuous learning.
                    </p>
                </motion.section>

                {/* Trainer Profile Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                >
                    <motion.div variants={fadeInUp} className="flex justify-center">
                        <Image
                            src={MikePic}
                            alt="Trainer"
                            className="w-72 h-72 rounded-full object-cover border-4 border-blue-400 shadow-lg"
                        />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="text-white">
                        <h2 className="text-3xl font-bold font-['Poppins'] mb-4">About</h2>
                        <p className="text-lg font-['Open_Sans'] mb-4">
                            Dr. Mike Litman is a visionary leader and the driving force behind Mike&apos;s International, serving as its President, Founder, and CEO. With over 1,000 global awards to his name, Mike is a trailblazer who consistently redefines excellence. His intellectual brilliance is unmatched, earning him 24 honorary doctorate degrees from prestigious institutions worldwide, solidifying his status as a global thought leader.
                        </p>
                        <p className="text-lg font-['Open_Sans'] mb-4">
                            As a sought-after speaker, trainer, and coach, Mike has empowered over 500 million individuals across 109 nationalities, leaving an indelible mark on the global stage. His expertise has been sought by hundreds of world-renowned organizations, where he has served as a Global Brand Ambassador, President, and Country Head, further cementing his legacy as a transformative leader.
                        </p>
                        <p className="text-lg font-['Open_Sans']">
                            Mike&apos;s journey is a testament to the power of innovation, resilience, and leadership. His name has become synonymous with excellence, inspiring generations to push boundaries and achieve greatness.
                        </p>
                    </motion.div>
                </motion.section>

                {/* Recent Accomplishments Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mb-6 flex items-center gap-2">
                        <FaAward className="text-blue-400" /> Recent Accomplishments
                    </h2>
                    <motion.ul variants={staggerContainer} className="space-y-4">
                        {[
                            'Trained over 500 professionals in leadership and organizational development in 2023.',
                            'Published the best-selling book, "Passionate Quantum Success."',
                            'Launched an online training platform with over 10,000 active users.',
                            'Featured in Forbes Magazine as one of the Top 10 Leadership Coaches of 2023.',
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={fadeInUp}
                                className="text-lg text-blue-100 font-['Open_Sans']"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.section>

                {/* Conferences/Trainings/Workshops Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mb-6 flex items-center gap-2">
                        <FaChalkboardTeacher className="text-blue-400" /> Conferences, Trainings, and Workshops
                    </h2>
                    <motion.ul variants={staggerContainer} className="space-y-4">
                        {[
                            'Keynote Speaker at the Global Leadership Summit 2023, New York.',
                            'Conducted workshops on Emotional Intelligence in 10 countries across Europe and Asia.',
                            'Hosted a virtual training series on Agile Methodologies for Fortune 500 companies.',
                            'Facilitated a leadership retreat for senior executives in Switzerland.',
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={fadeInUp}
                                className="text-lg text-blue-100 font-['Open_Sans']"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.section>

                {/* Honorary Degrees and Qualifications Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mb-6 flex items-center gap-2">
                        <FaGraduationCap className="text-blue-400" /> Education & Qualifications
                    </h2>
                    <motion.ul variants={staggerContainer} className="space-y-4">
                        {[
                            'Ph.D. in Organizational Psychology, Harvard University.',
                            'Certified Leadership Coach (CLC) from the International Coaching Federation.',
                            'Honorary Doctorate in Education, Stanford University.',
                            'Master’s Degree in Business Administration (MBA), INSEAD.',
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={fadeInUp}
                                className="text-lg text-blue-100 font-['Open_Sans']"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.section>

                {/* Awards Achieved Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mb-6 flex items-center gap-2">
                        <FaAward className="text-blue-400" /> Awards & Recognitions
                    </h2>
                    <motion.ul variants={staggerContainer} className="space-y-4">
                        {[
                            '2023 Global Trainer of the Year Award.',
                            'Excellence in Leadership Training Award 2022.',
                            'Best-selling Author Award 2021.',
                            'Top 10 Leadership Coaches of 2023 - Forbes Magazine.',
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={fadeInUp}
                                className="text-lg text-blue-100 font-['Open_Sans']"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.section>

                {/* Clients & Collaborations Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mb-6 flex items-center gap-2">
                        <FaHandshake className="text-blue-400" /> Clients & Collaborations
                    </h2>
                    <p className="text-lg text-blue-100 font-['Open_Sans'] mb-6">
                        Mike has worked with a diverse range of clients, including Fortune 500 companies, startups, and non-profit organizations. Here are some of the notable clients:
                    </p>
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    >
                        {clients.map((client, index) => (
                            <ClientCard key={index} name={client.name} logo={client.logo} />
                        ))}
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
};

export default ProfilePage;