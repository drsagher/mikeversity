import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function TeacherTraining(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Advanced Teacher&apos;s Teaching Diploma</h2>
                <p className={'text-lg leading-relaxed '}>
                    As an expert in Advanced Teachers Teaching Diploma Training, I empower educators to elevate their teaching skills and become exceptional instructors. With extensive experience in teacher training, curriculum development, and instructional design, I provide comprehensive training programs that enhance teachers&apos; knowledge, skills, and practices. My expertise includes cutting-edge teaching methodologies, classroom management strategies, and assessment techniques, which enable teachers to create engaging lessons, differentiate instruction, and foster a supportive learning environment. By applying these advanced teaching techniques, educators can improve student outcomes, increase learner engagement, and stay up-to-date with best practices in education, leading to a more effective and rewarding teaching experience.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Advanced Teachers Teaching Diploma training expertise is designed to equip teachers with advanced skills and knowledge to excel in their profession. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Advanced Teaching Methods</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing innovative and interactive lesson plans</li>
                    <li>Integrating technology into the classroom</li>
                    <li>Differentiating instruction for diverse learners</li>
                </ul>

                <h3 className={'text-xl py-2'}>Classroom Management</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Creating a positive and inclusive learning environment</li>
                    <li>Managing student behavior and discipline</li>
                    <li>Building relationships with students and parents</li>
                </ul>

                <h3 className={'text-xl py-2'}>Curriculum Design</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Developing and implementing effective curriculum plans</li>
                    <li>Aligning curriculum with state and national standards</li>
                    <li>Integrating cross-disciplinary approaches</li>
                </ul>

                <h3 className={'text-xl py-2'}>Assessment and Evaluation</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Designing and implementing effective assessments</li>
                    <li>Evaluating student progress and performance</li>
                    <li>Using data to inform instruction</li>
                </ul>

                <h3 className={'text-xl py-2'}>Leadership and Collaboration</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Building effective teams and collaborations</li>
                    <li>Leading professional development and mentoring</li>
                    <li>Fostering a culture of continuous improvement</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Advanced Teachers Teaching Diploma training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Experienced teachers seeking to enhance their skills</li>
                    <li>Teachers seeking leadership roles or specialization</li>
                    <li>Educators wanting to stay current with best practices</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Design and deliver advanced lesson plans</li>
                    <li>Effectively manage the classroom and student behavior</li>
                    <li>Develop and implement effective curriculum plans</li>
                    <li>Assess and evaluate student progress and performance</li>
                    <li>Lead and collaborate with colleagues and teams</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}