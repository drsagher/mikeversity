import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function TransformingBusiness(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Mindset for Transforming Business & Relationship </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned expert in Mindset for Transforming Business & Relationship Training, I help entrepreneurs, leaders, and individuals shift their mindset to achieve breakthrough success in their business and personal relationships. With extensive experience in mindset coaching, neuroscience, and human behavior, I provide comprehensive training programs that empower clients to rewire their thoughts, beliefs, and habits to achieve transformational results. My expertise includes growth mindset development, emotional intelligence, and effective communication strategies, which enable individuals to overcome limiting beliefs, build trust, and foster collaborative relationships. By applying these mindset shifts, clients can revolutionize their business, strengthen their relationships, and unlock their full potential, leading to increased success, happiness, and fulfillment in all areas of life.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Mindset for Transforming Business & Relationship training expertise is designed to equip individuals with the skills and knowledge to transform their mindset, business, and relationships. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Mindset Transformation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and challenging limiting beliefs and assumptions</li>
                    <li>Developing a growth mindset and learning from failure</li>
                    <li>Building resilience and adaptability in the face of change</li>
                    <li>Cultivating a positive and solution-focused mindset</li>
                </ul>

                <h3 className={'text-xl py-2'}>Business Transformation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a entrepreneurial mindset and innovative thinking</li>
                    <li>Building a successful business strategy and plan</li>
                    <li>Improving leadership and management skills</li>
                    <li>Enhancing customer service and relationships</li>
                </ul>

                <h3 className={'text-xl py-2'}>Relationship Transformation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building strong and effective communication skills</li>
                    <li>Developing emotional intelligence and empathy</li>
                    <li>Improving conflict resolution and negotiation skills</li>
                    <li>Cultivating healthy and productive relationships</li>
                </ul>

                <h3 className={'text-xl py-2'}>Personal Transformation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and achieving personal goals and aspirations</li>
                    <li>Developing self-awareness and self-regulation skills</li>
                    <li>Building confidence and self-esteem</li>
                    <li>Improving work-life balance and overall well-being</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Mindset for Transforming Business & Relationship training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Entrepreneurs and business leaders seeking to transform their business</li>
                    <li>Individuals seeking to improve their relationships and communication skills</li>
                    <li>Professionals looking to develop a growth mindset and improve their leadership skills</li>
                    <li>Anyone seeking to transform their mindset and achieve personal and professional success</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Transform their mindset and develop a growth mindset</li>
                    <li>Build a successful business and improve leadership skills</li>
                    <li>Cultivate healthy and productive relationships</li>
                    <li>Achieve personal goals and aspirations</li>
                    <li>Improve overall well-being and work-life balance</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}