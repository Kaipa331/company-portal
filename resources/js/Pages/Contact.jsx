import PublicLayout from '@/Layouts/PublicLayout';

export default function Contact() {
    return (
        <PublicLayout title="Contact TM Consultancy">
            <div className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Get In Touch
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                            We're here to help. Reach out to discuss your project or ask any question.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left - Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-indigo-700">
                                Contact Information
                            </h2>

                            <div className="space-y-6 text-lg">
                                <div className="flex items-start">
                                    <span className="text-3xl mr-4">📍</span>
                                    <div>
                                        <h3 className="font-semibold">Address</h3>
                                        <p className="text-gray-600">Blantyre, Malawi</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="text-3xl mr-4">📧</span>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-600">info@tmconsultancy.mw</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="text-3xl mr-4">📞</span>
                                    <div>
                                        <h3 className="font-semibold">Phone / WhatsApp</h3>
                                        <p className="text-gray-600">+265 XXX XXX XXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Contact Form */}
                        <div className="bg-gray-50 p-10 rounded-2xl shadow">
                            <h2 className="text-3xl font-bold mb-8 text-indigo-700">
                                Send us a message
                            </h2>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}