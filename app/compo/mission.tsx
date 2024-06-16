import Image from "next/image";
import MissionPic from "@/public/vid.gif"
export default function MissionComponent(){
    return(
      <div className={'flex h-full w-full relative items-center justify-center'}>
          <Image className={'bg-cover w-full h-full'} src={MissionPic} alt={''} />
      </div>
    )
}