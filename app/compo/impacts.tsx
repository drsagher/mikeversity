'use client';

import { LuSchool } from "react-icons/lu";
import { IoSchool } from "react-icons/io5";
import { MdCorporateFare } from "react-icons/md";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function ImpactsComponent() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [counted, setCounted] = useState(false);

    const impacts = [
        { icon: <LuSchool size={85} />, value: 1000, description: 'Students Trained', successRate: 95, key: 'students' },
        { icon: <IoSchool size={85} />, value: 200, description: 'Schools Impacted', successRate: 90, key: 'schools' },
        { icon: <MdCorporateFare size={85} />, value: 100, description: 'Corporate Clients', successRate: 85, key: 'corporate' },
        { icon: <GiPublicSpeaker size={85} />, value: 500, description: 'Public Speaking Engagements', successRate: 98, key: 'speaking' },
    ];

    useEffect(() => {
        if (inView && !counted) {
            controls.start('visible');
            setCounted(true);
        }
    }, [controls, inView, counted]);

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

    const countUp = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
    };

    const progressBar = {
        hidden: { width: 0 },
        visible: (successRate: number) => ({
            width: `${successRate}%`,
            transition: { duration: 1.5, ease: 'easeOut' },
        }),
    };

    return (
        <div className="flex flex-col bg-gradient-to-r from-red-500 via-green-500 to-blue-500 items-center text-gray-200 py-16 px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.h2
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="flex flex-col items-center gap-2 text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-8"
            >
                <FaPeopleCarryBox size={85} className="mb-4" />
                Impacts on Life
            </motion.h2>

            {/* Impact Cards */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={staggerChildren}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            >
                {impacts.map((impact, index) => (
                    <motion.div
                        key={impact.key}
                        variants={fadeInUp}
                        className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-opacity-20"
                    >
                        {/* Icon */}
                        <div className="mb-4">
                            {impact.icon}
                        </div>
                        {/* Value */}
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            variants={countUp}
                            className="text-5xl font-bold font-poppins mb-2"
                        >
                            {inView ? impact.value : 0}
                        </motion.p>
                        {/* Description */}
                        <p className="text-lg font-open-sans text-center mb-4">{impact.description}</p>
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 bg-opacity-20 rounded-full h-2.5">
                            <motion.div
                                initial="hidden"
                                animate={controls}
                                variants={progressBar}
                                custom={impact.successRate}
                                className="bg-amber-400 h-2.5 rounded-full"
                            />
                        </div>
                        {/* Success Rate */}
                        <p className="text-sm font-open-sans text-center mt-2">
                            Success Rate: {impact.successRate}%
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}