import Award3 from '@/public/awards/award3.jpg'
import Award4 from '@/public/awards/award4.jpg'
import Award5 from '@/public/awards/award5.jpg'
import Award6 from '@/public/awards/award6.jpg'
import Award7 from '@/public/awards/award7.jpg'
import Award9 from '@/public/awards/award9.jpg'
import Award10 from '@/public/awards/award10.jpg'
import Award11 from '@/public/awards/award11.jpg'
import Award12 from '@/public/awards/award12.jpg'
import Award13 from '@/public/awards/award13.jpg'
import Award14 from '@/public/awards/award14.jpg'
import Award15 from '@/public/awards/award15.jpg'
import Award16 from '@/public/awards/award16.jpg'
import Award17 from '@/public/awards/award17.jpg'
import Award18 from '@/public/awards/award18.jpg'
import Award19 from '@/public/awards/award19.jpg'
import Award20 from '@/public/awards/award20.jpg'

import MLW1 from '@/public/mlw/MLW1.jpeg'
import MLW19 from '@/public/mlw/MLW19.jpeg'
import MLW22 from '@/public/mlw/MLW22.jpeg'
import MLW38 from '@/public/mlw/MLW38.jpeg'
import MLW39 from '@/public/mlw/MLW39.jpeg'
import MLW40 from '@/public/mlw/MLW40.jpeg'
import Image from "next/image";
import { FaAward } from "react-icons/fa6";

export default function AwardsPage(){
    return(
        <div className={'flex flex-col p-2'}>
            <h2 className={'flex items-center justify-center gap-4 text-3xl font-bold uppercase py-10 text-red-600'}>
                <FaAward
                    size={55}/>
                Awards</h2>

            <div className={'grid grid-cols-1 gap-2 sm:gap-6 lg:gap-16 lg:grid-cols-2 xl:grid-cols-3'}>

                <Image src={Award10} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award11} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award12} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award13} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award14} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award15} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award16} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award17} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award18} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award19} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award20} alt={''} className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>

                <Image src={MLW19} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={MLW22} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={MLW38} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={MLW39} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={MLW40} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award3} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award5} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                <Image src={Award6} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={Award7} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                <Image src={Award9} alt={''} height={400}
                       className={'h-full w-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                <Image src={Award4} alt={''} height={400}
                       className={'h-full w-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                <Image src={MLW1} alt={''}
                       className={'h-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
            </div>
        </div>
    )
}