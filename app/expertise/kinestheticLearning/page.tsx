import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function KinestheticLearning(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Kinesthetic Learning</h2>
                <p className={'text-lg leading-relaxed '}>
                    Welcome to our Kinesthetic Language Program, where learning a new language is not just about mental understanding, but also about physical experience and sensory engagement. This innovative approach combines movement, gesture, and activity to enhance language acquisition, making it a fun and interactive journey. By incorporating kinesthetic learning techniques, we help learners develop a deeper connection with the language, improving retention, recall, and overall fluency. Through our program, you will embark on a unique adventure that awakens your senses, ignites your curiosity, and unlocks your full potential as a language learner. Get ready to move, explore, and learn in a way that will leave you feeling empowered and inspired!                </p>
                <p className={'text-lg leading-relaxed '}>
                    The Kinesthetic Language Program is designed to provide a comprehensive and engaging language learning experience for individuals of all ages and proficiency levels. The program&apos;s scope includes language skills development in reading, writing, speaking, and listening, with a focus on practical communication and cultural understanding. The purpose of the program is to empower learners to become confident and effective communicators in their target language, equipped with the skills and knowledge necessary to succeed in academic, professional, and social contexts. By incorporating kinesthetic learning techniques, the program aims to foster a deeper understanding and connection with the language, promoting long-term retention and fluency.                </p>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}