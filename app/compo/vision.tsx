import Image from "next/image";
import Vip1 from "@/public/viplogo/vip1.png";
import Vip2 from "@/public/viplogo/vip12.jpg";
import Vip3 from "@/public/viplogo/vip3.png";
import Vip4 from "@/public/viplogo/vip10.png";
import Vip5 from "@/public/viplogo/vip11.png";
import Vip6 from "@/public/viplogo/vip13.png";
import Vip7 from "@/public/viplogo/vip7.jpg";
import Vip8 from "@/public/viplogo/vip14.jpg";
import Vip9 from "@/public/viplogo/vip17.jpg";
import Vip10 from "@/public/viplogo/vip18.png";
import Vip11 from "@/public/viplogo/vip15.png";
import { CiGlobe } from "react-icons/ci";

export default function VisionComponent(){
    return(
        <div
            className={'flex relative flex-col sm:h-44 lg:h-96 items-center justify-end text-center bg-indigo-900 text-white lg:gap-8 sm:gap-4 lg:pb-10 sm:pb-2'}>
            <div className={'absolute grid grid-cols-11 bg-white sm:top-[-50px] lg:top-[-80px] items-center justify-center shadow-xl shadow-black/50 gap-2 p-2 rounded-xl w-[80%]'}>
                <Image src={Vip1} alt="Vip 1" className={''}/>
                <Image src={Vip2} alt="Vip 1"  className={''}/>
                <Image src={Vip3} alt="Vip 1" className={''}/>
                <Image src={Vip4} alt="Vip 1" className={''}/>
                <Image src={Vip5} alt="Vip 1" className={''}/>
                <Image src={Vip6} alt="Vip 1" className={''}/>
                <Image src={Vip7} alt="Vip 1" className={''}/>
                <Image src={Vip8} alt="Vip 1" className={''}/>
                <Image src={Vip9} alt="Vip 1" className={''}/>
                <Image src={Vip10} alt="Vip 1"  className={''}/>
                <Image src={Vip11} alt="Vip 1" className={''}/>
            </div>

            <p className="sm:text-xl lg:text-5xl font-bold text-end flex items-center justify-center">
                <CiGlobe size={45}/>
                Vision</p>
            <p className={'sm:text-lg lg:text-3xl leading-relaxed sm:w-[80%] lg:w-[60%]'}>
                Empowering individuals and organizations to reach their full potential through
                transformative coaching and training, fostering a culture of growth, resilience and
                excellence

            </p>

        </div>
    )
}