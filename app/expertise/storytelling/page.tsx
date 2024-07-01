import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function StoryTelling(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Storytelling &quot;From Rags to Riches&quot; </h2>
                <p className={'text-lg leading-relaxed '}>
                    As a master storyteller and trainer, I help entrepreneurs, leaders, and individuals craft and share their own &apos;From Rags to Riches&apos; stories, inspiring and motivating others to overcome adversity and achieve success. With extensive experience in storytelling, narrative structure, and public speaking, I provide comprehensive training programs that guide clients in shaping their personal narratives, highlighting their struggles and triumphs, and conveying their message with authenticity and impact. My expertise includes story development, emotional connection techniques, and engaging delivery strategies, which enable individuals to share their stories with confidence, vulnerability, and persuasive power, inspiring others to embark on their own journey to success.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Storytelling &quot;From Rags to Riches&quot; training expertise is designed to equip individuals with the skills to craft and deliver inspiring stories of overcoming adversity and achieving success. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Understanding the Power of Storytelling</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>The science behind storytelling and its impact on the brain</li>
                    <li>How stories can inspire, motivate, and persuade</li>
                </ul>

                <h3 className={'text-xl py-2'}>Crafting Your Rags to Riches Story</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Identifying and structuring your personal story</li>
                    <li>Developing a compelling narrative and characters</li>
                    <li>Using descriptive language and sensory details</li>
                </ul>

                <h3 className={'text-xl py-2'}>Overcoming Adversity and Challenges</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Sharing struggles and setbacks in a relatable way</li>
                    <li>Highlighting resilience and determination</li>
                    <li>Showcasing growth and learning from failures</li>
                </ul>

                <h3 className={'text-xl py-2'}>Achieving Success and Triumph</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Describing moments of triumph and achievement</li>
                    <li>Highlighting key milestones and accomplishments</li>
                    <li>Inspiring others with your success story</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Delivery and Performance</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Using vocal techniques and body language to engage</li>
                    <li>Making eye contact and connecting with the audience</li>
                    <li>Using pauses and pacing for maximum impact</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Storytelling &quot;From Rags to Riches&quot; training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Entrepreneurs and business leaders seeking to inspire and motivate</li>
                    <li>Speakers and presenters looking to craft a compelling story</li>
                    <li>Individuals seeking to share their personal story and inspire others</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Craft a compelling &quot;rags to riches&quot; story</li>
                    <li>Inspire and motivate others with their story</li>
                    <li>Use storytelling to build connections and relationships</li>
                    <li>Develop a powerful personal brand and reputation</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}