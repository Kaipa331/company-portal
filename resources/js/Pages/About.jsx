import PublicLayout from '@/Layouts/PublicLayout';

export default function About() {
    return (
        <PublicLayout title="About TM Consultancy">
            <div className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About TM Consultancy
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We are a forward-thinking technology company dedicated to helping businesses 
                            succeed in the digital age through innovative consulting, custom software, 
                            and secure client platforms.
                        </p>
                    </div>

                    <div className="mt-16 grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-indigo-700 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To empower organizations with cutting-edge technology solutions 
                                that drive efficiency, growth, and competitive advantage.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-indigo-700 mb-6">
                                Our Vision
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To become the most trusted technology partner in Malawi and 
                                beyond, recognized for innovation, reliability, and client success.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="/contact"
                            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition"
                        >
                            Work With Us →
                        </a>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}