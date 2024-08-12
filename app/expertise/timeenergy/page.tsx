import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function TimeAndEnergy(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Time and Energy Management </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a leading expert in Time and Energy Management Training, I empower individuals and organizations to maximize their productivity, efficiency, and overall well-being. With extensive experience in productivity coaching, goal setting, and workflow optimization, I provide comprehensive training programs that teach clients how to prioritize tasks, manage distractions, and maintain a healthy work-life balance. My expertise includes time management strategies, energy management techniques, and habit formation coaching, which enable individuals to optimize their daily routines, reduce stress, and increase their energy levels. By applying these strategies, clients can achieve more in less time, reduce burnout, and enjoy a greater sense of control, freedom, and fulfillment in their personal and professional lives.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Time and Energy Management training expertise is designed to equip individuals with the skills and knowledge to optimize their productivity, prioritize tasks, and manage their energy levels to achieve their goals. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Time Management</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the importance of time management</li>
                    <li>Setting clear goals and priorities</li>
                    <li>Developing effective scheduling and planning skills</li>
                    <li>Learning how to say &quot;no&quot; and set boundaries</li>
                    <li>Managing distractions and minimizing procrastination</li>
                </ul>

                <h3 className={'text-xl py-2'}>Energy Management</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the importance of energy management</li>
                    <li>Identifying and managing energy drains</li>
                    <li>Developing strategies to boost energy levels</li>
                    <li>Learning how to prioritize self-care and well-being</li>
                    <li>Managing stress and burnout</li>
                </ul>

                <h3 className={'text-xl py-2'}>Productivity and Efficiency</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective habits and routines</li>
                    <li>Learning how to prioritize tasks and focus on high-impact activities</li>
                    <li>Understanding how to use technology to enhance productivity</li>
                    <li>Developing effective meeting and communication skills</li>
                    <li>Learning how to delegate and outsource tasks</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting and achieving long-term and short-term goals</li>
                    <li>Developing a success mindset and overcoming obstacles</li>
                    <li>Learning how to create a vision board and manifest goals</li>
                    <li>Understanding how to track progress and celebrate successes</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Time and Energy Management training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to optimize their productivity and achieve their goals</li>
                    <li>Professionals looking to manage their time and energy more effectively</li>
                    <li>Entrepreneurs and business leaders seeking to maximize their output</li>
                    <li>Anyone seeking to improve their work-life balance and overall well-being</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Effectively manage their time and energy</li>
                    <li>Prioritize tasks and focus on high-impact activities</li>
                    <li>Develop effective habits and routines</li>
                    <li>Achieve their goals and celebrate successes</li>
                    <li>Improve their overall productivity and well-being</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}