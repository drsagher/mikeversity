'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function TraineesCommentsComponent() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
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

    const traineesComments = [
        {
            name: 'John Doe',
            country: 'United States',
            feedback:
                'The training was incredibly insightful and practical. I’ve already applied the skills I learned to my work!',
            image: '/images/trainee1.jpg', // Replace with actual image path
            rating: 5,
        },
        {
            name: 'Jane Smith',
            country: 'Canada',
            feedback:
                'The instructors were knowledgeable and supportive. I highly recommend this program to anyone looking to upskill.',
            image: '/images/trainee2.jpg', // Replace with actual image path
            rating: 4,
        },
        {
            name: 'Michael Brown',
            country: 'United Kingdom',
            feedback:
                'The course content was well-structured and easy to follow. I feel much more confident in my abilities now.',
            image: '/images/trainee3.jpg', // Replace with actual image path
            rating: 5,
        },
        {
            name: 'Sarah Johnson',
            country: 'Australia',
            feedback:
                'The hands-on projects were a game-changer. They helped me understand the concepts much better.',
            image: '/images/trainee4.jpg', // Replace with actual image path
            rating: 4,
        },
        {
            name: 'David Wilson',
            country: 'Germany',
            feedback:
                'The training program exceeded my expectations. The support from the community was amazing!',
            image: '/images/trainee5.jpg', // Replace with actual image path
            rating: 5,
        },
        {
            name: 'Emily Davis',
            country: 'France',
            feedback:
                'I loved the interactive sessions. They made learning fun and engaging. Thank you!',
            image: '/images/trainee6.jpg', // Replace with actual image path
            rating: 4,
        },
        {
            name: 'Carlos Gomez',
            country: 'Spain',
            feedback:
                'The program was very comprehensive. I gained a lot of new skills that are directly applicable to my job.',
            image: '/images/trainee7.jpg', // Replace with actual image path
            rating: 5,
        },
        {
            name: 'Aisha Khan',
            country: 'India',
            feedback:
                'The trainers were excellent and very approachable. I learned a lot in a short amount of time.',
            image: '/images/trainee8.jpg', // Replace with actual image path
            rating: 4,
        },
        {
            name: 'Yuki Tanaka',
            country: 'Japan',
            feedback:
                'The course was well-organized and very informative. I’m excited to apply what I’ve learned!',
            image: '/images/trainee9.jpg', // Replace with actual image path
            rating: 5,
        },
        {
            name: 'Lucas Silva',
            country: 'Brazil',
            feedback:
                'The training was transformative. I feel much more prepared for the challenges in my field.',
            image: '/images/trainee10.jpg', // Replace with actual image path
            rating: 4,
        },
        {
            name: 'Maria Gonzalez',
            country: 'Mexico',
            feedback:
                'The program was fantastic! The practical exercises helped me understand the concepts deeply.',
            image: '/images/trainee11.jpg', // Replace with actual image path
            rating: 5,
        },
        {
            name: 'Ahmed Ali',
            country: 'Egypt',
            feedback:
                'The training was well-structured and very engaging. I highly recommend it to everyone!',
            image: '/images/trainee12.jpg', // Replace with actual image path
            rating: 4,
        },
    ];

    const renderRating = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                )
            );
        }
        return stars;
    };

    return (
        <div className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-poppins tracking-wide">
                        Trainees Feedback
                    </h2>
                    <p className="text-lg sm:text-xl text-white text-opacity-80 mt-4 max-w-2xl mx-auto">
                        Hear from our trainees across the globe about their experiences and success stories.
                    </p>
                </motion.div>

                {/* Trainees Comments Grid */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={staggerChildren}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {traineesComments.map((trainee, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white rounded-lg shadow-lg p-6 text-gray-900 relative overflow-hidden"
                        >
                            {/* Trainee Image and Details */}
                            <div className="flex items-center gap-4 mb-4">
                                {/* Trainee Image */}
                                <div className="w-16 h-16 overflow-hidden rounded-full border-4 border-purple-500 flex-shrink-0">
                                    <img
                                        src={trainee.image}
                                        alt={trainee.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Trainee Name and Country */}
                                <div>
                                    <h3 className="text-xl font-bold">{trainee.name}</h3>
                                    <p className="text-sm text-gray-600">{trainee.country}</p>
                                    {/* Rating */}
                                    <div className="flex gap-1 mt-2">
                                        {renderRating(trainee.rating)}
                                    </div>
                                </div>
                            </div>
                            {/* Trainee Feedback */}
                            <p className="text-sm text-gray-700 italic">
                                "{trainee.feedback}"
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}