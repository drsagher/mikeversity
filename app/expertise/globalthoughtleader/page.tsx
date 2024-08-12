import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function GlobalThoughtLeader(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Global Thought Leadership </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned expert in Global Thought Leadership Training, I empower leaders and organizations to develop a forward-thinking mindset, navigate complex global landscapes, and drive innovation and growth. With extensive experience in global business, cultural intelligence, and leadership development, I provide comprehensive training programs that help clients cultivate a global perspective, build strategic relationships, and communicate effectively across cultures. My expertise includes global trends analysis, cross-cultural leadership strategies, and thought leadership development, which enable leaders to anticipate and shape the future, build trust and credibility, and drive business success in a rapidly changing world. By applying these global thought leadership strategies, clients can stay ahead of the curve, expand their global footprint, and achieve lasting impact and influence.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Global Thought Leadership training expertise is designed to equip leaders and professionals with the skills and knowledge to become globally recognized thought leaders, innovators, and influencers. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Global Perspectives</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding global trends and dynamics</li>
                    <li>Developing a global mindset and cultural intelligence</li>
                    <li>Building international relationships and networks</li>
                </ul>

                <h3 className={'text-xl py-2'}>Innovation and Creativity</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing innovative thinking and problem-solving skills</li>
                    <li>Building a culture of creativity and experimentation</li>
                    <li>Leveraging technology and data to drive innovation</li>
                </ul>

                <h3 className={'text-xl py-2'}>Leadership and Influence</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing leadership and influence skills</li>
                    <li>Building a personal brand and reputation</li>
                    <li>Communicating effectively with global audiences</li>
                </ul>

                <h3 className={'text-xl py-2'}>Strategy and Planning</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing global strategies and plans</li>
                    <li>Building and managing global teams</li>
                    <li>Managing risk and uncertainty in a global context</li>
                </ul>

                <h3 className={'text-xl py-2'}>Communication and Collaboration</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective global communication skills</li>
                    <li>Building and managing global partnerships and collaborations</li>
                    <li>Leveraging technology to enhance global communication and collaboration</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Global Thought Leadership training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Leaders and professionals seeking to become globally recognized thought leaders</li>
                    <li>Innovators and entrepreneurs looking to expand their global reach</li>
                    <li>Organizations seeking to build a global presence and reputation</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Develop a global mindset and cultural intelligence</li>
                    <li>Innovate and solve complex problems</li>
                    <li>Lead and influence global teams and audiences</li>
                    <li>Develop and implement global strategies and plans</li>
                    <li>Communicate and collaborate effectively with global stakeholders</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}