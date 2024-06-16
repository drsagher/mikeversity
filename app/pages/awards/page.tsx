import Award1 from '@/public/awards/award1.jpg'
import Award2 from '@/public/awards/award2.jpg'
import Award3 from '@/public/awards/award3.jpg'
import Award4 from '@/public/awards/award4.jpg'
import Award5 from '@/public/awards/award5.jpg'
import Award6 from '@/public/awards/award6.jpg'
import Award7 from '@/public/awards/award7.jpg'
import Award8 from '@/public/awards/award10.jpg';
import Award9 from '@/public/awards/award9.jpg'
import Image from "next/image";
import { FaAward } from "react-icons/fa6";

export default function AwardsPage(){
    return(
        <div className={'container flex flex-col py-6 mb-16 bg-gray-50'}>
            <h2 className={'flex items-center gap-4 text-5xl font-bold uppercase py-10 text-red-600'}><FaAward
                size={60}/>
                Awards</h2>
            <div className={'flex flex-row items-start justify-center gap-8'}>

                <div className={'grid grid-cols-1 gap-8 w-2/3'}>
                    <Image src={Award8} alt={''} height={400} className={'w-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'} />

                    <div className={'grid grid-cols-2 gap-8'}>
                        <Image src={Award3} alt={''} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                        <Image src={Award5} alt={''} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                        <Image src={Award6} alt={''} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                        <Image src={Award7} alt={''} className={'shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    </div>
                    <Image src={Award1} alt={''} height={400} className={'w-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'} />
                </div>
                <div className={'grid grid-cols-1 gap-8 w-1/3'}>
                    <Image src={Award2} alt={''} height={400} className={'w-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                    <Image src={Award9} alt={''} height={400} className={'w-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-x-2'}/>
                    <Image src={Award4} alt={''} height={400} className={'w-full shadow-md shadow-red-700 hover:saturate-150 rounded-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:skew-y-2'}/>
                </div>

            </div>
        </div>
    )
}