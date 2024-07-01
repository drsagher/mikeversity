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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Motivating and Encouraging Employees </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I possess expertise in Motivating and Encouraging Employees, helping managers and leaders develop the skills to inspire and motivate their teams to achieve exceptional results. Through my training programs, participants learn how to create a positive work environment, recognize and reward outstanding performance, and foster a culture of appreciation and gratitude. By mastering the art of motivation and encouragement, organizations can boost employee engagement, increase productivity, and reduce turnover. My training expertise equips leaders with the strategies and techniques to bring out the best in their employees, drive business success, and create a workplace culture that thrives on motivation, enthusiasm, and collaboration                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Motivating and Encouraging Employees training expertise is designed to equip managers and leaders with the skills and knowledge to motivate and encourage employees to achieve their full potential, drive business results, and build a positive work culture. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Understanding Employee Motivation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and understanding individual motivations and drivers</li>
                    <li>Recognizing the impact of motivation on employee engagement and performance</li>
                </ul>

                <h3 className={'text-xl py-2'}>Creating a Positive Work Environment</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building a culture of recognition and appreciation</li>
                    <li>Fostering open communication and transparency</li>
                    <li>Encouraging teamwork and collaboration</li>
                </ul>

                <h3 className={'text-xl py-2'}>Setting Clear Goals and Expectations</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals</li>
                    <li>Providing regular feedback and coaching</li>
                    <li>Encouraging employee ownership and accountability</li>
                </ul>

                <h3 className={'text-xl py-2'}>Rewarding and Recognizing Employees</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective reward and recognition programs</li>
                    <li>Celebrating employee achievements and milestones</li>
                    <li>Providing opportunities for growth and development</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Employee Confidence and Self-Esteem</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Providing positive feedback and encouragement</li>
                    <li>Empowering employees to take ownership of their work</li>
                    <li>Fostering a culture of continuous learning and improvement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Managing and Resolving Conflict</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the impact of conflict on employee motivation</li>
                    <li>Developing effective conflict resolution skills</li>
                    <li>Fostering a culture of respect and inclusivity</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Motivating and Encouraging Employees training expertise is designed to provide managers and leaders with the skills and knowledge to motivate and encourage employees to achieve their full potential, drive business results, and build a positive work culture. By developing effective motivation and encouragement strategies, managers can build a high-performing team, increase employee engagement, and drive business success.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}