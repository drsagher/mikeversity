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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Life Skills Training Program for Children and Youth</h2>
                <p className={'text-lg leading-relaxed '}>
                    Our Life Skills Development Training Program is a comprehensive and interactive program designed to empower individuals with the essential skills necessary to succeed in all aspects of life. This program focuses on developing critical skills such as effective communication, problem-solving, decision-making, time management, goal setting, and emotional intelligence. Through a combination of interactive exercises, role-plays, group discussions, and real-life scenarios, participants will learn how to navigate challenging situations, build strong relationships, and achieve personal and professional growth. Our expert trainers will guide participants in identifying and overcoming self-limiting beliefs, developing a growth mindset, and cultivating a positive attitude. By the end of this program, participants will be equipped with the skills and confidence to tackle life&apos;s challenges, make informed decisions, and achieve their goals. The program will cover key areas such as:
                </p>

                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Effective Communication</li>
                    <li>Problem-Solving and Decision-Making</li>
                    <li>Time Management and Productivity</li>
                    <li>Goal Setting and Achievement</li>
                    <li>Emotional Intelligence and Self-Awareness</li>
                    <li>Building Resilience and Adaptability</li>
                    <li>Developing a Growth Mindset</li>
                    <li>Cultivating Healthy Relationships</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>
                    Our Life Skills Development Training Program is designed to be engaging, interactive, and tailored to meet the unique needs of each participant                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}