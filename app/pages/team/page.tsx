'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaGlobe, FaBook, FaGraduationCap, FaAward, FaMicrophone, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Head from 'next/head';


// Define types
interface Link {
    type: string;
    url: string;
}

interface TeamMember {
    id: number;
    name: string;
    image: string;
    role: string;
    bio: string;
    country: string;
    expertise: string[];
    links: Link[];
    achievements?: string[];
}

type IconType = 'linkedin' | 'twitter' | 'website' | 'book' | 'education' | 'award' | 'speaker' | 'training';

const TeamPage = () => {
    // State for filters
    const [expertiseFilter, setExpertiseFilter] = useState<string>('');
    const [countryFilter, setCountryFilter] = useState<string>('');
    const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);

    // CEO Profile Data
    const ceoProfile: TeamMember = {
        id: 0,
        name: 'Prof. Dr. Queen Elizabeth Lucas-Afolalu',
        image: '/team/DrElizabethLucas.jpeg',
        role: 'CEO & Global Transformational Leader',
        bio: 'Visionary leader with over 20 years of experience in global education transformation. Dr. Lucas-Afolalu has pioneered innovative learning methodologies that have impacted over 50,000 professionals worldwide. Her leadership has positioned Mikeversity at the forefront of digital education.',
        country: 'United Kingdom',
        expertise: ['Strategic Leadership', 'Global Education', 'Entrepreneurship', 'Youth Development'],
        achievements: [
            'Recipient of the Global Education Pioneer Award 2022',
            'Author of 5 bestselling books on transformational leadership',
            'Featured speaker at UN Education Summits',
            'Founded 3 successful education startups',
        ],
        links: [
            { type: 'website', url: '#' },
            { type: 'linkedin', url: '#' },
            { type: 'twitter', url: '#' },
            { type: 'book', url: '#' },
        ],
    };

    // Team Members Data
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Dr. Rosalind Willis',
            image: '/team/DrRosalindWillis.jpeg',
            role: 'Birthing Purpose Coach & USA Country Director',
            bio: 'Award-winning international speaker and author. Sought-after Global Transformational Speaker renowned for her expertise and inspiring presentations. With a PhD in Transformational Leadership, she has coached over 1,000 professionals to discover their life purpose.',
            country: 'United States',
            expertise: ['Purpose Coaching', 'Public Speaking', 'Leadership Development'],
            links: [
                { type: 'website', url: '#' },
                { type: 'linkedin', url: '#' },
                { type: 'book', url: '#' },
            ],
        },
        // ... (include other team members as shown in the original code, with the same structure)
    ];

    // Get all unique expertise options
    const allExpertise = [...new Set(teamMembers.flatMap((member) => member.expertise))].sort();

    // Get all unique country options
    const allCountries = [...new Set(teamMembers.map((member) => member.country))].sort();

    // Filter team members based on selected filters
    useEffect(() => {
        let result = teamMembers;

        if (expertiseFilter) {
            result = result.filter((member) => member.expertise.includes(expertiseFilter));
        }

        if (countryFilter) {
            result = result.filter((member) => member.country === countryFilter);
        }

        setFilteredMembers(result);
    }, [expertiseFilter, countryFilter]);

    // Reset filters
    const resetFilters = () => {
        setExpertiseFilter('');
        setCountryFilter('');
    };

    // Icon rendering function
    const renderIcon = (type: IconType) => {
        switch (type) {
            case 'linkedin':
                return <FaLinkedin className="text-[#0077b5]" />;
            case 'twitter':
                return <FaTwitter className="text-[#1DA1F2]" />;
            case 'website':
                return <FaGlobe className="text-emerald-500" />;
            case 'book':
                return <FaBook className="text-purple-500" />;
            case 'education':
                return <FaGraduationCap className="text-amber-500" />;
            case 'award':
                return <FaAward className="text-yellow-500" />;
            case 'speaker':
                return <FaMicrophone className="text-red-500" />;
            case 'training':
                return <FaChalkboardTeacher className="text-blue-500" />;
            default:
                return <FaGlobe className="text-gray-500" />;
        }
    };

    // Animation variants
    const backgroundVariants = {
        animate: {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
            },
        },
    };

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    return (
        <>
            <Head>
                <title>Mikeversity Global Team | Leaders in Transformational Education</title>
                <meta
                    name="description"
                    content="Meet our global team of educators, thought leaders, and innovators committed to transforming education worldwide."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Animated Background */}
            <motion.div
                className="min-h-screen w-full"
                initial="initial"
                animate="animate"
                variants={backgroundVariants}
                style={{
                    background: 'linear-gradient(135deg, #000000 0%, #1a0000 25%, #800020 50%, #1a0000 75%, #000000 100%)',
                    backgroundSize: '400% 400%',
                } as React.CSSProperties}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Page Header */}
                    <motion.div className="text-center mb-16" initial="hidden" animate="visible" variants={fadeIn}>
                        <motion.h1
                            className="text-5xl font-extrabold text-white sm:text-6xl sm:tracking-tight lg:text-7xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                Our Global Leadership
              </span>
                        </motion.h1>
                        <motion.p
                            className="mt-5 max-w-3xl mx-auto text-xl text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            A distinguished collective of visionaries, educators, and innovators driving the future of transformational
                            learning.
                        </motion.p>
                    </motion.div>

                    {/* Special CEO Card */}
                    <motion.div
                        className="mb-20"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="bg-gradient-to-br from-red-900 via-black to-red-900 rounded-2xl shadow-2xl overflow-hidden border border-red-800/50">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0 md:w-1/3 relative h-96">
                                    <Image
                                        src={ceoProfile.image}
                                        alt={ceoProfile.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="opacity-90"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-2xl font-bold text-white">{ceoProfile.name}</h3>
                                        <p className="mt-1 text-red-300 font-medium">{ceoProfile.role}</p>
                                        <div className="mt-3 flex space-x-4">
                                            {ceoProfile.links.map((link, index) => (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                                    aria-label={`${ceoProfile.name}'s ${link.type}`}
                                                >
                                                    {renderIcon(link.type as IconType)}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 md:w-2/3">
                                    <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">Leadership Profile</div>
                                    <p className="mt-2 text-gray-300">{ceoProfile.bio}</p>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-medium text-white">Key Achievements:</h4>
                                        <ul className="mt-2 space-y-2">
                                            {ceoProfile.achievements?.map((achievement, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg
                                                        className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="text-gray-300">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-medium text-white">Areas of Expertise:</h4>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {ceoProfile.expertise.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-900/50 text-red-100"
                                                >
                          {skill}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Team Section */}
                    <div className="mb-12">
                        <motion.h2
                            className="text-3xl font-bold text-white mb-8 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="border-b-2 border-red-600 pb-2">Global Faculty & Leadership</span>
                        </motion.h2>

                        {/* Filter Controls */}
                        <motion.div
                            className="mb-12 flex flex-col sm:flex-row justify-center items-center gap-4 bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-red-900/50"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full sm:w-auto">
                                <label htmlFor="expertise-filter" className="sr-only">
                                    Filter by expertise
                                </label>
                                <select
                                    id="expertise-filter"
                                    value={expertiseFilter}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setExpertiseFilter(e.target.value)}
                                    className="block w-full rounded-md border-gray-700 bg-gray-900 text-white py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                                >
                                    <option value="">All Expertise Areas</option>
                                    {allExpertise.map((expertise) => (
                                        <option key={expertise} value={expertise}>
                                            {expertise}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full sm:w-auto">
                                <label htmlFor="country-filter" className="sr-only">
                                    Filter by country
                                </label>
                                <select
                                    id="country-filter"
                                    value={countryFilter}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountryFilter(e.target.value)}
                                    className="block w-full rounded-md border-gray-700 bg-gray-900 text-white py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                                >
                                    <option value="">All Countries</option>
                                    {allCountries.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {(expertiseFilter || countryFilter) && (
                                <button
                                    onClick={resetFilters}
                                    className="w-full sm:w-auto px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200"
                                >
                                    Reset Filters
                                </button>
                            )}
                        </motion.div>

                        {/* Results Count */}
                        <div className="mb-6 text-center">
                            <p className="text-gray-300">
                                Showing {filteredMembers.length} of {teamMembers.length} team members
                                {(expertiseFilter || countryFilter) && (
                                    <span>
                    {' '}
                                        filtered by
                                        {expertiseFilter && <span className="text-red-300"> {expertiseFilter}</span>}
                                        {expertiseFilter && countryFilter && <span> and</span>}
                                        {countryFilter && <span className="text-red-300"> {countryFilter}</span>}
                  </span>
                                )}
                            </p>
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredMembers.length > 0 ? (
                                filteredMembers.map((member, index) => (
                                    <motion.div
                                        key={member.id}
                                        variants={cardVariants}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: 0.2 }}
                                        custom={index}
                                    >
                                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-red-900/30 h-full flex flex-col">
                                            <div className="relative h-64 w-full group">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                                <div className="absolute bottom-0 left-0 p-4">
                                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                                    <p className="text-red-300 text-sm">{member.role}</p>
                                                </div>
                                                <div className="absolute top-0 right-0 p-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900 text-red-100">
                            {member.country}
                          </span>
                                                </div>
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col">
                                                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{member.bio}</p>

                                                <div className="mt-auto">
                                                    <div className="mb-4">
                                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                                            Expertise
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {member.expertise.slice(0, 3).map((skill, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-800 text-gray-200"
                                                                >
                                  {skill}
                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                                                        <div className="flex space-x-4">
                                                            {member.links.map((link, index) => (
                                                                <a
                                                                    key={index}
                                                                    href={link.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                                                    aria-label={`${member.name}'s ${link.type}`}
                                                                >
                                                                    {renderIcon(link.type as IconType)}
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <button className="text-xs font-medium text-red-400 hover:text-red-300 transition-colors duration-200">
                                                            View Full Profile →
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-xl text-gray-300">No team members match your filters. Try adjusting your criteria.</p>
                                    <button
                                        onClick={resetFilters}
                                        className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-20 text-center bg-gradient-to-r from-red-900/80 to-black/80 rounded-2xl p-8 text-white border border-red-900/50 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
                            <span className="block">Join Our Global Network</span>
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                            We&apos;re expanding our team of world-class educators and thought leaders.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                            >
                                Explore Career Opportunities
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-base font-medium rounded-md text-red-400 hover:text-white hover:bg-red-900/30 transition-colors duration-200"
                            >
                                Become a Partner
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default TeamPage;