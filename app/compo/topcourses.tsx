import Image from "next/image";
import PerDev from '../../public/resources/pdev.jpg';
import Sales from '../../public/resources/sales.jpg';
import Business from '../../public/resources/business.jpg';
import TimeManage from '../../public/resources/timeman.jpg';
import Leaders from '../../public/resources/leaders.jpg';

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
    ]
    return (
        <div className={'flex flex-col items-center justify-center py-10'}>
            <p className={'text-3xl font-bold text-center py-2 uppercase'}>Top 5 Courses</p>
            <div className={'flex sm:flex-col lg:flex-row justify-center items-center gap-6 py-10 px-6'}>
                {courses.map((link) => {
                    return (
                        <div key={link.id}
                             className={'flex flex-col w-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-200 p-2'}>
                            <Image src={link.pic} alt={''} />
                            <h2 className={'font-bold text-xl text-red-700'}>{link.name}</h2>
                            <p className={'text-lg text-indigo-950'}>{link.description}</p>
                        </div>

                    );
                })}

            </div>
        </div>
    )
}