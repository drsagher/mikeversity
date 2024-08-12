import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function YoungTeenMotivation(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Young and Teen Motivation </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a Young and Teen Motivation Training expert, I inspire and empower young people to unlock their potential, build resilience, and achieve their dreams. With extensive experience in youth development, education, and motivational psychology, I provide comprehensive training programs that help young individuals identify their strengths, overcome self-doubt, and develop a growth mindset. My expertise includes age-appropriate motivation strategies, goal-setting techniques, and confidence-building activities, which enable young people to navigate adolescence, build positive relationships, and achieve academic and personal success. By applying these motivation skills, young individuals can develop a strong sense of purpose, overcome obstacles, and thrive in an ever-changing world.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Young and Teen Motivation training expertise is designed to empower young people to reach their full potential, build confidence, and develop a growth mindset. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Self-Discovery and Awareness</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying strengths and passions</li>
                    <li>Understanding values and purpose</li>
                    <li>Developing self-awareness and emotional intelligence</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals</li>
                    <li>Creating action plans and tracking progress</li>
                    <li>Overcoming obstacles and staying motivated</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Resilience and Grit</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing coping strategies for stress and adversity</li>
                    <li>Building resilience and adaptability</li>
                    <li>Learning to pivot and adjust in a rapidly changing environment</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication and Relationships</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building strong relationships with peers and adults</li>
                    <li>Developing effective communication and interpersonal skills</li>
                    <li>Learning to navigate conflict and difficult conversations</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Confidence and Self-Esteem</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and challenging negative self-talk</li>
                    <li>Building confidence and self-belief</li>
                    <li>Developing a growth mindset and learning from failure</li>
                </ul>

                <h3 className={'text-xl py-2'}>This training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Young people aged 12-25 seeking to build confidence and motivation</li>
                    <li>Parents and caregivers seeking to support their child&apos;s development</li>
                    <li>Educators and youth leaders seeking to empower young people</li>
                    <li>Organizations seeking to develop young talent and build a strong future workforce</li>
                </ul>


                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Young and Teen Motivation training expertise is designed to provide young people with the skills and knowledge to succeed in all areas of life. By developing self-awareness, building resilience, and setting goals, young people can achieve their full potential and become confident, motivated, and successful individuals.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}