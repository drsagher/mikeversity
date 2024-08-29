import BiographyImage from '@/public/biography.jpg'
import Image from "next/image";
export default function Biography(){
    return(
        <div className={'flex flex-col md:flex-row justify-center px-2 md:container md:mx-auto md:py-10'}>

            <div className={'flex flex-col leading-relaxed md:w-2/3'}>
                <h2 className={'text-xl font-bold py-4'}>MIKE LITMAN BIOGRAPHY</h2>

                <p>Mike Litman&apos;s journey is a testament to resilience and determination. Born into poverty and
                    diagnosed with dyslexia, he faced numerous challenges that could have derailed his dreams. Yet, Mike
                    drew strength from adversity, fueling his determination through grit and perseverance. Today,
                    he&apos;s a beacon of hope, inspiring others to overcome obstacles and achieve greatness.
                </p>
                <p>
                    Mike&apos;s impact has resonated globally, touching 500 million lives and leaving a lasting legacy.
                    His pioneering voice has echoed across 65 nations, driving transformative change through
                    groundbreaking collaborations. With over two decades of expertise, Mike&apos;s leadership has
                    ignited a wave of empowerment, inspiring individuals and organizations to reach new heights.
                    He&apos;s a beacon of inspiration, illuminating the path to success for generations.
                </p>
                <p>
                    Mike Litman&apos;s trailblazing endeavors in business coaching and motivational speaking have earned
                    global recognition and prestigious accolades. His unwavering commitment to serving humanity has
                    hailed Mike as a game-changer, garnering worldwide recognition. Notably, Mike has received esteemed
                    awards, including the Global Humanitarian Award and World&apos;s Phenomenal Leadership Award,
                    testifying to visionary leadership and innovation. With a multitude of certificates and awards,
                    Mike&apos;s groundbreaking impact is leaving a lasting mark, inspiring a new generation of leaders
                    to strive for excellence.
                </p>
                <p>
                    World-renowned thought leader Mike Litman has graced stages worldwide, sharing expertise with
                    diverse audiences. Paradigm-shifting messages and presentations spark meaningful conversations,
                    fostering innovation and exceptionalism. Mike&apos;s unique speaking style blends inspiration,
                    motivation, and education, leaving audiences spellbound with actionable insights. As a sought-after
                    speaker, consultant, and coach, Mike helps individuals and organizations pivot, scale, and thrive
                    with infectious passion and razor-sharp insights, making him a go-to authority for lasting impact.
                </p>
                <p>
                    Mike&apos;s coaching prowess is a game-changer for clients tackling complex challenges, facilitating
                    paradigm-shifting breakthroughs and bespoke strategic plans for sustainable results. Coaching with
                    Mike catalyzes leadership growth, empowering individuals to tap into latent potential and unlock
                    collective brilliance. A ripple effect of success inspires a new generation of leaders, yielding a
                    trail of successful businesses, leaders, and teams. Mike&apos;s coaching is a hallmark of
                    exceptional leadership and sustainable success, fostering high-performing teams and a culture of
                    innovation.
                </p>
                <p>
                    Mike&apos;s virtuosic networking cultivates a sprawling ecosystem of innovators, entrepreneurs, and
                    thought leaders. A gift for matchmaking and catalyzing symbiotic relationships yields fruitful
                    collaborations, strategic partnerships, and lucrative opportunities, fostering a dynamic community
                    thriving on mutual support and collective success.
                </p>
                <p>
                    Mike`&apos;s credo: every individual has latent potential for greatness, waiting to be unlocked.
                    He`&apos;s driven by a passion to leave a lasting impact, empowering individuals and organizations
                    to shatter limits, disrupt the status quo, and achieve unprecedented innovation and success.
                </p>
                <p>
                    Mike Litman&apos;s legacy is a testament to his profound impact, leaving a lasting mark on
                    individuals and organizations worldwide. Mike`s dedication to empowering others has sparked a wave
                    of transformation, generating countless success stories. As a trailblazing thought leader, Mike
                    continues to shape the future with innovative spirit, visionary insights, and passion, inspiring
                    generations to come.
                </p>
                <p>
                    My purpose is to empower individuals and organizations to reach new heights, shatter limits, and
                    achieve excellence. I believe everyone has the potential to make a lasting, positive impact and
                    I&apos;m dedicated to helping them unlock and unleash their full potential.
                </p>
                <h2 className={'font-bold py-4'}>Summary</h2>
                <p>
                    Mike Litman embodies excellence, driven by a passion to empower others to achieve great success. His
                    commitment to leaving a lasting legacy has sparked a wave of inspiration, transformation, and
                    triumph that resonates globally.
                </p>
            </div>
            <div className={'flex justify-center items-start md:w-1/3'}>
                <Image src={BiographyImage} alt={''} className={'h-72 w-auto border-4 border-red-700 rounded-2xl'} />
            </div>
        </div>
    )
}