import React from "react";

export default function MissionComponent(){
    return (
        <div className={"w-full aspect-video sm:h-56 md:h-64 lg:min-h-screen"}>
            <iframe className={'w-full h-full '}
                 src="https://www.youtube.com/embed/_siqlqRYJp8?si=QsLtdwloC5C1qQfO&autoplay=1&mute=1&controls=1&modestbranding=0&rel=0&playsinline=1&enablejsapi=1&showinfo=0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
        </div>
    )
}