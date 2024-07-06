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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>99 Rules of Speaking English for Non-Native
                    Speakers</h2>
                <p className={'text-lg leading-relaxed '}>
                    Speaking English proficiently requires a combination of skills, including grammar, vocabulary,
                    pronunciation, and fluency. Primary learners should focus on building a strong foundation in basic
                    sentence structures and vocabulary, while intermediate learners can develop more complex language
                    skills, such as using modal verbs and asking nuanced questions. Advanced learners can refine their
                    skills in persuasive speaking, idiomatic expressions, and subtle pronunciation nuances. Regardless
                    of level, it&apos;s essential to practice active listening, speaking, and body language to become a
                    confident and effective English communicator. With dedication and consistent practice, anyone can
                    improve their English speaking skills and unlock new opportunities in personal and professional
                    spheres.
                    Here are the detailed rules of speaking English from beginners to advanced level:
                </p>

                <h2 className={'text-xl py-2'}>Beginners</h2>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Use simple sentences (e.g., &quot;I am happy.&quot;)</li>
                    <li>Focus on present tense (e.g., &quot;I go to school.&quot;)</li>
                    <li>Use basic vocabulary (e.g., &quot;hello,&quot; &quot;goodbye,&quot; &quot;thank you&quot;)</li>
                    <li>Practice correct pronunciation (e.g., &quot;th&quot; sounds, vowel sounds)</li>
                    <li>Use basic question forms (e.g., &quot;What&apos;s your name?&quot;)</li>
                </ul>

                <h2 className={'text-xl py-2'}>Intermediate</h2>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Use more complex sentences (e.g., &quot;I am going to the store because I need milk.&quot;)</li>
                    <li>Practice using past tense (e.g., &quot;I went to the park yesterday.&quot;)</li>
                    <li>Learn modal verbs (e.g., &quot;can,&quot; &quot;should,&quot; &quot;must&quot;)</li>
                    <li>Develop skills in asking and answering questions (e.g., &quot;What did you do last weekend?&quot;)</li>
                    <li>Focus on improving fluency and pronunciation</li>
                </ul>

                <h2 className={'text-xl py-2'}>Advanced</h2>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Use nuanced vocabulary (e.g., &quot;sophisticated,&quot; &quot;phenomenon&quot;)</li>
                    <li>Master various tenses and verb forms (e.g., present perfect, conditional)</li>
                    <li>Develop persuasive and argumentative skills (e.g., &quot;I believe we should invest in renewable energy.&quot;)</li>
                    <li>Learn idiomatic expressions and colloquialisms (e.g., &quot;break a leg,&quot; &quot;cost an arm and a leg&quot;)</li>
                    <li>Refine pronunciation and intonation (e.g., using stress and pitch to convey meaning)</li>
                </ul>

                <h2 className={'text-xl py-2'}>Common rules for all levels:</h2>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Use correct grammar and sentence structure</li>
                    <li>Practice active listening and speaking</li>
                    <li>Focus on clarity and coherence in speech</li>
                    <li>Use appropriate body language and nonverbal cues</li>
                    <li>Be open to feedback and correction</li>
                </ul>

                <h2 className={'text-xl py-2'}>Additional tips:</h2>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Practice regularly to improve fluency and confidence</li>
                    <li>Listen to native speakers and try to mimic their pronunciation and intonation</li>
                    <li>Read English texts and watch English videos to improve comprehension</li>
                    <li>Speak with native speakers or language exchange partners to improve speaking skills</li>
                    <li>Learn from mistakes and don&apos;t be afraid to ask for help</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}