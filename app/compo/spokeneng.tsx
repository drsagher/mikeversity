import Student from '@//public/student.jpg';
import Image from "next/image";
import Link from "next/link";
import { LuBadgeInfo } from "react-icons/lu";

export default function SpokenEnglishComponent(){
    return(
        <div className={'flex flex-row items-center justify-center w-[70%] mx-auto gap-8 py-16'}>
            <Image src={Student} alt={''} height={400} className={'rounded-lg shadow-xl'}/>
            <div className={'flex flex-col justify-center items-start px-6 gap-10'}>
                <p className={'text-3xl font-bold text-indigo-900 underline underline-offset-8'}>Cambridge Spoken English Program</p>
                <p className={'leading-8 text-red-950 font-bold'}>
                    Start speaking English with confidence! Our Level 1 program is designed for beginners who want to learn basic English skills for everyday communication. You&apos;ll learn essential vocabulary, phrases, and grammar to introduce yourself, ask for directions, and engage in simple conversations. Interactive lessons and fun activities will help you build a strong foundation in English and make new friends along the way.
                </p>
                <Link href={''} className={'flex items-center p-2 gap-2 bg-indigo-700 rounded-md w-32 hover:bg-indigo-800 text-white '}><LuBadgeInfo />
                    More Info</Link>
            </div>
        </div>
    )
}