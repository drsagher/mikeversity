import { LuSchool } from "react-icons/lu";
import { IoSchool } from "react-icons/io5";
import { MdCorporateFare } from "react-icons/md";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaPeopleCarryBox } from "react-icons/fa6";

export default function ImpactsComponent(){
    return(
        <div className={'flex flex-col h-96 bg-indigo-900 items-center text-gray-100'}>
            <p className={'flex items-center gap-2 text-3xl font-bold py-10'}><FaPeopleCarryBox size={65}/>
                Impacts on Life</p>
            <div className={'flex flex-row w-full px-24 justify-center items-center sm:gap-16 lg:gap-24 mt-6'}>
                <div className={'flex flex-col items-center justify-center'}>
                    <LuSchool size={85}/>
                    <p className={'text-5xl'}>1.0K</p>
                </div>
                <div>
                    <IoSchool size={85}/>
                    <p className={'text-5xl'}>0.2K</p>
                </div>
                <div>
                    <MdCorporateFare size={85}/>
                    <p className={'text-5xl'}>0.1K</p>
                </div>
                <div>
                    <GiPublicSpeaker size={85}/>
                    <p className={'text-5xl'}>0.5B</p>
                </div>
            </div>
        </div>
    )
}