import C1 from '@/public/CHAIRMAN/c1.jpg';
import C2 from '@/public/CHAIRMAN/c2.jpg';
import C3 from '@/public/CHAIRMAN/c3.jpg';
import Image from "next/image";
import x1 from '@/public/NEXSKILLS/x1.jpg'
import x2 from '@/public/NEXSKILLS/x2.jpg'
import x3 from '@/public/NEXSKILLS/x3.jpg'
import y1 from '@/public/BIYUN/y1.jpg'
import y3 from '@/public/BIYUN/y3.jpg'
import y5 from '@/public/BIYUN/y5.jpg'
import z1 from '@/public/CHIEF/z1.jpg'
import z2 from '@/public/CHIEF/z2.jpg'
import z3 from '@/public/CHIEF/z3.jpg'
import z4 from '@/public/CHIEF/z4.jpg'
import z5 from '@/public/CHIEF/z5.jpg'
import z6 from '@/public/CHIEF/z6.jpg'
import Ba1 from '@/public/ALFALAH/ba1.jpg'
import Ba2 from '@/public/ALFALAH/ba2.jpg'
import Ba3 from '@/public/ALFALAH/ba3.jpg'
import Ba4 from '@/public/ALFALAH/ba4.jpg'
import Nu1 from '@/public/NU/nu1.jpg'
import Nu2 from '@/public/NU/nu2.jpg'
import Nu3 from '@/public/NU/nu3.jpg'
import Nu4 from '@/public/NU/nu4.jpg'
import Nu5 from '@/public/NU/nu5.jpg'
import Nu6 from '@/public/NU/nu6.jpg'
import Nu7 from '@/public/NU/nu7.jpg'
import Pm1 from '@/public/PIMS/pm1.jpg'
import Pm2 from '@/public/PIMS/pm2.jpg'
import Pm3 from '@/public/PIMS/pm3.jpg'
import Pm4 from '@/public/PIMS/pm4.jpg'
import Wep1 from '@/public/WEP/wep1.jpg'
import Wep2 from '@/public/WEP/wep2.jpg'
import Sae1 from '@/public/SAE/sae1.jpg'
import Sae2 from '@/public/SAE/sae2.jpg'
import Saat1 from '@/public/SAAT/saat1.jpg'
import Saat2 from '@/public/SAAT/saat2.jpg'
import Saat3 from '@/public/SAAT/saat3.jpg'
import Sqo1 from '@/public/SQO/sqo1.jpg'
import Sqo2 from '@/public/SQO/sqo2.jpg'
import Sqo3 from '@/public/SQO/sqo3.jpg'
import Sqo4 from '@/public/SQO/sqo4.jpg'
import Sqo5 from '@/public/SQO/sqo5.jpg'
import Sqo6 from '@/public/SQO/sqo6.jpg'
import Sqo7 from '@/public/SQO/sqo7.jpg'
import Sqo8 from '@/public/SQO/sqo8.jpg'
import Sqo9 from '@/public/SQO/sqo9.jpg'
import { GrGallery } from "react-icons/gr";

export default function GalleryPage(){
    return(
        <div className={'container mx-auto bg-gray-50 p-8'}>
            <p className={'flex items-center gap-4 text-5xl font-bold uppercase py-6 text-red-600'}><GrGallery size={60}/>
                Gallery</p>
            <div className={'flex flex-col items-center justify-center'}>
                <p className={'text-xl font-bold text-indigo-800 uppercase'}>CHAIRMAN AND SPEAKER conference MYEP AT QAU</p>
                <div className={'grid grid-cols-3 justify-center items-center gap-8 py-6'}>
                    <Image src={C1} alt={''} height={800} width={600} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={C2} alt={''} height={800} width={600} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={C3} alt={''} height={800} width={600} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-center'}>
                <p className={'text-xl font-bold py-6 text-indigo-800'}>NEXSKILLS EMPLOYEES TRAINING ON WORK ETHICS</p>
                <div className={'grid grid-cols-3 justify-center items-center gap-8'}>
                    <Image src={x2} alt={''} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={x1} alt={''} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={x3} alt={''} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'text-xl font-bold py-6 text-indigo-800'}>BIYUN INTERNATIONAL AIRPORT CHINA , TRAINING ON SALES
                    COMMUNICATION</p>
                <div className={'grid grid-cols-3 justify-center items-center gap-8'}>
                    <Image src={y3} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={y1} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={y5} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                </div>
            </div>
            <div className={'flex flex-col items-center justify-center '}>
                <p className={'text-xl font-bold py-6 uppercase text-indigo-800'}>Sultan Qaboos Sports Complex Salalah, Oman</p>
                <div className={'grid grid-cols-3 justify-center items-center gap-8'}>

                    <Image src={Sqo3} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Sqo5} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={Sqo6} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Sqo7} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={Sqo8} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Sqo9} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={Sqo2} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Sqo4} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={Sqo1} alt={''} height={600} width={800} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>

                </div>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'text-xl font-bold py-6 text-indigo-800'}>CHIEF GUEST AT DR. LYN WESTMAN EVENT AT JOHN C MAXWELL</p>
                <div className={'grid grid-cols-3 justify-center items-center gap-8'}>
                    <Image src={z1} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={z2} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x2'}/>
                    <Image src={z3} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={z4} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={z5} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={z6} alt={''} height={700} width={650} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'text-xl font-bold py-6 text-indigo-800 uppercase'}>Bank Alfalah Ltd</p>
                <div className={'grid grid-cols-2 justify-center items-center gap-8'}>
                    <Image src={Ba1} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Ba2} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Ba3} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Ba4} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'text-xl font-bold py-6 uppercase text-indigo-800'}>Numl University Seminar on Success Mindset</p>
                <div className={'flex items-center justify-center gap-8'}>
                    <div className={'grid grid-cols-1 justify-center items-center'}>
                        <Image src={Nu1} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    </div>
                    <div className={'grid grid-cols-2 justify-center items-center gap-8'}>
                        <Image src={Nu2} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                        <Image src={Nu3} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                        <Image src={Nu4} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                        <Image src={Nu5} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                        <Image src={Nu6} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                        <Image src={Nu7} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>

                    </div>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'text-xl font-bold py-6 text-indigo-800 uppercase'}>PMEA Award at PIMS</p>
                <div className={'grid grid-cols-2 justify-center items-center gap-8'}>
                    <Image src={Pm1} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Pm2} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={Pm3} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Pm4} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                <p className={'text-xl font-bold py-6 text-indigo-800 uppercase'}>Women in Entrepreneurship in Pakistan</p>
                <div className={'grid grid-cols-2 justify-center items-center gap-8'}>
                    <Image src={Wep1} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Wep2} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                </div>
            </div>
            <div className={'flex flex-col items-center justify-center '}>
                <p className={'text-xl font-bold py-6 uppercase text-indigo-800'}>Subtle Amazon Experts</p>
                <div className={'grid grid-cols-2 justify-center items-center gap-8'}>
                    <Image src={Sae1} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Sae2} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-center mb-16'}>
                <p className={'text-xl font-bold py-6 uppercase text-indigo-800'}>Standard American Accent Training Islamabad</p>
                <div className={'grid grid-cols-3 justify-center items-center gap-8'}>
                    <Image src={Saat1} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Saat2} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={Saat3} alt={''} height={600} width={800} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                </div>
            </div>
        </div>

    )
}