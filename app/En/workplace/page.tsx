import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Accent(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack size={35}/></Link>
                <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                    ENGLISH SPEAKING COURSES
                </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Effective Communication Skills at Workplace and
                    Home</h2>
                <p className={'text-lg leading-relaxed '}>
                    Effective communication skills are the backbone of success in any workplace. Clear, concise, and
                    respectful communication is essential for building trust, preventing misunderstandings, and
                    fostering a positive and productive work environment. By developing strong communication skills,
                    employees can effectively convey ideas, collaborate with colleagues, and build strong relationships
                    with clients and customers. In today&apos;s fast-paced and diverse workplace, effective
                    communication is crucial for resolving conflicts, adapting to change, and driving business results.
                    By learning the skills to communicate effectively, employees can enhance their professional
                    reputation, increase their influence, and contribute to the overall success of the
                    organization. </p>

                <h3 className={'text-xl py-2'}>The scope of effective communication skills at the workplace
                    includes: </h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Verbal Communication: Clear and concise expression of ideas, thoughts, and opinions.</li>
                    <li>Written Communication: Effective email, report, and document writing skills</li>
                    <li>Presentation Skills: Confident and engaging public speaking and presentation techniques.</li>
                    <li>Interpersonal Communication: Building strong relationships with colleagues, clients, and
                        customers.
                    </li>
                    <li>Conflict Resolution: Constructive management of disagreements and disputes</li>
                    <li>Active Listening: Attentive and empathetic hearing of others&apos; perspectives</li>
                    <li>Feedback and Criticism: Giving and receiving constructive feedback</li>
                    <li>Team Collaboration: Effective communication for team building and project management</li>
                    <li>Leadership Communication: Inspiring and motivating others through vision and direction</li>
                    <li>Cross-Cultural Communication: Sensitivity and awareness in communicating with diverse
                        cultures.
                    </li>
                    <li>Technology-Enabled Communication: Effective use of digital tools, email, and social media.</li>
                    <li>Crisis Communication: Managing communication during times of crisis or change</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>
                    By mastering these aspects, individuals can enhance their professional reputation, build strong
                    relationships, and contribute to the success of the organization.
                    Effective communication skills are the foundation of strong and healthy relationships at home.
                    Clear, empathetic, and respectful communication is essential for building trust, understanding, and
                    connection with family members, partners, and loved ones. By developing strong communication skills,
                    individuals can express their needs and feelings, resolve conflicts, and foster a positive and
                    supportive home environment. In today&apos;s fast-paced and often busy family life, effective
                    communication is crucial for strengthening bonds, promoting understanding, and creating a sense of
                    belonging. By learning the skills to communicate effectively at home, individuals can enhance their
                    relationships, reduce conflict, and create a more loving and supportive family dynamic.
                </p>

                <h3 className={'text-xl py-2'}>The scope of effective communication skills at home includes:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Verbal Communication: Clear and respectful expression of thoughts, feelings, and needs.</li>
                    <li>Active Listening: Empathetic and attentive hearing of others&apos; perspectives.</li>
                    <li>Conflict Resolution: Constructive management of disagreements and disputes.</li>
                    <li>Emotional Intelligence: Recognition and management of one&apos;s own emotions and those of others. </li>
                    <li>Nonverbal Communication: Awareness and use of body language, tone, and facial expressions.</li>
                    <li>Empathy and Understanding: Building connections and fostering a supportive environment.</li>
                    <li>Problem-Solving: Collaborative approach to addressing family challenges.</li>
                    <li>Boundary Setting: Establishing and respecting individual and collective limits.</li>
                    <li>Technology Management: Healthy use of digital devices and social media in the home.</li>
                    <li>Cultural Awareness: Sensitivity and appreciation for diverse backgrounds and values.</li>
                </ul>
                <p className={'text-lg leading-relaxed '}>
                    By mastering these aspects, individuals can create a more harmonious, supportive, and loving home environment.</p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}