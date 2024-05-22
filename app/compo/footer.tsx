import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

export default function FooterComponent(){
    return(
            <div className="flex flex-col w-full ">
                <div className={'flex items-center justify-center gap-16 h-52 bg-red-900'}>
                    <Link className={'flex border-2 border-white px-32 py-10 text-white text-xl hover:bg-black'}
                          href="">Apply for Admission</Link>
                    <Link className={'flex border-2 border-white px-32 py-10 text-white text-xl hover:bg-black'}
                          href="">Fee Structure</Link>
                </div>
                <div className={'flex items-start justify-between px-24 py-10 bg-center w-full gap-2 bg-gradient-to-r from-cyan-700 to-indigo-300'}>
                    <div className={'flex flex-col text-gray-950 gap-4'}>
                        <h2 className={'text-lg font-bold uppercase'}>CITE OFFICES</h2>
                        <address className={'text-md '}>
                            USA: 150-02 88th AVE, APT E7, JAMAICA, NY 11432, USA
                        </address>
                        <address className={'text-md '}>
                            AUSTRAILIA: 2 Debbie Circuit Mount Druitt NSW 2770 AUSTRALIA
                        </address>
                        <address className={'text-md '}>
                            CHINA: 1304, Block E, Pingji Shangyuan Erqi, Xinhe Road No. 2, District, Shenzhen
                        </address>
                        <address className={'text-md '}>
                            PAKISTAN: 6 Fane Road, Opposite Best Western Hotel, Lahore, Pakistan                        </address>
                        <div className={'flex items-center gap-1'}>
                            {/*<MdOutlineMailOutline size={20}/><p>dr.sagher@gmail.com</p>*/}
                        </div>
                        <div>
                            <p className={'text-lg font-bold uppercase'}>Contact</p>
                            <p>USA +1(929) 563-0647, OMAN +96872270480
                            </p>
                        </div>

                    </div>
                    <div>
                        <h2 className={'text-lg font-bold uppercase'}>ENGLISH SPEAKING COURSES</h2>
                        <ul>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Speaking English Language Course For Kindergarten</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>American Sounds Training For Kids (Clear Speech Therapy Training)</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Standard American Accent Elimination Training</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Speaking English For Beginners</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Speaking English For Advanced Learners</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Corporate Standard American Accent Training</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Speaking English Program For Toddlers & Children</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Life Skills Training Program For Children And Youth</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>99 Rules Of Speaking English For Non-Native Speakers</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Advanced Standard American Accent Training Program For CEOs</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>English Communication Skills V-5</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Kinesthetic Langue (How To Read Minds)</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Body Language: How To Detect A Liar</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Body Language For Leaders</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Teachers Speaking English Language As Foreign Speakers</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Effective Communication Skills At Workplace And Home</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Public Speaking For Children, Teens And Adults</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={'text-lg font-bold uppercase '}>TRAINING EXPERTISE</h2>
                        <ul>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Train the Trainers</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Public Speaking</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Global Thought Leadership </Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Corporate Soft Skills Development</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Life performance Coaching</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Neurolinguistic Programing (NLP)</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Motivation</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Reset of Mindset (Success, Business, Life, Relationship)</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Key Note Speaking </Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>TedTalk Speaking</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Sales Motivation</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Motivation for Quantum Success</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Mastering Social Entrepreneurship</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Mastering Entrepreneurship in digital age</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Story Telling “from RAGS to RICHES STORIES</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Life Soft Skills Training Programs for Children</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Life & Success Coach</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Mastering Corporate Work Ethics development</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Mindfulness Practitioner</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Mental Technology Laws</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Transformational Leadership</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Maximization of Productivity</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Building High Self Esteem</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h2 className={'text-lg font-bold uppercase'}></h2>
                        <ul>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Conflict Management Happiness</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Coaching to improve employee performance</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Dealing with Change, Building Trust and Respect</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Managing effective meetings</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Motivating and encouraging employees</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Time and Energy Management</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Advanced Communication skills</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Emotional Intelligence</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Mindset for Transforming Business & Relationship</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Education Psychology: Advanced Learning and Teaching Methodologies</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Mindset For Transforming Business and Master Entrepreneurship</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Advanced Teachers Teaching Diploma</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Entrepreneurship Accelerator Program</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Be the Superpower</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Gender Equality Through Economic Empowerment</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Self Confidence</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Thriving Against All Odds: "How to Get Started”</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>The Power of Business mindset</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Developing Work Ethics in Digital Age</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Active Listening</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Team Building</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Personality Development</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Transformational Relationship</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Personality development</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Reset of Success mindset</Link></li>
                            <li className={'hover:underline hover:text-red-600'}><Link href={''}>Young and Teen Motivation</Link></li>

                        </ul>
                    </div>
                </div>
                <div
                    className="flex justify-between items-center bg-indigo-800 text-white py-6 px-10">
                    <div className="flex justify-start items-center gap-6 py-2 ">
                        <Link target="_blank" href="https://web.facebook.com/mvutus" className=" hover:text-pink-600">
                            <FaFacebook size={30}/>
                        </Link>
                        <Link target="_blank" href="https://www.youtube.com/@mvut" className="hover:text-pink-600">
                            <FaYoutube size={40}/>
                        </Link>
                        <Link target="_blank" href="https://chat.whatsapp.com/IpG66lObuHo3MUelWoH6tu"
                              className="hover:text-pink-600">
                            <FaWhatsapp size={40}/>
                        </Link>
                    </div>
                    &copy;2024 Mikeversity
                </div>

            </div>

    )
}