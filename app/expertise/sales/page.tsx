import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Sales(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Sales Motivation</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I specialize in Sales Motivation Training, empowering sales professionals to overcome obstacles, build resilience, and achieve exceptional results. Through my training programs, participants learn how to identify and overcome limiting beliefs, develop a winning mindset, and cultivate a growth mindset. By mastering the art of sales motivation, individuals can boost their confidence, persistence, and closing skills, leading to increased sales performance, customer satisfaction, and long-term success. My training expertise helps sales teams and individuals develop the mental toughness, strategic thinking, and emotional intelligence to stay motivated, focused, and driven to achieve their sales goals and exceed customer expectations                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Sales Motivation training expertise is designed to equip sales professionals with the skills and mindset to achieve their sales goals and succeed in a competitive market. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Overcoming Fear and Self-Doubt</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and challenging limiting beliefs</li>
                    <li>Building confidence and self-belief</li>
                    <li>Developing a growth mindset and learning from failure</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building a Sales Mindset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a positive attitude and mindset</li>
                    <li>Building resilience and adaptability</li>
                    <li>Improving self-motivation and discipline</li>
                </ul>

                <h3 className={'text-xl py-2'}>Prospecting and Lead Generation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective prospecting strategies</li>
                    <li>Building a strong pipeline of leads</li>
                    <li>Improving conversion rates and closing deals</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication and Presentation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective communication and presentation skills</li>
                    <li>Building rapport and trust with customers</li>
                    <li>Handling objections and closing deals</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) sales goals</li>
                    <li>Creating action plans and tracking progress</li>
                    <li>Celebrating successes and learning from failures</li>
                </ul>

                <h3 className={'text-xl py-2'}>This training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Sales professionals seeking to improve their skills and achieve their sales goals</li>
                    <li>Sales teams seeking to improve their performance and results</li>
                    <li>Sales leaders and managers seeking to develop their team&apos;s skills and motivation</li>
                    <li>Anyone seeking to build their confidence and success in sales.</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Overcome fear and self-doubt</li>
                    <li>Build a sales mindset and confidence</li>
                    <li>Develop effective prospecting and lead generation strategies</li>
                    <li>Improve communication and presentation skills</li>
                    <li>Set and achieve sales goals</li>
                    <li>Celebrate successes and learn from failures</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Sales Motivation training expertise is designed to provide sales professionals with the skills and knowledge to succeed in sales and achieve their goals. By building confidence, developing a sales mindset, and improving communication and presentation skills, sales professionals can overcome obstacles and achieve success.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}