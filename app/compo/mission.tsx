import { IoLogoYoutube } from "react-icons/io";
import { PiArticleMedium } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";

import Link from "next/link";
export default function MissionComponent(){
    return(
      <div className={'flex bg-slate-100 w-full items-center justify-center relative'}>
          <div className={'flex w-full h-screen items-center justify-center'}>
              <iframe className={'w-full h-full'}  src="https://www.youtube.com/embed/XA-zqsYWyEk?si=vwDIEfQFfFWJth3-"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

              </iframe>
          </div>

          <div
              className={'flex flex-row md:gap-4 absolute justify-center items-center bottom-0 md:bottom-8 bg-red-900 rounded-full px-2 md:px-4'}>
              <Link href={'https://www.youtube.com/@Mikeversity'} target={'_blank'}>
                  <IoLogoYoutube
                      className={'text-gray-100 hover:opacity-100 hover:text-amber-200 transition-all h-6 w-6 md:h-12 md:w-12'} />
              </Link>
              <Link href={'/pages/articles'}>
                  <PiArticleMedium className={'text-gray-100 hover:opacity-100 hover:text-amber-200 transition-all h-6 w-6 md:h-12 md:w-12'} size={42}/>
              </Link>
              <Link href={'/pages/awards'}>
                  <LiaAwardSolid  className={'text-gray-100 hover:opacity-100 hover:text-amber-200 transition-all h-6 w-6 md:h-12 md:w-12'} size={42}/>
              </Link>

          </div>
      </div>
    )
}