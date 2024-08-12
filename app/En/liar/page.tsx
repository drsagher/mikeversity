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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Body Language: How To Detect A Liar</h2>
                <p className={'text-lg leading-relaxed '}>
                    Body Language is a subtle yet powerful form of communication that can greatly impact our
                    interactions and relationships. Through facial expressions, eye contact, posture, gestures, and
                    other nonverbal cues, we convey our emotions, intentions, and personality traits, often
                    unconsciously. By becoming more aware of our own Body Language and learning to read the signals of
                    others, we can enhance our communication skills, build trust and rapport, and even gain a
                    competitive edge in personal and professional settings. Moreover, understanding Body Language can
                    also help us navigate cross-cultural interactions and avoid misunderstandings, making it a valuable
                    tool in our increasingly globalized world.</p>

                <p className={'text-lg leading-relaxed '}>
                    Detecting a liar can be a challenging task, but there are certain behavioral and verbal cues that can indicate deception. Liars often exhibit nonverbal behaviors such as avoiding eye contact, fidgeting, crossing their arms or legs, and micro-expressions of fear or guilt. They may also use more words than necessary to convince others, repeat themselves, or use vague language to avoid direct answers. Additionally, liars may exhibit inconsistencies in their story, contradict themselves, or use emotional manipulation to deflect attention. Verbal cues include using words or phrases that distance themselves from the truth, such as &quot;I think&quot; or &quot;I believe,&quot; or using vague language to avoid direct answers. By paying attention to these cues and trusting your instincts, you can increase your chances of detecting a liar. However, it&apos;s important to remember that these signs don&apos;t necessarily mean someone is lying, and it&apos;s always best to gather more information and context before making any conclusions.
                </p>
                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                        <IoIosArrowRoundBack size={35}/>
                    </Link>
            </div>

        </div>
)
}