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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>English Communication Skills V-5</h2>
                <p className={'text-lg leading-relaxed '}>
                    English communication skills are essential for effective interaction in personal and professional settings. They encompass verbal and non-verbal techniques, including clear articulation, active listening, persuasive language, appropriate tone and pitch, and mindful body language. Developing strong English communication skills enables individuals to convey ideas clearly, build strong relationships, negotiate with confidence, and deliver impactful presentations. Moreover, they facilitate cross-cultural understanding, foster collaboration, and enhance professional reputation. By honing English communication skills, individuals can unlock new opportunities, achieve greater success, and navigate the global landscape with confidence and poise.
                    Welcome to our English Communication Skills program!

                    Effective communication is the foundation of success in personal and professional spheres. Our program is designed to help you develop the skills you need to communicate confidently and effectively in English.

                </p>

                <p className={'text-lg leading-relaxed '}>Through our comprehensive training, you will learn to:
                </p>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Articulate your thoughts and ideas clearly</li>
                    <li>Engage in productive conversations and negotiations</li>
                    <li>Build strong relationships with colleagues and clients</li>
                    <li>Deliver compelling presentations and speeches</li>
                    <li>Write effective emails, reports, and proposals</li>
                    <li>Understand and navigate cultural nuances in communication</li>
                </ul>
           <p className={'text-lg leading-relaxed '}>Our program focuses on practical skills development, including:
                </p>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Verbal and non-verbal communication techniques</li>
                    <li>Active listening and feedback</li>
                    <li>Clarity, concision, and persuasive language</li>
                    <li>Tone, pitch, and body language</li>
                    <li>Cross-cultural communication and sensitivity</li>
                </ul>

                <p className={'text-lg leading-relaxed '}>By improving your English communication skills, you will:
                </p>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Enhance your professional reputation and credibility</li>
                    <li>Expand your business and networking opportunities</li>
                    <li>Strengthen relationships and build trust</li>
                    <li>Achieve greater success in your personal and professional life</li>
                </ul>


                <p className={'text-lg leading-relaxed '}>
                    Join us to unlock your full potential and become a confident, effective communicator in English!
                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}