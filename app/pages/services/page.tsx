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
        <div className={'flex flex-col items-center justify-center mt-10 mb-16 gap-2'}>
            <div className={"grid sm:grid-cols-3 lg:grid-cols-3 h-auto w-auto "}>
                <Image src={Svc2} alt={''} height={400} className={'w-full h-full'}/>
                <Image src={Svc1} alt={''} height={400} className={'w-full h-full'}/>
                <Image src={Svc3} alt={''} height={400} className={'w-full h-full'}/>
            </div>
            <p className={'flex items-center text-5xl font-bold mt-16 text-red-'}><FcServices size={75}/>
                Services</p>
            <div className={'grid sm:grid-cols-1 lg:grid-cols-2 gap-8 p-4 items-center justify-center'}>
                <div className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser1} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Corporate Services</p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser4} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Workshops and Keynotes </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser7} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Train the Trainers</p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser9} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Consultancy </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser2} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Online Courses </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser5} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Webinars and Virtual Events </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser8} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Global Thought Leadership</p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser11} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Speaking Engagements </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser3} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Curriculum Development </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser6} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Leadership Development </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser9} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Soft Skills Development </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser12} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Life Coaching and Mindfulness </p>
                </div>

                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser13} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Standard American Accent Elimination </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser14} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Moderating and Talk Shows </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser15} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Story Telling </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser16} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>NLP</p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser17} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Clear Speech Therapy</p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser18} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Entrepreneurship </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser19} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Public Speaking</p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser20} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Holistic Healing</p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser21} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Kinesthetic Learning </p>
                </div>
                <div
                    className={'flex flex-row items-center justify-start gap-4 h-36 w-96 bg-red-900 p-2 text-white hover:bg-indigo-900 transition ease-in-out'}>
                    <Image src={Ser22} alt={''} height={50} width={100}/>
                    <p className={'text-xl border-t-2 border-amber-300 pt-4'}>Personal Development</p>
                </div>
            </div>
        </div>
    )
}