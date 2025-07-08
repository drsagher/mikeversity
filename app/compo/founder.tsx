'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';

const FounderMessage = () => {
    return (
        <section
            className="py-20 bg-gradient-to-br from-blue-600 via-red-500 to-blue-800 text-white"
        >
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Founder Portrait - Professional Style */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/5 relative"
                    >
                        <div className="relative aspect-square w-full">
                            <Image
                                src="/mike2.jpg" // Use high-res professional headshot
                                alt="Mike Litman - Founder of MikeVersity"
                                fill
                                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                priority
                            />
                            <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-gray-100 rounded-sm" />
                        </div>
                    </motion.div>

                    {/* Message Content - Corporate Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-3/5"
                    >
                        <div className="border-l-4 border-white pl-6">
                            <h2 className="text-3xl font-light text-white mb-2 tracking-tight">
                                FROM THE <span className="font-semibold">FOUNDER</span>
                            </h2>
                            <div className="h-1 w-16 bg-white mb-8" />

                            <div className="relative">
                                <FaQuoteRight className="absolute -top-8 -right-2 text-gray-100 text-6xl -z-10" />

                                <p className="text-gray-100 leading-relaxed mb-6 text-lg">
                                    &quot;At MikeVersity, we don&apos;t follow trends—we create the frameworks that <span className="text-white font-medium">define them</span>.
                                    Our mission is to equip visionary leaders with the strategic intelligence and execution
                                    systems needed to thrive in the Fourth Industrial Revolution.&quot;
                                </p>

                                <p className="text-gray-100 leading-relaxed mb-8 text-lg">
                                    What began as a passion for elevating business thinking has grown into a global
                                    movement. Today, we&apos;re proud to serve Fortune 500 executives, government leaders,
                                    and pioneering entrepreneurs who demand <span className="text-white font-medium">substance over hype</span>.
                                </p>

                                <div>
                                    <p className="text-white font-medium text-lg">Mike Litman</p>
                                    <p className="text-gray-200 text-sm mb-4">Founder / President</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderMessage;