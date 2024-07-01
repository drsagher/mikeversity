import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function QSuccess(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Motivation for Quantum Success</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a leading expert in Motivation for Quantum Success Training, I empower individuals and organizations to unlock their full potential and achieve extraordinary results. With extensive experience in human motivation, neuroscience, and high performance coaching, I provide comprehensive training programs that help clients overcome limiting beliefs, build unshakeable confidence, and develop a growth mindset. My expertise includes motivation strategies, goal-setting techniques, and quantum success principles, which enable individuals to tap into their inner drive, overcome obstacles, and achieve quantum leaps in their personal and professional lives. By applying these motivation strategies, clients can break through barriers, achieve their wildest dreams, and become the best version of themselves, leading to a life of purpose, fulfillment, and quantum success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Motivation for Quantum Success training expertise is designed to equip individuals with the skills and mindset to achieve extraordinary success and fulfillment in their personal and professional lives. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Unlocking Inner Motivation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and challenging limiting beliefs and assumptions</li>
                    <li>Developing a growth mindset and inner drive</li>
                    <li>Building self-awareness and confidence</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting and achieving quantum goals</li>
                    <li>Developing a success plan and strategy</li>
                    <li>Overcoming obstacles and staying motivated</li>
                </ul>

                <h3 className={'text-xl py-2'}>Mindfulness and Resilience</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing mindfulness and presence</li>
                    <li>Building resilience and coping skills</li>
                    <li>Managing stress and anxiety</li>
                </ul>

                <h3 className={'text-xl py-2'}>Positive Psychology and Well-being</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding positive psychology and well-being</li>
                    <li>Developing a positive mindset and attitude</li>
                    <li>Building strong relationships and networks</li>
                </ul>

                <h3 className={'text-xl py-2'}>Quantum Success Mindset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a quantum success mindset</li>
                    <li>Thinking like a champion and achieving greatness</li>
                    <li>Building a culture of success and excellence</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Motivation for Quantum Success training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to achieve extraordinary success and fulfillment</li>
                    <li>Leaders and entrepreneurs looking to inspire and motivate their teams</li>
                    <li>Anyone seeking to develop a growth mindset and inner drive</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Unlock their inner motivation and drive</li>
                    <li>Set and achieve quantum goals</li>
                    <li>Develop mindfulness and resilience</li>
                    <li>Build a positive mindset and attitude</li>
                    <li>Develop a quantum success mindset and achieve greatness</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}