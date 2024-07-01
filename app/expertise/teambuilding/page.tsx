import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function TeamBuilding(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Team Building</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned expert in Team Building Training, I help organizations develop high-performing teams that drive business results and achieve exceptional success. With extensive experience in team dynamics, leadership development, and organizational behavior, I provide comprehensive training programs that foster collaboration, communication, and trust among team members. My expertise includes team assessments, conflict resolution strategies, and effective communication techniques, which enable teams to overcome challenges, leverage strengths, and achieve common goals. By applying these team building strategies, clients can enhance productivity, boost employee engagement, and create a positive work culture, leading to increased job satisfaction, reduced turnover, and improved overall performance                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Team Building training expertise is designed to equip teams with the skills and knowledge to work effectively together, build strong relationships, and achieve common goals. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Team Dynamics</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding team roles and responsibilities</li>
                    <li>Building trust and rapport among team members</li>
                    <li>Developing effective communication and collaboration skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding different communication styles</li>
                    <li>Active listening and feedback skills</li>
                    <li>Conflict resolution and negotiation techniques</li>
                </ul>

                <h3 className={'text-xl py-2'}>Collaborative Leadership</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a shared vision and purpose</li>
                    <li>Empowering team members and delegating tasks</li>
                    <li>Building a positive and inclusive team culture</li>
                </ul>

                <h3 className={'text-xl py-2'}>Problem-Solving and Decision-Making</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing creative problem-solving skills</li>
                    <li>Effective decision-making and critical thinking</li>
                    <li>Building consensus and commitment among team members</li>
                </ul>

                <h3 className={'text-xl py-2'}>Time Management and Productivity</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Prioritizing tasks and setting goals</li>
                    <li>Managing workload and minimizing stress</li>
                    <li>Building a culture of continuous improvement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building High-Performing Teams</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding team strengths and weaknesses</li>
                    <li>Developing a high-performing team culture</li>
                    <li>Building a culture of accountability and ownership</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Team Building training expertise is ideal for</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Teams looking to improve collaboration and communication</li>
                    <li>Leaders seeking to build a high-performing team culture</li>
                    <li>Organizations looking to enhance productivity and efficiency</li>
                    <li>Anyone seeking to develop effective team building skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand team dynamics and build strong relationships</li>
                    <li>Communicate effectively and collaborate productively</li>
                    <li>Lead and build a high-performing team culture</li>
                    <li>Solve problems and make effective decisions</li>
                    <li>Manage time and prioritize tasks effectively</li>
                    <li>Build a culture of continuous improvement and accountability</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}