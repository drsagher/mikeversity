'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaYoutube, FaThumbsUp, FaThumbsDown, FaShare, FaArrowRight } from 'react-icons/fa';
import { Inter, Poppins } from 'next/font/google';

// Import Google Fonts
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['700'] });

// Define the Video interface for TypeScript
interface Video {
  id: string;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

// Sample video data with placeholder thumbnails
const videos: Video[] = [
  {
    id: 'FAKE_VIDEO_ID_1',
    title: 'Unlocking Your Potential',
    description: 'A motivational keynote on personal growth.',
    link: 'https://www.youtube.com/embed/FAKE_VIDEO_ID_1',
    thumbnail: '/thumbnails/video1.jpg',
  },
  {
    id: 'FAKE_VIDEO_ID_2',
    title: 'Leadership Mastery',
    description: 'Strategies for effective leadership.',
    link: 'https://www.youtube.com/embed/FAKE_VIDEO_ID_2',
    thumbnail: '/thumbnails/video2.jpg',
  },
  {
    id: 'FAKE_VIDEO_ID_3',
    title: 'Success Mindset',
    description: 'Building a resilient mindset for success.',
    link: 'https://www.youtube.com/embed/FAKE_VIDEO_ID_3',
    thumbnail: '/thumbnails/video3.jpg',
  },
].concat(
  Array.from({ length: 24 }, (_, i) => ({
    id: `FAKE_VIDEO_ID_${i + 4}`,
    title: `Transformative Insight ${i + 4}`,
    description: 'Inspiring leadership and success strategies.',
    link: `https://www.youtube.com/embed/FAKE_VIDEO_ID_${i + 4}`,
    thumbnail: `/thumbnails/video${i + 4}.jpg`,
}))
);

const VideoGalleryPage = () => {
    const [selectedVideo, setSelectedVideo] = useState<number>(0);
    const [isClient, setIsClient] = useState(false);

    // Ensure client-side rendering to prevent hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const cardVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
    };

    // Precompute random values to avoid hydration mismatches
    const viewCounts = videos.map(() => Math.floor(Math.random() * 1000000).toLocaleString());
    const daysAgo = videos.map(() => Math.floor(Math.random() * 365));
    const likeCounts = videos.map(() => Math.floor(Math.random() * 1000));
    const dislikeCounts = videos.map(() => Math.floor(Math.random() * 100));
    const durations = videos.map(() =>
        `${Math.floor(Math.random() * 10 + 1)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
    );

    return (
        <div
            className={`min-h-screen bg-gradient-to-br from-black via-red-900 to-blue-900 text-white px-4 sm:px-6 lg:px-8 py-12 ${inter.className}`}
        >
            {/* Header */}
            <header className="text-center mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 mb-4 ${poppins.className}`}
                >
                    Dr. Mike Litman’s Video Gallery
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
                >
                    Discover transformative videos on leadership, success, and social impact.
                </motion.p>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                {/* Top Trending Video */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-12"
                >
                    <h2 className={`text-xl sm:text-2xl font-semibold text-blue-400 mb-4 ${poppins.className}`}>
                        Top Trending Video
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Main Video Player */}
                        <motion.div variants={itemVariants} className="lg:w-3/4">
                            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                                {isClient ? (
                                    <iframe
                                        src={videos[selectedVideo].link}
                                        title={videos[selectedVideo].title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-800 animate-pulse" aria-hidden="true" />
                                )}
                            </div>
                            <div className="mt-4">
                                <h3 className={`text-lg sm:text-xl font-semibold text-white mb-2 ${poppins.className}`}>
                                    {videos[selectedVideo].title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">{videos[selectedVideo].description}</p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-400 text-sm gap-4">
                  <span>
                    {viewCounts[selectedVideo]} views • {daysAgo[selectedVideo]} days ago
                  </span>
                                    <div className="flex gap-4">
                                        <button
                                            className="flex items-center gap-1 hover:text-red-400 transition-colors"
                                            aria-label="Like video"
                                        >
                                            <FaThumbsUp /> {likeCounts[selectedVideo]}
                                        </button>
                                        <button
                                            className="flex items-center gap-1 hover:text-red-400 transition-colors"
                                            aria-label="Dislike video"
                                        >
                                            <FaThumbsDown /> {dislikeCounts[selectedVideo]}
                                        </button>
                                        <button
                                            className="flex items-center gap-1 hover:text-red-400 transition-colors"
                                            aria-label="Share video"
                                        >
                                            <FaShare /> Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Sidebar - Next Two Videos */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:w-1/4 space-y-4"
                        >
                            {videos.slice(1, 3).map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    variants={cardVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    onClick={() => setSelectedVideo(index + 1)}
                                    className={`flex gap-3 p-3 rounded-lg cursor-pointer ${
                                        selectedVideo === index + 1 ? 'bg-red-600/20' : 'bg-gray-800/50 hover:bg-gray-700/50'
                                    } transition-colors shadow-md`}
                                >
                                    <div className="relative w-24 sm:w-32 h-14 sm:h-18 flex-shrink-0">
                                        <Image
                                            src={video.thumbnail}
                                            alt={`${video.title} thumbnail`}
                                            fill
                                            className="rounded-md object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 640px) 96px, 128px"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <FaPlay className="text-white text-lg" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-white line-clamp-2">{video.title}</h4>
                                        <p className="text-xs text-gray-400">
                                            Dr. Mike Litman • {viewCounts[index + 1]} views
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Video Gallery - Remaining Videos */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-7xl mx-auto"
                >
                    <h2 className={`text-xl sm:text-2xl font-semibold text-blue-400 mb-4 ${poppins.className}`}>
                        More Transformative Videos
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <AnimatePresence>
                            {videos.slice(3).map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, y: 20 }}
                                    whileHover="hover"
                                    onClick={() => setSelectedVideo(index + 3)}
                                    className="relative group bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-red-600/30 hover:border-blue-500 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="relative aspect-video">
                                        <Image
                                            src={video.thumbnail}
                                            alt={`${video.title} thumbnail`}
                                            fill
                                            className="object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <FaPlay className="text-red-500 text-3xl" />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{video.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500 text-sm">{durations[index + 3]}</span>
                                            <a
                                                href={video.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                                                aria-label={`Watch ${video.title} on YouTube`}
                                            >
                                                YouTube <FaYoutube />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.section>

                {/* CTA Footer */}
                <footer className="mt-16 text-center py-12 bg-black/90 border-t border-blue-500/50">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-2xl sm:text-3xl font-bold text-red-500 mb-4 ${poppins.className}`}>
                            Ignite Your Leadership Journey
                        </h2>
                        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                            Join Dr. Mike Litman for exclusive insights and transformative experiences that drive success.
                        </p>
                        <motion.a
                            href="/contact"
                            className="inline-flex px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Connect Now <FaArrowRight />
                        </motion.a>
                    </motion.div>
                </footer>
            </div>
        </div>
    );
};

export default VideoGalleryPage;
