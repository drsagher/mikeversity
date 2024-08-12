import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Leadership(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Transformational Relationship  </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I possess expertise in Transformational Relationship Training, empowering individuals to build and maintain meaningful, productive, and fulfilling relationships in all aspects of their lives. Through my training programs, participants learn how to communicate effectively, navigate conflicts, and cultivate empathy, trust, and understanding. By mastering the art of transformational relationships, individuals can break down barriers, foster a culture of collaboration and inclusivity, and achieve remarkable results in their personal and professional relationships. My training expertise helps individuals develop the skills and mindset to transform their relationships, leading to enhanced teamwork, leadership, and overall well-being                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Transformational Relationship training expertise is designed to empower individuals and organizations to build and maintain high-performing, transformative relationships that drive personal and professional growth. Our training expertise includes:                </p>

                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building Trust and Rapport</li>
                    <li>Effective Communication and Active Listening</li>
                    <li>Emotional Intelligence and Empathy</li>
                    <li>Conflict Resolution and Negotiation</li>
                    <li>Boundary Setting and Healthy Communication</li>
                    <li>Empowering Others and Building Strong Teams</li>
                    <li>Cultivating a Culture of Feedback and Continuous Improvement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Transformational Relationship training expertise helps individuals and organizations:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Build strong, meaningful relationships that drive success</li>
                    <li>Improve communication and collaboration</li>
                    <li>Increase empathy and understanding</li>
                    <li>Resolve conflicts and improve negotiation skills</li>
                    <li>Develop a culture of feedback and continuous improvement</li>
                    <li>Empower others and build high-performing teams</li>
                </ul>

                <h3 className={'text-xl py-2'}>This training expertise is ideal for individuals and organizations seeking to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Improve relationships and communication</li>
                    <li>Build strong teams and leadership</li>
                    <li>Develop a culture of empathy and understanding</li>
                    <li>Drive personal and professional growth</li>
                    <li>Improve conflict resolution and negotiation skills</li>
                    <li>Empower others and build a high-performing organization</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}