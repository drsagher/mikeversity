import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function BuildingSelfEsteem(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Building High Self-Esteem</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a renowned expert in Building High Self-Esteem Training, I empower individuals to break free from self-doubt, build unshakeable confidence, and unlock their full potential. With extensive experience in cognitive psychology, neuroscience, and personal development, I provide comprehensive training programs that help clients identify and challenge limiting beliefs, develop a growth mindset, and cultivate a positive self-image. My expertise includes evidence-based techniques such as cognitive-behavioral therapy, self-compassion training, and mindfulness-based interventions, which enable individuals to overcome self-criticism, build resilience, and develop a strong sense of self-worth. By applying these strategies, clients can transform their lives, achieve their goals, and live with purpose, confidence, and joy, leading to a more fulfilling and impactful existence.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Building High Self-Esteem training expertise is designed to equip individuals with the skills and knowledge to develop and maintain a positive self-image, build confidence, and achieve their goals. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Understanding Self-Esteem</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Defining self-esteem and its importance</li>
                    <li>Identifying the sources of self-esteem</li>
                    <li>Understanding the impact of self-esteem on daily life</li>
                </ul>

                <h3 className={'text-xl py-2'}>Identifying and Challenging Limiting Beliefs</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Recognizing negative self-talk and limiting beliefs</li>
                    <li>Understanding the impact of limiting beliefs on self-esteem</li>
                    <li>Developing strategies to challenge and overcome limiting beliefs</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Self-Acceptance and Self-Compassion</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Practicing self-acceptance and self-compassion</li>
                    <li>Developing a growth mindset and learning from failure</li>
                    <li>Building resilience and adaptability</li>
                </ul>

                <h3 className={'text-xl py-2'}>Developing a Positive Self-Image</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and challenging negative self-talk</li>
                    <li>Building a positive self-image through affirmations and visualization</li>
                    <li>Developing a confident and assertive communication style</li>
                </ul>

                <h3 className={'text-xl py-2'}>Building Confidence and Self-Esteem</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing a sense of purpose and direction</li>
                    <li>Building self-confidence through goal-setting and achievement</li>
                    <li>Developing a resilient mindset and bouncing back from setbacks</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Building High Self-Esteem training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Individuals seeking to build their self-esteem and confidence</li>
                    <li>Those struggling with negative self-talk and limiting beliefs</li>
                    <li>Anyone seeking to develop a positive self-image and achieve their goals</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand the importance of self-esteem and its impact on daily life</li>
                    <li>Identify and challenge limiting beliefs</li>
                    <li>Build self-acceptance and self-compassion</li>
                    <li>Develop a positive self-image and confident communication style</li>
                    <li>Build confidence and self-esteem through goal-setting and achievement</li>
                    <li>Develop a resilient mindset and bounce back from setbacks</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}