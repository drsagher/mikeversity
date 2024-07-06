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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Public Speaking for Children, Teens and
                    Adults</h2>
                <p className={'text-lg leading-relaxed '}>
                    Public speaking is the art of communicating ideas, information, and messages to an audience in a
                    clear, concise, and engaging manner. It is a vital skill that enables individuals to convey their
                    thoughts, persuade their listeners, and build connections with others. Effective public speaking
                    involves not only verbal communication but also nonverbal cues, body language, and visual aids.
                    Whether it&apos;s a speech, presentation, or lecture, public speaking has the power to inspire,
                    educate, and motivate others, making it an essential skill for personal and professional success. By
                    developing strong public speaking skills, individuals can overcome fears and anxieties, build
                    confidence, and become more effective communicators in various aspects of life.</p>

                <h3 className={'text-xl py-2'}>The scope of public speaking for children includes:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Confidence Building: Developing self-assurance and self-expression</li>
                    <li>Communication Skills: Learning to articulate thoughts and ideas clearly</li>
                    <li>Creativity: Encouraging imagination and storytelling.</li>
                    <li>Critical Thinking: Organizing thoughts and structuring ideas.</li>
                    <li>Emotional Intelligence: Understanding and managing emotions.</li>
                    <li>Empathy and Understanding: Connecting with audiences and building empathy.</li>
                    <li>Leadership: Inspiring and motivating others.</li>
                    <li>Overcoming Fears: Managing anxiety and stage fright.</li>
                    <li>Performance Skills: Developing stage presence and delivery techniques.</li>
                    <li>Social Skills: Building relationships and connecting with others.</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>
                    By developing public speaking skills, children can enhance their academic, personal, and social
                    development, setting them up for success in all areas of life.
                </p>

                <h3 className={'text-xl py-2'}>The scope of public speaking for teens includes:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Self-Expression: Finding their voice and expressing their thoughts and opinions.</li>
                    <li>Confidence Boost: Developing stage presence and self-assurance.</li>
                    <li>Leadership Development: Learning to inspire and motivate others.</li>
                    <li>College and Career Prep: Enhancing presentation and communication skills.</li>
                    <li>Debate and Argumentation: Learning to articulate and support their opinions.</li>
                    <li>Creative Expression: Exploring storytelling, poetry, and other forms of performance.</li>
                    <li>Community Engagement: Using public speaking to make a positive impact.</li>
                    <li>Building Resilience: Overcoming fears and learning to handle criticism.</li>
                    <li>Collaboration and Teamwork: Developing skills for effective group presentations.</li>
                    <li>Personal Growth: Discovering their passions and interests through public speaking.</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>
                    By developing public speaking skills, teens can enhance their personal, academic, and professional development, preparing them for success in all areas of life.
                </p>

                <h3 className={'text-xl py-2'}>The scope of public speaking for adults includes:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Professional Development: Enhancing career advancement and leadership opportunities.</li>
                    <li>Confident Communication: Developing clear and effective messaging.</li>
                    <li>Presentation Skills: Mastering PowerPoint, pitching, and sales presentations.</li>
                    <li>Networking: Building connections and relationships through public speaking.</li>
                    <li>Personal Branding: Establishing thought leadership and expertise.</li>
                    <li>Storytelling: Crafting compelling narratives to engage and inspire audiences.</li>
                    <li>Crisis Communication: Managing difficult conversations and presentations.</li>
                    <li>Team Management: Developing skills for effective team presentations and collaboration.</li>
                    <li>Public Relations: Building reputation and trust through media appearances and public speaking.</li>
                    <li>Community Engagement: Using public speaking to make a positive impact and drive social change.</li>
                </ul>
                <p className={'text-lg leading-relaxed '}>
                    By developing public speaking skills, adults can enhance their professional reputation, build strong relationships, and achieve their personal and professional goals.</p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}