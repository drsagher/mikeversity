import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function BuildingChangeTrust(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Dealing with Change, Building Trust and Respect </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned expert in Dealing with Change, Building Trust and Respect Training, I help individuals and organizations navigate the complexities of transformation and foster a culture of trust, respect, and collaboration. With extensive experience in organizational development, leadership coaching, and team dynamics, I provide comprehensive training programs that equip clients with the skills to adapt to change, communicate effectively, and build strong relationships. My expertise includes change management strategies, emotional intelligence, and conflict resolution techniques, which enable individuals to navigate uncertainty, build trust, and cultivate a culture of respect and inclusivity. By applying these strategies, clients can drive business results, enhance team performance, and create a positive work environment, leading to increased productivity, employee engagement, and long-term success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Dealing with Change, Building Trust and Respect training expertise is designed to equip individuals with the skills and knowledge to navigate change, build strong relationships, and foster a culture of trust and respect in their personal and professional lives. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Dealing with Change</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the impact of change on individuals and teams</li>
                    <li>Developing strategies to cope with change and uncertainty</li>
                    <li>Building resilience and adaptability in the face of change</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Trust</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the importance of trust in relationships and teams</li>
                    <li>Developing strategies to build and maintain trust</li>
                    <li>Learning how to repair trust when it&apos;s been broken</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Respect</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the importance of respect in relationships and teams</li>
                    <li>Developing strategies to build and maintain respect</li>
                    <li>Learning how to communicate effectively and assertively</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing active listening skills</li>
                    <li>Learning how to communicate assertively and effectively</li>
                    <li>Understanding how to navigate difficult conversations</li>
                </ul>

                <h3 className={'text-xl py-2'}>Conflict Resolution</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the impact of conflict on relationships and teams</li>
                    <li>Developing strategies to resolve conflict effectively</li>
                    <li>Learning how to navigate difficult situations and build stronger relationships</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Dealing with Change, Building Trust and Respect training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to build stronger relationships and navigate change</li>
                    <li>Teams seeking to improve communication and collaboration</li>
                    <li>Leaders seeking to build a culture of trust and respect in their organization</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Navigate change and uncertainty with confidence</li>
                    <li>Build and maintain trust and respect in their relationships and teams</li>
                    <li>Communicate effectively and assertively</li>
                    <li>Resolve conflict and build stronger relationships</li>
                    <li>Foster a culture of trust and respect in their organization</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}