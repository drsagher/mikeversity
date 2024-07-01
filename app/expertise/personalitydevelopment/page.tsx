import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function PersonalityDevelopment(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Personality Development</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a renowned expert in Personality Development Training, I empower individuals to discover their strengths, overcome limitations, and unlock their full potential. With extensive experience in personality psychology, human behavior, and personal growth, I provide comprehensive training programs that help clients develop a winning personality, build confidence, and enhance their emotional intelligence. My expertise includes personality assessments, self-awareness techniques, and effective communication strategies, which enable individuals to improve their relationships, achieve their goals, and become more effective leaders. By applying these personality development strategies, clients can transform their lives, build a positive self-image, and achieve success and happiness in all areas of life.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Personality Development training expertise is designed to equip individuals with the skills and knowledge to enhance their personality, build confidence, and achieve personal and professional success. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Self-Awareness</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding personality traits and types</li>
                    <li>Identifying strengths and weaknesses</li>
                    <li>Developing emotional intelligence</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building strong relationships through effective communication</li>
                    <li>Developing active listening and assertiveness skills</li>
                    <li>Understanding and managing different communication styles</li>
                </ul>

                <h3 className={'text-xl py-2'}>Confidence and Self-Esteem</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building confidence and self-esteem</li>
                    <li>Overcoming self-doubt and imposter syndrome</li>
                    <li>Developing a growth mindset</li>
                </ul>

                <h3 className={'text-xl py-2'}>Emotional Intelligence</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding and managing emotions</li>
                    <li>Developing empathy and social skills</li>
                    <li>Building strong relationships through emotional intelligence</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting and achieving personal and professional goals</li>
                    <li>Developing a success mindset and overcoming obstacles</li>
                    <li>Building resilience and perseverance</li>
                </ul>

                <h3 className={'text-xl py-2'}>Personal Branding</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a personal brand and identity</li>
                    <li>Building a strong online presence</li>
                    <li>Creating a professional image and reputation</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Personality Development training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking personal growth and self-improvement</li>
                    <li>Professionals looking to enhance their leadership and communication skills</li>
                    <li>Anyone seeking to build confidence and achieve success</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand their personality traits and types</li>
                    <li>Communicate effectively and build strong relationships</li>
                    <li>Build confidence and self-esteem</li>
                    <li>Develop emotional intelligence and empathy</li>
                    <li>Set and achieve personal and professional goals</li>
                    <li>Develop a strong personal brand and identity</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}