import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Speaking(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Public Speaking </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I possess expertise in Public Speaking Training, empowering individuals to communicate with confidence, clarity, and impact. Through my training programs, participants learn how to craft compelling messages, deliver engaging presentations, and connect with their audience. By mastering the art of public speaking, individuals can build credibility, establish thought leadership, and drive results in their personal and professional lives. My training expertise helps individuals overcome fear, develop a strong stage presence, and deliver speeches that inspire, motivate, and persuade. Whether it&apos;s a keynote address, conference presentation, or sales pitch, I equip individuals with the skills and techniques to speak with authority and achieve their goals.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Public Speaking training expertise is designed to equip individuals with the skills and confidence to deliver effective and engaging presentations, speeches, and pitches. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Overcoming Fear and Anxiety</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and managing nerves and anxiety</li>
                    <li>Building confidence and self-belief</li>
                    <li>Developing a growth mindset and learning from failure</li>
                </ul>

                <h3 className={'text-xl py-2'}>Crafting Compelling Content</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a clear and concise message</li>
                    <li>Structuring a presentation for maximum impact</li>
                    <li>Using storytelling and visual aids to engage audiences</li>
                </ul>

                <h3 className={'text-xl py-2'}>Delivering with Impact</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a strong and confident speaking voice</li>
                    <li>Using body language and nonverbal cues to engage audiences</li>
                    <li>Building a connection with the audience and handling questions and answers</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Presentation Skills</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Designing and delivering presentations for different audiences and purposes</li>
                    <li>Using technology and visual aids to enhance presentations</li>
                    <li>Handling difficult questions and situations</li>
                </ul>

                <h3 className={'text-xl py-2'}>Leadership and Inspiration</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a leadership presence and charisma</li>
                    <li>Inspiring and motivating others through public speaking</li>
                    <li>Building a reputation as a confident and effective public speaker</li>
                </ul>

                <h3 className={'text-xl py-2'}>This training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Business leaders and executives seeking to improve their presentation skills</li>
                    <li>Sales and marketing professionals seeking to pitch and present with confidence</li>
                    <li>Entrepreneurs and startup founders seeking to secure funding and build their brand</li>
                    <li>Educators and trainers seeking to engage and inspire their students</li>
                    <li>Anyone seeking to build their confidence and skills in public speaking</li>
                </ul>


                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Public Speaking training expertise is designed to provide individuals with the skills and knowledge to deliver effective and engaging presentations, speeches, and pitches. By developing confidence, crafting compelling content, and delivering with impact, individuals can become confident and effective public speakers.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}