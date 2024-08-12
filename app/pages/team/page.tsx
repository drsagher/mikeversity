import DrElizabethLucas from '@/public/team/DrElizabethLucas.jpeg';
import CalebTimilehinSamuel from '@/public/team/CalebTimilehinSamuel.jpeg';
import DrLaKishaJames from '@/public/team/DrLaKishaJames.jpeg';
import DrMadhviBorse from '@/public/team/DrMadhviBorse.jpeg';
import DrRosalindWillis from '@/public/team/DrRosalindWillis.jpeg';
import DrShawnSaxton from '@/public/team/DrShawnSaxton.jpeg';
import HerdianaDewiNurfika from '@/public/team/HerdianaDewiNurfika.jpeg';
import LikaOkhanashvili from '@/public/team/LikaOkhanashvili.jpeg';
import TeklaKiparoidze from '@/public/team/TeklaKiparoidze.jpeg';
import ChanieMessinger  from '@/public/team/ChanieMessinger.jpg';
import SHAHIDIQBAL  from '@/public/team/SHAHIDIQBAL.jpeg';
import DrAmb  from '@/public/team/DrAmb.jpg';
import DRANITA  from "@/public/team/DRANITA.jpg";
import IlonaParunakova  from '@/public/team/IlonaParunakova.jpg';
import DanelleBoyles  from '@/public/team/DanelleBoyles.jpeg';
import VeronicaRozenfeld  from '@/public/team/VeronicaRozenfeld.jpeg';
import Image from "next/image";

export default function TeamPage(){
    let team = [
        { id:1, name:"Prof. Dr. Queen Elizabeth Lucas-Afolalu",
            description:"Global Inspirational and Transformational Speaker and Certified Mentor and Trainer and Global Transformational Leaders and Advisor, Youth Mentor and Entrepreneur.",
            country:"United Kingdom", pic:DrElizabethLucas
        },
        { id:2, name:"Dr. Rosalind Willis",
            description:"Highly esteemed Birthing Purpose Coach and an award-winning international speaker and author. Dr. Rosalind is the USA Country Director for IIU. She is a sought after Global Transformational Speaker.",
            country:"United States", pic:DrRosalindWillis
        },
        { id:3, name:"Dr. Chanie Messinger",
            description:"Occupational therapist, speaker, author, coach, researcher, and professor",
            country:"United States", pic:ChanieMessinger
        },
        { id:4, name:"Lika Okhanashvili",
            description:"Business trainer, marketer, founder and director of Key Consulting, president of the International Association of Global Education, invited lecturer at the International Black Sea University, lecturer at the Academy of Information Technology",
            country:"United States", pic:LikaOkhanashvili
        },
        { id:5, name:"Tekla Kiparoidze",
            description:"Tekla has participated in Erasmus+ and ISCR projects, gaining valuable insights and skills. She has a passion for leadership and has worked alongside young leaders, further honing her abilities",
            country:"United States", pic:TeklaKiparoidze
        },

        { id:6, name:"Dr. LaKisha James",
            description:"Host of Talks with LaKisha Journalist Global Speaker International Bestselling Author Global Event Host Mentor",
            country:"United States", pic:DrLaKishaJames
        },
        { id:7, name:"Dr. Madhvi Borse",
            description:"Educationist, Author & International speaker Honoured with various National & International Awards, Records, Medal and Doctorates in the field of Education",
            country:"India", pic:DrMadhviBorse
        },
        { id:8, name:"Dr. Shawn Saxton ",
            description:"Certified Human Rights Consultant, a certified Transitional life coach, and a four-time bestselling author",
            country:"United States", pic:DrShawnSaxton
        },
        { id:9, name:"Herdiana Dewi Nurfika",
            description:"Founder & CEO of Bliss Education Center, Brancy Firm and HDN STUFF. Certified Entrepreneurship & Business Coach, ACT & REBT Therapist, Certified NLP Master Practitioner, TESOL Certified ",
            country:"Indonesia", pic:HerdianaDewiNurfika
        },
        { id:10, name:"Caleb Timilehin Samuel",
            description:"Award-winning International Trainer and Speaker who has been invited to speak and train over 1000 emerging young leaders and leaders in leadership principles ",
            country:"Nigeria", pic:CalebTimilehinSamuel
        },
        { id:11, name:"Dr. Amb Omotola Sobowale Lagos",
            description:"Global trainer, Educator, Educationist, Facilitator,  Psychologist, International Speaker, Coach, Mentor, Ambassador, Leadership and Development Trainer, and a Career Enthusiastic.",
            country:"Nigeria", pic:DrAmb
        },

        { id:12, name:"Veronica Rozenfeld",
            description:"Veronica Rozenfeld is an  speaker and clarity mentor. Veronica speaks on how to create breakthrough and momentum in your life and business through clarity and energy work.Veronica helps business owners",
            country:"United States", pic:VeronicaRozenfeld
        },
        { id:13, name:"Danelle Boyles",
            description:"Danelle Boyles of the United States Mother, Educator, Holistic Practitioner, Quantum Consciousness Coach.",
            country:"United States", pic:DanelleBoyles
        },
        { id:14, name:"Ilona Parunakova",
            description:"Ilona Parunakova, the indomitable force in motivational speaking and personal development, commands a stage with the authority of a TEDx Speaker, Author, and Coach of international acclaim",
            country:"United States", pic:IlonaParunakova
        },
        { id:15, name:"DR. ANITA C. POWELL",
            description:"REV. DR. ANITA C. POWELL, Msc.D. Energy Poet AuthorMetaphysical EducatorSpeakerAdvocate",
            country:"United States", pic:DRANITA
        },
        { id:16, name:"SHAHID IQBAL",
            description:"SHAHID IQBAL Top trainer in the areas of Anti Money Laundering and Combating the Financing of Terrorism",
            country:"Pakistan", pic:SHAHIDIQBAL
        },
    ]


    return (
        <div className={'container mx-auto flex flex-col items-center justify-center py-6'}>
            <p className={'text-lg md:text-3xl font-bold text-center py-2 lg:py-10 uppercase'}>Our Team</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-6 px-6 '}>
                {team.map((link) => {
                    return (
                        <div key={link.id}
                             className={'w-96 h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                            <Image src={link.pic} alt={''} className={'h-96 w-full'}/>
                            <h2 className={'font-bold text-lg text-white'}>{link.name}</h2>
                            <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>{link.description}</p>
                            <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>{link.country}</p>
                        </div>

                    );
                })}

            </div>
        </div>
    )
}