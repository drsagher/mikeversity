'use client'
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
import { motion } from "framer-motion";

export default function VisionComponent(){
    return(
        <div  className={'grid grid-cols-1 md:grid-cols-2 '}>
            <div className={'flex flex-col items-center justify-center  text-gray-50 text-center bg-indigo-950 md:rounded-r-full p-2'}>
                <p className="text-base sm:text-md lg:text-lg xl:text-5xl font-bold text-end flex items-center justify-center ">
                    <CiGlobe/>
                    Vision</p>
                <p className={'text-sm sm:text-md lg:text-lg xl:text-2xl leading-relaxed'}>
                    Empowering individuals and organizations to reach their full potential through
                    transformative coaching and training, fostering a culture of growth, resilience and
                    excellence

                </p>
            </div>

            <div className={' grid grid-cols-11 sm:grid-rows-1 items-center p-2 gap-2'}>
                <Image src={Vip1} alt="Vip 1" className={''}/>
                <Image src={Vip2} alt="Vip 1" className={''}/>
                <Image src={Vip3} alt="Vip 1" className={''}/>
                <Image src={Vip4} alt="Vip 1" className={''}/>
                <Image src={Vip5} alt="Vip 1" className={''}/>
                <Image src={Vip6} alt="Vip 1" className={''}/>
                <Image src={Vip7} alt="Vip 1" className={''}/>
                <Image src={Vip8} alt="Vip 1" className={''}/>
                <Image src={Vip9} alt="Vip 1" className={''}/>
                <Image src={Vip10} alt="Vip 1" className={''}/>
                <Image src={Vip11} alt="Vip 1" className={''}/>
            </div>

        </div>
    )
}