'use client';

import Image, { StaticImageData } from "next/image";
import { motion } from 'framer-motion';
import { FaFire, FaBookOpen, FaBriefcase, FaTrophy, FaUserTie, FaGraduationCap } from 'react-icons/fa';
import { ReactNode } from 'react';

interface Course {
    id: number;
    name: string;
    pic: StaticImageData;
    icon: ReactNode;
    pageLink: string;
    description: string;
}

const courses: Course[] = [
    {
        id: 1,
        name: 'MOTIVATION',
        pic: require('../../public/resources/pdev.jpg'),
        icon: <FaFire className="text-red-500" />,
        pageLink: '#',
        description: 'Unleash Your Potential! Discover the secrets to staying motivated and driven. Learn how to set goals, overcome obstacles, and cultivate a winning mindset.'
    },
    {
        id: 2,
        name: 'ENGLISH PROFICIENCY',
        pic: require('../../public/resources/sales.jpg'),
        icon: <FaBookOpen className="text-red-500" />,
        pageLink: '#',
        description: 'Improve Your English, Expand Your Horizons! Develop your reading, writing, speaking, and listening skills with our comprehensive English proficiency course.'
    },
    {
        id: 3,
        name: 'CORPORATE',
        pic: require('../../public/resources/business.jpg'),
        icon: <FaBriefcase className="text-red-500" />,
        pageLink: '#',
        description: 'Take Your Business to the Next Level! Enhance your professional skills and transform your organization with our corporate training program.'
    },
    {
        id: 4,
        name: 'SUCCESS',
        pic: require('../../public/resources/timeman.jpg'),
        icon: <FaTrophy className="text-red-500" />,
        pageLink: '#',
        description: 'Unlock Your Full Potential! Discover the secrets to achieving success and living your best life.'
    },
    {
        id: 5,
        name: 'LEADERSHIP',
        pic: require('../../public/resources/leaders.jpg'),
        icon: <FaUserTie className="text-red-500" />,
        pageLink: '#',
        description: 'Unleash Your Leadership Potential! Develop the skills and confidence to inspire, motivate, and lead others to success.'
    },
    {
        id: 6,
        name: 'EDUCATION',
        pic: require('../../public/resources/edu.jpg'),
        icon: <FaGraduationCap className="text-red-500" />,
        pageLink: '#',
        description: 'Education is the foundation of a prosperous society. Explore principles and innovations to become a more confident, competent educator.'
    },
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-300 shadow-md hover:shadow-lg"
    >
        <div className="relative h-60 w-full overflow-hidden">
            <Image
                src={course.pic}
                alt={course.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-4 right-4 bg-red-600 text-white p-3 rounded-full text-xl shadow-lg">
                {course.icon}
            </div>
        </div>

        <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-500 transition-colors duration-300">
                {course.name}
            </h2>
            <p className="text-gray-600 mb-5 line-clamp-3">
                {course.description}
            </p>
            <motion.a
                whileHover={{ x: 5 }}
                href={course.pageLink}
                className="inline-flex items-center text-red-500 font-medium hover:text-red-600 transition-colors duration-300"
            >
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </motion.a>
        </div>
    </motion.div>
);

const CTAButton = () => (
    <motion.button
        whileHover={{
            scale: 1.05,
            background: "linear-gradient(to right, #ef4444, #dc2626)",
            boxShadow: "0 0 15px rgba(239, 68, 68, 0.3)"
        }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg relative overflow-hidden"
    >
        <span className="relative z-10">View All Courses</span>
        <motion.span
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.2 }}
            className="absolute inset-0 bg-white"
        />
    </motion.button>
);

export default function TopCoursesComponent() {
    return (
        <div className="relative bg-white py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Premium Courses</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Transform your skills with our industry-leading programs designed for maximum impact
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <CTAButton />
                </motion.div>
            </div>
        </div>
    );
}