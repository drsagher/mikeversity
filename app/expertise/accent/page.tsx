import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Accent(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Standard American Accent Elimination Training Program</h2>
                <p className={'text-lg leading-relaxed '}>
                    The Standard American Accent Elimination training program is a comprehensive and intensive course designed to help non-native English speakers eliminate their foreign accent and speak with a neutral, Standard American Accent. This program is ideal for individuals who wish to improve their professional and personal communication skills, enhance their credibility and confidence, and advance their careers in the United States. Through a combination of interactive lessons, audio and visual aids, and personalized coaching, participants will learn to identify and correct their accent patterns, master the sounds, intonation, and rhythm of Standard American English, and develop a more natural and fluent speaking style. With a focus on practical application and real-life scenarios, this program will equip participants with the skills and techniques necessary to effectively communicate and connect with others in personal and professional settings, ultimately leading to greater success and opportunities in their personal and professional lives.
                </p>
                <p className={'text-lg leading-relaxed '}>
                    The scope of the Standard American Accent Elimination training program includes:                </p>

                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Assessment of individual&apos;s current accent and speech patterns</li>
                    <li>Identification of specific areas for improvement</li>
                    <li>Personalized coaching and feedback</li>
                    <li>Instruction on proper pronunciation, intonation, and rhythm</li>
                    <li>Practice exercises and drills to reinforce new skills</li>
                    <li>Focus on common challenging sounds and words</li>
                    <li>Emphasis on developing a neutral, Standard American Accent</li>
                    <li>Opportunities to apply new skills in real-life scenarios</li>
                    <li>Ongoing support and evaluation to ensure progress</li>
                    <li>Flexible scheduling and delivery options (in-person, online, or hybrid)</li>
                </ul>

                <h3 className={'text-xl py-2'}>The program aims to help individuals:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Improve communication skills</li>
                    <li>Enhance professional and personal relationships</li>
                    <li>Increase confidence and credibility</li>
                    <li>Advance career opportunities</li>
                    <li>Better integrate into American culture and society</li>
                </ul>


                <p className={'text-lg leading-relaxed py-2 '}>
                    By the end of the program, participants can expect to have a significantly reduced foreign accent and speak with a more neutral, Standard American Accent, enabling them to communicate more effectively and confidently in all aspects of their lives.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}