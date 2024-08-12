import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function SoftSkills(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Life and Success Coach</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned Life and Success Coach Training Expert, I empower individuals to unlock their full potential and achieve their goals. With extensive experience in human behavior, motivation, and personal development, I provide comprehensive training and coaching services to help clients overcome obstacles, build resilience, and cultivate a growth mindset. My expertise includes life coaching, success coaching, goal setting, mindfulness, and emotional intelligence. I&apos;ve helped numerous individuals and organizations achieve remarkable success, and I&apos;m dedicated to continuing this journey of transformation and empowerment. Through my coaching and training programs, I inspire and support individuals to reach new heights of personal and professional success, leading to a more fulfilling and purpose-driven life.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Life and Success Coach training expertise is designed to equip individuals with the skills and knowledge to help others achieve their goals and succeed in life. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Coaching Fundamentals</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the coaching mindset and approach</li>
                    <li>Building strong relationships and trust with clients</li>
                    <li>Effective communication and active listening skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Helping clients set and achieve their goals</li>
                    <li>Developing action plans and strategies for success</li>
                    <li>Overcoming obstacles and staying motivated</li>
                </ul>

                <h3 className={'text-xl py-2'}>Personal Growth and Development</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Helping clients identify and overcome limiting beliefs and behaviors</li>
                    <li>Developing self-awareness and emotional intelligence</li>
                    <li>Building resilience and adaptability</li>
                </ul>

                <h3 className={'text-xl py-2'}>Success Mindset and Strategies</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a growth mindset and learning from failure</li>
                    <li>Building confidence and self-belief</li>
                    <li>Improving productivity and time management skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication and Relationship Building</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building strong relationships with clients and others</li>
                    <li>Improving communication and conflict resolution skills</li>
                    <li>Developing emotional intelligence and empathy</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Life and Success Coach training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to become a life or success coach</li>
                    <li>Coaches seeking to improve their skills and knowledge</li>
                    <li>Mentors and advisors seeking to support others in achieving their goals</li>
                    <li>Anyone seeking to help others succeed and achieve their full potential</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand the coaching mindset and approach</li>
                    <li>Help clients set and achieve their goals</li>
                    <li>Develop effective communication and relationship building skills</li>
                    <li>Support clients in overcoming obstacles and staying motivated</li>
                    <li>Develop a growth mindset and learning from failure</li>
                    <li>Build confidence and self-belief</li>
                    <li>Improve productivity and time management skills</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}