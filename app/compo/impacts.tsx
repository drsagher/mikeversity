import { LuSchool } from "react-icons/lu";
import { IoSchool } from "react-icons/io5";
import { MdCorporateFare } from "react-icons/md";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaPeopleCarryBox } from "react-icons/fa6";

export default function ImpactsComponent(){
    return(
        <div className={'flex flex-col bg-red-900 items-center text-gray-200 pt-10'}>
            <p className={'flex flex-col items-center gap-2 text-3xl font-bold '}><FaPeopleCarryBox size={85}/>
                Impacts on Life</p>
            <div className={'grid grid-cols-1 sm:grid-cols-4 justify-between gap-10 py-10'}>
                <div className={'flex flex-col items-center justify-center hover:text-amber-300'}>
                    <LuSchool size={85}/>
                    <p className={'text-5xl'}>1.0K</p>
                </div>
                <div className={'flex flex-col items-center justify-center hover:text-amber-300'}>
                    <IoSchool size={85}/>
                    <p className={'text-5xl'}>0.2K</p>
                </div>
                <div className={'flex flex-col items-center justify-center hover:text-amber-300'}>
                    <MdCorporateFare size={85}/>
                    <p className={'text-5xl'}>0.1K</p>
                </div>
                <div className={'flex flex-col items-center justify-center hover:text-amber-300'}>
                    <GiPublicSpeaker size={85}/>
                    <p className={'text-5xl'}>0.5B</p>
                </div>
            </div>
        </div>
    )
}