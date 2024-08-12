import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function Motivation(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Motivation</h2>
                <p className={'text-lg leading-relaxed '}>
                    Motivation is the driving force that propels individuals to achieve their goals and pursue their passions. It is the spark that ignites the fire within, pushing us to strive for excellence and overcome obstacles. Motivation is what transforms ideas into action, and dreams into reality. It is the catalyst that helps us build resilience, develop a growth mindset, and cultivate a sense of purpose. When we are motivated, we become more focused, productive, and determined, leading to a sense of fulfillment and accomplishment. By tapping into our inner motivations and passions, we can unlock our full potential and achieve greatness, making motivation the key to unlocking our success and happiness.
                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Motivation training expertise is designed to help individuals and organizations overcome barriers to success and achieve their goals. Our training expertise includes:
                </p>
                <h3 className={'text-xl py-2'}>Identifying and Overcoming Limiting Beliefs</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Recognizing negative self-talk and limiting beliefs</li>
                    <li>Understanding how beliefs impact behavior and performance</li>
                    <li>Techniques for challenging and replacing limiting beliefs</li>
                </ul>

                <h3 className={'text-xl py-2'}>Setting and Achieving Goals</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the importance of clear goals</li>
                    <li>Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals</li>
                    <li>Creating action plans and overcoming obstacles</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Self-Confidence and Self-Esteem</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the impact of self-confidence on performance</li>
                    <li>Identifying and challenging negative self-talk</li>
                    <li>Building self-confidence through positive affirmations and self-care</li>
                </ul>

                <h3 className={'text-xl py-2'}>Understanding Motivation and Drive</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the different types of motivation (intrinsic and extrinsic)</li>
                    <li>Identifying personal motivators and drivers</li>
                    <li>Using motivation to achieve goals and overcome obstacles</li>
                </ul>

                <h3 className={'text-xl py-2'}>Developing a Growth Mindset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the concept of a growth mindset</li>
                    <li>Recognizing and challenging fixed mindset thinking</li>
                    <li>Embracing challenges and learning from failure</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Resilience and Perseverance</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the importance of resilience and perseverance</li>
                    <li>Developing coping strategies for dealing with setbacks and obstacles</li>
                    <li>Building a support network and seeking help when needed</li>
                </ul>

                <h3 className={'text-xl py-2'}>Creating a Positive Mindset and Attitude</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the impact of attitude on performance and well-being</li>
                    <li>Identifying and challenging negative thought patterns</li>
                    <li>Building a positive mindset through gratitude and positive self-talk</li>
                </ul>
                <p className={'text-lg leading-relaxed py-2 '}>
                    Our Motivation training expertise is designed to help individuals and organizations overcome barriers to success and achieve their goals. By building motivation, confidence, and resilience, individuals can unlock their full potential and achieve success in all areas of life.
                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}