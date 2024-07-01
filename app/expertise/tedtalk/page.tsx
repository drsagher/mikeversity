import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function SoftSkills(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Ted Talk Speaking </h2>
                <p className={'text-lg leading-relaxed '}>
                    TED Talk speaking is an art form that combines the power of public speaking with the simplicity of storytelling, inspiring and engaging audiences worldwide. TED Talk speakers are masterful communicators who distill complex ideas into concise, compelling narratives, using a unique blend of passion, creativity, and authority. With a focus on clarity, concision, and connection, they craft talks that are both informative and entertaining, often incorporating personal anecdotes, vivid visuals, and thought-provoking insights. By sharing their ideas, experiences, and perspectives, TED Talk speakers spark meaningful conversations, challenge conventional thinking, and inspire action, leaving a lasting impact on their listeners and the world at large. Whether tackling global issues or personal triumphs, TED Talk speakers embody the art of effective communication, making complex ideas accessible and unforgettable.
                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Ted Talk Speaking training expertise is designed to help individuals craft and deliver compelling, inspiring, and memorable talks that leave a lasting impact on audiences. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Crafting a Compelling Narrative</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the power of storytelling in public speaking</li>
                    <li>Identifying and crafting a clear and concise narrative</li>
                    <li>Using storytelling techniques to engage and persuade audiences</li>
                </ul>

                <h3 className={'text-xl py-2'}>Developing a Clear and Concise Message</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Defining a clear and focused message</li>
                    <li>Avoiding jargon and technical terms</li>
                    <li>Using simple and concise language to convey complex ideas</li>
                </ul>

                <h3 className={'text-xl py-2'}>Creating a Strong Opening and Closing</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Crafting a hook that grabs the audience&apos;s attention</li>
                    <li>Developing a strong and memorable opening</li>
                    <li>Ending with a call to action and a lasting impression</li>
                </ul>

                <h3 className={'text-xl py-2'}>Understanding Ted Talk</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the typical TedTalk structure and format</li>
                    <li>Using the TED commandments to guide talk development</li>
                    <li>Adapting talks for different audiences and contexts</li>
                </ul>

                <h3 className={'text-xl py-2'}>Practicing Effective Delivery and Presentation Skills</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing confident and engaging stage presence</li>
                    <li>Using vocal variety and body language to convey authority and enthusiasm</li>
                    <li>Practicing effective pacing and timing</li>
                </ul>

                <h3 className={'text-xl py-2'}>Using Visual Aids and Props Effectively</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the role of visual aids in supporting the message</li>
                    <li>Designing and using effective slides, videos, and props</li>
                    <li>Avoiding distractions and ensuring visual aids enhance the talk</li>
                </ul>

                <h3 className={'text-xl py-2'}>Dealing with Nerves and Performance Anxiety</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the naturalness of nerves and performance anxiety</li>
                    <li>Developing techniques to manage and channel nerves into positive energy</li>
                    <li>Practicing relaxation and focus techniques to stay present and engaged</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our TedTalk Speaking training expertise is designed to help individuals develop the skills and confidence to deliver inspiring and memorable talks that leave a lasting impact on audiences. By crafting a compelling narrative, developing a clear message, and practicing effective delivery and presentation skills, individuals can become confident and effective public speakers.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}