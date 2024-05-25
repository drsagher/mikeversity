import { MdAcUnit } from "react-icons/md";
import { MdOutlineFireplace } from "react-icons/md";

export default function SoftSkillsComponent(){
    return(
        <div className={'flex flex-col justify-center items-center text-center w-full bg-zinc-950 py-10'}>
            <h2 className="flex items-center justify-center text-center text-3xl font-bold gap-2 text-yellow-700"><MdAcUnit  size={35} />Soft Skills Training</h2>
            <div className={'grid grid-cols-4 gap-4 py-10'}>
                <div className={'flex items-center justify-start w-64 text-yellow-700 gap-2'}>
                    <MdOutlineFireplace size={35}/> <p className={'text-lg '}>Soft Skills for Success</p>
                </div>
                <div className={'flex items-center justify-start w-64 text-yellow-700 gap-2'}>
                    <MdOutlineFireplace size={35}/> <p>Rethinking Everything</p>
                </div>
                <div className={'flex items-center justify-start w-64 text-yellow-700 gap-2'}>
                    <MdOutlineFireplace size={35}/> <p>Inspiring Excellence</p>
                </div>
                <div className={'flex items-center justify-start w-64 text-yellow-700 gap-2'}>
                    <MdOutlineFireplace size={35}/> <p>Unlocking Team Potential</p>
                </div>
                <div className={'flex items-center justify-start w-64 text-yellow-700 gap-2'}>
                    <MdOutlineFireplace size={35}/> <p>Productivity Boost</p>
                </div>
                <div className={'flex items-center justify-start w-64 text-yellow-700 gap-2'}>
                    <MdOutlineFireplace size={35}/> <p>Resilience for All</p>
                </div>
                <div className={'flex items-center justify-start w-64 text-yellow-700 gap-2'}>
                    <MdOutlineFireplace size={35}/> <p>Negotiation Guro</p>
                </div>
                <div className={'flex items-center justify-start w-64 text-yellow-700 gap-2'}>
                    <MdOutlineFireplace size={35}/> <p>Feedback Mastery</p>
                </div>
            </div>
        </div>
    )
}