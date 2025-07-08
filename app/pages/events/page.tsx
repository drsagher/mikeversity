import Image from "next/image";
import { FaCalendarAlt, FaNewspaper, FaUsers, FaGlobe, FaChartLine } from "react-icons/fa";

export default function NewsAndEventsPage() {
    return (
        <div
            className="min-h-screen p-8"
            style={{
                background: 'linear-gradient(135deg, #FF416C, #00B09B, #3A1C71)',
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="flex items-center gap-4 mb-12">
                    <FaNewspaper size={48} className="text-white" />
                    <h1 className="text-4xl font-bold text-white uppercase">News & Events</h1>
                </div>

                {/* Upcoming Events Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Event Card 1 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaCalendarAlt size={24} className="text-blue-600" />
                                <p className="text-lg font-bold text-gray-800">October 15, 2023</p>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Leadership Summit 2023</h3>
                            <p className="text-gray-700">
                                Join us for an inspiring day of leadership talks, workshops, and networking with industry experts.
                            </p>
                        </div>

                        {/* Event Card 2 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaCalendarAlt size={24} className="text-blue-600" />
                                <p className="text-lg font-bold text-gray-800">November 5, 2023</p>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Entrepreneurship Bootcamp</h3>
                            <p className="text-gray-700">
                                A 3-day intensive program designed to help aspiring entrepreneurs turn their ideas into successful businesses.
                            </p>
                        </div>

                        {/* Event Card 3 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaCalendarAlt size={24} className="text-blue-600" />
                                <p className="text-lg font-bold text-gray-800">December 10, 2023</p>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Innovation Forum</h3>
                            <p className="text-gray-700">
                                Explore the latest trends in innovation and technology with global thought leaders and innovators.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Recent News Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">Recent News</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* News Card 1 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/news1.jpg"
                                alt="News 1"
                                width={400}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">New Partnership with Tech Giants</h3>
                            <p className="text-gray-700">
                                We are excited to announce a new partnership with leading tech companies to drive innovation in the industry.
                            </p>
                        </div>

                        {/* News Card 2 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/news2.jpg"
                                alt="News 2"
                                width={400}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Award for Excellence in Leadership</h3>
                            <p className="text-gray-700">
                                Our CEO has been recognized with the prestigious Global Leadership Award for outstanding contributions to the field.
                            </p>
                        </div>

                        {/* News Card 3 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/news3.jpg"
                                alt="News 3"
                                width={400}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Launch of New Training Programs</h3>
                            <p className="text-gray-700">
                                We have launched a series of new training programs to empower professionals with cutting-edge skills.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Past Events Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">Past Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Past Event Card 1 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/past-event1.jpg"
                                alt="Past Event 1"
                                width={400}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Leadership Conference 2023</h3>
                            <p className="text-gray-700">
                                A recap of the inspiring talks and workshops from the Global Leadership Conference held earlier this year.
                            </p>
                        </div>

                        {/* Past Event Card 2 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/past-event2.jpg"
                                alt="Past Event 2"
                                width={400}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Women in Tech Summit</h3>
                            <p className="text-gray-700">
                                Highlights from the Women in Tech Summit, featuring empowering stories and groundbreaking innovations.
                            </p>
                        </div>

                        {/* Past Event Card 3 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/past-event3.jpg"
                                alt="Past Event 3"
                                width={400}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation Expo 2023</h3>
                            <p className="text-gray-700">
                                A look back at the Innovation Expo, where the latest technologies and ideas were showcased.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Events Statistics in History Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">Events Statistics in History</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Statistic 1 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaCalendarAlt size={32} className="text-blue-600" />
                                <p className="text-3xl font-bold text-gray-800">150+</p>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Events Hosted</h3>
                            <p className="text-gray-700">
                                Over 150 events organized globally, covering leadership, innovation, and entrepreneurship.
                            </p>
                        </div>

                        {/* Statistic 2 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaUsers size={32} className="text-green-600" />
                                <p className="text-3xl font-bold text-gray-800">50K+</p>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Attendees</h3>
                            <p className="text-gray-700">
                                More than 50,000 professionals have attended our events to learn, network, and grow.
                            </p>
                        </div>

                        {/* Statistic 3 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGlobe size={32} className="text-purple-600" />
                                <p className="text-3xl font-bold text-gray-800">65+</p>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Countries Represented</h3>
                            <p className="text-gray-700">
                                Our events have attracted participants from over 65 countries worldwide.
                            </p>
                        </div>

                        {/* Statistic 4 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaChartLine size={32} className="text-red-600" />
                                <p className="text-3xl font-bold text-gray-800">95%</p>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfaction Rate</h3>
                            <p className="text-gray-700">
                                95% of attendees reported high satisfaction with the quality and impact of our events.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}