import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io";
import { PiArticleMedium } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";

import MissionPic from "@/public/vid.gif"

import Link from "next/link";
export default function MissionComponent(){
    return(
      <div className={'flex bg-slate-100 w-full items-center justify-center relative'}>
          {/*<Image className={'bg-cover w-full h-full'} src={MissionPic} alt={''} />*/}
          {/*<div className={'flex flex-col h-screen w-1/2 items-center justify-center text-center'}>*/}
          {/*    <p className={'text-5xl py-10 leading-relaxed'}>*/}
          {/*        Dynamic Mentor in Entrepreneurship and Management, with Global Credentials in Motivation and Human Rights*/}
          {/*    </p>*/}
          {/*    /!*<p className={'leading-relaxed text-2xl w-[80%]'}>*!/*/}
          {/*    /!*    Global Thought Leader, Management & Entrepreneurship Coaching, A Goose-Bumping Motivational & Keynote Speaker, Moderator, And Storyteller. Certified In NLP-Hypnotherapist, MPM, CBT, And Life & Success Coaching. Obsessive Standard American Accent Modification, Elimination, And Clear Speech Therapy. Additionally, An Expert Natural Spoken English Trainer and Official Member of The International Human Rights Commission (IHRC)*!/*/}
          {/*    /!*</p>*!/*/}
          {/*  <Link href={''} className={'bg-red-700 p-2 text-amber-200'}>Read Biography</Link>*/}
          {/*</div>*/}
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