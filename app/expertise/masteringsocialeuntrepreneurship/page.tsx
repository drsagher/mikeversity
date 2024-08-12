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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Mastering Social Entrepreneurship</h2>
                <p className={'text-lg leading-relaxed '}>
                    Mastering Social Entrepreneurship is a transformative training program designed to equip individuals with the skills, knowledge, and mindset to create sustainable and impactful social ventures. Through a combination of interactive workshops, expert mentorship, and real-world case studies, participants will learn how to identify and address pressing social and environmental challenges, develop innovative solutions, and build scalable and resilient organizations. Our program covers key topics such as social impact measurement, funding strategies, marketing and branding, and leadership development, providing a comprehensive toolkit for success in the social entrepreneurship ecosystem. Whether you&apos;re a seasoned entrepreneur or just starting out, Mastering Social Entrepreneurship will empower you to turn your passion into purpose and create a lasting difference in the world.
                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Mastering Social Entrepreneurship training expertise is designed to equip individuals and organizations with the skills and knowledge needed to succeed in the social entrepreneurship landscape. Our training expertise includes:                </p>
                <h3 className={'text-xl py-2'}>Social Entrepreneurship Fundamentals</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Defining social entrepreneurship and its importance</li>
                    <li>Understanding the difference between social entrepreneurship and traditional entrepreneurship</li>
                    <li>Exploring the various types of social entrepreneurship models</li>
                </ul>

                <h3 className={'text-xl py-2'}>Idea Generation and Development</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and exploring social impact ideas</li>
                    <li>Developing and refining social entrepreneurship ideas</li>
                    <li>Understanding the importance of innovation and creativity</li>
                </ul>

                <h3 className={'text-xl py-2'}>Social Impact Measurement and Evaluation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the importance of measuring social impact</li>
                    <li>Developing effective metrics and evaluation methods</li>
                    <li>Using data to drive decision-making and improvement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Social Entrepreneurship Business Planning</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a comprehensive business plan</li>
                    <li>Understanding financial management and sustainability</li>
                    <li>Identifying and securing funding opportunities</li>
                </ul>

                <h3 className={'text-xl py-2'}>Marketing and Communications for Social Impact</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective marketing and communications strategies</li>
                    <li>Understanding the importance of storytelling and branding</li>
                    <li>Using social media and digital channels for social impact</li>
                </ul>

                <h3 className={'text-xl py-2'}>Scaling and Growth for Social Entrepreneurship</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the challenges and opportunities of scaling</li>
                    <li>Developing strategies for sustainable growth</li>
                    <li>Building effective partnerships and collaborations</li>
                </ul>

                <h3 className={'text-xl py-2'}>Social Entrepreneurship Leadership and Management</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective leadership and management skills</li>
                    <li>Understanding the importance of teamwork and collaboration</li>
                    <li>Building a strong and diverse team</li>
                </ul>

                <h3 className={'text-xl py-2'}>Social Impact Investing and Funding</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the social impact investing landscape</li>
                    <li>Identifying and securing funding opportunities</li>
                    <li>Developing effective pitches and proposals</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Mastering Social Entrepreneurship training expertise is designed to provide individuals and organizations with the skills and knowledge needed to succeed in the social entrepreneurship landscape. By developing a comprehensive understanding of social entrepreneurship, individuals can create sustainable and impactful social ventures that drive positive change.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}