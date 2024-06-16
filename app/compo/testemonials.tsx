import { FaPhotoVideo } from "react-icons/fa";

export default function TestimonialsComponent(){
    return(
        <div className={'flex flex-col items-center justify-center px-10'}>
            <div>
                <h2 className={'text-5xl flex items-center justify-center gap-2 py-10 uppercase font-bold text-red-600'}><FaPhotoVideo size={55}/>
                    Featured Videos</h2>
            </div>
            <div className={'flex sm:flex-col gap-4'}>
                <div className={'flex sm:flex-col lg:flex-row gap-2 lg:w-[60%] mx-auto'}>
                    <div className={'w-[100%] lg:w-3/4'}>
                        <iframe className={'w-full sm:h-96 lg:h-full'}
                                src="https://www.youtube.com/embed/XA-zqsYWyEk?si=vwDIEfQFfFWJth3-"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                    <div className={'lg:w-1/4'}>
                        <p className={'text-xl font-bold text-gray-500'}>THRIVE ON LIFE WITH AMBREEN QURESHI AT DISCOVER
                            PAKISTAN</p>
                        <p className={'text-gray-800'}>
                            Thrive on Life is a mindset and a way of living that encourages individuals to embrace their
                            potential and live life to the fullest. It&apos;s about cultivating resilience, fostering
                            meaningful
                            connections, and pursuing passions with purpose and intention. By adopting this mindset,
                            people
                            can transform their lives, overcome obstacles, and find joy and fulfillment in every moment.
                            With a focus on personal growth, well-being, and positive energy, &quot;Thrive on
                            Life&quot; inspires
                            individuals to create a life that truly thrives
                        </p>
                    </div>
                </div>

                <div className={'flex sm:flex-col lg:flex-row gap-2 lg:w-[60%] mx-auto'}>
                    <div className={'w-[100%] lg:w-3/4'}>
                        <iframe  className={'w-full sm:h-96 lg:h-full'}
                                src="https://www.youtube.com/embed/_siqlqRYJp8?si=wfUE4frZRPfLt24T"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                        </iframe>
                    </div>
                    <div className={'lg:w-1/4'}>
                        <p className={'text-xl font-bold text-gray-500'}>MAINTAINING POSITIVE MINDSET
                            PAKISTAN</p>
                        <p className={'text-gray-800'}>
                            A positive mindset is a powerful tool that can transform your life. It&apos;s the ability to
                            approach challenges with optimism, resilience, and hope. With a positive mindset, you can
                            re-frame obstacles as opportunities, build stronger relationships, and achieve your goals.
                            By focusing on the good in every situation and cultivating a growth mindset, you can unlock
                            your potential, boost your confidence, and live a more fulfilling life. A positive mindset
                            is a choice, and it&apos;s a choice that can change your life for the better. By choosing to
                            focus on the positive, you can overcome adversity, achieve success, and live a life
                            that&apos;s filled with purpose, joy and happiness
                        </p>
                    </div>
                </div>

            </div>

            {/*    4 videos*/}
            <div className={'flex sm:flex-col lg:flex-row gap-2 py-10'}>
                <div className={'flex flex-col '}>

                    <iframe width="420" height="280"
                            src="https://www.youtube.com/embed/psuqwGOXld8?si=7dXnTGjCoR3L_M73"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                    </iframe>
                    <p className={'text-md font-bold text-gray-500 py-4 w-[100%]]'}>Global Talk Show with Veronica Ceban</p>
                </div>

                <div className={'flex flex-col'}>

                    <iframe width="420" height="280" src="https://www.youtube.com/embed/j9SEaD0IB34?si=a-Drt3CYgyC5CWj9"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                    </iframe>
                    <p className={'text-md font-bold text-gray-500 py-4'}>EDUCATION PSYCHOLOGY ADVANCED LEARNING </p>
                </div>

                <div className={'flex flex-col'}>

                    <iframe width="420" height="280" src="https://www.youtube.com/embed/hfkDitPxseo?si=-3q6dPW1Rzez0MGK"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={'text-md font-bold text-gray-500 py-4'}>Business ideas </p>
                </div>

                <div className={'flex flex-col'}>

                    <iframe width="420" height="280" src="https://www.youtube.com/embed/RnPgjMCwab8?si=hHdrolMFsQBje1ua"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={'text-md font-bold text-gray-500 py-4'}>WOMEN IN ENTREPRENEURSHIP</p>
                </div>


            </div>
        </div>
    )
}