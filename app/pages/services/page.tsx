'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from "next/image";
import { FcServices } from "react-icons/fc";
import {
    FaBuilding,
    FaChalkboardTeacher,
    FaUsers,
    FaHandsHelping,
    FaLaptop,
    FaVideo,
    FaLightbulb,
    FaMicrophone,
    FaBook,
    FaUserTie,
    FaComments,
    FaHeart,
    FaLanguage,
    FaPodcast,
    FaBookOpen,
    FaBrain,
    FaVolumeUp,
    FaRocket,
    FaBullhorn,
    FaLeaf,
    FaHands,
    FaUserCheck,
} from "react-icons/fa";

// Import hero images
import Svc1 from '@/public/services/svc1.jpg';
import Svc2 from '@/public/services/svc2.jpg';
import Svc3 from '@/public/services/svc3.jpg';

export default function ServicesPage() {
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

    const services = [
        { icon: <FaBuilding size={48} className="text-amber-400" />, title: 'Corporate Services', description: 'Tailored solutions to meet the unique needs of businesses, including strategy development and team building.' },
        { icon: <FaChalkboardTeacher size={48} className="text-amber-400" />, title: 'Workshops and Keynotes', description: 'Engaging sessions designed to inspire and educate audiences on various topics.' },
        { icon: <FaUsers size={48} className="text-amber-400" />, title: 'Train the Trainers', description: 'Comprehensive programs to equip trainers with the skills and tools they need to succeed.' },
        { icon: <FaHandsHelping size={48} className="text-amber-400" />, title: 'Consultancy', description: 'Expert advice and guidance to help organizations achieve their goals efficiently.' },
        { icon: <FaLaptop size={48} className="text-amber-400" />, title: 'Online Courses', description: 'Interactive and self-paced learning modules accessible from anywhere in the world.' },
        { icon: <FaVideo size={48} className="text-amber-400" />, title: 'Webinars and Virtual Events', description: 'Live and interactive online events to engage and educate global audiences.' },
        { icon: <FaLightbulb size={48} className="text-amber-400" />, title: 'Global Thought Leadership', description: 'Insights and strategies to position leaders at the forefront of their industries.' },
        { icon: <FaMicrophone size={48} className="text-amber-400" />, title: 'Speaking Engagements', description: 'Inspiring talks and presentations tailored to captivate diverse audiences.' },
        { icon: <FaBook size={48} className="text-amber-400" />, title: 'Curriculum Development', description: 'Customized educational content designed to meet specific learning objectives.' },
        { icon: <FaUserTie size={48} className="text-amber-400" />, title: 'Leadership Development', description: 'Programs to nurture leadership qualities and drive organizational success.' },
        { icon: <FaComments size={48} className="text-amber-400" />, title: 'Soft Skills Development', description: 'Training to enhance interpersonal and communication skills for personal and professional growth.' },
        { icon: <FaHeart size={48} className="text-amber-400" />, title: 'Life Coaching and Mindfulness', description: 'Guidance and practices to improve mental well-being and achieve life goals.' },
        { icon: <FaLanguage size={48} className="text-amber-400" />, title: 'Standard American Accent Elimination', description: 'Training to refine pronunciation and communication skills for non-native speakers.' },
        { icon: <FaPodcast size={48} className="text-amber-400" />, title: 'Moderating and Talk Shows', description: 'Professional moderation services for events and engaging talk show hosting.' },
        { icon: <FaBookOpen size={48} className="text-amber-400" />, title: 'Story Telling', description: 'Captivating storytelling techniques to engage and inspire audiences.' },
        { icon: <FaBrain size={48} className="text-amber-400" />, title: 'NLP', description: 'Neuro-Linguistic Programming techniques to enhance communication and personal development.' },
        { icon: <FaVolumeUp size={48} className="text-amber-400" />, title: 'Clear Speech Therapy', description: 'Therapeutic techniques to improve clarity and effectiveness in speech.' },
        { icon: <FaRocket size={48} className="text-amber-400" />, title: 'Entrepreneurship', description: 'Support and resources to help individuals launch and grow successful businesses.' },
        { icon: <FaBullhorn size={48} className="text-amber-400" />, title: 'Public Speaking', description: 'Training to build confidence and deliver impactful speeches in public settings.' },
        { icon: <FaLeaf size={48} className="text-amber-400" />, title: 'Holistic Healing', description: 'Practices to promote physical, emotional, and spiritual well-being.' },
        { icon: <FaHands size={48} className="text-amber-400" />, title: 'Kinesthetic Learning', description: 'Hands-on learning methods to enhance understanding and retention.' },
        { icon: <FaUserCheck size={48} className="text-amber-400" />, title: 'Personal Development', description: 'Tools and strategies to foster self-improvement and achieve personal goals.' },
    ];

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="grid sm:grid-cols-3 lg:grid-cols-3 h-auto w-full">
                <Image src={Svc2} alt={'Service Image 2'} height={400} className={'w-full h-full object-cover'} />
                <Image src={Svc1} alt={'Service Image 1'} height={400} className={'w-full h-full object-cover'} />
                <Image src={Svc3} alt={'Service Image 3'} height={400} className={'w-full h-full object-cover'} />
            </div>

            {/* Title Section */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="flex flex-col items-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-poppins pt-8"
            >
                <FcServices size={85} className="mb-4" />
                Services
            </motion.div>

            {/* Services Grid */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={staggerChildren}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-8"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg shadow-lg p-6 hover:shadow-xl hover:bg-opacity-20 transition-all duration-300"
                    >
                        {/* Service Icon */}
                        <div className="mb-4">
                            {service.icon}
                        </div>
                        {/* Service Title */}
                        <h3 className="text-lg font-bold text-white text-center font-poppins border-t-2 border-amber-300 pt-4">
                            {service.title}
                        </h3>
                        {/* Service Description */}
                        <p className="text-sm text-white text-opacity-90 text-center font-open-sans mt-2">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}