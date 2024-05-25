import Image from "next/image";
import PerDev from '../../public/resources/pdev.jpg';
import Sales from '../../public/resources/sales.jpg';
import Business from '../../public/resources/business.jpg';
import TimeManage from '../../public/resources/timeman.jpg';
import Leaders from '../../public/resources/leaders.jpg';

export default function TopCoursesComponent(){
    const courses =[
        {id:1, name:'Personal Development', pic:PerDev, pageLink:'#',
            description:'Discover your strengths, build confidence, and achieve your goals with our transformative personal development course. Learn effective strategies for self-improvement, productivity, and resilience to succeed in all areas of your life.'},
        {id:2, name:'Sales', pic:Sales, pageLink:'#',
            description:'Master the art of sales with our interactive training program. Learn proven strategies to build rapport, identify customer needs, and negotiate successfully. Develop the skills to exceed targets and drive business growth'},
        {id:3, name:'Business', pic:Business, pageLink:'#',
            description:'Develop the skills to thrive in business with our comprehensive training program. Learn effective strategies for leadership, marketing, finance, and productivity to drive growth, innovation, and profitability. Take your business to the next level!'},
        {id:4, name:'Time Management', pic:TimeManage, pageLink:'#',
            description:'Learn how to prioritize, organize, and maximize your productivity with our time management training. Discover effective techniques to minimize distractions, manage stress, and achieve your goals with clarity and focus'},
        {id:5, name:'Leadership', pic:Leaders, pageLink:'#',
            description:'Develop the skills to inspire, motivate, and lead with confidence. Learn effective strategies for communication, decision-making, and team building to drive success and achieve your vision.'},
    ]
    return (
        <div className={'flex flex-col items-center justify-center py-10'}>
            <p className={'text-2xl font-bold text-center'}>Top 5 Courses</p>
            <div className={'flex sm:flex-col lg:flex-row justify-center items-center gap-6 py-10 px-6'}>
                {courses.map((link) => {
                    return (
                        <div key={link.id}
                             className={'flex flex-col w-64 h-98 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-200 p-2'}>
                            <Image src={link.pic} alt={''} />
                            <h2 className={'font-bold text-lg text-indigo-950'}>{link.name}</h2>
                            <p className={'text-sm text-gray-950'}>{link.description}</p>
                            {/*<Link className={'hover:font-bold text-red-600 text-sm'} href={link.pageLink}>Read*/}
                            {/*    more...</Link>*/}
                        </div>

                    );
                })}

            </div>
        </div>
    )
}