import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function Services() {
    return (
        <PublicLayout title="Our Services - TM Consultancy">

            {/* Hero */}
            <section className="relative bg-black text-white py-32 md:py-48 overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-green-800 via-green-600 to-black"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-green-400 drop-shadow-lg">
                        Our Services
                    </h1>
                    <p className="text-2xl md:text-4xl font-bold mb-6 text-yellow-400">
                        Strategic Advisory • Digital Enablement • Infrastructure Reliability
                    </p>
                    <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-10">
                        Tailored consulting and technology solutions to drive strategy, digitise operations, and ensure business continuity across Malawi and beyond.
                    </p>

                    {/* All section links - this is now the only set */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a 
                            href="#management-consulting"
                            className="bg-green-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-green-400 hover:scale-105 transition duration-300"
                        >
                            Management Consulting
                        </a>
                        <a 
                            href="#bcm"
                            className="bg-green-600/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-green-500 hover:scale-105 transition duration-300"
                        >
                            Business Continuity
                        </a>
                        <a 
                            href="#it-strategy"
                            className="bg-green-700/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-green-600 hover:scale-105 transition duration-300"
                        >
                            IT Strategy
                        </a>
                        <a 
                            href="#digitisation"
                            className="bg-yellow-500/90 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-yellow-400 hover:scale-105 transition duration-300"
                        >
                            Process Digitisation
                        </a>
                        <a 
                            href="#infrastructure"
                            className="bg-green-800/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-green-700 hover:scale-105 transition duration-300"
                        >
                            Infrastructure Supply
                        </a>
                        <a 
                            href="#process"
                            className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 hover:text-black transition duration-300"
                        >
                            Our Process
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Detailed */}
            <section className="py-24 bg-gradient-to-b from-black via-green-950 to-black text-white">
                <div className="max-w-7xl mx-auto px-6 space-y-32">

                    {/* Management Consulting */}
                    <div id="management-consulting" className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-24">
                        <div className="order-2 md:order-1">
                            <div className="text-green-400 text-7xl mb-6">💼</div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">Management Consulting</h2>
                            <ul className="space-y-5 text-lg md:text-xl">
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">✔</span> Strategic planning & review</li>
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">✔</span> Business Case development & ROI analysis</li>
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">✔</span> Go-to-market planning and execution</li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl border-2 border-green-700/50 hover:border-yellow-400/60 transition-all duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-b1f7c97a3a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Strategic planning dashboard with charts and analytics"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Business Continuity Management */}
                    <div id="bcm" className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-24">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-green-700/50 hover:border-yellow-400/60 transition-all duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Business continuity and risk management diagram"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div>
                            <div className="text-green-400 text-7xl mb-6">🛡️</div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">Business Continuity Management</h2>
                            <ul className="space-y-5 text-lg md:text-xl">
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">✔</span> Policy development</li>
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">✔</span> Business Impact Assessment</li>
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">✔</span> Full Business Continuity Plan formulation</li>
                            </ul>
                        </div>
                    </div>

                    {/* Enterprise IT Strategy */}
                    <div id="it-strategy" className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-24">
                        <div>
                            <div className="text-green-400 text-7xl mb-6">🔒</div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">Enterprise IT Strategy</h2>
                            <p className="text-lg md:text-xl leading-relaxed">
                                Formulation and ongoing review of IT strategies to ensure perfect alignment with your medium- to long-term business objectives, driving efficiency, security, and scalable growth.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-green-700/50 hover:border-yellow-400/60 transition-all duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="IT strategy roadmap and digital architecture planning"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Business Process Digitisation */}
                    <div id="digitisation" className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-24">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-green-700/50 hover:border-yellow-400/60 transition-all duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Digital workflow automation and process orchestration dashboard"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div>
                            <div className="text-green-400 text-7xl mb-6">📱</div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">Business Process Digitisation</h2>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                We transform strategic business processes using our proprietary platforms:
                            </p>
                            <ul className="space-y-4 text-lg md:text-xl">
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">→</span> <strong>TM FEM™</strong> for business service orchestration</li>
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">→</span> <strong>TM WFM™</strong> for managing dispersed teams with visibility & rule-based control</li>
                            </ul>
                        </div>
                    </div>

                    {/* Infrastructure Supply */}
                    <div id="infrastructure" className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-24">
                        <div>
                            <div className="text-green-400 text-7xl mb-6">🔋</div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">Infrastructure Supply</h2>
                            <ul className="space-y-5 text-lg md:text-xl">
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">✔</span> Authorised DELL™ Reseller</li>
                                <li className="flex items-start"><span className="text-green-400 mr-3 text-2xl">✔</span> Supply & installation of Solar and Hybrid backup systems for all scenarios</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-green-700/50 hover:border-yellow-400/60 transition-all duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1509395596868-d7976a0a0d7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Solar hybrid power backup system installation"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Working Process */}
            <section 
                id="process" 
                className="py-24 bg-black text-white scroll-mt-24"
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-green-400">
                        Our Working Process
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { num: "01", label: "Consultation & Discovery" },
                            { num: "02", label: "Strategy & Planning" },
                            { num: "03", label: "Implementation & Digitisation" },
                            { num: "04", label: "Launch, Training & Support" },
                        ].map((item) => (
                            <div 
                                key={item.num} 
                                className="relative bg-gradient-to-br from-green-950 to-green-900 p-10 rounded-3xl border border-green-700/40 shadow-2xl hover:shadow-green-500/30 hover:scale-[1.03] transition-all duration-300"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl font-extrabold text-black shadow-lg">
                                    {item.num}
                                </div>
                                <div className="mt-10 text-2xl font-bold text-white/90">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-br from-green-950 via-green-900 to-black text-white py-32 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-yellow-400">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
                        Let’s discuss how our strategic consulting, digital platforms, and infrastructure solutions can deliver real results for your organisation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/contact"
                            className="bg-green-500 text-black px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:bg-green-400 hover:scale-105 transition duration-300"
                        >
                            Schedule Free Consultation
                        </Link>
                        <Link
                            href="/about"
                            className="border-2 border-yellow-400 text-yellow-400 px-10 py-6 rounded-full font-bold text-xl hover:bg-yellow-400 hover:text-black transition duration-300"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

        </PublicLayout>
    );
}