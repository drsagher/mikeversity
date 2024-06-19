import Image from "next/image";
import Svc1 from '@/public/services/svc1.jpg';
import Svc2 from '@/public/services/svc2.jpg';
import Svc3 from '@/public/services/svc3.jpg';
import { FcServices } from "react-icons/fc";
import Ser1 from '@/public/services/ser1.jpg';
import Ser2 from '@/public/services/ser2.jpg';
import Ser3 from '@/public/services/ser3.jpg';
import Ser4 from '@/public/services/ser4.jpg';
import Ser5 from '@/public/services/ser5.jpg';
import Ser6 from '@/public/services/ser6.jpg';
import Ser7 from '@/public/services/ser7.jpg';
import Ser8 from '@/public/services/ser8.jpg';
import Ser9 from '@/public/services/ser9.jpg';
import Ser11 from '@/public/services/ser11.jpg';
import Ser12 from '@/public/services/ser12.jpg';
import Ser13 from '@/public/services/ser13.jpg';
import Ser14 from '@/public/services/ser14.jpg';
import Ser15 from '@/public/services/ser15.jpg';
import Ser16 from '@/public/services/ser16.jpg';
import Ser17 from '@/public/services/ser17.jpg';
import Ser18 from '@/public/services/ser18.jpg';
import Ser19 from '@/public/services/ser19.jpg';
import Ser20 from '@/public/services/ser20.jpg';
import Ser21 from '@/public/services/ser21.jpg';
import Ser22 from '@/public/services/ser22.jpg';

export default function ServicesPage(){
    return(
        <div className={'flex flex-col items-center justify-center'}>
            <div className={"grid sm:grid-cols-3 lg:grid-cols-3 h-auto w-auto "}>
                <Image src={Svc2} alt={''} height={400} className={'w-full h-full'}/>
                <Image src={Svc1} alt={''} height={400} className={'w-full h-full'}/>
                <Image src={Svc3} alt={''} height={400} className={'w-full h-full'}/>
            </div>
            <p className={'flex flex-col items-center text-3xl font-bold text-red-600 pt-8'}><FcServices size={55}/>
                Services
            </p>
            <div className={'grid grid-cols-1 p-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 pb-8'}>
                <div className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser1} alt={''} className={'w-24 h-24 rounded-lg'} />
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Corporate Services</p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser4} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Workshops and Keynotes </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser7} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Train the Trainers</p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser9} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Consultancy </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser2} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Online Courses </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser5} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Webinars and Virtual Events </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser8} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Global Thought Leadership</p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser11} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Speaking Engagements </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser3} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Curriculum Development </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser6} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Leadership Development </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser9} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Soft Skills Development </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser12} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Life Coaching and Mindfulness </p>
                </div>

                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser13} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Standard American Accent Elimination </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser14} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Moderating and Talk Shows </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser15} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Story Telling </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser16} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>NLP</p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser17} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Clear Speech Therapy</p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser18} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Entrepreneurship </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser19} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Public Speaking</p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser20} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Holistic Healing</p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser21} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Kinesthetic Learning </p>
                </div>
                <div
                    className={'flex p-1 gap-2 items-center justify-start bg-red-900 text-white hover:bg-indigo-900 transition ease-in-out rounded-lg'}>
                    <Image src={Ser22} alt={''} className={'w-24 h-24 rounded-lg'}/>
                    <p className={'text-lg border-t-2 border-amber-300 pt-4'}>Personal Development</p>
                </div>
            </div>
        </div>
    )
}