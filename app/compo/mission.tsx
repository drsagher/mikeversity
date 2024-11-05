'use client'
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Research1 from "@/public/NU/nu7.jpg";
import Research2 from "@/public/NU/nu4.jpg";
import Research3 from "@/public/PIMS/pm4.jpg";
import Research4 from "@/public/newmike.png";
import Research5 from "@/public/hero.png";
import React from "react";
import Image from "next/image";

export default function MissionComponent(){
    return (
        <div className={`sm:h-lvh min-h-screen`}>
            <Carousel plugins={[Autoplay({delay: 5000,}),]}
                      opts={{align: "start", loop: true,}}
                      className={""}
            >
                <CarouselContent className={'sm:h-dvh'}>
                    <CarouselItem className="relative flex flex-col items-center justify-center">
                        <Image src={Research5} alt="" className={'h-96 sm:h-auto w-full'}/>
                        <div
                            className={'absolute left-10 text-center md:w-[50%] flex flex-col items-center justify-center gap-10'}>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/_siqlqRYJp8?si=XuFjIS7L9ND2eSgK"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="relative flex flex-col items-center justify-center">
                        <Image src={Research4} alt="" className={'h-96 sm:h-auto w-full '}/>
                        <div
                            className={'absolute left-10 text-center md:w-[45%] flex flex-col items-center justify-center gap-10 '}>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/XA-zqsYWyEk?si=A1oaiYNcbIPT_hGJ"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="relative flex flex-col items-center justify-center">
                        <Image src={Research2} alt="" className={'h-96 sm:h-auto w-full'}/>
                        <div className={'absolute bottom-32 text-center md:w-[50%] flex flex-col items-center justify-center gap-10 '}>
                            <p className={'md:text-4xl text-amber-200 leading-relaxed bg-slate-950 p-2'}>
                                Inspires people to reach their potential by focusing on actionable strategies, accountability, and mindset shifts that lead to lasting change.
                            </p>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="relative flex flex-col items-center justify-center">
                        <Image src={Research1} alt="" className={'h-96 sm:h-auto w-full'}/>
                        <div className={'absolute bottom-44 text-center md:w-[50%] flex flex-col items-center justify-start gap-10 '}>
                            <p className={'md:text-4xl text-amber-200 leading-relaxed bg-slate-950 p-2'}>
                                Be a game-changer for clients facing complex challenges, enabling transformative breakthroughs and tailored strategies for lasting success.
                            </p>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="relative flex flex-col items-center justify-center">
                        <Image src={Research3} alt="" className={'h-96 sm:h-auto w-full'}/>
                        <div
                            className={'absolute bottom-36 text-center md:w-[50%] flex flex-col items-center justify-start gap-10 '}>
                            <p className={'md:text-3xl text-amber-900 leading-relaxed bg-slate-50 p-2'}>
                                Effective training builds lasting skills, while thought leadership inspires innovation. American accent modification enhances communication clarity,
                                focusing on intonation and pronunciation for confident, diverse interactions. Each element supports growth, influence, and adaptability.
                            </p>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="flex flex-col items-center justify-start bg-slate-100">
                        <p className={'text-5xl py-10'}>Trending Podcasts</p>
                        <div className={'grid grid-cols-3 gap-10'}>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/hfkDitPxseo?si=Ru8J80h66vWSl3UG"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                            </iframe>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/eoakhuTmGHQ?si=qJWYRY4_3efpagjt"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                            </iframe>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/G2xlIM-O8tY?si=R_2osdyMmb6MOhrY"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                            </iframe>

                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/RphoRY6AyTk?si=xO8e3vuQiC_qgvBR"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                            </iframe>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/SjSueIyKDSI?si=x1cPEp7Ucymv1OAQ"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/xZlFc3s-rjs?si=lFDGRlWYyuHe1Mab"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                            </iframe>
                        </div>
                    </CarouselItem>

                </CarouselContent>
            </Carousel>
        </div>
    )
}