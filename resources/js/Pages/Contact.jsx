import PublicLayout from '@/Layouts/PublicLayout';
import { useForm } from '@inertiajs/react';

export default function Contact() {
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    function submit(e) {
        e.preventDefault();
        post('/consultation', {
            onSuccess: () => reset()
        });
    }

    return (
        <PublicLayout title="Contact TM Consultancy">

            {/* HERO - No large logo */}
            <section className="relative bg-black text-white py-40 md:py-56 overflow-hidden">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-green-700 via-green-500 to-black"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-green-400">
                        Get In Touch
                    </h1>
                    <p className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400">
                        Let's Discuss Your Business Needs
                    </p>
                    <p className="text-xl opacity-90 max-w-4xl mx-auto">
                        Reach out for strategic consulting, digital transformation, or revenue platform solutions.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 bg-gradient-to-b from-black to-green-950 text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-4xl font-bold mb-12 text-green-400">Contact Information</h2>
                        <div className="space-y-10 text-lg">
                            <div className="flex items-start">
                                <span className="text-4xl mr-6">📍</span>
                                <div>
                                    <h3 className="font-bold text-yellow-400 mb-2">Office Location</h3>
                                    <p>2nd Floor, Development House,<br />Victoria Avenue, P.O. Box 977,<br />Blantyre, Malawi</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-4xl mr-6">📧</span>
                                <div>
                                    <h3 className="font-bold text-yellow-400 mb-2">Email</h3>
                                    <p className="text-green-300">info@tmconsultancy.mw</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-4xl mr-6">📞</span>
                                <div>
                                    <h3 className="font-bold text-yellow-400 mb-2">Phone / WhatsApp</h3>
                                    <p className="text-green-300">+265 XXX XXX XXX</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-4xl mr-6">⏱</span>
                                <div>
                                    <h3 className="font-bold text-yellow-400 mb-2">Response Time</h3>
                                    <p>Usually within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-green-950/60 p-8 rounded-3xl border border-green-600/40 shadow-2xl">
                            <p className="text-lg">
                                For urgent inquiries or immediate consultation, phone or WhatsApp offers the fastest response from our team.
                            </p>
                        </div>

                        {/* Visual: Professional office or handshake */}
                        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-green-600/40">
                            <img 
                                src="https://thumbs.dreamstime.com/b/two-business-people-shaking-hands-over-conference-table-glowing-green-upward-trending-financial-graph-overlaid-ai-generated-436791888.jpg" 
                                alt="Professional handshake in business meeting"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-green-950/70 p-12 rounded-3xl border border-green-600/40 shadow-2xl">
                        <h2 className="text-4xl font-bold mb-10 text-green-400">Send Us a Message</h2>
                        <form onSubmit={submit} className="space-y-8">
                            <div>
                                <label className="block font-medium mb-3 text-yellow-400">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    className="w-full px-6 py-5 rounded-xl bg-black/40 border border-green-600/50 text-white placeholder-white/50 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-3 text-yellow-400">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full px-6 py-5 rounded-xl bg-black/40 border border-green-600/50 text-white placeholder-white/50 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-3 text-yellow-400">Service Interested In</label>
                                <select
                                    className="w-full px-6 py-5 rounded-xl bg-black/40 border border-green-600/50 text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition"
                                    value={data.service}
                                    onChange={e => setData('service', e.target.value)}
                                >
                                    <option value="">Select a service</option>
                                    <option value="Management Consulting">Management Consulting</option>
                                    <option value="Business Continuity Management">Business Continuity Management</option>
                                    <option value="Enterprise IT Strategy">Enterprise IT Strategy</option>
                                    <option value="Business Process Digitisation">Business Process Digitisation</option>
                                    <option value="Infrastructure Supply">Infrastructure Supply</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-medium mb-3 text-yellow-400">Project Details / Message</label>
                                <textarea
                                    rows="6"
                                    placeholder="Describe your needs, project scope, or question..."
                                    required
                                    className="w-full px-6 py-5 rounded-xl bg-black/40 border border-green-600/50 text-white placeholder-white/50 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition"
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className={`w-full bg-green-500 text-black py-6 rounded-xl font-bold text-xl shadow-2xl hover:bg-green-400 transition ${processing ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
                            >
                                {processing ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-br from-green-950 to-green-800 text-white py-32 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl font-bold mb-8 text-yellow-400">Prefer to Speak Directly?</h2>
                    <p className="text-xl opacity-90 mb-10">
                        Call or WhatsApp our team for immediate assistance or to schedule a consultation.
                    </p>
                    <div className="text-4xl font-bold text-green-300 mb-6">+265 XXX XXX XXX</div>
                    <p className="text-lg opacity-80">Available during business hours • Quick response guaranteed</p>
                </div>
            </section>

            
        </PublicLayout>
    );
}