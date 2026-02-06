import PublicLayout from '@/Layouts/PublicLayout';

export default function Services() {
    return (
        <PublicLayout title="Our Services - TM Consultancy">
            <div className="bg-gray-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Our Core Services
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide end-to-end technology solutions tailored to your business needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
                            <div className="text-indigo-600 text-5xl mb-6">💼</div>
                            <h2 className="text-3xl font-bold mb-4">
                                Technology Consulting
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Strategic advice on technology adoption, digital transformation, 
                                IT infrastructure, cybersecurity, and process optimization.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
                            <div className="text-indigo-600 text-5xl mb-6">🛠️</div>
                            <h2 className="text-3xl font-bold mb-4">
                                Custom Software Development
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Bespoke web & mobile applications, ERP systems, business tools, 
                                and automation solutions built specifically for your requirements.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
                            <div className="text-indigo-600 text-5xl mb-6">🔒</div>
                            <h2 className="text-3xl font-bold mb-4">
                                Client Transaction Platform
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Secure, scalable platform where your clients can view services, 
                                make payments, track progress, download reports and communicate.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="/contact"
                            className="inline-block bg-indigo-600 text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-indigo-700 transition"
                        >
                            Let's Discuss Your Project
                        </a>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}