import Image from "next/image";
import { FaTrophy, FaGraduationCap, FaAward } from "react-icons/fa";

export default function AwardsPage() {
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
                    <FaTrophy size={48} className="text-white" />
                    <h1 className="text-4xl font-bold text-white uppercase">Awards & Honors</h1>
                </div>

                {/* Awards Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">Awards Received by Mike Litman</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Award Card 1 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaAward size={32} className="text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-800">Global Humanitarian Award</h3>
                            </div>
                            <p className="text-gray-700">
                                Recognized for outstanding contributions to humanitarian causes and global leadership.
                            </p>
                        </div>

                        {/* Award Card 2 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaAward size={32} className="text-green-600" />
                                <h3 className="text-xl font-bold text-gray-800">World&apos;s Phenomenal Leadership Award</h3>
                            </div>
                            <p className="text-gray-700">
                                Awarded for exceptional leadership and innovation in the field of business coaching.
                            </p>
                        </div>

                        {/* Award Card 3 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaAward size={32} className="text-purple-600" />
                                <h3 className="text-xl font-bold text-gray-800">Top Corporate Trainer 2023</h3>
                            </div>
                            <p className="text-gray-700">
                                Honored as the top corporate trainer by the Global Training Association for excellence in leadership training.
                            </p>
                        </div>

                        {/* Award Card 4 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaAward size={32} className="text-red-600" />
                                <h3 className="text-xl font-bold text-gray-800">Lifetime Achievement Award</h3>
                            </div>
                            <p className="text-gray-700">
                                Celebrated for a lifetime of dedication to empowering individuals and organizations worldwide.
                            </p>
                        </div>

                        {/* Award Card 5 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaAward size={32} className="text-yellow-600" />
                                <h3 className="text-xl font-bold text-gray-800">Innovation in Education Award</h3>
                            </div>
                            <p className="text-gray-700">
                                Recognized for pioneering innovative approaches to education and professional development.
                            </p>
                        </div>

                        {/* Award Card 6 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaAward size={32} className="text-indigo-600" />
                                <h3 className="text-xl font-bold text-gray-800">Global Impact Award</h3>
                            </div>
                            <p className="text-gray-700">
                                Awarded for making a significant global impact through leadership and motivational speaking.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Honorary Degrees Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white uppercase mb-6">Honorary Degrees Awarded</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Honorary Degree Card 1 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGraduationCap size={32} className="text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-800">Harvard University</h3>
                            </div>
                            <p className="text-gray-700">
                                Awarded an honorary Doctorate of Humane Letters for contributions to leadership and education.
                            </p>
                        </div>

                        {/* Honorary Degree Card 2 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGraduationCap size={32} className="text-green-600" />
                                <h3 className="text-xl font-bold text-gray-800">Stanford University</h3>
                            </div>
                            <p className="text-gray-700">
                                Honored with a Doctorate of Business Administration for excellence in entrepreneurship and innovation.
                            </p>
                        </div>

                        {/* Honorary Degree Card 3 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGraduationCap size={32} className="text-purple-600" />
                                <h3 className="text-xl font-bold text-gray-800">Oxford University</h3>
                            </div>
                            <p className="text-gray-700">
                                Awarded an honorary Doctorate of Letters for contributions to global leadership and education.
                            </p>
                        </div>

                        {/* Honorary Degree Card 4 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGraduationCap size={32} className="text-red-600" />
                                <h3 className="text-xl font-bold text-gray-800">MIT</h3>
                            </div>
                            <p className="text-gray-700">
                                Honored with a Doctorate of Science for groundbreaking work in leadership and organizational development.
                            </p>
                        </div>

                        {/* Honorary Degree Card 5 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGraduationCap size={32} className="text-yellow-600" />
                                <h3 className="text-xl font-bold text-gray-800">Yale University</h3>
                            </div>
                            <p className="text-gray-700">
                                Awarded an honorary Doctorate of Education for contributions to professional development and coaching.
                            </p>
                        </div>

                        {/* Honorary Degree Card 6 */}
                        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGraduationCap size={32} className="text-indigo-600" />
                                <h3 className="text-xl font-bold text-gray-800">Cambridge University</h3>
                            </div>
                            <p className="text-gray-700">
                                Honored with a Doctorate of Philosophy for contributions to leadership and motivational speaking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}