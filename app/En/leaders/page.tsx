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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Body Language for Leaders</h2>
                <p className={'text-lg leading-relaxed '}>
                    The Body Language of Leaders program is a comprehensive training designed to help leaders develop a strong, confident, and effective nonverbal presence. The program focuses on the following key areas:
                </p>


                <h3 className={'text-xl py-2'}>I. Self-Awareness:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying personal body language habits</li>
                    <li>Understanding how body language impacts leadership presence</li>
                </ul>

                <h3 className={'text-xl py-2'}>II. Confident Posture:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Maintaining good posture and poise</li>
                    <li>Projecting confidence through stance and movement</li>
                </ul>
                <h3 className={'text-xl py-2'}>III. Engaging Facial Expressions:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a warm and approachable smile</li>
                    <li>Using appropriate facial expressions to convey emotions</li>
                </ul>

                <h3 className={'text-xl py-2'}>IV. Effective Eye Contact:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building trust through sustained eye contact</li>
                    <li>Using eye contact to engage and persuade others</li>
                </ul>

                <h3 className={'text-xl py-2'}>V. Powerful Gestures:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Using purposeful gestures to emphasize points</li>
                    <li>Avoiding distracting or defensive gestures</li>
                </ul>
                <h3 className={'text-xl py-2'}>VI. Proximity and Personal Space:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the impact of proximity on communication</li>
                    <li>Respecting personal space and boundaries</li>
                </ul>
                <h3 className={'text-xl py-2'}>VII. Leadership Presence:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Exuding confidence and authority</li>
                    <li>Inspiring trust and respect through body language</li>
                </ul>
                <h3 className={'text-xl py-2'}>VIII. Emotional Intelligence:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Recognizing and managing one&apos;s emotions</li>
                    <li>Empathizing with others through nonverbal cues</li>
                </ul>
                <h3 className={'text-xl py-2'}>IX. Cross-Cultural Awareness:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding cultural differences in body language</li>
                    <li>Adapting body language to international settings</li>
                </ul>
                <h3 className={'text-xl py-2'}>X. Practice and Feedback:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Practicing effective body language in simulations</li>
                    <li>Receiving feedback and coaching from experts</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>
                    By mastering the body language of leaders, participants will enhance their executive presence, build stronger relationships, and achieve greater success in their personal and professional lives.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}