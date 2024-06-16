import Image from "next/image";
import Bgd from '@/public/newmike.png';
export default function HeroComponent(){
    return (
        <div className="flex clear-both relative">
        <Image src={Bgd} alt={''} className={''} />

                <div className={'flex absolute flex-col border-2 border-gray-100 hover:border-red-600 w-[40%] sm:left-2 sm:top-8 lg:top-[30%] sm:p-1 lg:p-8 lg:rounded-xl hover:bg-indigo-900 hover:text-gray-300 hover:skew-x-2'}>
                    <h2 className="sm:text-lg font-bold uppercase lg:text-3xl">Mike Litman</h2>
                    <h2 className="sm:text-sm font-bold lg:text-xl">Global Thought Leader</h2>
                    <p className="sm:text-xs leading-12 lg:text-lg ">
                    President, Founder & CEO Of Mikes International, Serving as A Global Thought Leader in
                        Leadership, Management & Entrepreneurship Coaching, A Goose-Bumping Motivational & Keynote
                        Speaker, Moderator, And Storyteller. Certified In NLP, MPM, CBT, And Life & Success Coaching.
                        Specializes In Obsessive Standard American Accent Modification, Elimination, And Clear Speech
                        Therapy. Additionally, An Expert Natural Spoken English Trainer and Official Member Of The
                        International Human Rights Commission.
                    </p>
                </div>
        </div>
    )
}