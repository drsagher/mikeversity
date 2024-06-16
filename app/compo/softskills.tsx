import { MdAcUnit } from "react-icons/md";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { FaThinkPeaks } from "react-icons/fa6";
import { GiInspiration } from "react-icons/gi";
import { GrUnlock } from "react-icons/gr";
import { SiBoost } from "react-icons/si";
import { GiFireSilhouette } from "react-icons/gi";
import { SiDialogflow } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";

export default function SoftSkillsComponent(){
    return(
        <div className={"flex flex-col min-h-screen justify-center items-center text-center w-auto sm:py-2 lg:py-10 gap-2 "}>
            <h2 className="flex flex-col items-center justify-start text-center text-3xl font-bold gap-2 text-indigo-900"><MdAcUnit  size={100} />Soft Skills Training</h2>
            <div className={'grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:py-2 lg:py-10'}>
                <div className={'flex flex-col items-center justify-center w-64 h-64 text-indigo-900 gap-4 p-2 rounded-full hover:border-2 hover:border-indigo-900'}>
                    <FaDiagramSuccessor  size={75}/> <p className={'text-xl font-bold '}>Soft Skills for Success</p>
                </div>
                <div className={'flex flex-col items-center justify-center w-64 h-64 text-indigo-900 gap-4 p-2 rounded-full hover:border-2 hover:border-indigo-900'}>
                    <FaThinkPeaks size={75}/> <p className={'text-xl font-bold '}>Rethinking Everything</p>
                </div>
                <div className={'flex flex-col items-center justify-center w-64 h-64 text-indigo-900 gap-4 p-2 rounded-full hover:border-2 hover:border-indigo-900'}>
                    <GiInspiration size={75}/> <p className={'text-xl font-bold '}>Inspiring Excellence</p>
                </div>
                <div className={'flex flex-col items-center justify-center w-64 h-64 text-indigo-900 gap-4 p-2 rounded-full hover:border-2 hover:border-indigo-900'}>
                    <GrUnlock size={75}/> <p className={'text-xl font-bold '}>Unlocking Team Potential</p>
                </div>
                <div className={'flex flex-col items-center justify-center w-64 h-64 text-indigo-900 gap-4 p-2 rounded-full hover:border-2 hover:border-indigo-900'}>
                    <SiBoost size={75}/> <p className={'text-xl font-bold '}>Productivity Boost</p>
                </div>
                <div className={'flex flex-col items-center justify-center w-64 h-64 text-indigo-900 gap-4 p-2 rounded-full hover:border-2 hover:border-indigo-900'}>
                    <GiFireSilhouette size={75}/> <p className={'text-xl font-bold '}>Resilience for All</p>
                </div>
                <div className={'flex flex-col items-center justify-center w-64 h-64 text-indigo-900 gap-4 p-2 rounded-full hover:border-2 hover:border-indigo-900'}>
                    <SiDialogflow size={75}/> <p className={'text-xl font-bold '}>Negotiation Guro</p>
                </div>
                <div className={'flex flex-col items-center justify-center w-64 h-64 text-indigo-900 gap-4 p-2 rounded-full hover:border-2 hover:border-indigo-900'}>
                    <VscFeedback size={75}/> <p className={'text-xl font-bold '}>Feedback Mastery</p>
                </div>
            </div>
        </div>
    )
}