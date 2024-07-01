import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function PowerOfBusinessMindset(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>The Power of Business Mindset</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a leading expert in The Power of Business Mindset Training, I help entrepreneurs, leaders, and professionals develop a winning mindset to achieve success and growth in their businesses. With extensive experience in business psychology, neuroscience, and peak performance coaching, I provide comprehensive training programs that empower clients to overcome limiting beliefs, build resilience, and cultivate a growth mindset. My expertise includes mindset reprogramming, goal-setting strategies, and high-performance habits, which enable individuals to think like successful entrepreneurs, make informed decisions, and drive business results. By applying these mindset shifts, clients can break through barriers, achieve their goals, and unlock their full potential, leading to increased productivity, profitability, and long-term success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Power of Business Mindset training expertise is designed to equip entrepreneurs, business leaders, and professionals with the skills and knowledge to develop a winning business mindset, overcome obstacles, and achieve success. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Developing a Business Mindset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the entrepreneurial mindset</li>
                    <li>Identifying and challenging limiting beliefs</li>
                    <li>Building confidence and self-belief</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting clear and achievable business goals</li>
                    <li>Developing a success plan and strategy</li>
                    <li>Overcoming obstacles and staying motivated</li>
                </ul>

                <h3 className={'text-xl py-2'}>Marketing and Sales</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding your target audience</li>
                    <li>Developing effective marketing and sales strategies</li>
                    <li>Building a strong brand and online presence</li>
                </ul>

                <h3 className={'text-xl py-2'}>Financial Management and Planning</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding financial statements and reports</li>
                    <li>Developing a financial plan and budget</li>
                    <li>Managing cash flow and making smart financial decisions</li>
                </ul>

                <h3 className={'text-xl py-2'}>Leadership and Team Building</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective leadership skills</li>
                    <li>Building and managing a high-performing team</li>
                    <li>Communicating effectively and building strong relationships</li>
                </ul>

                <h3 className={'text-xl py-2'}>Innovation and Adaptation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Staying ahead of the competition</li>
                    <li>Embracing innovation and change</li>
                    <li>Developing a culture of continuous improvement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Power of Business Mindset training expertise is ideal for</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Entrepreneurs and small business owners</li>
                    <li>Business leaders and managers</li>
                    <li>Professionals seeking career advancement</li>
                    <li>Anyone looking to develop a winning business mindset</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Develop a winning business mindset</li>
                    <li>Set and achieve business goals</li>
                    <li>Effectively market and sell products or services</li>
                    <li>Manage finances and make smart decisions</li>
                    <li>Lead and build a high-performing team</li>
                    <li>Embrace innovation and stay ahead of the competition</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}