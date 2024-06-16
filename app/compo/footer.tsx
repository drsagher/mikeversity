import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import China from '@/public/countries/china.png';
import Usa from '@/public/countries/united-states.png';
import Aus from '@/public/countries/flag.png';
import Oman from '@/public/countries/world.png';
import Image from "next/image";
import { IoIosCall } from "react-icons/io";

export default function FooterComponent(){
    return(
            <div className="flex flex-col w-full bg-indigo-950">
                <div className={'flex items-start justify-between px-24 py-10 w-full gap-2 '}>
                    <div className={'flex flex-col text-white gap-4'}>
                        <h2 className={'text-xl uppercase text-amber-400'}>CITE OFFICES</h2>
                        <address className={'flex items-center text-md gap-2'}>
                            <Image height={25} src={Usa} alt={''}/>
                            150-02 88th AVE, APT E7, JAMAICA, NY 11432, USA
                        </address>
                        <address className={'flex items-center text-md gap-2'}>
                            <Image height={25} src={Aus} alt={''}/>
                            2 Debbie Circuit Mount Druitt NSW 2770 AUSTRALIA
                        </address>
                        <address className={'flex items-center text-md gap-2'}>
                            <Image height={25} src={China} alt={''}/> 1304, Block E, Pingji Shangyuan Erqi, Xinhe Road
                            No. 2, District, Shenzhen
                        </address>
                        <address className={'flex items-center text-md gap-2'}>
                            <Image height={25} src={Oman} alt={''}/> Ahd Ul Khair private School, East Side of Masjid Aqeel, East Salalah, Dhofar, Oman
                        </address>
                        <div className={'flex flex-col py-10 gap-4'}>
                            <p className={'text-2xl uppercase text-amber-400'}>Contact</p>
                            <p className={'flex items-center gap-2'}> <IoIosCall />
                                USA +1(929) 563-0647</p>
                            <p className={'flex items-center gap-2'}><IoIosCall />
                                OMAN +96872270480</p>
                        </div>

                    </div>
                    <div className={'hidden lg:flex lg:flex-col'}>
                        <h2 className={'text-lg font-bold uppercase text-amber-400'}>ENGLISH SPEAKING COURSES</h2>
                        <ul className={'text-gray-200'}>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Speaking English Language Course For Kindergarten</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>American Sounds Training For Kids (Clear Speech Therapy Training)</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Standard American Accent Elimination Training</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Speaking English For Beginners</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Speaking English For Advanced Learners</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Corporate Standard American Accent Training</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Speaking English Program For Toddlers & Children</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Life Skills Training Program For Children And Youth</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>99 Rules Of Speaking English For Non-Native Speakers</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Advanced Standard American Accent Training Program For CEOs</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>English Communication Skills V-5</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Kinesthetic Language (How To Read Minds)</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Body Language: How To Detect A Liar</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Body Language For Leaders</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Teachers Speaking English Language As Foreign Speakers</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Effective Communication Skills At Workplace And Home</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Public Speaking For Children, Teens And Adults</Link></li>
                        </ul>
                    </div>

                </div>
                <div
                    className="flex justify-between items-center bg-indigo-900 text-white py-6 px-10">
                    <div className="flex justify-start items-center gap-6 py-2 ">
                        <Link target="_blank" href="https://web.facebook.com/MikeLitmanSpeaker" className=" hover:text-amber-600">
                            <FaFacebook size={50}/>
                        </Link>
                        <Link target="_blank" href="https://www.youtube.com/@Mikeversity" className="hover:text-amber-600">
                            <FaYoutube size={50}/>
                        </Link>
                        <Link target="_blank" href="https://chat.whatsapp.com/EALguFiO83nJ4i6fe8m16J"
                              className="hover:text-amber-600">
                            <FaWhatsapp size={50}/>
                        </Link>
                    </div>
                   <p className={'text-white'}>&copy;2024 Mikeversity</p>
                </div>

            </div>

    )
}