import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function Accent(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack size={35}/></Link>
                <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                    ENGLISH SPEAKING COURSES
                </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Speaking English Program for Toddlers & Children</h2>
                <p className={'text-lg leading-relaxed '}>
                    Our English language programs for children are specially designed to provide a fun, interactive, and immersive learning experience for young minds. Our expertly trained instructors and carefully crafted curriculum cater to children of all ages and proficiency levels, from beginner to advanced. We understand that children learn best through play, so our programs incorporate engaging games, activities, and exercises that foster language development, creativity, and critical thinking. Our programs focus on building a strong foundation in reading, writing, speaking, and listening skills, while also promoting cultural awareness, social skills, and self-confidence. We offer various programs tailored to meet the unique needs of children, including English as a Second Language (ESL), English language enrichment, and exam preparation (e.g., Cambridge Young Learners). Our goal is to inspire a lifelong love of language learning, empowering children to become confident, effective communicators in a global world.
                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our English language programs for toddlers are specifically designed for children aged 2-4, providing a playful and interactive introduction to the English language. Our experienced instructors use songs, stories, games, and age-appropriate activities to create a nurturing and engaging environment, fostering a love for language learning from an early age. Our curriculum focuses on developing essential skills, including vocabulary building, phonological awareness, and basic sentence structures, while also promoting cognitive development, social skills, and creativity. We incorporate movement, art, and music to keep our young learners engaged and motivated, making language learning a fun and exciting experience. Our programs are tailored to meet the unique needs of toddlers, with small class sizes and a low teacher-to-student ratio, ensuring personalized attention and guidance. By introducing English language skills at a young age, we aim to lay the foundation for future language proficiency and a lifelong love of learning.
                </p>
                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack size={35}/>
                </Link>
            </div>

        </div>
    )
}