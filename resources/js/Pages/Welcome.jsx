import PublicLayout from '@/Layouts/PublicLayout';

export default function Welcome() {
    return (
        <PublicLayout title="TM Consultancy - Technology Consulting & Software Solutions">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-600 to-blue-800 text-white py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Transforming Businesses<br />Through Technology
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
                        Expert consulting, custom software development, and secure client transaction platforms.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href="/contact"
                            className="bg-white text-indigo-700 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
                        >
                            Get a Free Consultation
                        </a>
                        <a
                            href="/services"
                            className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-700 transition"
                        >
                            Explore Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick services teaser */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                        Our Core Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-700">
                                Technology Consulting
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Strategic guidance to align technology with your business objectives and drive growth.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-700">
                                Custom Software Development
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tailored, high-quality software solutions built specifically for your unique needs.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-700">
                                Client Transaction Platform
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Secure, intuitive platform that enables smooth client interactions and transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}