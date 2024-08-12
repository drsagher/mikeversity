import Eve1 from '@/public/land/top1.jpeg'
import Eve2 from '@/public/land/top2.jpg'
import Eve3 from '@/public/land/top3.jpg'
import Eve4 from '@/public/land/top4.jpg'
import Eve5 from '@/public/port/top1.jpg'
import Eve6 from '@/public/port/top2.png'
import Eve7 from '@/public/port/top3.jpg'
import Eve8 from '@/public/port/top4.jpg'
import Eve9 from '@/public/port/top5.jpg'
import Eve10 from '@/public/port/top6.jpg'
import Eve11 from '@/public/port/top7.jpg'
import Eve12 from '@/public/port/top8.jpg'
import Eve13 from '@/public/port/top9.jpg'
import Eve14 from '@/public/port/top10.jpeg'
import Eve15 from '@/public/port/top11.jpeg'
import Eve16 from '@/public/port/top12.jpeg'
import Eve17 from '@/public/port/top13.jpg'
import Eve18 from '@/public/port/top14.jpeg'
import Eve19 from '@/public/port/top15.jpg'
import Eve20 from '@/public/port/top16.jpg'
import Eve21 from '@/public/port/top17.jpg'
import Eve22 from '@/public/port/top18.jpeg'
import Eve23 from '@/public/port/top19.jpeg'
import Eve24 from '@/public/port/top20.jpg'
import Eve25 from '@/public/port/top21.jpg'
import Sqo1 from '@/public/sqo1/sqo1.jpg'
import Sqo2 from '@/public/sqo1/sqo2.jpeg'
import Sqo3 from '@/public/sqo1/sqo3.jpg'
import Sqo4 from '@/public/sqo1/sqo4.jpg'
import Sqo5 from '@/public/sqo1/sqo5.jpg'
import Sqo6 from '@/public/sqo1/sqo6.jpg'
import Sqo7 from '@/public/sqo1/sqo7.jpg'
import Sqo8 from '@/public/sqo1/sqo8.jpg'
import Sqo9 from '@/public/sqo1/sqo9.jpg'
import Sqo10 from '@/public/sqo1/sqo10.jpg'
import Sqo11 from '@/public/sqo1/sqo11.jpg'
import Sqo12 from '@/public/sqo1/sqo12.jpg'
import Sqo13 from '@/public/sqo1/sqo13.jpg'
import Sqo14 from '@/public/sqo1/sqo14.jpg'
import Sqo15 from '@/public/sqo1/sqo15.jpg'
import Sqo16 from '@/public/sqo1/sqo16.jpg'
import Sqo17 from '@/public/sqo1/sqo17.png'
import Sqo18 from '@/public/sqo1/sqo18.jpg'
import Sqo19 from '@/public/sqo1/sqo19.jpg'
import Sqo20 from '@/public/sqo1/sqo20.jpg'
import Sqo21 from '@/public/sqo1/sqo21.jpg'
import Sqo22 from '@/public/sqo1/sqo22.jpg'
import Sqo23 from '@/public/sqo1/sqo23.jpeg'
import Sqo24 from '@/public/sqo1/sqo24.jpeg'
import Sqo25 from '@/public/sqo1/sqo25.jpeg'
import Sqo26 from '@/public/sqo1/sqo26.jpg'
import Tall1 from '@/public/tall/top5.jpg'
import Tall2 from '@/public/tall/top55.jpg'
import Tall3 from '@/public/tall/top43.jpeg'
import Tall4 from '@/public/tall/top39.jpg'
import Tall5 from '@/public/tall/top52.jpg'
import { MdEventRepeat } from "react-icons/md";
import UpEv from '@/public/ahds.png'

import Image from "next/image";

export default function EventsPage(){
    return(
        <div className={'container mx-auto flex flex-col p-2'}>

            <div className={'flex flex-col items-center justify-center my-4 border-4 border-indigo-900 p-10 rounded-xl hover:border-red-800'}>
                <Image src={UpEv} alt={''} height={200} width={200}/>
                <p className={'flex items-center gap-2 text-md lg:text-xl font-bold py-4 text-indigo-900 uppercase'}>Upcoming
                    Event</p>
                <p className={'text-xs lg:text-lg text-red-600 uppercase'}>Ahd Ul Khair private School, East Side of Masjid Aqeel, East
                    Salalah, Dhofar, Oman</p>
            </div>

            <p className={'flex items-center gap-4 text-3xl font-bold uppercase py-6 text-red-600'}><MdEventRepeat
                size={60}/>
                Events
            </p>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 '}>
                <Image src={Eve1} alt={''} height={600} width={800}
                       className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve2} alt={''} height={600} width={800}
                       className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve3} alt={''} height={600} width={800}
                       className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve4} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'}>
                <Image src={Eve5} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve6} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve7} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve8} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve9} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve10} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve11} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve12} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve13} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve14} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve15} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve16} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve17} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve18} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve19} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve20} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                {/*<Image src={Eve21} alt={''} height={600} width={800} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>*/}
                <Image src={Eve22} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve23} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve24} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Eve25} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'}>
                <Image src={Sqo1} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo2} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo3} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo4} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo5} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo6} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo7} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo8} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo9} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo10} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo11} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo12} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo13} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo14} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo15} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo16} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo17} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo18} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo19} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo20} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo21} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo22} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo23} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo24} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo25} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Sqo26} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'}>
                <Image src={Tall1} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Tall2} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Tall3} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Tall4} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Tall5} alt={''} height={600} width={800}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>

            </div>
        </div>
    )
}