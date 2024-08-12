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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>American Sounds Training For Kids (Clear Speech
                    Therapy Training)</h2>
                <p className={'text-lg leading-relaxed '}>
                    American Sounds Training is a specialized program designed to help non-native English speakers
                    improve their pronunciation and intonation skills in American English. This comprehensive training
                    focuses on the distinct sounds, rhythm, and stress patterns that are unique to American English,
                    helping individuals to communicate more effectively and confidently in personal and professional
                    settings. Through a combination of interactive exercises, audio and visual aids, and personalized
                    feedback, participants learn to produce accurate American English sounds, such as
                    the &quot;r&quot; sound, &quot;v&quot; sound, and &quot;th&quot; sound, and master the
                    characteristic intonation and rhythm of American English. The training also covers common
                    pronunciation challenges, like vowel sounds and word stress, and provides opportunities for
                    participants to practice conversational dialogues and everyday expressions. By the end of the
                    training, participants will be able to speak with increased clarity, accuracy, and confidence,
                    enhancing their ability to connect with others and achieve their goals in the United States.
                </p>
                <p className={'text-lg leading-relaxed '}>
                    Clear Speech Therapy for Kids is a specialized program designed to help children develop clear and effective communication skills. Our experienced speech-language pathologists (SLPs) work with kids to identify and address speech and language challenges, such as articulation difficulties, stuttering, and language processing deficits. Using evidence-based techniques and fun, engaging activities, we help children improve their ability to express themselves confidently and clearly. Our therapy sessions are tailored to each child&apos;s unique needs and goals, and may incorporate games, role-playing, and interactive exercises to make learning fun and engaging. We also collaborate with parents and caregivers to provide support and strategies for continued progress at home. By empowering kids to communicate effectively, we help them build strong relationships, achieve academic success, and develop a lifelong love of learning. With Clear Speech Therapy for Kids, children can unlock their full potential and speak with confidence and clarity.
                </p>
                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                        <IoIosArrowRoundBack size={35}/>
                    </Link>
            </div>

        </div>
)
}