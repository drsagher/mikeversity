import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Accent(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        ENGLISH SPEAKING COURSES
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>The English language course for kindergarten students</h2>
                <p className={'text-lg leading-relaxed '}>
                    The English language course for kindergarten students is a specially designed program that aims to introduce young learners to the basics of the English language in a fun and interactive way. Through a combination of play-based learning, songs, rhymes, storytelling, and puppet shows, students will develop their vocabulary, sentence structure, and grammar skills. The course is divided into two levels, each tailored to the students&apos; age and language ability. Level 1 focuses on alphabet recognition, basic vocabulary, and simple sentences, while Level 2 expands on vocabulary, sentence building, and introductory grammar concepts. The course materials include textbooks, flashcards, picture cards, games, and audio-visual resources, all carefully selected to engage and motivate young learners. The teaching team consists of experienced and qualified English language teachers who have expertise in kindergarten education and language acquisition. With a student-centered approach, the course aims to foster a love for language learning, build confidence, and lay the foundation for future language skills. By the end of the course, students will be able to communicate effectively, use basic English phrases, and develop a strong foundation for future language learning.
                </p>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}