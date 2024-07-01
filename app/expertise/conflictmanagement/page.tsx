import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function ConflictManagement(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Conflict Management & Happiness</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a Conflict Management and Happiness Training expert, I empower individuals and organizations to navigate conflicts with ease, build strong relationships, and cultivate a culture of happiness and well-being. With extensive experience in conflict resolution, emotional intelligence, and positive psychology, I provide comprehensive training programs that equip clients with effective communication strategies, emotional regulation techniques, and happiness-building skills. My expertise includes conflict analysis, mediation, and negotiation methods, as well as happiness-enhancing practices such as gratitude, mindfulness, and positive thinking. By applying these skills, clients can resolve conflicts constructively, improve their mental health and resilience, and create a positive and supportive work environment that fosters happiness, productivity, and success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Conflict Management & Happiness training expertise is designed to equip individuals with the skills and knowledge to manage conflicts effectively, build strong relationships, and cultivate happiness in their personal and professional lives. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Understanding Conflict</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Defining and understanding conflict</li>
                    <li>Identifying sources and triggers of conflict</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing active listening and communication skills</li>
                    <li>Using &quot;I&quot; statements and non-judgmental language</li>
                </ul>

                <h3 className={'text-xl py-2'}>Emotional Intelligence</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding and managing one&apos;s own emotions</li>
                    <li>Recognizing and responding to others&apos; emotions</li>
                </ul>

                <h3 className={'text-xl py-2'}>Conflict Resolution Strategies</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and applying effective conflict resolution strategies</li>
                    <li>Using mediation, negotiation, and problem-solving techniques</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Strong Relationships</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing empathy and understanding</li>
                    <li>Fostering trust and respect</li>
                </ul>

                <h3 className={'text-xl py-2'}>Cultivating Happiness</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the science of happiness</li>
                    <li>Developing practices for increasing happiness and well-being</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Conflict Management & Happiness training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to improve their relationships and communication skills</li>
                    <li>Teams and organizations looking to manage conflict and build a positive work culture</li>
                    <li>Anyone seeking to cultivate happiness and well-being in their personal and professional life</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand and manage conflict effectively</li>
                    <li>Communicate effectively and build strong relationships</li>
                    <li>Use emotional intelligence to navigate difficult situations</li>
                    <li>Apply conflict resolution strategies and techniques</li>
                    <li>Cultivate happiness and well-being in their personal and professional life.</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}