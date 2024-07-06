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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Teachers Speaking English Language as Foreign Speakers</h2>
                <p className={'text-lg leading-relaxed '}>
                    The Teachers of English as a Foreign Language (TEFL) program is a comprehensive training designed specifically for educators who teach English as a foreign language. This program recognizes the unique challenges that come with teaching English to non-native speakers and aims to equip teachers with the necessary skills, knowledge, and techniques to effectively communicate and instruct in the English language. Through a combination of theoretical and practical coursework, teachers will gain a deeper understanding of language acquisition, grammar, vocabulary, and pronunciation, as well as culturally sensitive teaching methods and assessment techniques. By completing the TEFL program, teachers will be empowered to create engaging and inclusive learning environments that foster linguistic proficiency, cultural understanding, and academic success for their students.
                </p>

                <h3 className={'text-xl py-2'}>The scope of the Teachers of English as a Foreign Language (TEFL) program includes:
                </h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Language Acquisition: Understanding how students learn English as a foreign language</li>
                    <li>Language Analysis: Grammar, vocabulary, pronunciation, and syntax</li>
                    <li>Teaching Methods: Effective techniques for teaching English language skills</li>
                    <li>Lesson Planning: Creating engaging and structured lesson plans</li>
                    <li>Classroom Management: Managing classroom dynamics and student behavior</li>
                    <li>Assessment and Evaluation: Assessing student progress and evaluating teaching effectiveness</li>
                    <li>Cultural Awareness: Understanding and addressing cultural differences in the classroom</li>
                    <li>Technology Integration: Using technology to enhance teaching and learning</li>
                    <li>Professional Development: Ongoing professional growth and development as a TEFL teacher</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>
                    The program aims to provide teachers with a comprehensive understanding of teaching English as a foreign language, enabling them to create a supportive and inclusive learning environment for their students.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}