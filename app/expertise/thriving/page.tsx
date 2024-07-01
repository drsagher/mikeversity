import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Thriving(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Thriving Against All Odds & How to Get Started </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I possess expertise in helping individuals thrive against all odds, overcome adversity, and turn challenges into opportunities for growth and success. Through my training programs, participants learn how to develop a resilient mindset, cultivate a growth mindset, and acquire the skills and strategies needed to navigate difficult situations and achieve their goals. My training expertise provides a comprehensive roadmap for individuals to get started on their journey to success, regardless of their circumstances, and empowers them with the tools and confidence to overcome obstacles, stay focused, and achieve their dreams. By mastering the art of thriving against all odds, individuals can break through barriers, achieve remarkable results, and live a fulfilling life.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Thriving Against All Odds & How to Get Started training expertise is designed to empower individuals to overcome adversity, build resilience, and achieve success despite challenging circumstances. Our training expertise includes:
                </p>
                <h3 className={'text-xl py-2'}>Overcoming Adversity</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and re-framing limiting beliefs</li>
                    <li>ADeveloping coping strategies for stress and trauma</li>
                    <li>Building resilience and adaptability</li>
                </ul>

                <h3 className={'text-xl py-2'}>Setting Goals and Creating a Vision</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals</li>
                    <li>Creating a clear and compelling vision</li>
                    <li>Developing a growth mindset</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Resilience and Grit</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing emotional intelligence and self-awareness</li>
                    <li>Building a support network and community</li>
                    <li>Learning to pivot and adjust in a rapidly changing environment</li>
                </ul>

                <h3 className={'text-xl py-2'}>Taking Action and Getting Started</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Overcoming procrastination and fear</li>
                    <li>Building momentum and taking small wins</li>
                    <li>Creating an action plan and tracking progress</li>
                </ul>

                <h3 className={'text-xl py-2'}>Overcoming Self-Doubt and Imposter Syndrome</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and challenging negative self-talk</li>
                    <li>Building confidence and self-belief</li>
                    <li>Developing a growth mindset and learning from failure</li>
                </ul>

                <h3 className={'text-xl py-2'}>This training expertise is ideal for individuals who:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Are facing challenging circumstances such as poverty, discrimination, or trauma</li>
                    <li>Are struggling with self-doubt and imposter syndrome</li>
                    <li>Want to build resilience and grit</li>
                    <li>Need help setting goals and creating a vision</li>
                    <li>Want to learn how to take action and get started towards their goals.</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Thriving Against All Odds & How to Get Started training expertise is designed to provide individuals with the skills and knowledge to overcome adversity, build resilience, and achieve success despite challenging circumstances. By developing a growth mindset, building resilience, and taking action, individuals can thrive against all odds and achieve their goals.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}