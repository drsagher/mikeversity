import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function BeSuperPower(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Be the Superpower</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I specialize in empowering individuals to &apos;Be the Superpower&apos; they were meant to be, unlocking their inner strength, confidence, and resilience to achieve extraordinary results. Through my training programs, participants learn how to tap into their unique potential, overcome self-doubt and limitations, and develop a winning mindset that propels them towards success. By mastering the art of self-leadership and personal growth, individuals can break through barriers, achieve their goals, and become the best version of themselves. My training expertise helps individuals discover their inner superpower, unleash their full potential, and make a lasting impact in their personal and professional lives.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Be the Superpower training expertise is designed to empower individuals to unlock their full potential and become the best version of themselves. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Self-Discovery and Awareness</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying personal strengths and weaknesses</li>
                    <li>Understanding values and purpose</li>
                    <li>Developing self-awareness and emotional intelligence</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals</li>
                    <li>Creating action plans and tracking progress</li>
                    <li>Overcoming obstacles and staying motivated</li>
                </ul>

                <h3 className={'text-xl py-2'}>Leadership and Influence</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing leadership skills and confidence</li>
                    <li>Building effective communication and interpersonal skills</li>
                    <li>Learning to inspire and motivate others</li>
                </ul>

                <h3 className={'text-xl py-2'}>Resilience and Adaptability</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing coping strategies for stress and adversity</li>
                    <li>Building resilience and adaptability</li>
                    <li>Learning to pivot and adjust in a rapidly changing environment</li>
                </ul>

                <h3 className={'text-xl py-2'}>Personal Branding and Visibility</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a strong personal brand</li>
                    <li>Building a professional online presence</li>
                    <li>Learning to network and build relationships</li>
                </ul>

                <h3 className={'text-xl py-2'}>Productivity and Time Management</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Prioritizing tasks and managing time effectively</li>
                    <li>Building efficient workflows and habits</li>
                    <li>Learning to delegate and outsource tasks</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Be the Superpower training expertise is designed to provide individuals with the skills and knowledge to unlock their full potential and become the best version of themselves. By developing self-awareness, leadership skills, resilience, and productivity, individuals can achieve their goals, build strong relationships, and make a lasting impact in their personal and professional lives                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}