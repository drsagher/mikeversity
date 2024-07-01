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

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Reset of Mindset Training Expertise (Success, Business, Life, Relationship)</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a seasoned trainer, I possess expertise in Reset of Mindset Training, helping individuals reboot their thinking, overcome limiting beliefs, and adopt a success-oriented mindset. Through my training programs, participants learn how to challenge and replace negative thought patterns, cultivate a growth mindset, and develop a winning attitude. By mastering the art of mindset reset, individuals can break through barriers to success, achieve their goals, and transform their business, life, and relationships. My training expertise empowers individuals to shift from a fixed to a growth mindset, build resilience, and develop the mental toughness to overcome obstacles and achieve remarkable results, leading to a life of purpose, fulfillment, and lasting success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Reset of Mindset training expertise is designed to help individuals reset their mindset and achieve success in four key areas: Success, Business, Life, and Relationship. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Success Mindset Reset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and challenging limiting beliefs</li>
                    <li>Developing a growth mindset and learning from failure</li>
                    <li>Building confidence and self-belief</li>
                    <li>Setting and achieving goals</li>
                </ul>

                <h3 className={'text-xl py-2'}>Business Mindset Reset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing an entrepreneurial mindset</li>
                    <li>Building a successful business strategy</li>
                    <li>Improving leadership and management skills</li>
                    <li>Increasing productivity and efficiency</li>
                </ul>

                <h3 className={'text-xl py-2'}>Life Mindset Reset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and pursuing passions and purpose</li>
                    <li>Building resilience and adaptability</li>
                    <li>Improving relationships and communication skills</li>
                    <li>Achieving work-life balance</li>
                </ul>

                <h3 className={'text-xl py-2'}>Relationship Mindset Reset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building healthy and fulfilling relationships</li>
                    <li>Improving communication and conflict resolution skills</li>
                    <li>Developing emotional intelligence and empathy</li>
                    <li>Building trust and intimacy</li>
                </ul>

                <h3 className={'text-xl py-2'}>This training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to improve their mindset and achieve success</li>
                    <li>Business leaders and entrepreneurs seeking to build a successful business</li>
                    <li>Those seeking to improve their relationships and communication skills</li>
                    <li>Anyone looking to reset their mindset and achieve their goals.</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identify and challenge limiting beliefs</li>
                    <li>Develop a growth mindset and learning from failure</li>
                    <li>Build confidence and self-belief</li>
                    <li>Set and achieve goals</li>
                    <li>Develop an entrepreneurial mindset</li>
                    <li>Build healthy and fulfilling relationships</li>
                    <li>Improve communication and conflict resolution skills</li>
                    <li>Achieve work-life balance</li>
                </ul>

                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Reset of Mindset training expertise is designed to provide individuals with the skills and knowledge to reset their mindset and achieve success in all areas of life. By challenging limiting beliefs, building confidence, and developing a growth mindset, individuals can overcome obstacles and achieve their goals.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}