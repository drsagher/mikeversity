'use client';
import Link from 'next/link';
import {
    FaRobot,
    FaCode,
    FaChalkboardTeacher,
    FaPython,
    FaPhp,
    FaLaptopCode,
    FaClipboardList,
    FaAward,
    FaGraduationCap,
    FaBookOpen,
    FaChartBar,
    FaQuoteLeft,
    FaQuoteRight,
    FaUsers,
    FaBriefcase,
    FaChild,
    FaMicrophone,
    FaLanguage,
    FaHandshake,
    FaBrain,
    FaUserTie,
} from 'react-icons/fa';
import { SiHiveBlockchain } from "react-icons/si";
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Certification Programs Data
const certificationPrograms = [

    {
        title: 'Speaking English Language Course For Kindergarten',
        description:
            'A fun and interactive course designed to help kindergarten children learn English through games, songs, and activities.',
        icon: <FaChild className="text-5xl text-purple-500" />,
        link: '',
    },
    {
        title: 'American Sounds Training For Kids (Clear Speech Therapy Training)',
        description:
            'Focused on helping kids master American English pronunciation and speech clarity through specialized training.',
        icon: <FaMicrophone className="text-5xl text-teal-500" />,
        link: '',
    },
    {
        title: 'Standard American Accent Elimination Training',
        description:
            'A comprehensive program to help non-native speakers eliminate their native accents and adopt a standard American accent.',
        icon: <FaLanguage className="text-5xl text-pink-500" />,
        link: '',
    },
    {
        title: 'Speaking English For Beginners',
        description:
            'A beginner-friendly course to build a strong foundation in English speaking, focusing on basic vocabulary and grammar.',
        icon: <FaGraduationCap className="text-5xl text-yellow-500" />,
        link: '',
    },
    {
        title: 'Speaking English For Advanced Learners',
        description:
            'Designed for advanced learners to refine their English speaking skills, focusing on fluency, vocabulary, and pronunciation.',
        icon: <FaUserTie className="text-5xl text-green-500" />,
        link: '',
    },
    {
        title: 'Corporate Standard American Accent Training',
        description:
            'Tailored for professionals to master the standard American accent for effective communication in corporate settings.',
        icon: <FaBriefcase className="text-5xl text-red-500" />,
        link: '',
    },
    {
        title: 'Speaking English Program For Toddlers & Children',
        description:
            'A playful and engaging program to introduce toddlers and young children to the English language.',
        icon: <FaChild className="text-5xl text-indigo-500" />,
        link: '',
    },
    {
        title: 'Life Skills Training Program For Children And Youth',
        description:
            'A holistic program to develop essential life skills such as communication, teamwork, and problem-solving.',
        icon: <FaUsers className="text-5xl text-blue-500" />,
        link: '',
    },
    {
        title: '99 Rules Of Speaking English For Non-Native Speakers',
        description:
            'A rule-based approach to mastering English speaking, designed specifically for non-native speakers.',
        icon: <FaBookOpen className="text-5xl text-cyan-500" />,
        link: '',
    },
    {
        title: 'Advanced Standard American Accent Training Program For CEOs',
        description:
            'A specialized program for CEOs and executives to refine their American accent for global business communication.',
        icon: <FaUserTie className="text-5xl text-purple-500" />,
        link: '',
    },
    {
        title: 'English Communication Skills V-5',
        description:
            'An advanced course focusing on enhancing communication skills for professional and personal growth.',
        icon: <FaChartBar className="text-5xl text-teal-500" />,
        link: '',
    },
    {
        title: 'Kinesthetic Language (How To Read Minds)',
        description:
            'Learn the art of reading body language and non-verbal cues to understand people better.',
        icon: <FaBrain className="text-5xl text-pink-500" />,
        link: '',
    },
    {
        title: 'Body Language: How To Detect A Liar',
        description:
            'A course designed to help you identify deceptive behavior through body language analysis.',
        icon: <FaHandshake className="text-5xl text-yellow-500" />,
        link: '',
    },
    {
        title: 'Body Language For Leaders',
        description:
            'Master the art of using body language to inspire, influence, and lead effectively.',
        icon: <FaUserTie className="text-5xl text-green-500" />,
        link: '',
    },
    {
        title: 'Teachers Speaking English Language As Foreign Speakers',
        description:
            'A specialized program for teachers to improve their English speaking skills for effective classroom communication.',
        icon: <FaChalkboardTeacher className="text-5xl text-red-500" />,
        link: '',
    },
    {
        title: 'Effective Communication Skills At Workplace And Home',
        description:
            'Learn how to communicate effectively in both professional and personal settings.',
        icon: <FaHandshake className="text-5xl text-indigo-500" />,
        link: '',
    },
    {
        title: 'Public Speaking For Children, Teens And Adults',
        description:
            'A comprehensive program to build confidence and skills in public speaking for all age groups.',
        icon: <FaMicrophone className="text-5xl text-blue-500" />,
        link: '',
    },
];

// Testimonials Data
const testimonials = [
    {
        quote:
            "The Mansha Certified AI Agents Developer program transformed my career. Highly recommend it!",
        name: "John Doe",
        position: "AI Engineer, Class of 2023",
    },
    {
        quote:
            "The Full Stack Development course gave me the skills I needed to land my dream job.",
        name: "Jane Smith",
        position: "Web Developer, Class of 2022",
    },
    {
        quote:
            "I loved the hands-on approach of the Mansha Robotics program. It was both challenging and rewarding.",
        name: "Alice Johnson",
        position: "Software Engineer, Class of 2021",
    },
];

export default function CertificationPage() {
    return (
        <div
            className={`bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-12 ${montserrat.className}`}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-12"
                >
                    Mikeversity Certifications
                </motion.h1>
                {/* Certification Program Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {certificationPrograms.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
                        >
                            {/* Icon */}
                            <div className="mb-4">{program.icon}</div>
                            {/* Title */}
                            <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-2">
                                {program.title}
                            </h2>
                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-200 mb-4">
                                {program.description}
                            </p>
                            {/* Link Button */}
                            <Link href={program.link} passHref legacyBehavior>
                                <motion.a
                                    whileHover={{ scale: 1.05, color: '#1E40AF' }}
                                    className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full font-semibold transition-all"
                                >
                                    Learn More
                                </motion.a>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Why Choose Mikeversity Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center mb-16"
                >
                    <FaAward size={50} className="text-teal-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
                        Why Choose Mikeversity?
                    </h2>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        At Mikeversity, we provide cutting-edge certifications designed to empower professionals with the skills and knowledge needed to excel in their careers. Our programs are led by industry experts and supported by state-of-the-art resources.
                    </p>
                </motion.div>
                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 col-span-full text-center mb-8">
                        What Our Alumni Say
                    </h2>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
                        >
                            <FaQuoteLeft size={20} className="text-teal-400 mb-4" />
                            <p className="text-sm sm:text-base text-gray-200 italic">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <FaQuoteRight size={20} className="text-teal-400 ml-auto mt-4" />
                            <p className="text-teal-400 font-bold mt-4">{testimonial.name}</p>
                            <p className="text-gray-300">{testimonial.position}</p>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Upcoming Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center mt-16"
                >
                    <FaBookOpen size={50} className="text-teal-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
                        Upcoming Certifications
                    </h2>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        Stay tuned for exciting new certifications launching soon. These include advanced programs in AI, blockchain, cloud computing, and specialized workshops tailored to meet the demands of modern industries.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}