'use client';
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function Accent() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-red-700 via-pink-700 to-purple-900 shadow-xl shadow-red-200 py-6"
        >
            <div className="w-[90%] md:w-[80%] mx-auto bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg px-6 py-8">
                {/* Back Button */}
                <Link href={'/'} className="flex items-center gap-2 text-gray-500 hover:text-red-700 transition-colors">
                    <IoIosArrowRoundBack size={35} />
                    <span className="text-lg font-semibold">Back to Home</span>
                </Link>

                {/* Section Title */}
                <h2 className="flex items-center text-2xl md:text-3xl font-bold uppercase text-indigo-900 mt-6">
                    ENGLISH SPEAKING COURSES
                </h2>

                {/* Course Title */}
                <h2 className="text-2xl md:text-3xl font-bold py-4 text-red-700">
                    The English Language Course for Kindergarten Students
                </h2>

                {/* Course Description */}
                <p className="text-lg leading-relaxed text-gray-700">
                    The English language course for kindergarten students is a specially designed program that aims to introduce young learners to the basics of the English language in a fun and interactive way. Through a combination of play-based learning, songs, rhymes, storytelling, and puppet shows, students will develop their vocabulary, sentence structure, and grammar skills. The course is divided into two levels, each tailored to the students&apos; age and language ability. Level 1 focuses on alphabet recognition, basic vocabulary, and simple sentences, while Level 2 expands on vocabulary, sentence building, and introductory grammar concepts. The course materials include textbooks, flashcards, picture cards, games, and audio-visual resources, all carefully selected to engage and motivate young learners. The teaching team consists of experienced and qualified English language teachers who have expertise in kindergarten education and language acquisition. With a student-centered approach, the course aims to foster a love for language learning, build confidence, and lay the foundation for future language skills. By the end of the course, students will be able to communicate effectively, use basic English phrases, and develop a strong foundation for future language learning.
                </p>

                {/* Back Button at Bottom */}
                <div className="mt-8">
                    <Link href={'/'} className="flex items-center gap-2 text-gray-500 hover:text-red-700 transition-colors">
                        <IoIosArrowRoundBack size={35} />
                        <span className="text-lg font-semibold">Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}