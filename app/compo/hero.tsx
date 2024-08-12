import Image from "next/image";
import Bgd from '@/public/newmikess.png';
export default function HeroComponent(){
    return (
        <div className="flex clear-both relative">
            <Image src={Bgd} alt={''} className={''}/>

            {/*<div className={'sm:hidden flex flex-col items-start p-1 ml-2 mt-6 absolute border-2 border-gray-100 hover:border-red-600 w-[40%] sm:left-2 sm:top-8 lg:top-[30%] sm:p-1 lg:p-8 lg:rounded-xl hover:bg-indigo-900 hover:text-gray-300 hover:skew-x-2'}>*/}
            {/*    <p className="text-xs font-bold">Mike Litman</p>*/}
            {/*    /!*<p className="font-bold ">Global Thought Leader</p>*!/*/}
            {/*    <p className={'text-xs'}>President, Founder & CEO Of Mikes International</p>*/}
            {/*</div>*/}

            {/*<div className={'hidden sm:flex absolute flex-col xl:mt-24 border-2 border-gray-100 hover:border-red-600 w-[40%] sm:left-2 sm:top-2 sm:p-1 md:p-2 md:top-8 lg:top-10 lg:p-4 lg:rounded-xl hover:bg-indigo-900 hover:text-gray-300 hover:skew-x-2'}>*/}
            {/*    <h2 className=" text-sm sm:text-lg font-bold uppercase lg:text-2xl">Mike Litman</h2>*/}
            {/*    <h2 className=" sm:text-xs lg:text-lg font-bold lg:text-md">Global Thought Leader</h2>*/}
            {/*    <p className="text-xs md:text-sm lg:text-lg leading-relaxed  ">*/}
            {/*        President, Founder & CEO Of Mikes International, Serving as A Global Thought Leader in*/}
            {/*        Leadership, Management & Entrepreneurship Coaching, A Goose-Bumping Motivational & Keynote*/}
            {/*        Speaker, Moderator, And Storyteller. Certified In NLP, MPM, CBT, And Life & Success Coaching.*/}
            {/*        Specializes In Obsessive Standard American Accent Modification, Elimination, And Clear Speech*/}
            {/*        Therapy. Additionally, An Expert Natural Spoken English Trainer and Official Member Of The*/}
            {/*        International Human Rights Commission.*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    )
}