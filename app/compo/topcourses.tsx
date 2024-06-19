import Image from "next/image";
import PerDev from '../../public/resources/pdev.jpg';
import Sales from '../../public/resources/sales.jpg';
import Business from '../../public/resources/business.jpg';
import TimeManage from '../../public/resources/timeman.jpg';
import Leaders from '../../public/resources/leaders.jpg';
import Edu from '../../public/resources/edu.jpg';

export default function TopCoursesComponent(){
    const courses =[
        {id:1, name:'MOTIVATION', pic:PerDev, pageLink:'#',
            description:'Unleash Your Potential! Discover the secrets to staying motivated and driven. Learn how to set goals, overcome obstacles, and cultivate a winning mindset. Get ready to unlock your inner strength and achieve your dreams'},
        {id:2, name:'ENGLISH PROFICIENCY', pic:Sales, pageLink:'#',
            description:'Improve Your English, Expand Your Horizons! Develop your reading, writing, speaking, and listening skills with our comprehensive English proficiency course. Enhance your vocabulary, grammar, and pronunciation to communicate confidently and effectively in personal and professional settings. Achieve your goals and connect with the world'},
        {id:3, name:'CORPORATE', pic:Business, pageLink:'#',
            description:'Take Your Business to the Next Level! Enhance your professional skills and transform your organization with our corporate training program. Learn effective communication, leadership, and management strategies to drive productivity, innovation, and success. Empower yourself and your team to achieve exceptional results and stay ahead in the competitive market'},
        {id:4, name:'SUCCESS', pic:TimeManage, pageLink:'#',
            description:'Unlock Your Full Potential! Discover the secrets to achieving success and living your best life. Learn how to set goals, overcome obstacles, and cultivate a winning mindset. Develop the skills and strategies you need to succeed in all areas of your life and become the best version of yourself'},
        {id:5, name:'LEADERSHIP', pic:Leaders, pageLink:'#',
            description:'Unleash Your Leadership Potential! Develop the skills and confidence to inspire, motivate, and lead others to success. Learn effective communication, strategic thinking, and decision-making techniques to drive results and achieve your vision. Become the leader you were meant to be and make a lasting impact'},
     {id:6, name:'EDUCATION', pic:Edu, pageLink:'#',
            description:'Education is the foundation of a prosperous and equitable society, and effective teaching is crucial for unlocking the potential of future generations. In this course, we will explore the principles, practices, and innovations in education that can help you become a more confident, competent, and compassionate educator.\n'},
    ]
    return (
        <div className={'container mx-auto flex flex-col items-center justify-center py-6'}>
            <p className={'text-lg md:text-3xl font-bold text-center py-2 lg:py-10 uppercase'}>Top 5 Courses</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-6 px-6 '}>
                {courses.map((link) => {
                    return (
                        <div key={link.id}
                             className={'grid grid-cols-1 transition ease-in-out delay-150 bg-gray-50 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 rounded-xl duration-300 '}>
                            <Image src={link.pic} alt={''} />
                            <h2 className={'font-bold text-md text-red-700'}>{link.name}</h2>
                            <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-indigo-950'}>{link.description}</p>
                        </div>

                    );
                })}

            </div>
        </div>
    )
}