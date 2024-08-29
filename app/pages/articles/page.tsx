import Link from "next/link";
import { FaHandPointRight } from "react-icons/fa";

export default function Articles(){
    return(
        <div className={'container mx-auto min-h-screen py-10 bg-gray-100 p-6'}>
            <h2 className={'text-3xl font-bold text-blue-800'}>Mike`s Articles</h2>
            <div className={'flex flex-col py-10'}>
                <Link href={'/pages/articles/globalthoughtleadership'} target={'_blank'} className={'flex items-center gap-2 text-red-800 font-bold hover:text-blue-500'}>
                    <FaHandPointRight />
                    GLOBAL THOUGHT LEADERSHIP</Link>
            </div>

        </div>
    )
}