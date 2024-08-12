import { IoIosArrowRoundBack } from "react-icons/io"
import Link from "next/link";

export default function GenderEquality(){
    return(
        <div className={"bg-red-700 shadow-xl shadow-red-200 min-h-screen bg-cover bg-[url('../public/bgd3.jpg')] py-6 "}>
            <div className={'w-[80%] mx-auto bg-gray-100 shadow-md shadow-white px-6  py-6 rounded-2xl'}>

                    <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}> <IoIosArrowRoundBack  size={35}/></Link>
                    <h2 className={'flex items-center text-2xl font-bold uppercase text-indigo-900'}>
                        Training Expertise
                    </h2>

                <h2 className={'text-3xl font-bold py-4 text-red-700'}>Gender Equality Through Economic Empowerment Training</h2>
                <p className={'text-lg leading-relaxed '}>
                    As a specialist in Gender Equality Through Economic Empowerment Training, I equip individuals and organizations with the knowledge and skills to promote gender equality and empower women economically. With extensive experience in gender studies, economic development, and social justice, I provide comprehensive training programs that address gender gaps in education, employment, and entrepreneurship. My expertise includes gender-sensitive economic policy analysis, financial literacy training, and entrepreneurial skills development, which enable women to access resources, build resilience, and thrive in the economy. By applying these strategies, clients can bridge the gender divide, foster inclusive growth, and create a more equitable society where women and men have equal opportunities to succeed and prosper.                </p>
                <p className={'text-lg leading-relaxed '}>
                    Our Gender Equality Through Economic Empowerment training expertise is designed to equip individuals and organizations with the skills and knowledge to promote gender equality and empower women economically. Our training expertise includes:                </p>

                <h3 className={'text-xl py-2'}>Understanding Gender Equality</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Gender and development</li>
                    <li>Gender analysis and assessment</li>
                    <li>Gender-sensitive approaches</li>
                </ul>

                <h3 className={'text-xl py-2'}>Economic Empowerment of Women</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Women&apos;s economic rights and entitlements</li>
                    <li>Access to finance and credit</li>
                    <li>Entrepreneurship and business development</li>
                </ul>

                <h3 className={'text-xl py-2'}>Leadership and Decision-Making</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Women in leadership positions</li>
                    <li>Decision-making and problem-solving</li>
                    <li>Negotiation and communication skills</li>
                </ul>

                <h3 className={'text-xl py-2'}>Addressing Gender-Based Violence</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understanding gender-based violence</li>
                    <li>Prevention and response strategies</li>
                    <li>Support and resources for survivors</li>
                </ul>

                <h3 className={'text-xl py-2'}>Policy and Advocacy</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Gender-sensitive policy and legislation</li>
                    <li>Advocacy and campaigning for gender equality</li>
                    <li>Engaging men in gender equality efforts</li>
                </ul>

                <h3 className={'text-xl py-2'}>Our Gender Equality Through Economic Empowerment training expertise is ideal for:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Development professionals and practitioners</li>
                    <li>Gender and women&apos;s rights activists</li>
                    <li>Business and entrepreneurship leaders</li>
                    <li>Policy makers and advocates</li>
                </ul>

                <h3 className={'text-xl py-2'}>By the end of this training, participants will be able to:</h3>
                <ul className={'list-disc pl-10 leading-relaxed'}>
                    <li>Understand gender equality and its importance</li>
                    <li>Empower women economically and promote their rights</li>
                    <li>Lead and make decisions effectively</li>
                    <li>Address gender-based violence and support survivors</li>
                    <li>Advocate for gender-sensitive policies and legislation</li>
                </ul>

                <Link href={'/'} className={'flex hover:text-red-700 text-gray-400 '}>
                    <IoIosArrowRoundBack  size={35}/>
                </Link>
            </div>

        </div>
    )
}