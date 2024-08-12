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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Corporate Soft Skills Development </h2>
                <p className={'text-lg leading-relaxed '}>
                    Soft skills are the essential non-technical skills that enable individuals to effectively interact, communicate, and collaborate with others in a professional setting. These skills, which include traits like empathy, adaptability, time management, and problem-solving, are crucial for building strong relationships, resolving conflicts, and achieving personal and organizational goals. Soft skills are what distinguish exceptional employees, leaders, and team players from others, and are highly valued by employers across industries. By developing soft skills like active listening, clear communication, and emotional intelligence, individuals can enhance their ability to work well with others, navigate complex social situations, and drive success in their careers and personal lives. In today&apos;s fast-paced and rapidly changing work environment, soft skills are the key to staying adaptable, innovative, and ahead of the curve.
                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Corporate Soft Skills Development training expertise is designed to enhance the productivity, efficiency, and success of organizations by improving the soft skills of their employees. Our training expertise includes:
                </p>
                <h3 className={'text-xl py-2'}>Communication Skills</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Effective verbal and written communication</li>
                    <li>Active listening and clear articulation of ideas</li>
                    <li>Conflict resolution and negotiation techniques</li>
                </ul>

                <h3 className={'text-xl py-2'}>Leadership and Management</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Strategic leadership and vision development</li>
                    <li>Effective management techniques and delegation</li>
                    <li>Building and leading high-performing teams</li>
                </ul>

                <h3 className={'text-xl py-2'}>Time Management and Productivity</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Prioritizing tasks and managing time effectively</li>
                    <li>Goal-setting and achievement strategies</li>
                    <li>Overcoming procrastination and staying motivated</li>
                </ul>

                <h3 className={'text-xl py-2'}>Team Building and Collaboration</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building and maintaining effective teams</li>
                    <li>Collaborative problem-solving and decision-making</li>
                    <li>Cross-functional communication and stakeholder management</li>
                </ul>

                <h3 className={'text-xl py-2'}>Emotional Intelligence and Empathy</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Self-awareness and emotional regulation</li>
                    <li>Understanding and managing emotions in others</li>
                    <li>Building empathy and strong relationships</li>
                </ul>

                <h3 className={'text-xl py-2'}>Adaptability and Resilience</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Coping with change and uncertainty</li>
                    <li>Developing a growth mindset and learning from failure</li>
                    <li>Building resilience and bouncing back from setbacks</li>
                </ul>

                <h3 className={'text-xl py-2'}>Customer Service and Client Relations</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Delivering exceptional customer service</li>
                    <li>Building and maintaining strong client relationships</li>
                    <li>Understanding customer needs and expectations</li>
                </ul>

                <h3 className={'text-xl py-2'}>Presentation and Public Speaking</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Effective presentation design and delivery</li>
                    <li>Confident public speaking and storytelling</li>
                    <li>Engaging and persuading audiences</li>
                </ul>

                <h3 className={'text-xl py-2'}>Interpersonal and Conflict Resolution Skills</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building and maintaining effective relationships</li>
                    <li>Understanding and managing conflict</li>
                    <li>Negotiation and mediation techniques</li>
                </ul>


                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Corporate Soft Skills Development training expertise is designed to equip employees with the essential skills needed to succeed in today&apos;s fast-paced and competitive business environment. By improving soft skills, organizations can increase productivity, enhance employee engagement, and drive business results.
                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}