export default function TestimonialsYT(){
    return(
            <div className={'grid grid-cols-1 lg:grid-cols-2 bg-amber-200'}>

                <div className={'flex flex-col p-2 items-center justify-center h-full'}>
                    <iframe className={'w-full sm:w-full md:w-full lg:w-full aspect-video '}
                            src="https://www.youtube.com/embed/psuqwGOXld8?si=7dXnTGjCoR3L_M73"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                    {/*<p className={'text-md font-bold text-gray-500 py-4 w-[100%]]'}>Global Talk Show with Veronica*/}
                    {/*    Ceban</p>*/}
                </div>
                <div className={'flex flex-col p-2 items-center justify-center h-full'}>
                    <iframe className={'w-full sm:w-full md:w-full lg:w-full aspect-video '}
                            src="https://www.youtube.com/embed/j9SEaD0IB34?si=a-Drt3CYgyC5CWj9"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                    {/*<p className={'text-md font-bold text-gray-500 py-4 w-[100%]]'}>EDUCATION PSYCHOLOGY ADVANCED*/}
                    {/*    LEARNING</p>*/}
                </div>
                <div className={'flex flex-col p-2 items-center justify-center'}>
                    <iframe className={'w-full sm:h-full md:w-full lg:h-full aspect-video '}
                            src="https://www.youtube.com/embed/hfkDitPxseo?si=-3q6dPW1Rzez0MGK"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                    {/*<p className={'text-md font-bold text-gray-500 py-4 w-[100%]]'}>Business ideas</p>*/}
                </div>
                <div className={'flex flex-col p-2 items-center justify-center'}>
                    <iframe className={'w-full sm:h-full md:w-full lg:h-full aspect-video '}
                            src="https://www.youtube.com/embed/RnPgjMCwab8?si=hHdrolMFsQBje1ua"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                    {/*<p className={'text-md font-bold text-gray-500 py-4 w-[100%]]'}>WOMEN IN ENTREPRENEURSHIP</p>*/}
                </div>
        </div>
    )
}