import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io";
import { PiArticleMedium } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";

import MissionPic from "@/public/vid.gif"
import Link from "next/link";
export default function MissionComponent(){
    return(
      <div className={'flex h-full w-full items-center justify-center relative'}>
          <Image className={'bg-cover w-full h-full'} src={MissionPic} alt={''} />
          <div className={'flex flex-row gap-4 absolute justify-center items-center bottom-10 bg-red-900 rounded-full px-4'}>
              <Link href={'https://www.youtube.com/@Mikeversity'} target={'_blank'}>
                  <IoLogoYoutube className={'text-gray-100 hover:opacity-100 hover:text-amber-200 transition-all'} size={42}/>
              </Link>
              <Link href={'/pages/articles'}>
                  <PiArticleMedium className={'text-gray-100 hover:opacity-100 hover:text-amber-200 transition-all'} size={42}/>
              </Link>
              <Link href={'/pages/awards'}>
                  <LiaAwardSolid  className={'text-gray-100 hover:opacity-100 hover:text-amber-200 transition-all'} size={42}/>
              </Link>

          </div>
      </div>
    )
}