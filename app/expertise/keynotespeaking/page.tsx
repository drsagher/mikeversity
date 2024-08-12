import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function KeynoteSpeaking(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Keynote Speaking</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned Keynote Speaking expert, I help thought leaders, entrepreneurs, and executives develop the skills and confidence to deliver impactful, inspiring, and memorable keynote presentations that leave a lasting impression on their audience. With extensive experience in public speaking, presentation design, and storytelling, I provide comprehensive training programs that cover message crafting, stage presence, and audience engagement techniques. My expertise includes keynote structure development, persuasive storytelling, and confident delivery strategies, which enable speakers to captivate their audience, convey their message with clarity, and drive meaningful action. By applying these keynote speaking skills, clients can establish themselves as authorities in their field, build their personal brand, and inspire others to take ,action.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Keynote Speaking training expertise is designed to equip individuals with the skills and confidence to deliver impactful, engaging, and memorable keynote speeches. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Crafting a Compelling Message</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a clear and concise message</li>
                    <li>Understanding your audience and tailoring your message</li>
                    <li>Creating a strong narrative and storytelling</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Delivery Techniques</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a confident and engaging stage presence</li>
                    <li>Using vocal techniques and body language to enhance delivery</li>
                    <li>Managing nerves and building rapport with the audience</li>
                </ul>

                <h3 className={'text-xl py-2'}>Visual Aids and Storytelling</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Creating effective visual aids and presentations</li>
                    <li>Using storytelling techniques to engage and inspire</li>
                    <li>Integrating multimedia and interactive elements</li>
                </ul>

                <h3 className={'text-xl py-2'}>Audience Engagement and Interaction</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building audience participation and engagement</li>
                    <li>Using humor and anecdotes to connect with the audience</li>
                    <li>Encouraging questions and feedback</li>
                </ul>

                <h3 className={'text-xl py-2'}>Handling Questions and Answers</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Preparing for and handling Q&A sessions</li>
                    <li>Responding confidently and concisely to questions</li>
                    <li>Using Q&A to further engage and persuade the audience</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Keynote Speaking training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Leaders and executives seeking to inspire and motivate</li>
                    <li>Entrepreneurs and innovators looking to pitch and promote</li>
                    <li>Educators and trainers seeking to engage and educate</li>
                    <li>Anyone seeking to develop their public speaking skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Craft a compelling and engaging keynote message</li>
                    <li>Deliver a confident and effective keynote speech</li>
                    <li>Use visual aids and storytelling to enhance their message</li>
                    <li>Engage and interact with their audience</li>
                    <li>Handle questions and answers with confidence and poise</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}