import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function SelfConfidence(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Self Confidence</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a Self Confidence Training expert, I empower individuals to break through self-doubt, build unshakeable confidence, and unlock their full potential. With extensive experience in human psychology, neuroscience, and personal development, I provide comprehensive training programs that help clients identify and challenge limiting beliefs, develop a growth mindset, and cultivate a positive self-image. My expertise includes confidence-building strategies, self-awareness techniques, and resilience development, which enable individuals to overcome fear, take bold action, and achieve their goals with clarity and purpose. By applying these self-confidence skills, clients can transform their lives, build stronger relationships, and achieve success in their personal and professional endeavors.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Self Confidence training expertise is designed to equip individuals with the skills and mindset to develop unshakeable self-confidence, overcome self-doubt, and achieve their goals. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Identifying and Challenging Limiting Beliefs</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the sources of self-doubt and negative self-talk</li>
                    <li>Recognizing and challenging limiting beliefs and assumptions</li>
                    <li>Replacing negative thoughts with empowering ones</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Self-Awareness and Self-Acceptance</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a growth mindset and self-awareness</li>
                    <li>Practicing self-acceptance and self-compassion</li>
                    <li>Embracing strengths and weaknesses</li>
                </ul>

                <h3 className={'text-xl py-2'}>Developing a Positive Mindset</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the power of positive thinking and affirmations</li>
                    <li>Developing a positive and optimistic mindset</li>
                    <li>Overcoming negative thoughts and emotions</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Resilience and Coping Skills</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing resilience and coping skills</li>
                    <li>Learning to handle failure and setbacks</li>
                    <li>Building a support network and community</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication and Assertiveness</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing effective communication and assertiveness skills</li>
                    <li>Expressing oneself confidently and clearly</li>
                    <li>Setting boundaries and saying no</li>
                </ul>

                <h3 className={'text-xl py-2'}>Goal Setting and Achievement</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Setting and achieving goals with confidence</li>
                    <li>Developing a growth mindset and learning from failure</li>
                    <li>Celebrating successes and progress</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Self Confidence training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to overcome self-doubt and build confidence</li>
                    <li>Leaders and managers looking to develop their leadership presence</li>
                    <li>Anyone seeking to achieve their goals and reach their full potential</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identify and challenge limiting beliefs and negative self-talk</li>
                    <li>Develop self-awareness, self-acceptance, and a positive mindset</li>
                    <li>Build resilience and coping skills</li>
                    <li>Communicate effectively and assertively</li>
                    <li>Set and achieve goals with confidence</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}