import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function SoftSkills(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack size={35}/></Link>
                <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                    Training Expertise
                </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Emotional Intelligence </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I specialize in Emotional Intelligence, helping individuals and teams develop
                    the self-awareness, social skills, and emotional agility to excel in today&apos;s fast-paced and
                    dynamic work environment. Through my training programs, participants learn how to recognize and
                    manage their own emotions, empathize with others, and build strong relationships with colleagues and
                    clients. By mastering the principles of Emotional Intelligence, individuals can improve their
                    communication skills, conflict resolution strategies, and decision-making abilities, leading to
                    enhanced collaboration, productivity, and leadership effectiveness. My training expertise empowers
                    individuals to harness the power of Emotional Intelligence, driving personal and professional
                    growth, and fostering a culture of emotional intelligence in the workplace. </p>
                <p className={'text-lg leading-relaxed '}>
                    Emotional Intelligence (EI) training expertise is designed to help individuals develop the skills to
                    recognize and understand emotions in themselves and others, and to use this awareness to guide
                    thought and behavior. Our EI training expertise includes: </p>

                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Self-awareness: understanding one&apos;s own emotions and how they impact behavior and
                        decision-making
                    </li>
                    <li>Social awareness: recognizing and understanding emotions in others</li>
                    <li>Self-regulation: managing one&apos;s own emotions and impulses</li>
                    <li>Motivation: using emotions to drive motivation and achievement</li>
                    <li>Empathy: understanding and connecting with others</li>
                    <li>Effective communication: using EI to communicate effectively and build strong relationships</li>
                </ul>
                <p className={'text-lg leading-relaxed '}>
                    Our EI training expertise is designed to help individuals:
                </p>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Improve relationships and communication
                    </li>
                    <li>Enhance decision-making and problem-solving</li>
                    <li>Increase empathy and understanding</li>
                    <li>Manage stress and conflict</li>
                    <li>Achieve personal and professional success</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    By developing EI skills, individuals can become more effective leaders, team players, and communicators, and build stronger relationships with others. Our EI training expertise is designed to help individuals develop the skills they need to succeed in all areas of life.
                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}