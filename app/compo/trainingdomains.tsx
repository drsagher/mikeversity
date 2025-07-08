'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBusinessTime,
  FaChalkboardTeacher,
  FaComments,
  FaUserTie,
  FaHeartbeat,
  FaHandsHelping,
  FaUserGraduate,
  FaBrain,
  FaLightbulb,
  FaLaptopCode,
  FaGraduationCap, FaArrowRight,
} from 'react-icons/fa';
import { Inter, Poppins } from 'next/font/google';

// Import Google Fonts
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['700'] });

// Define TypeScript interface for training domains
interface TrainingDomain {
  title: string;
  icon: JSX.Element;
  description: string;
}

// Training domains data with descriptions
const trainingDomains: TrainingDomain[] = [
  {
    title: 'Business & Corporate',
    icon: <FaBusinessTime size={40} className="text-white" />,
    description: 'Drive corporate success with strategic business training.',
  },
  {
    title: 'Education & Academic',
    icon: <FaChalkboardTeacher size={40} className="text-white" />,
    description: 'Empower educators with innovative teaching methods.',
  },
  {
    title: 'Communication',
    icon: <FaComments size={40} className="text-white" />,
    description: 'Master effective communication for professional growth.',
  },
  {
    title: 'Leadership & Management',
    icon: <FaUserTie size={40} className="text-white" />,
    description: 'Inspire teams with transformative leadership skills.',
  },
  {
    title: 'Wellness & Holistic',
    icon: <FaHeartbeat size={40} className="text-white" />,
    description: 'Promote well-being through holistic practices.',
  },
  {
    title: 'Non-Profit & Social Impact',
    icon: <FaHandsHelping size={40} className="text-white" />,
    description: 'Create positive change with social impact strategies.',
  },
  {
    title: 'Personal Development',
    icon: <FaUserGraduate size={40} className="text-white" />,
    description: 'Unlock your potential with personal growth training.',
  },
  {
    title: 'NLP',
    icon: <FaBrain size={40} className="text-white" />,
    description: 'Harness the power of neuro-linguistic programming.',
  },
  {
    title: 'Entrepreneurship',
    icon: <FaLightbulb size={40} className="text-white" />,
    description: 'Build thriving ventures with entrepreneurial skills.',
  },
  {
    title: 'Tech & Digital Skills',
    icon: <FaLaptopCode size={40} className="text-white" />,
    description: 'Excel in the digital era with cutting-edge tech training.',
  },
];

const TrainingDomainsComponent = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  return (
    <section
      className={`relative min-h-screen bg-gradient-to-br from-black via-red-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${inter.className}`}
    >
      {/* Background Decorative Elements */}
      {isClient && (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-red-500 to-blue-500 opacity-20"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(50px)',
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.header
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600 rounded-full p-4 mb-6 shadow-lg"
          >
            <FaGraduationCap size={40} className="text-white" />
          </motion.div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 ${poppins.className}`}
          >
            Our Training Specializations
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Empowering leaders with transformative skills for success across diverse domains.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </motion.header>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {trainingDomains.map((domain, index) => (
              <motion.div
                key={domain.title}
                variants={{ ...fadeInUp, ...cardVariants }}
                initial="rest"
                whileHover="hover"
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col items-center justify-between bg-gray-800/50 rounded-xl p-6 shadow-lg relative overflow-hidden group backdrop-blur-sm h-64"
              >
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full"></div>

                {/* Icon with Lazy-Loaded Background */}
                <div className="relative z-10 mb-4 p-3 bg-red-600/20 rounded-lg">
                  {domain.icon}
                </div>

                {/* Content */}
                <div className="text-center z-10">
                  <h3 className={`text-base sm:text-lg font-bold text-white mb-2 ${poppins.className}`}>
                    {domain.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{domain.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/explore"
            className="inline-flex px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Programs <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingDomainsComponent;
