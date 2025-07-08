import Image from "next/image";
import { GrGallery } from "react-icons/gr";
import C1 from '@/public/CHAIRMAN/c1.jpg';
import C2 from '@/public/CHAIRMAN/c2.jpg';
import C3 from '@/public/CHAIRMAN/c3.jpg';
import x1 from '@/public/NEXSKILLS/x1.jpg';
import x2 from '@/public/NEXSKILLS/x2.jpg';
import x3 from '@/public/NEXSKILLS/x3.jpg';
import y1 from '@/public/BIYUN/y1.jpg';
import y3 from '@/public/BIYUN/y3.jpg';
import y5 from '@/public/BIYUN/y5.jpg';
import z1 from '@/public/CHIEF/z1.jpg';
import z2 from '@/public/CHIEF/z2.jpg';
import z3 from '@/public/CHIEF/z3.jpg';
import z4 from '@/public/CHIEF/z4.jpg';
import z5 from '@/public/CHIEF/z5.jpg';
import z6 from '@/public/CHIEF/z6.jpg';
import Ba1 from '@/public/ALFALAH/ba1.jpg';
import Ba2 from '@/public/ALFALAH/ba2.jpg';
import Ba3 from '@/public/ALFALAH/ba3.jpg';
import Ba4 from '@/public/ALFALAH/ba4.jpg';
import Nu1 from '@/public/NU/nu1.jpg';
import Nu2 from '@/public/NU/nu2.jpg';
import Nu3 from '@/public/NU/nu3.jpg';
import Nu4 from '@/public/NU/nu4.jpg';
import Nu5 from '@/public/NU/nu5.jpg';
import Nu6 from '@/public/NU/nu6.jpg';
import Nu7 from '@/public/NU/nu7.jpg';
import Pm1 from '@/public/PIMS/pm1.jpg';
import Pm2 from '@/public/PIMS/pm2.jpg';
import Pm3 from '@/public/PIMS/pm3.jpg';
import Pm4 from '@/public/PIMS/pm4.jpg';
import Wep1 from '@/public/WEP/wep1.jpg';
import Wep2 from '@/public/WEP/wep2.jpg';
import Sae1 from '@/public/SAE/sae1.jpg';
import Sae2 from '@/public/SAE/sae2.jpg';
import Saat1 from '@/public/SAAT/saat1.jpg';
import Saat2 from '@/public/SAAT/saat2.jpg';
import Saat3 from '@/public/SAAT/saat3.jpg';
import Sqo1 from '@/public/SQO/sqo1.jpg';
import Sqo2 from '@/public/SQO/sqo2.jpg';
import Sqo3 from '@/public/SQO/sqo3.jpg';
import Sqo4 from '@/public/SQO/sqo4.jpg';
import Sqo5 from '@/public/SQO/sqo5.jpg';
import Sqo6 from '@/public/SQO/sqo6.jpg';
import Sqo7 from '@/public/SQO/sqo7.jpg';
import Sqo8 from '@/public/SQO/sqo8.jpg';
import Sqo9 from '@/public/SQO/sqo9.jpg';

export default function GalleryPage() {
    return (
        <div
            className="min-h-screen p-8"
            style={{
                background: 'linear-gradient(135deg, #FF416C, #00B09B, #3A1C71)',
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Gallery Header */}
                <div className="flex items-center gap-4 mb-8">
                    <GrGallery size={55} className="text-white" />
                    <h1 className="text-4xl font-bold text-white uppercase">Gallery</h1>
                </div>

                {/* Chairman and Speaker Conference */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        CHAIRMAN AND SPEAKER CONFERENCE MYEP AT QAU
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[C1, C2, C3].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Chairman and Speaker Conference ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nexskills Employees Training */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        NEXSKILLS EMPLOYEES TRAINING ON WORK ETHICS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[x1, x2, x3].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Nexskills Employees Training ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Biyun International Airport */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        BIYUN INTERNATIONAL AIRPORT CHINA, TRAINING ON SALES COMMUNICATION
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[y1, y3, y5].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Biyun International Airport ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sultan Qaboos Sports Complex */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        SULTAN QABOOS SPORTS COMPLEX SALALAH, OMAN
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[Sqo1, Sqo2, Sqo3, Sqo4, Sqo5, Sqo6, Sqo7, Sqo8, Sqo9].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Sultan Qaboos Sports Complex ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chief Guest at Dr. Lyn Westman Event */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        CHIEF GUEST AT DR. LYN WESTMAN EVENT AT JOHN C MAXWELL
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[z1, z2, z3, z4, z5, z6].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Chief Guest Event ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bank Alfalah Ltd */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        BANK ALFALAH LTD
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[Ba1, Ba2, Ba3, Ba4].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Bank Alfalah ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* NUML University Seminar */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        NUML UNIVERSITY SEMINAR ON SUCCESS MINDSET
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[Nu1, Nu2, Nu3, Nu4, Nu5, Nu6, Nu7].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`NUML University Seminar ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* PMEA Award at PIMS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        PMEA AWARD AT PIMS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[Pm1, Pm2, Pm3, Pm4].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`PMEA Award ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Women in Entrepreneurship in Pakistan */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        WOMEN IN ENTREPRENEURSHIP IN PAKISTAN
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[Wep1, Wep2].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Women in Entrepreneurship ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subtle Amazon Experts */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        SUBTLE AMAZON EXPERTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[Sae1, Sae2].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Subtle Amazon Experts ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Standard American Accent Training */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">
                        STANDARD AMERICAN ACCENT TRAINING ISLAMABAD
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[Saat1, Saat2, Saat3].map((image, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`Standard American Accent Training ${index + 1}`}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}