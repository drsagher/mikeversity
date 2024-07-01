import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Nlp(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Neurolinguistic Programming (NLP) </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a certified NLP Master Practitioner and trainer, I empower individuals and organizations to unlock the power of their minds, overcome limitations, and achieve exceptional results. With extensive experience in NLP, neuroscience, and human behavior, I provide comprehensive training programs that help clients develop a deeper understanding of their thoughts, beliefs, and behaviors. My expertise includes NLP modeling, reframing, and anchoring techniques, which enable individuals to reprogram their minds, build resilience, and develop a growth mindset. By applying these NLP strategies, clients can enhance their communication skills, overcome phobias and anxieties, and achieve their goals, leading to increased confidence, productivity, and success in all areas of life.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Neurolinguistic Programming (NLP) training expertise is designed to equip individuals with the skills and knowledge to understand and influence human behavior, communication, and personal development. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>NLP Fundamentals</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the principles of NLP</li>
                    <li>Developing a deep understanding of human behavior and communication</li>
                    <li>Learning NLP techniques and tools</li>
                </ul>

                <h3 className={'text-xl py-2'}>Communication Mastery</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective communication skills</li>
                    <li>Understanding and using language patterns</li>
                    <li>Building rapport and trust with others</li>
                </ul>

                <h3 className={'text-xl py-2'}>Personal Development</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding and overcoming limiting beliefs and behaviors</li>
                    <li>Developing a growth mindset and self-awareness</li>
                    <li>Building confidence and self-esteem</li>
                </ul>

                <h3 className={'text-xl py-2'}>Influence and Persuasion</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding and using influence and persuasion techniques</li>
                    <li>Building relationships and trust with others</li>
                    <li>Achieving personal and professional goals</li>
                </ul>

                <h3 className={'text-xl py-2'}>Coaching and Mentoring</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing coaching and mentoring skills</li>
                    <li>Understanding and using NLP in coaching and mentoring</li>
                    <li>Helping others achieve their goals and potential</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our NLP training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Coaches, therapists, and counselors</li>
                    <li>Leaders, managers, and entrepreneurs</li>
                    <li>Sales and marketing professionals</li>
                    <li>Educators and trainers</li>
                    <li>Anyone seeking personal growth and self-improvement</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand and apply NLP principles and techniques</li>
                    <li>Communicate effectively and build strong relationships</li>
                    <li>Overcome limiting beliefs and behaviors</li>
                    <li>Influence and persuade others</li>
                    <li>Coach and mentor others to achieve their goals</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}