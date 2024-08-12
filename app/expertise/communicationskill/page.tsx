import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function CommunicationSkill(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Advanced Communication Skills</h2>
                <p className={'text-lg leading-relaxed '}>
                    As an expert in Advanced Communication Skills Training, I empower individuals and teams to communicate with clarity, impact, and influence, fostering strong relationships, building trust, and driving results. With extensive experience in communication psychology, public speaking, and interpersonal dynamics, I provide comprehensive training programs that help clients develop advanced skills in verbal and nonverbal communication, active listening, and conflict resolution. My expertise includes message crafting, audience analysis, and persuasive presentation techniques, which enable clients to articulate their ideas with confidence, navigate complex conversations, and negotiate with success. By applying these advanced communication skills, clients can enhance their personal and professional brand, build stronger relationships, and achieve their goals with greater ease and effectiveness.
                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Advanced Communication Skills training expertise is designed to equip individuals with the skills and knowledge to communicate effectively and efficiently in complex and dynamic environments. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Effective Message Crafting</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing clear and concise messaging</li>
                    <li>Understanding audience and tailoring communication</li>
                    <li>Using storytelling and persuasive techniques</li>
                </ul>

                <h3 className={'text-xl py-2'}>Active Listening and Feedback</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing active listening skills</li>
                    <li>Providing and receiving constructive feedback</li>
                    <li>Using feedback to improve communication</li>
                </ul>

                <h3 className={'text-xl py-2'}>Conflict Resolution and Negotiation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding conflict and negotiation dynamics</li>
                    <li>Developing effective conflict resolution strategies</li>
                    <li>Negotiating and influencing others</li>
                </ul>

                <h3 className={'text-xl py-2'}>Presentation and Public Speaking</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective presentation skills</li>
                    <li>Delivering engaging and persuasive presentations</li>
                    <li>Using visual aids and storytelling techniques</li>
                </ul>

                <h3 className={'text-xl py-2'}>Cross-Cultural and Virtual Communication</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding cultural differences and nuances</li>
                    <li>Communicating effectively in virtual teams and environments</li>
                    <li>Using technology to enhance communication</li>
                </ul>

                <h3 className={'text-xl py-2'}>Emotional Intelligence and Empathy</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing self-awareness and emotional intelligence</li>
                    <li>Understanding and empathizing with others</li>
                    <li>Using emotional intelligence to improve communication</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Advanced Communication Skills training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Leaders and managers seeking to improve communication skills</li>
                    <li>Teams and organizations looking to enhance collaboration and communication</li>
                    <li>Anyone seeking to develop advanced communication skills to succeed in complex environments</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Craft effective messages and communicate with clarity</li>
                    <li>Listen actively and provide constructive feedback</li>
                    <li>Resolve conflicts and negotiate effectively</li>
                    <li>Deliver engaging presentations and public speeches</li>
                    <li>Communicate effectively in cross-cultural and virtual environments</li>
                    <li>Develop emotional intelligence and empathy to improve communication.</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}