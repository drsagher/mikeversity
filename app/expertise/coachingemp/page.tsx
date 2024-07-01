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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Coaching to Improve Employee Performance </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I specialize in Coaching to Improve Employee Performance, helping managers and leaders develop the skills to effectively coach and develop their team members. Through my training programs, participants learn how to create a supportive and goal-oriented coaching environment, conduct productive coaching conversations, and empower employees to take ownership of their performance and development. By mastering the art of coaching, organizations can unlock the full potential of their employees, leading to improved job satisfaction, increased productivity, and enhanced overall performance. My training expertise equips leaders with the tools and confidence to bring out the best in their teams and drive business success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Coaching to Improve Employee Performance training expertise is designed to equip managers and leaders with the skills and knowledge to coach employees to improve their performance, achieve their goals, and reach their full potential. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Coaching Fundamentals</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the coaching mindset and approach</li>
                    <li>Building trust and rapport with employees</li>
                    <li>Setting clear goals and expectations</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Questioning and Listening</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Asking powerful and open-ended questions</li>
                    <li>Active listening and clarifying understanding</li>
                    <li>Encouraging employee self-reflection and awareness</li>
                </ul>

                <h3 className={'text-xl py-2'}>Identifying and Overcoming Barriers</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Recognizing performance barriers and challenges</li>
                    <li>Exploring solutions and strategies</li>
                    <li>Building employee confidence and motivation</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Action Planning</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals</li>
                    <li>Creating action plans and tracking progress</li>
                    <li>Celebrating successes and learning from setbacks</li>
                </ul>

                <h3 className={'text-xl py-2'}>Feedback and Communication</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Delivering effective feedback and constructive criticism</li>
                    <li>Encouraging open communication and transparency</li>
                    <li>Building strong relationships and trust</li>
                </ul>

                <h3 className={'text-xl py-2'}>Creating a Culture of Continuous Improvement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Encouraging employee growth and development</li>
                    <li>Fostering a culture of continuous learning and improvement</li>
                    <li>Empowering employees to take ownership of their performance</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Coaching to Improve Employee Performance training expertise is designed to provide managers and leaders with the skills and knowledge to coach employees to improve their performance, achieve their goals, and reach their full potential. By developing effective coaching skills, managers can build strong relationships, foster a culture of continuous improvement, and drive business success.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}