import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Meetings(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Managing Effective Meetings</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a specialist in Managing Effective Meetings Training, I help leaders, managers, and teams optimize their meeting productivity, engagement, and outcomes. With extensive experience in meeting facilitation, communication, and collaboration, I provide comprehensive training programs that equip clients with the skills to plan, lead, and participate in meetings that are focused, efficient, and results-driven. My expertise includes meeting design, facilitation techniques, and collaboration strategies, which enable clients to clarify goals, encourage active participation, and drive decisive action. By applying these effective meeting management skills, clients can reduce meeting time, increase team engagement, and achieve their objectives with greater speed and success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Managing Effective Meetings training expertise is designed to equip individuals with the skills and knowledge to plan, facilitate, and participate in productive and efficient meetings. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Meeting Preparation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Defining meeting purpose and objectives</li>
                    <li>Identifying and inviting necessary participants</li>
                    <li>Preparing agendas and meeting materials</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Facilitation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Creating a conducive meeting environment</li>
                    <li>Encouraging active participation and engagement</li>
                    <li>Managing time and staying on track</li>
                </ul>

                <h3 className={'text-xl py-2'}>Communication and Collaboration</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective communication and listening skills</li>
                    <li>Building consensus and resolving conflicts</li>
                    <li>Encouraging collaboration and idea-sharing</li>
                </ul>

                <h3 className={'text-xl py-2'}>Meeting Productivity</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting and achieving meeting goals and outcomes</li>
                    <li>Using technology and tools to enhance meetings</li>
                    <li>Managing meeting minutes and action items</li>
                </ul>

                <h3 className={'text-xl py-2'}>Participation and Engagement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective participation and engagement skills</li>
                    <li>Encouraging open communication and feedback</li>
                    <li>Building trust and rapport with meeting participants</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Managing Effective Meetings training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Leaders and managers seeking to improve meeting productivity</li>
                    <li>Teams and organizations looking to enhance collaboration and communication</li>
                    <li>Anyone seeking to develop their meeting facilitation and participation skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Plan and prepare effective meetings</li>
                    <li>Facilitate and participate in productive meetings</li>
                    <li>Communicate and collaborate effectively</li>
                    <li>Achieve meeting goals and outcomes</li>
                    <li>Develop skills for effective meeting participation and engagement.</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}