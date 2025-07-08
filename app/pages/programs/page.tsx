'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaTrophy,
  FaBriefcase,
  FaDove,
  FaHandsHelping,
  FaUserTie,
  FaGlobe,
  FaArrowRight,
  FaBook,
  FaUsers,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import { Inter, Poppins } from 'next/font/google';

// Import Google Fonts
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['700'] });

// Define TypeScript interface for training courses
interface TrainingCourse {
  title: string;
  icon: JSX.Element;
  description: string;
  link: string;
  skills: string[];
  duration: string;
  format: string;
}

// Training courses data with training-focused content
const trainingCourses: TrainingCourse[] = [
  {
    title: 'Success',
    icon: <FaTrophy size={48} className="text-red-500" />,
    description:
        'The Success training course empowers you to achieve your highest potential through practical strategies. Master goal-setting, resilience, and time management to excel in personal and professional pursuits.',
    link: '/trainings/success',
    skills: [
      'Effective goal-setting and tracking',
      'Building mental resilience',
      'Optimizing time and productivity',
    ],
    duration: '6 months',
    format: 'Online or In-Person Workshops',
  },
  {
    title: 'Business',
    icon: <FaBriefcase size={48} className="text-blue-500" />,
    description:
        'The Business training course equips you with essential skills to thrive in today’s markets. Learn entrepreneurship, financial planning, and team leadership through hands-on exercises.',
    link: '/trainings/business',
    skills: [
      'Crafting business plans and budgets',
      'Developing targeted marketing campaigns',
      'Leading teams for success',
    ],
    duration: '8 months',
    format: 'Online or In-Person',
  },
  {
    title: 'Peace',
    icon: <FaDove size={48} className="text-red-500" />,
    description:
        'The Peace training course teaches conflict resolution and peace-building techniques. Gain practical skills in mediation, negotiation, and fostering collaboration in diverse communities.',
    link: '/trainings/peace',
    skills: [
      'Mediating disputes effectively',
      'Negotiating for win-win outcomes',
      'Building inclusive communities',
    ],
    duration: '5 months',
    format: 'Online or Hybrid',
  },
  {
    title: 'Humanity',
    icon: <FaHandsHelping size={48} className="text-blue-500" />,
    description:
        'The Humanity training course focuses on creating social impact. Learn to lead community initiatives, advocate for justice, and apply ethical principles through real-world projects.',
    link: '/trainings/humanity',
    skills: [
      'Designing community impact projects',
      'Advocating for equity and inclusion',
      'Leading with empathy and ethics',
    ],
    duration: '6 months',
    format: 'In-Person or Online',
  },
  {
    title: 'Leadership',
    icon: <FaUserTie size={48} className="text-red-500" />,
    description:
        'The Leadership training course develops visionary leaders through practical training. Master transformational leadership, strategic decision-making, and team dynamics for organizational success.',
    link: '/trainings/leadership',
    skills: [
      'Inspiring teams with vision',
      'Making strategic decisions',
      'Managing team dynamics',
    ],
    duration: '5 months',
    format: 'Online or In-Person Workshops',
  },
  {
    title: 'Globalization',
    icon: <FaGlobe size={48} className="text-blue-500" />,
    description:
        'The Globalization training course prepares you to lead in a connected world. Learn to navigate global markets, cultural dynamics, and international strategies through interactive training.',
    link: '/trainings/globalization',
    skills: [
      'Analyzing global market trends',
      'Building cross-cultural competence',
      'Crafting international strategies',
    ],
    duration: '7 months',
    format: 'Online or Hybrid',
  },
];

const MikeversityTrainingsPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: trainingsRef, inView: trainingsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.2, triggerOnce: true });

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
          className={`relative min-h-screen bg-gradient-to-br from-black via-red-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${inter.className}`}
      >
        {/* Background Particles */}
        {isClient && (
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                      key={i}
                      className="absolute rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        filter: 'blur(20px)',
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.1, 0.3, 0.1],
                        transition: {
                          duration: Math.random() * 8 + 4,
                          delay: Math.random() * 2,
                          repeat: Infinity,
                          repeatType: 'loop' as const,
                        },
                      }}
                  />
              ))}
            </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <motion.header
              ref={heroRef}
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              className="text-center mb-16"
          >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600 rounded-full p-4 mb-6 shadow-lg"
            >
              <FaChalkboardTeacher size={40} className="text-white" />
            </motion.div>
            <h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 ${poppins.className}`}
            >
              Mikeversity Training Courses
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Mikeversity’s transformative training courses in Success, Business, Peace, Humanity,
              Leadership, and Globalization equip you with practical skills to lead and succeed. Through
              hands-on workshops, expert-led sessions, and real-world applications, our trainings empower
              you to make an impact in your career and community.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full mt-4"></div>
          </motion.header>

          {/* About Mikeversity Trainings Section */}
          <motion.section
              ref={aboutRef}
              initial="hidden"
              animate={aboutInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              className="mb-16 bg-gray-800/50 rounded-xl p-6 shadow-lg"
          >
            <div className="text-center">
              <h2
                  className={`text-2xl sm:text-3xl font-bold text-white mb-4 ${poppins.className}`}
              >
                Why Train with Mikeversity?
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto mb-6">
                Mikeversity delivers world-class training designed for aspiring leaders and
                professionals. Our courses focus on practical, actionable skills, delivered through
                engaging workshops and expert mentorship, to help you achieve measurable results in your
                personal and professional life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <FaBook className="text-red-500 mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-white mb-2">Practical Learning</h3>
                  <p className="text-sm text-gray-300">
                    Gain hands-on skills through real-world exercises and case studies.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FaUsers className="text-blue-500 mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Mentorship</h3>
                  <p className="text-sm text-gray-300">
                    Learn from industry leaders and global experts in interactive sessions.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FaArrowRight className="text-red-500 mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-white mb-2">Immediate Impact</h3>
                  <p className="text-sm text-gray-300">
                    Apply your skills instantly to advance your career and influence.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Trainings Grid */}
          <motion.section
              ref={trainingsRef}
              initial="hidden"
              animate={trainingsInView ? 'visible' : 'hidden'}
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            <AnimatePresence>
              {trainingCourses.map((training) => (
                  <motion.div
                      key={training.title}
                      variants={{ ...fadeInUp, ...cardVariants }}
                      initial="rest"
                      whileHover="hover"
                      exit={{ opacity: 0, y: 20 }}
                      className="flex flex-col bg-gray-800/50 rounded-xl p-6 shadow-lg relative overflow-hidden group backdrop-blur-sm min-h-[450px]"
                  >
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full"></div>

                    {/* Training Content */}
                    <div className="flex flex-col flex-grow text-center z-10">
                      <div className="mb-4 p-4 bg-red-600/20 rounded-full inline-flex justify-center mx-auto">
                        {training.icon}
                      </div>
                      <h2
                          className={`text-lg sm:text-xl font-bold text-white mb-2 ${poppins.className}`}
                      >
                        {training.title} Training
                      </h2>
                      <p className="text-sm text-gray-300 mb-4">{training.description}</p>
                      <div className="text-left mb-4">
                        <h3 className="text-sm font-semibold text-blue-400 mb-2">Key Skills</h3>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                          {training.skills.map((skill, index) => (
                              <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm text-gray-300 mb-4">
                        <p>
                          <strong>Duration:</strong> {training.duration}
                        </p>
                        <p>
                          <strong>Format:</strong> {training.format}
                        </p>
                      </div>
                      <Link
                          href={training.link}
                          className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                          aria-label={`Learn more about ${training.title} training`}
                      >
                        Explore Training <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </motion.div>
              ))}
            </AnimatePresence>
          </motion.section>

          {/* CTA Section */}
          <motion.section
              ref={ctaRef}
              initial={{ opacity: 0, y: 50 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center py-12 bg-gray-800/50 rounded-xl shadow-lg"
          >
            <h2
                className={`text-2xl sm:text-3xl font-bold text-white mb-4 ${poppins.className}`}
            >
              Transform Your Future with Mikeversity
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
              Enroll in Mikeversity’s training courses to gain practical skills, connect with global
              leaders, and make a lasting impact. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                  href="/enroll"
                  className="inline-flex px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors items-center gap-2"
                  aria-label="Enroll in Mikeversity trainings"
              >
                Enroll Now <FaArrowRight />
              </Link>
              <Link
                  href="/contact"
                  className="inline-flex px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors items-center gap-2"
                  aria-label="Contact Mikeversity for more information"
              >
                Contact Us <FaArrowRight />
              </Link>
            </div>
          </motion.section>
        </div>
      </section>
  );
};

export default MikeversityTrainingsPage;