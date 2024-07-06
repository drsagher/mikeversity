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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Speaking English for Advanced Learners
                    course</h2>
                <p className={'text-lg leading-relaxed '}>
                    Welcome to our Speaking English for Advanced Learners course, designed to refine your language
                    skills and elevate your communication to a higher level. This comprehensive program is tailored for
                    individuals who have already achieved a high level of proficiency in English and are seeking to
                    further develop their speaking abilities, nuances, and complexities. Through a sophisticated and
                    engaging approach, we will explore advanced vocabulary, nuanced grammar, and sophisticated
                    pronunciation, enabling you to articulate your thoughts with precision, clarity, and confidence. Our
                    expert instructors will guide you through interactive lessons, debates, and discussions on topics
                    such as business, culture, and current events, helping you to refine your tone, style, and delivery.
                    By the end of this course, you will be able to express yourself with greater sophistication,
                    persuasiveness, and impact, making you a more effective communicator in personal and professional
                    settings.
                </p>

                <h3 className={'text-xl py-2'}>Speaking English for Advanced Learners course scope</h3>
                <h3 className={'text-xl py-2'}>Advanced vocabulary expansion</h3>

                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Idiomatic expressions</li>
                    <li>Colloquialisms</li>
                    <li>Technical terminology</li>
                </ul>

                <h3 className={'text-xl py-2'}>Refined grammar and syntax:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Complex sentence structures</li>
                    <li>Subtle tense usage</li>
                    <li>Nuanced clause construction</li>
                </ul>

                <h3 className={'text-xl py-2'}>Sophisticated pronunciation:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Precise intonation</li>
                    <li>Refined rhythm and stress</li>
                    <li>Articulation of subtle sounds</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective communication skills</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Persuasive speaking</li>
                    <li>Confident presentation</li>
                    <li>Engaging storytelling</li>
                </ul>

                <h3 className={'text-xl py-2'}>Advanced conversation topics:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Business and industry</li>
                    <li>Culture and arts</li>
                    <li>Current events and analysis</li>
                </ul>

                <h3 className={'text-xl py-2'}>Debates and discussions</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Critical thinking</li>
                    <li>Argumentation techniques</li>
                    <li>Respectful disagreement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Debates and discussions</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Presentations and feedback</li>
                    <li>Role-plays</li>
                    <li>Group discussions</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this course, learners will be able to</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Express themselves with greater precision and nuance</li>
                    <li>Engage in sophisticated conversations and debates</li>
                    <li>Communicate effectively in personal and professional settings</li>
                    <li>Demonstrate a high level of linguistic competence and confidence.</li>
                </ul>

               <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}