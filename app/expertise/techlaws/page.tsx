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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Mental Technology Laws</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a leading expert in Mental Technology Laws Training, I specialize in teaching individuals and organizations how to harness the power of their minds to achieve unparalleled success and wellbeing. With in-depth knowledge of mental laws such as the Law of Attraction, Law of Vibration, and Law of Cause and Effect, I provide comprehensive training programs that empower clients to master their thoughts, emotions, and beliefs. My expertise includes mind mapping, neuro-linguistic programming, and cognitive reprogramming, which enable individuals to rewire their minds, overcome limitations, and tap into their full potential. By applying these mental technology laws, clients can transform their lives, achieve their goals, and unlock their inner strength and resilience, leading to a more purposeful and fulfilling existence.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Mental Technology Laws training expertise is designed to equip individuals with the knowledge and skills to understand and apply the fundamental laws of mental technology, enabling them to achieve success, happiness, and fulfillment in their personal and professional lives. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Understanding the Laws of Mental Technology</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>The Law of Attraction</li>
                    <li>The Law of Belief</li>
                    <li>The Law of Expectation</li>
                    <li>The Law of Attention</li>
                    <li>The Law of Intention</li>
                </ul>

                <h3 className={'text-xl py-2'}>Applying Mental Technology Laws</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a positive mindset and attitude</li>
                    <li>Building self-awareness and emotional intelligence</li>
                    <li>Improving relationships and communication skills</li>
                    <li>Achieving goals and success</li>
                    <li>Overcoming obstacles and limiting beliefs</li>
                </ul>

                <h3 className={'text-xl py-2'}>Mental Technology for Personal Growth</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a growth mindset and learning from failure</li>
                    <li>Building resilience and adaptability</li>
                    <li>Improving self-confidence and self-esteem</li>
                    <li>Improving self-confidence and self-esteem</li>
                </ul>

                <h3 className={'text-xl py-2'}>Mental Technology for Professional Success</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective leadership and management skills</li>
                    <li>Improving productivity and time management</li>
                    <li>Building strong relationships and networks</li>
                    <li>Achieving career goals and success</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Mental Technology Laws training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking personal growth and self-improvement</li>
                    <li>Professionals seeking career success and advancement</li>
                    <li>Entrepreneurs and business leaders seeking to improve their mindset and skills</li>
                    <li>Anyone seeking to understand and apply the fundamental laws of mental technology</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand the fundamental laws of mental technology</li>
                    <li>Apply mental technology laws to achieve success and happiness</li>
                    <li>Develop a positive mindset and attitude</li>
                    <li>Build self-awareness and emotional intelligence</li>
                    <li>Improve relationships and communication skills</li>
                    <li>Achieve goals and success</li>
                    <li>Overcome obstacles and limiting beliefs</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}