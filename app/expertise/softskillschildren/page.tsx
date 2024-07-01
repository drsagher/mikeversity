import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function SoftSkillsChildren(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Life Soft Skills Training Programs for Children </h2>
                <p className={'text-lg leading-relaxed '}>
                    Life Soft Skills Training Programs for Children are specially designed to empower young minds with essential life skills, fostering their personal growth, social development, and emotional intelligence. These programs focus on building confidence, self-awareness, and resilience in children, helping them navigate the challenges of childhood and adolescence. Through interactive and engaging activities, children learn valuable skills such as effective communication, problem-solving, teamwork, and time management, preparing them for success in school and beyond. By developing these critical soft skills, children become better equipped to handle emotions, build strong relationships, and make informed decisions, laying the foundation for a happy, healthy, and fulfilling life. By investing in Life Soft Skills Training Programs, parents and educators can give children the tools they need to thrive and reach their full potential.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Life Soft Skills Training Programs for Children training expertise is designed to equip children with essential life skills to succeed in personal and professional life. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Self-Awareness and Confidence Building</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding emotions and developing emotional intelligence</li>
                    <li>Building self-confidence and self-esteem</li>
                    <li>Developing a growth mindset and resilience</li>
                </ul>

                <h3 className={'text-xl py-2'}>Effective Communication and Interpersonal Skills</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing verbal and non-verbal communication skills</li>
                    <li>Building strong relationships and friendships</li>
                    <li>Understanding and managing conflict</li>
                </ul>

                <h3 className={'text-xl py-2'}>Problem-Solving and Critical Thinking</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing critical thinking and analytical skills</li>
                    <li>Learning to approach problems with creativity and innovation</li>
                    <li>Building decision-making and problem-solving skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>Time Management and Organization</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding the importance of time management</li>
                    <li>Developing effective time management skills</li>
                    <li>Building organization and prioritization skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>Leadership and Teamwork</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing leadership skills and understanding</li>
                    <li>Building effective teamwork and collaboration skills</li>
                    <li>Understanding and appreciating diversity and inclusivity</li>
                </ul>

                <h3 className={'text-xl py-2'}>Emotional Intelligence and Empathy</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing emotional intelligence and understanding</li>
                    <li>Building empathy and compassion for others</li>
                    <li>Understanding and managing emotions in self and others</li>
                </ul>

                <h3 className={'text-xl py-2'}>Coping with Stress and Anxiety</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding and managing stress and anxiety</li>
                    <li>Developing healthy coping mechanisms and self-care habits</li>
                    <li>Building resilience and adaptability</li>
                </ul>

                           <p className={'text-lg leading-relaxed py-2 '}>
                               Our Life Soft Skills Training Programs for Children training expertise is designed to provide children with essential life skills to succeed in personal and professional life. By developing self-awareness, effective communication, problem-solving, and other essential skills, children can build a strong foundation for future success and well-being.                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}