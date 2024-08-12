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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Active Listening </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I specialize in Active Listening, equipping individuals with the skills to truly hear, understand, and connect with others. Through my training programs, participants learn how to fully focus on the speaker, ask clarifying questions, and paraphrase and summarize to ensure accurate understanding. By mastering Active Listening, individuals can build trust and rapport, resolve conflicts, and foster deeper relationships with colleagues, clients, and customers. My training expertise helps individuals develop the essential skills to listen effectively, respond appropriately, and communicate with impact, leading to enhanced collaboration, productivity, and success in both personal and professional settings.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Active Listening training expertise is designed to equip individuals with the skills and techniques to listen effectively, build strong relationships, and communicate with clarity and precision. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Effective Listening Skills</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Giving full attention to the speaker</li>
                    <li>Avoiding distractions and minimizing interruptions</li>
                    <li>Maintaining eye contact and nonverbal engagement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Verbal and Nonverbal Communication</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Using verbal and nonverbal cues to show engagement</li>
                    <li>Paraphrasing and summarizing to ensure understanding</li>
                    <li>Asking open-ended questions to encourage sharing</li>
                </ul>

                <h3 className={'text-xl py-2'}>Emotional Intelligence and Empathy</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Recognizing and understanding emotions in self and others</li>
                    <li>Developing empathy and compassion</li>
                    <li>Managing emotions to create a safe and supportive environment</li>
                </ul>

                <h3 className={'text-xl py-2'}>Clarifying and Confirming Understanding</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Using reflective listening to ensure accuracy</li>
                    <li>Seeking clarification and confirmation</li>
                    <li>Avoiding assumptions and misunderstandings</li>
                </ul>

                <h3 className={'text-xl py-2'}>Managing Conflict and Difficult Conversations</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Using active listening to de-escalate conflicts</li>
                    <li>Remaining calm and composed in challenging situations</li>
                    <li>Fostering open and honest communication</li>
                </ul>

                <h3 className={'text-xl py-2'}>This training expertise is ideal for individuals who:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Want to improve communication skills</li>
                    <li>Need to build strong relationships with colleagues, clients, or customers</li>
                    <li>Want to manage conflict and difficult conversations effectively</li>
                    <li>Need to develop emotional intelligence and empathy</li>
                    <li>Want to become a better communicator and listener.</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Active Listening training expertise is designed to provide individuals with the skills and knowledge to listen effectively, build strong relationships, and communicate with clarity and precision. By developing effective listening skills, emotional intelligence, and empathy, individuals can improve communication, build trust, and resolve conflicts.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}