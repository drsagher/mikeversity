import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Mindfullness(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Mindfulness Practitioner</h2>
                <p className={'text-lg leading-relaxed '}>
                    A Mindfulness Practitioner is a compassionate and experienced guide who helps individuals cultivate mindfulness and presence in their daily lives. With a deep understanding of the mind-body connection, they skillfully lead clients through evidence-based mindfulness practices, including meditation, breathwork, and mindful movement. By fostering a safe and supportive environment, Mindfulness Practitioners empower individuals to develop greater self-awareness, self-acceptance, and self-compassion, leading to reduced stress, anxiety, and burnout. Through regular practice and guidance, individuals can develop the skills to navigate life&apos;s challenges with greater ease, clarity, and resilience, leading to improved relationships, increased productivity, and a deeper sense of purpose and well-being.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Mindfulness Practitioner training expertise is designed to equip individuals with the knowledge, skills, and practices to cultivate mindfulness and share it with others. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Mindfulness Foundations</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the concept and benefits of mindfulness</li>
                    <li>Developing a personal mindfulness practice</li>
                    <li>Introduction to mindfulness meditation and techniques</li>
                </ul>

                <h3 className={'text-xl py-2'}>Mindfulness Principles and Practices</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the principles of mindfulness and how to apply them in daily life</li>
                    <li>Developing mindfulness skills such as attention, awareness, and acceptance</li>
                    <li>Exploring various mindfulness practices such as body scan, loving-kindness, and mindful movement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Teaching Mindfulness to Others</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding how to share mindfulness with others</li>
                    <li>Developing effective teaching skills and strategies</li>
                    <li>Learning how to adapt mindfulness practices for diverse populations and needs</li>
                </ul>

                <h3 className={'text-xl py-2'}>Mindfulness in Daily Life</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding how to integrate mindfulness into daily activities and routines</li>
                    <li>Developing mindfulness in relationships and communication</li>
                    <li>Exploring mindfulness in the workplace and in nature</li>
                </ul>

                <h3 className={'text-xl py-2'}>Mindfulness and Emotional Intelligence</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the connection between mindfulness and emotional intelligence</li>
                    <li>Developing self-awareness and emotional regulation skills</li>
                    <li>Exploring mindfulness and emotional intelligence in leadership and teamwork</li>
                </ul>

                <h3 className={'text-xl py-2'}>Mindfulness and Trauma</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the impact of trauma on individuals and communities</li>
                    <li>Developing mindfulness practices for trauma resilience and healing</li>
                    <li>Exploring mindfulness and trauma-informed care</li>
                </ul>
                <p className={'text-lg leading-relaxed py-2 '}>
                  Our Mindfulness Practitioner training expertise is designed to provide individuals with a comprehensive understanding of mindfulness and the skills to share it with others. By developing a strong foundation in mindfulness principles and practices, individuals can cultivate greater awareness, acceptance, and compassion in themselves and others.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}