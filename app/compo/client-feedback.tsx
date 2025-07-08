'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function ClientFeedbackComponent() {
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

    const clientTestimonials = [
        {
            name: 'John Doe',
            designation: 'CEO',
            company: 'Tech Solutions',
            rating: 5,
            feedback:
                'The training programs were exceptional! They helped our team improve productivity and communication skills significantly.',
            gradient: 'from-red-500 to-pink-500',
            image: '/images/client1.jpg', // Replace with actual image path
        },
        {
            name: 'Jane Smith',
            designation: 'Marketing Manager',
            company: 'Innovate Inc.',
            rating: 4,
            feedback:
                'The leadership training was transformative. It gave me the tools to lead my team more effectively and confidently.',
            gradient: 'from-green-500 to-teal-500',
            image: '/images/client2.jpg', // Replace with actual image path
        },
        {
            name: 'Michael Brown',
            designation: 'Founder',
            company: 'GreenTech',
            rating: 5,
            feedback:
                'The entrepreneurship program was exactly what I needed to turn my ideas into a successful business. Highly recommended!',
            gradient: 'from-blue-500 to-indigo-500',
            image: '/images/client3.jpg', // Replace with actual image path
        },
        {
            name: 'Sarah Johnson',
            designation: 'HR Director',
            company: 'Global Corp',
            rating: 4,
            feedback:
                'The wellness programs helped our employees manage stress and improve their overall well-being. A great investment!',
            gradient: 'from-purple-500 to-pink-500',
            image: '/images/client4.jpg', // Replace with actual image path
        },
        {
            name: 'David Wilson',
            designation: 'CTO',
            company: 'NextGen Tech',
            rating: 5,
            feedback:
                'The technology training was top-notch. It helped our team stay ahead in the ever-evolving tech landscape.',
            gradient: 'from-yellow-500 to-orange-500',
            image: '/images/client5.jpg', // Replace with actual image path
        },
        {
            name: 'Emily Davis',
            designation: 'Product Manager',
            company: 'Bright Ideas',
            rating: 4,
            feedback:
                'The personal development courses were eye-opening. They helped me grow both professionally and personally.',
            gradient: 'from-cyan-500 to-blue-500',
            image: '/images/client6.jpg', // Replace with actual image path
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
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins tracking-wide">
                        Client Feedback
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                        Hear from our satisfied clients about their experiences and success stories.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={staggerChildren}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {clientTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`bg-gradient-to-r ${testimonial.gradient} rounded-lg shadow-lg p-6 text-white relative overflow-hidden`}
                        >
                            {/* First Row: Client Image and Details */}
                            <div className="flex gap-4 mb-4">
                                {/* Client Image */}
                                <div className="w-16 h-16 overflow-hidden rounded-full border-4 border-white flex-shrink-0">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Client Details */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                    <p className="text-sm text-white text-opacity-80">
                                        {testimonial.designation}, {testimonial.company}
                                    </p>
                                    {/* Rating */}
                                    <div className="flex gap-1 mt-2">
                                        {renderRating(testimonial.rating)}
                                    </div>
                                </div>
                            </div>
                            {/* Second Row: Feedback */}
                            <p className="text-sm text-white text-opacity-90 italic">
                                "{testimonial.feedback}"
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}