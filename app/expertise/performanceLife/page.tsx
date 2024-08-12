import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function PerformanceLife(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Life Performance Coaching </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I specialize in Life Performance Coaching, helping individuals unlock their full potential and achieve success in all areas of their lives. Through my training programs, participants learn how to set and achieve goals, overcome obstacles, and develop a growth mindset. By mastering the principles of life performance coaching, individuals can improve their productivity, resilience, and overall well-being, leading to a more fulfilling and purpose-driven life. My training expertise empowers individuals to identify and break through limiting beliefs, build positive habits, and cultivate a supportive network, enabling them to perform at their best and live a life that truly reflects their values and aspirations.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Life Performance Coaching training expertise is designed to equip individuals with the skills and knowledge to achieve their personal and professional goals, and live a fulfilling life. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Self-Awareness and Discovery</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying values, strengths, and passions</li>
                    <li>Understanding personality and behavior patterns</li>
                    <li>Developing emotional intelligence and self-awareness</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals</li>
                    <li>Creating action plans and tracking progress</li>
                    <li>Overcoming obstacles and staying motivated</li>
                </ul>

                <h3 className={'text-xl py-2'}>Personal Growth and Development</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a growth mindset and learning from failure</li>
                    <li>Building resilience and adaptability</li>
                    <li>Improving relationships and communication skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>Time Management and Productivity</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Prioritizing tasks and managing time effectively</li>
                    <li>Building efficient workflows and habits</li>
                    <li>Reducing stress and increasing energy</li>
                </ul>

                <h3 className={'text-xl py-2'}>Mindfulness and Wellbeing</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing mindfulness and meditation practices</li>
                    <li>Building self-care and self-compassion habits</li>
                    <li>Improving physical and mental wellbeing</li>
                </ul>

                <h3 className={'text-xl py-2'}>This training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to improve their personal and professional lives</li>
                    <li>Business leaders and executives seeking to develop their teams</li>
                    <li>Coaches and consultants seeking to enhance their coaching skills</li>
                    <li>Educators and trainers seeking to support their students&apos; growth</li>
                    <li>Anyone seeking to achieve their goals and live a fulfilling life.</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Life Performance Coaching training expertise is designed to provide individuals with the skills and knowledge to achieve their goals, develop personally and professionally, and live a fulfilling life. By developing self-awareness, setting goals, and building personal growth, individuals can become confident, motivated, and successful in all areas of life.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}