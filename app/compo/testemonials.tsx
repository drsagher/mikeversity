import { FaPhotoVideo } from "react-icons/fa";

export default function TestimonialsComponent(){
    return(
        <div className={'flex flex-col items-center justify-center p-2 bg-amber-200 min-h-screen'}>
            <h2 className={'text-3xl flex flex-col items-center justify-center gap-2 py-10 uppercase font-bold text-red-600'}>
                <FaPhotoVideo size={65}/>
                Featured Videos
            </h2>

            <div className={'flex flex-col lg:flex-row md:gap-2 md:px-10 md:py-6'}>
                <iframe className={'w-full md:w-full lg:h-full aspect-video  '}
                        src="https://www.youtube.com/embed/XA-zqsYWyEk?si=vwDIEfQFfFWJth3-"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
                <div
                    className={'lg:w-1/2 flex flex-col items-start justify-center p-2 text-start gap-2 aspect-auto '}>
                    <p className={'text-sm font-bold text-gray-500 sm:text-xl'}>THRIVE ON LIFE WITH AMBREEN QURESHI AT
                        DISCOVER
                        PAKISTAN</p>
                    <p className={'text-xs leading-relaxed xl:text-lg'}>
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

            <div className={'flex flex-col md:gap-2 md:px-10 md:py-6 lg:flex-row-reverse'}>
                <iframe className={'w-full md:w-full lg:h-full aspect-video  '}
                        src="https://www.youtube.com/embed/_siqlqRYJp8?si=wfUE4frZRPfLt24T"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
                <div className={'lg:w-1/2 flex flex-col items-start justify-center p-2 text-start gap-2 aspect-auto '}>
                    <p className={'text-sm font-bold text-gray-500 sm:text-xl'}>MAINTAINING POSITIVE MINDSET
                        PAKISTAN
                    </p>
                    <p className={'text-xs leading-relaxed xl:text-lg '}>
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


            {/*    4 videos*/}

        </div>
    )
}