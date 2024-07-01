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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Mastering Entrepreneurship in the Digital Age </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I possess expertise in Mastering Entrepreneurship in the Digital Age, empowering entrepreneurs and business leaders to navigate the rapidly evolving digital landscape. Through my training programs, participants learn how to harness the power of digital technologies, leverage social media and e-commerce platforms, and develop innovative marketing strategies to reach and engage their target audience. By mastering the skills and mindset required to succeed in the digital age, entrepreneurs can accelerate their business growth, stay ahead of the competition, and achieve lasting success. My training expertise equips entrepreneurs with the knowledge, tools, and network to thrive in today&apos;s fast-paced digital economy, from ideation to scaling and beyond.                </p>
                <p className={'text-lg leading-relaxed '}>
                    In today&apos;s fast-paced digital landscape, entrepreneurs need to stay ahead of the curve to succeed. Our Mastering Entrepreneurship in the Digital Age training expertise is designed to equip entrepreneurs with the skills and knowledge to thrive in this rapidly changing environment.                </p>

                <h3 className={'text-xl py-2'}>Our training expertise includes:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Digital Business Modeling</li>
                    <li>E-commerce and Online Marketplaces</li>
                    <li>Digital Marketing and Advertising</li>
                    <li>Social Media Strategy</li>
                    <li>Data Analytics and Insights</li>
                    <li>Cybersecurity and Online Protection</li>
                    <li>Digital Leadership and Innovation</li>
                </ul>

                <h3 className={'text-xl py-2'}>With our training, entrepreneurs will learn how to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Develop a digital business strategy</li>
                    <li>Leverage e-commerce and online marketplaces</li>
                    <li>Create effective digital marketing campaigns</li>
                    <li>Build a strong social media presence</li>
                    <li>Make data-driven decisions</li>
                    <li>Protect their business from cyber threats</li>
                    <li>Stay ahead of the competition with digital innovation</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Mastering Entrepreneurship in the Digital Age training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Entrepreneurs looking to start or grow a digital business</li>
                    <li>Small business owners seeking to expand their online presence</li>
                    <li>E-commerce entrepreneurs looking to improve their digital marketing skills</li>
                    <li>Anyone looking to stay ahead in the rapidly changing digital landscape</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will have the skills and knowledge to succeed in the digital age, including:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>A digital business strategy</li>
                    <li>A strong online presence</li>
                    <li>Effective digital marketing skills</li>
                    <li>A understanding of data analytics and insights</li>
                    <li>Knowledge of cybersecurity and online protection</li>
                    <li>A mindset for digital innovation and leadership</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}