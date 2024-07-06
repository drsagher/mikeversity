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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Advanced Standard American Accent Training
                    Program for CEOs</h2>

                <h3 className={'text-2xl font-bold py-4'}>Welcome CEOs!</h3>
                <p className={'text-lg leading-relaxed '}>
                    As a leader in your industry, effective communication is crucial to your success. Our Standard
                    American Accent Elimination training program is tailored specifically for high-level executives like
                    yourself, seeking to refine your speaking skills and project a more polished, professional image.
                    In this exclusive program, our expert trainers will work closely with you to:
                </p>

                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Neutralize your accent and achieve a more neutral, American tone</li>
                    <li>Enhance your vocal clarity, articulation, and diction</li>
                    <li>Develop a more confident and authoritative speaking style</li>
                    <li>Improve your ability to communicate complex ideas and strategies</li>
                    <li>Refine your presentation skills and executive presence</li>
                    <li>Building Resilience and Adaptability</li>
                    <li>Developing a Growth Mindset</li>
                    <li>Cultivating Healthy Relationships</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>Through personalized coaching, advanced speech analysis, and targeted exercises, you&apos;ll achieve a more refined and effective communication style, enabling you to:</p>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Connect with clients, investors, and colleagues more effectively</li>
                    <li>Build stronger relationships and negotiate with confidence</li>
                    <li>Deliver compelling presentations and speeches</li>
                    <li>Enhance your professional image and leadership presence</li>
                </ul>


                <p className={'text-lg leading-relaxed '}>
                    Join our program to elevate your communication skills and take your leadership to the next level!
                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}