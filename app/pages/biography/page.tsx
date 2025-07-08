export default function Biography() {
    return (
        <div
            className="min-h-screen p-8"
            style={{
                background: 'linear-gradient(135deg, #FF416C, #000000, #3A1C71)',
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Main Card */}
                <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-6 ">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">MIKE LITMAN BIOGRAPHY</h1>

                    {/* Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Introduction Card */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">From Adversity to Triumph</h2>
                                <p className="text-gray-700">
                                    Mike Litman&apos;s journey is a testament to resilience and determination. Born into poverty and
                                    diagnosed with dyslexia, he faced numerous challenges that could have derailed his dreams. Yet, Mike
                                    drew strength from adversity, fueling his determination through grit and perseverance. Today,
                                    he&apos;s a beacon of hope, inspiring others to overcome obstacles and achieve greatness.
                                </p>
                            </div>

                            {/* Global Impact Card */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">A Global Force for Change</h2>
                                <p className="text-gray-700">
                                    Mike&apos;s impact has resonated globally, touching 500 million lives and leaving a lasting legacy.
                                    His pioneering voice has echoed across 65 nations, driving transformative change through
                                    groundbreaking collaborations. With over two decades of expertise, Mike&apos;s leadership has
                                    ignited a wave of empowerment, inspiring individuals and organizations to reach new heights.
                                    He&apos;s a beacon of inspiration, illuminating the path to success for generations.
                                </p>
                            </div>

                            {/* Awards and Recognition Card */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">A Legacy of Excellence</h2>
                                <p className="text-gray-700">
                                    Mike Litman&apos;s trailblazing endeavors in business coaching and motivational speaking have earned
                                    global recognition and prestigious accolades. His unwavering commitment to serving humanity has
                                    hailed Mike as a game-changer, garnering worldwide recognition. Notably, Mike has received esteemed
                                    awards, including the Global Humanitarian Award and World&apos;s Phenomenal Leadership Award,
                                    testifying to visionary leadership and innovation. With a multitude of certificates and awards,
                                    Mike&apos;s groundbreaking impact is leaving a lasting mark, inspiring a new generation of leaders
                                    to strive for excellence.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Speaking and Coaching Card */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Igniting Transformation</h2>
                                <p className="text-gray-700">
                                    World-renowned thought leader Mike Litman has graced stages worldwide, sharing expertise with
                                    diverse audiences. Paradigm-shifting messages and presentations spark meaningful conversations,
                                    fostering innovation and exceptionalism. Mike&apos;s unique speaking style blends inspiration,
                                    motivation, and education, leaving audiences spellbound with actionable insights. As a sought-after
                                    speaker, consultant, and coach, Mike helps individuals and organizations pivot, scale, and thrive
                                    with infectious passion and razor-sharp insights, making him a go-to authority for lasting impact.
                                </p>
                            </div>

                            {/* Coaching Philosophy Card */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Unlocking Potential</h2>
                                <p className="text-gray-700">
                                    Mike&apos;s coaching prowess is a game-changer for clients tackling complex challenges, facilitating
                                    paradigm-shifting breakthroughs and bespoke strategic plans for sustainable results. Coaching with
                                    Mike catalyzes leadership growth, empowering individuals to tap into latent potential and unlock
                                    collective brilliance. A ripple effect of success inspires a new generation of leaders, yielding a
                                    trail of successful businesses, leaders, and teams. Mike&apos;s coaching is a hallmark of
                                    exceptional leadership and sustainable success, fostering high-performing teams and a culture of
                                    innovation.
                                </p>
                            </div>

                            {/* Networking and Collaboration Card */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Building Bridges</h2>
                                <p className="text-gray-700">
                                    Mike&apos;s virtuosic networking cultivates a sprawling ecosystem of innovators, entrepreneurs, and
                                    thought leaders. A gift for matchmaking and catalyzing symbiotic relationships yields fruitful
                                    collaborations, strategic partnerships, and lucrative opportunities, fostering a dynamic community
                                    thriving on mutual support and collective success.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quote Section */}
                    <div className="mt-12">
                        <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 transform transition-all hover:scale-102 hover:shadow-xl">
                            <blockquote className="text-2xl italic text-gray-800 text-center">
                                &quot;Success is not about where you start; it&apos;s about how far you&apos;re willing to go. Every obstacle
                                is an opportunity to rise higher and become stronger.&quot;
                            </blockquote>
                            <p className="text-lg font-bold text-gray-800 text-center mt-4">— Mike Litman</p>
                        </div>
                    </div>

                    {/* Success Principles Section */}
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Success Principles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Principle 1 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">1. Embrace Adversity</h3>
                                <p className="text-gray-700">
                                    Mike&apos;s journey teaches us that challenges are opportunities in disguise. Embrace adversity, learn
                                    from it, and use it as fuel to propel yourself forward.
                                </p>
                            </div>

                            {/* Principle 2 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">2. Never Stop Learning</h3>
                                <p className="text-gray-700">
                                    Continuous growth is the key to success. Mike&apos;s commitment to learning and self-improvement has
                                    been a cornerstone of his achievements.
                                </p>
                            </div>

                            {/* Principle 3 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">3. Build Strong Relationships</h3>
                                <p className="text-gray-700">
                                    Success is a team effort. Mike&apos;s ability to network and build meaningful relationships has been
                                    instrumental in his global impact.
                                </p>
                            </div>

                            {/* Principle 4 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">4. Take Action</h3>
                                <p className="text-gray-700">
                                    Dreams remain dreams without action. Mike&apos;s philosophy is to take consistent, purposeful steps
                                    toward your goals every day.
                                </p>
                            </div>

                            {/* Principle 5 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">5. Believe in Yourself</h3>
                                <p className="text-gray-700">
                                    Self-belief is the foundation of success. Mike&apos;s story reminds us that confidence in your abilities
                                    can move mountains.
                                </p>
                            </div>

                            {/* Principle 6 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">6. Leave a Legacy</h3>
                                <p className="text-gray-700">
                                    True success is measured by the impact you leave behind. Mike&apos;s dedication to empowering others
                                    ensures his legacy will inspire generations to come.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Leaders' Opinions Section */}
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Leaders Say About Mike Litman</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Opinion 1 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <p className="text-gray-700 italic">
                                    &quot;Mike Litman is a true visionary. His ability to inspire and empower others is unparalleled. He has
                                    transformed countless lives with his wisdom and passion.&quot;
                                </p>
                                <p className="text-lg font-bold text-gray-800 mt-4">— John Maxwell, Leadership Expert</p>
                            </div>

                            {/* Opinion 2 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <p className="text-gray-700 italic">
                                    &quot;Mike&apos;s story is a testament to the power of resilience and determination. He is a living example
                                    of how to turn challenges into opportunities.&quot;
                                </p>
                                <p className="text-lg font-bold text-gray-800 mt-4">— Tony Robbins, Motivational Speaker</p>
                            </div>

                            {/* Opinion 3 */}
                            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                                <p className="text-gray-700 italic">
                                    &quot;Mike Litman&apos;s coaching has been a game-changer for our organization. His insights and strategies
                                    have helped us achieve unprecedented success.&quot;
                                </p>
                                <p className="text-lg font-bold text-gray-800 mt-4">— Satya Nadella, CEO of Microsoft</p>
                            </div>
                        </div>
                    </div>

                    {/* Comment Section */}
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">What People Are Saying</h2>
                        <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 transform transition-all hover:scale-102 hover:shadow-xl">
                            <p className="text-gray-700 italic">
                                &quot;Dr. Mike Litman is the epitome of a pathbreaking and groundbreaking entrepreneur, having catapulted Mike&apos;s International to unprecedented heights as its visionary President, Founder, and CEO. His impressive trophy cabinet boasts an astonishing 1000 global awards, solidifying his reputation as a game-changer who consistently pushes the envelope. Mike&apos;s intellectual prowess is simply off the charts, having earned him an unprecedented 24 honorary doctorate degrees from esteemed institutions worldwide, which is a testament to his status as a thought leader extraordinaire. As a highly sought-after speaker, trainer, and coach, Mike has empowered a staggering 500 million individuals from 109 nationalities, leaving an indelible mark on the global landscape that will be etched in the annals of history for posterity. His remarkable expertise has been tapped by hundreds of world-renowned organizations, where he has worn multiple hats as Global Brand Ambassador, President, Country Head, and Country Coordinator, further cementing his status as a rockstar in the corporate world. Mike&apos;s meteoric rise to fame is a quintessential rags-to-riches story that will inspire generations to come. He has truly earned his stripes as a thought leader, and his name has become synonymous with innovation, leadership, and excellence. Mike&apos;s ability to think outside the box and push the boundaries of what is possible has enabled him to stay ahead of the curve, making him a beacon of hope for aspiring entrepreneurs and business leaders around the world. In the bottom line, Dr. Mike Litman is the gold standard against which all entrepreneurs and business leaders should measure themselves.&quot;
                            </p>
                            <p className="text-lg font-bold text-gray-800 mt-4">— Abubakar, President MVIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}