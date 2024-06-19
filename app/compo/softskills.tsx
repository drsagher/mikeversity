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
        <div className={"flex flex-col bg-gray-100 justify-center items-center text-center w-auto sm:py-6 lg:py-10 "}>
            <h2 className="flex flex-col items-center justify-start text-center text-2xl font-bold text-indigo-900"><MdAcUnit  size={100} />Soft Skills Training</h2>
            <div className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center text-center sm:py-10'}>
                <div className={'flex flex-col items-center justify-center text-indigo-900 '}>
                    <FaDiagramSuccessor  size={55}/> <p className={'font-bold '}>Soft Skills for Success</p>
                </div>
                <div className={'flex flex-col items-center justify-center text-indigo-900 '}>
                    <FaThinkPeaks size={55}/> <p className={'font-bold '}>Rethinking Everything</p>
                </div>
                <div className={'flex flex-col items-center justify-center text-indigo-900 '}>
                    <GiInspiration size={55}/> <p className={'font-bold '}>Inspiring Excellence</p>
                </div>
                <div className={'flex flex-col items-center justify-center text-indigo-900 '}>
                    <GrUnlock size={55}/> <p className={'font-bold '}>Unlocking Team Potential</p>
                </div>
                <div className={'flex flex-col items-center justify-center text-indigo-900 '}>
                    <SiBoost size={55}/> <p className={'font-bold '}>Productivity Boost</p>
                </div>
                <div className={'flex flex-col items-center justify-center text-indigo-900 '}>
                    <GiFireSilhouette size={55}/> <p className={'font-bold '}>Resilience for All</p>
                </div>
                <div className={'flex flex-col items-center justify-center text-indigo-900 '}>
                    <SiDialogflow size={55}/> <p className={'font-bold '}>Negotiation Guro</p>
                </div>
                <div className={'flex flex-col items-center justify-center text-indigo-900 '}>
                    <VscFeedback size={55}/> <p className={'font-bold '}>Feedback Mastery</p>
                </div>
            </div>
        </div>
    )
}