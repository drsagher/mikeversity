import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Mike2 from '@/public/mike2.jpg';
import Link from "next/link";
export default function CommunityComponent(){
    return(
        <div className={'grid grid-cols-1 sm:grid-cols-2 items-center justify-center bg-red-500 p-6'}>
            <div className={'flex flex-col justify-between items-center text-center'}>
                    <p className={'text-3xl text-white'}>Welcome to Community</p>
                    <Link href={'https://chat.whatsapp.com/EALguFiO83nJ4i6fe8m16J'}
                          className={' text-white hover:text-amber-400'} target={'_blank'}>
                        <FaWhatsapp size={85} className={'hover:scale-105'}/>
                    </Link>
            </div>
            <div className={'flex items-center justify-center'}>
                <Image src={Mike2} alt={''} height={200} className={'rounded-full border-4 border-gray-50'}/>
            </div>
        </div>
    )
}