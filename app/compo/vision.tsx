'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaGlobeAmericas, FaChartLine, FaUserTie, FaRobot, FaArrowRight } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import Head from 'next/head';

const VisionPage = () => {
    const visionPillars = [
        {
            icon: <FaLightbulb className="w-8 h-8" />,
            title: "Innovation Ecosystem",
            description: "Fostering breakthrough thinking through our proprietary IDEA framework",
            color: "bg-gradient-to-br from-red-500 to-yellow-500"
        },
        {
            icon: <FaGlobeAmericas className="w-8 h-8" />,
            title: "Global Impact",
            description: "Training leaders across 45+ countries with localized strategies",
            color: "bg-gradient-to-br from-red-600 to-amber-600"
        },
        {
            icon: <GiBrain className="w-8 h-8" />,
            title: "Cognitive Mastery",
            description: "Neuroscience-based techniques for peak mental performance",
            color: "bg-gradient-to-br from-red-700 to-orange-600"
        },
        {
            icon: <FaChartLine className="w-8 h-8" />,
            title: "Economic Transformation",
            description: "Proven systems to 10X revenue in 18 months or less",
            color: "bg-gradient-to-br from-red-800 to-amber-700"
        },
        {
            icon: <FaUserTie className="w-8 h-8" />,
            title: "Executive Leadership",
            description: "Developing C-suite capabilities in emerging leaders",
            color: "bg-gradient-to-br from-red-900 to-amber-800"
        },
        {
            icon: <FaRobot className="w-8 h-8" />,
            title: "AI Integration",
            description: "Future-proofing businesses with our AITM methodology",
            color: "bg-gradient-to-br from-black to-red-900"
        }
    ];

    return (
        <>
            <Head>
                <title>Mikeversity Vision | Transformational Leadership Development</title>
                <meta name="description" content="Discover Mike Litman's vision for creating the business leaders of tomorrow through cutting-edge training in AI, economics, and cognitive mastery" />
            </Head>

            <main className="min-h-screen">
                <section className="relative overflow-hidden bg-gradient-to-br from-black via-red-900 to-black">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full mix-blend-screen opacity-20 filter blur-3xl"
                            animate={{
                                opacity: [0.15, 0.25, 0.15],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-red-800 rounded-full mix-blend-screen opacity-15 filter blur-3xl"
                            animate={{
                                opacity: [0.1, 0.2, 0.1],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 3
                            }}
                        />
                        <motion.div
                            className="absolute top-1/3 right-1/4 w-96 h-96 bg-black rounded-full mix-blend-screen opacity-10 filter blur-3xl"
                            animate={{
                                opacity: [0.05, 0.15, 0.05],
                                scale: [1, 1.03, 1]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 6
                            }}
                        />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-30" />
                    </div>

                    {/* Main Content Container */}
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="text-center mb-16 pt-8"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Mikeversity <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">Vision</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-red-200 max-w-4xl mx-auto leading-relaxed">
                                Where disruptive strategy meets human potential to create the{' '}
                                <span className="font-semibold text-white">next generation of transformational leaders</span>
                            </p>
                        </motion.div>

                        {/* Vision Pillars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                            {visionPillars.map((pillar, index) => (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    <div className={`absolute -inset-0.5 ${pillar.color} rounded-xl opacity-80 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-300`} />
                                    <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col border border-red-900/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                                        <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 ${pillar.color} text-white shadow-lg`}>
                                            {pillar.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-3">{pillar.title}</h2>
                                        <p className="text-red-200 mb-6 flex-grow">{pillar.description}</p>
                                        <div className="mt-auto">
                                            <button className="inline-flex items-center text-sm font-medium text-red-400 hover:text-white transition-colors">
                                                Explore Framework <FaArrowRight className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default VisionPage;