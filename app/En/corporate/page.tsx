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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Corporate Standard American Accent Elimination Training Program</h2>
                <p className={'text-lg leading-relaxed '}>
                    Our Corporate Standard American Accent Elimination training program is a tailored solution designed to help businesses and organizations improve communication effectiveness and enhance professional image. This comprehensive training program focuses on eliminating foreign accents and adopting a neutral, Standard American Accent, enabling employees to communicate clearly and confidently with colleagues, clients, and customers. Our expert trainers will work closely with your team to identify and address specific accent and pronunciation challenges, providing personalized coaching and feedback. By the end of this program, participants will be able to speak with a more neutral and understandable accent, improving collaboration, customer satisfaction, and overall business success. This training is ideal for companies looking to enhance their global presence, expand their market reach, and foster a more inclusive and diverse work environment.
                </p>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}