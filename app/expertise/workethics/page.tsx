import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function WorkEthics(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Mastering Corporate Work Ethics Development</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned expert in Mastering Corporate Work Ethics Development Training, I help organizations build a culture of integrity, accountability, and ethical excellence, empowering employees to make informed decisions and drive business success with integrity. With extensive experience in corporate ethics, compliance, and leadership development, I provide comprehensive training programs that equip employees with the knowledge, skills, and values to navigate complex ethical dilemmas, prioritize stakeholder interests, and uphold the highest standards of professionalism. My expertise includes ethics framework development, compliance training, and cultural transformation strategies, which enable organizations to foster a positive work environment, maintain a strong reputation, and achieve long-term sustainability and success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Mastering Corporate Work Ethics development training expertise is designed to equip employees with the knowledge, skills, and values to excel in a corporate environment. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Understanding Corporate Culture</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Defining and understanding the organization&apos;s culture and values</li>
                    <li>Aligning personal values with corporate culture</li>
                </ul>

                <h3 className={'text-xl py-2'}>Professionalism and Work Ethic</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a strong work ethic and sense of responsibility</li>
                    <li>Understanding the importance of punctuality, attendance, and accountability</li>
                </ul>

                <h3 className={'text-xl py-2'}>Communication and Teamwork</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Effective communication and collaboration skills</li>
                    <li>Building strong relationships with colleagues and stakeholders</li>
                </ul>

                <h3 className={'text-xl py-2'}>Integrity and Ethics</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding and applying ethical principles and standards</li>
                    <li>Recognizing and addressing ethical dilemmas and conflicts</li>
                </ul>

                <h3 className={'text-xl py-2'}>Time Management and Productivity</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Prioritizing tasks and managing time effectively</li>
                    <li>Maximizing productivity and meeting deadlines</li>
                </ul>

                <h3 className={'text-xl py-2'}>Adaptability and Continuous Learning</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Embracing change and adapting to new situations</li>
                    <li>Committing to ongoing learning and professional development</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Mastering Corporate Work Ethics development training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>New employees seeking to understand corporate culture and expectations</li>
                    <li>Existing employees looking to enhance their professional skills and values</li>
                    <li>Organizations seeking to strengthen their corporate culture and ethics</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand and align with corporate culture and values</li>
                    <li>Demonstrate professionalism, integrity, and a strong work ethic</li>
                    <li>Communicate effectively and collaborate with others</li>
                    <li>Manage time and prioritize tasks effectively</li>
                    <li>Embrace change and commit to ongoing learning and development</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}