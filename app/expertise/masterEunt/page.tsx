import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function SoftSkills(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Mindset For Transforming Business and Master Entrepreneurship </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I possess expertise in cultivating a Mindset for Transforming Business and Master Entrepreneurship, empowering entrepreneurs and business leaders to think innovatively, adapt boldly, and lead with vision. Through my training programs, participants learn how to embrace a growth mindset, navigate uncertainty, and leverage disruptive thinking to drive business growth and success. By mastering the art of entrepreneurial leadership, individuals can develop the resilience, creativity, and strategic acumen to stay ahead of the curve, pioneer new markets, and build sustainable businesses that thrive in today&apos;s fast-paced and ever-changing landscape. My training expertise helps entrepreneurs and business leaders unlock their full potential, transform their businesses, and achieve remarkable success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Mindset for Transforming Business and Master Entrepreneurship training expertise is designed to equip entrepreneurs and business leaders with the mindset, skills, and strategies to transform their businesses and achieve mastery in entrepreneurship. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Enterprise Mindset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Embracing an entrepreneurial mindset</li>
                    <li>Thinking strategically and innovatively</li>
                    <li>Building resilience and adaptability</li>
                </ul>

                <h3 className={'text-xl py-2'}>Transformational Leadership</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a vision for transformation</li>
                    <li>Building a culture of innovation and experimentation</li>
                    <li>Leading with purpose and passion</li>
                </ul>

                <h3 className={'text-xl py-2'}>Disruptive Innovation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding disruptive technologies and business models</li>
                    <li>Identifying opportunities for innovation and growth</li>
                    <li>Developing a culture of continuous innovation</li>
                </ul>

                <h3 className={'text-xl py-2'}>Entrepreneurial Finance</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding financial management and funding options</li>
                    <li>Building a financial strategy for growth</li>
                    <li>Managing risk and cash flow</li>
                </ul>

                <h3 className={'text-xl py-2'}>Marketing and Sales Mastery</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a marketing and sales strategy</li>
                    <li>Building a strong brand and online presence</li>
                    <li>Driving revenue and growth</li>
                </ul>

                <h3 className={'text-xl py-2'}>Operational Excellence</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building efficient and effective operations</li>
                    <li>Streamlining processes and systems</li>
                    <li>Managing and leading high-performing teams</li>
                </ul>

                <h3 className={'text-xl py-2'}>Risk Management and Resilience</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and managing risk</li>
                    <li>Building resilience and adaptability</li>
                    <li>Developing a growth mindset</li>
                </ul>

                 <p className={'text-lg leading-relaxed py-2 '}>

                     Our Mindset for Transforming Business and Master Entrepreneurship training expertise is designed to provide entrepreneurs and business leaders with the skills and knowledge to transform their businesses, achieve mastery in entrepreneurship, and drive success in a rapidly changing business environment. By developing an enterprise mindset, leadership skills, and expertise in innovation, finance, marketing, operations, and risk management, entrepreneurs can build successful and sustainable businesses that drive growth and profitability.
                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}