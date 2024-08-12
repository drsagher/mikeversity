import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Accent(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack size={35}/></Link>
                <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                    ENGLISH SPEAKING COURSES
                </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Speaking English for beginners</h2>
                <p className={'text-lg leading-relaxed '}>
                    Speaking English for beginners can seem daunting, but with the right approach, it can be a fun and
                    rewarding experience. Start by learning basic phrases and vocabulary, such as greetings,
                    introductions, and common expressions. Practice pronunciation by listening to native speakers and
                    repeating what they say. Begin with simple conversations, like ordering food or asking for
                    directions, and gradually move on to more complex topics. Don&apos;t be afraid to make mistakes –
                    they&apos;re an essential part of the learning process. Use language learning apps, watch English
                    videos or TV shows, and speak with native speakers to improve your skills. Remember, the key is to
                    practice consistently and immerse yourself in the language. With dedication and persistence,
                    you&apos;ll be speaking English confidently in no time!
                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Speaking English Language course is a comprehensive and interactive program designed to help
                    beginners develop essential speaking skills in English. The course is structured into modules, each
                    focusing on a specific aspect of speaking, such as pronunciation, vocabulary, grammar, and fluency.
                    Through a combination of online lessons, interactive exercises, and live conversations with native
                    speakers, students will learn to communicate effectively and confidently in English.
                </p>

                <h3 className={'text-xl py-2'}>The course covers various topics, including:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Introductions and basic conversations</li>
                    <li>Shopping and ordering food</li>
                    <li>Describing daily routines and interests</li>
                    <li>Discussing current events and news</li>
                    <li>Practicing pronunciation and intonation</li>
                    <li>Building vocabulary and grammar skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>Students will have access to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Interactive lessons and quizzes</li>
                    <li>Audio and video recordings</li>
                    <li>Live conversations with native speakers</li>
                    <li>Personalized feedback and correction</li>
                    <li>Progress tracking and assessment</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>
                    Our experienced instructors will guide students through the course, providing support and encouragement every step of the way. By the end of the course, students will be able to hold conversations with native speakers, understand various accents and dialects, and communicate effectively in everyday situations. Whether you&apos;re a beginner or looking to improve your speaking skills, our Speaking English Language course is the perfect way to achieve your goals.
                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}