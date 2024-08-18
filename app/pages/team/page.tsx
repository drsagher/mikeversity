import DrElizabethLucas from '@/public/team/DrElizabethLucas.jpeg';
import CalebTimilehinSamuel from '@/public/team/CalebTimilehinSamuel.jpeg';
import DrLaKishaJames from '@/public/team/DrLaKishaJames.jpeg';
import DrMadhviBorse from '@/public/team/DrMadhviBorse.jpeg';
import DrRosalindWillis from '@/public/team/DrRosalindWillis.jpeg';
import DrShawnSaxton from '@/public/team/DrShawnSaxton.jpeg';
import HerdianaDewiNurfika from '@/public/team/HerdianaDewiNurfika.jpeg';
import LikaOkhanashvili from '@/public/team/LikaOkhanashvili.jpeg';
import TeklaKiparoidze from '@/public/team/TeklaKiparoidze.jpeg';
import ChanieMessinger  from '@/public/team/ChanieMessinger.jpg';
import SHAHIDIQBAL  from '@/public/team/SHAHIDIQBAL.jpeg';
import DrAmb  from '@/public/team/DrAmb.png';
import DRANITA  from '@/public/team/DRANITA.png';
import IlonaParunakova  from '@/public/team/IlonaParunakova.png';
import DanelleBoyles  from '@/public/team/DanelleBoyles.jpeg';
import VeronicaRozenfeld  from '@/public/team/VeronicaRozenfeld.jpeg';
import LayalGhaddar  from '@/public/team/LayalGhaddar.png';
import MahaShhadeh  from '@/public/team/MahaShhadeh.png';
import DrHCK  from '@/public/team/DrHCK.jpg';
import MJTolan from '@/public/team/MJTolan.jpg';
import DrAntoinette from '@/public/team/DrAntoinette.jpg';
import SonalJhajj from '@/public/team/SonalJhajj.jpg';
import Agata from '@/public/team/Agata.jpg';
import SusanMahgouub from '@/public/team/SusanMahgouub.jpg';

import Image from "next/image";

export default function TeamPage(){
    return (
        <div className={'container mx-auto flex flex-col items-center justify-center py-6'}>
            <p className={'text-lg md:text-3xl font-bold text-center py-2 lg:py-10 uppercase'}>Our Team</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-6 px-6 '}>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DrElizabethLucas} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Prof. Dr. Queen Elizabeth Lucas-Afolalu</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Global Inspirational and Transformational Speaker and Certified Mentor and Trainer and Global
                        Transformational Leaders and Advisor, Youth Mentor and Entrepreneur.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United Kingdom</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DrRosalindWillis} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Dr. Rosalind Willis</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Dr. Rosalind is a highly esteemed Birthing Purpose Coach, award-winning international speaker, and author.
                        As the USA Country Director for IIU, she is a sought-after Global Transformational Speaker, renowned for her expertise and inspiring presentations
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={ChanieMessinger} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Dr. Chanie Messinger</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Dr. Chanie Messinger is a multifaceted professional, exceling as an occupational therapist, inspirational speaker, published author, empowerment coach,
                        dedicated researcher, and esteemed professor.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={LikaOkhanashvili} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Lika Okhanashvili</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Lika Okhanashvili is a versatile business leader, with expertise in training, marketing, and consulting. She founded and directs Key Consulting, and holds leadership positions as President of the International Association of Global Education,
                        and as a respected lecturer at the International Black Sea University and the Academy of Information Technology.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={TeklaKiparoidze} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Tekla Kiparoidze</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Through her involvement in Erasmus+ and ISCR initiatives, Tekla has expanded her skill set and gained profound insights. Driven by a passion for leadership,
                        she has guided and empowered young leaders,
                        further developing her expertise and dedication to fostering leadership excellence.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DrLaKishaJames} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Dr. LaKisha James</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Dr. LaKisha James is a dynamic and influential figure, excelling as a journalist, global speaker, and international bestselling author. Her popular show &apos;Talks with LaKisha&apos; features insightful
                        discussions and inspiring stories.
                        As a mentor, she guides individuals in realizing their aspirations, sharing her wealth of knowledge and experience to make a lasting difference.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DrMadhviBorse} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Dr. Madhvi Borse</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Dr. Madhvi Borse is a distinguished educationist, celebrated author, and sought-after international speaker, renowned for her outstanding
                        contributions to the field of education. Her exceptional achievements have been recognized with numerous prestigious national and international
                        awards, records, medals, and honorary doctorates, solidifying her position as a leading authority in education.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>India</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DrShawnSaxton} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Dr. Shawn Saxton </h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Dr. Shawn Saxton is a multifaceted expert, combining his expertise as a Certified Human Rights Consultant with his skills as a Certified Transitional
                        Life Coach, and further solidifying his impact as a four-time bestselling author, inspiring and empowering individuals worldwide.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={HerdianaDewiNurfika} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Herdiana Dewi Nurfika</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Herdiana Dewi Nurfika is a visionary entrepreneur and coach, leading Bliss Education Center, Brancy Firm, and HDN STUFF. With multiple certifications,
                        she empowers individuals and businesses, combining business expertise with personal growth coaching to drive success.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Indonesia</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={CalebTimilehinSamuel} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Caleb Timilehin Samuel</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Renowned global trainer and speaker, sought after for expertise in leadership development, having empowered over 1000 emerging young leaders and seasoned executives with
                        transformative training and keynote addresses on leadership principles, earning numerous awards for exceptional impact.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Nigeria</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DrAmb} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Dr. Amb Omotola Sobowale Lagos</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Meet Dr. Amb Omotola Sobowale Lagos, a dynamic and influential figure, wearing multiple hats as a global trainer, educator, educationist, facilitator, psychologist,
                        international speaker, coach, mentor, ambassador, and leadership development expert, dedicated to unlocking human potential and driving career success.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Nigeria</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={VeronicaRozenfeld} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Veronica Rozenfeld</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Veronica Rozenfeld is a transformative speaker and clarity mentor, empowering individuals to achieve breakthroughs and momentum in their personal
                        and professional lives. Through her expertise in clarity and energy work, Veronica guides business owners in unlocking their full potential,
                        overcoming obstacles, and cultivating a clear vision for success.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DanelleBoyles} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Danelle Boyles</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Meet Danelle Boyles, a dynamic and heart-centered individual from the United States, who seamlessly integrates her passions as a mother, educator,
                        holistic practitioner, and quantum consciousness coach. Through her multifaceted approach, Danelle empowers others to embrace their wholeness,
                        expand their consciousness, and live a more authentic, vibrant life.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={IlonaParunakova} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Ilona Parunakova</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Ilona Parunakova is a powerhouse in the realm of motivational speaking and personal growth, delivering inspiring messages with the confidence and expertise of a renowned
                        TEDx Speaker, celebrated Author, and sought-after Coach, captivating global audiences with her transformative presence and wisdom.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DRANITA} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>DR. ANITA C. POWELL</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Rev. Dr. Anita C. Powell, Msc.D., is a highly respected and accomplished spiritual authority, seamlessly integrating her talents as an Energy Poet,
                        Author, Metaphysical Educator, Speaker, and Advocate, to inspire, educate, and empower individuals on their journey of self-discovery and enlightenment.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={SHAHIDIQBAL} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>SHAHID IQBAL</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Shahid Iqbal is a distinguished trainer and subject matter expert, specializing in Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT).
                        He provides cutting-edge training solutions, equipping organizations and individuals with the expertise to prevent and detect financial crimes, and promote global financial security.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={LayalGhaddar} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Layal Ghaddar</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Passionate educator, advocate, and leader dedicated to empowering others through knowledge and driving positive change in education. With expertise in mentoring,
                        consulting, and project management, I fuel transformative learning experiences, champion equitable access to quality education, and inspire a better future for all as a
                        published author, influential speaker, and director of Layal Global Innovative Learning Hub
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Lebanon</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={MahaShhadeh} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Maha Shhadeh</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Renowned Training Consultant, Education Leader, and AI Expert with 20+ years of experience. She empowers individuals through effective communication
                        and professional development, serving as President of IIU-ISDC and Ambassador for British Council, eTwinning, and Global School Alliance, driving transformative
                        change in education and global learning initiatives.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Lebanon </p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DrHCK} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Dr. (h.c.) Khomotšo Malete-Mashalane</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        delegate for the Global Chamber of Business Leaders (GCBL) in South Africa, she plays a pivotal role in advancing gender equality on an international scale.
                        With a Master’s degree from Edinburgh Business School, she has garnered worldwide recognition as a speaker, thought leader, and author
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>South Africa </p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={MJTolan} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Coach MJ Tolan</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Leadership Facilitator , Author, TEDx Speaker, Co- Founder of Children&apos;s Charity  Time4sharing.org
                        Chief Empowerment Officer @ Firepowertalent.com
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States </p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={DrAntoinette} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Dr. Antoinette Carole Grace Mbarga
                    </h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Dr. Antoinette Carole Grace Mbarga is an awards winning Certified Global Trainer, Human Rights Advocate, and community activist with a heartfelt visible commitment to serve the world at local and global level.
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States </p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={SonalJhajj} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Mrs. Sonal Jhajj
                    </h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Founder and Creative Director,
                        Metamorphosis,
                        Award Winning Editor/ Global Educationist,
                        Ecce Impactor/ Academic Consultant/ Literary Expert
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>India</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Agata} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Agata Smolarek </h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Attorney at Law, Humanitarian, CEO of Global Business & Law LTD
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>London</p>
                </div>
                {/* */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={SusanMahgouub} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Susan Mahgouub
                    </h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        M.Ed , Liverpool John moorse university,
                        CELTA certified teacher, Cambridge University,
                        A certified teacher trainer, Ain Shams university.
                        Instructor of English language and literature
                        Educational Conference organizer
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Egypt</p>
                </div>

            </div>
        </div>
    )
}