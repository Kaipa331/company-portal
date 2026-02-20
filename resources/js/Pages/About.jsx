import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function About() {
    return (
        <PublicLayout title="About TM Consultancy">

            {/* Hero / Page Header */}
            <section className="relative bg-black text-white py-32 md:py-40 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-green-700 via-green-600 to-black"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-green-400">
                        About TM Consultancy
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Strategic insight meets digital innovation — empowering businesses in Malawi and beyond since 2021.
                    </p>
                </div>
            </section>

            {/* Quick Navigation Links - sticky for easy access */}
            <section className="bg-gradient-to-b from-black to-green-950 py-6 sticky top-0 z-40 border-b border-green-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-center">
                        <a href="#leadership" className="text-green-400 hover:text-green-300 font-medium transition text-lg">
                            Leadership
                        </a>
                        <a href="#who-we-are" className="text-green-400 hover:text-green-300 font-medium transition text-lg">
                            Who We Are
                        </a>
                        <a href="#services" className="text-green-400 hover:text-green-300 font-medium transition text-lg">
                            Core Services
                        </a>
                        <a href="#tm-fem" className="text-green-400 hover:text-green-300 font-medium transition text-lg">
                            TM FEM™
                        </a>
                    </nav>
                </div>
            </section>

            {/* CEO Profile */}
            <section 
                id="leadership" 
                className="py-24 bg-gradient-to-b from-black to-green-950 text-white scroll-mt-24"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-16 text-green-400">Our Leadership</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img 
                                src="/images/Titus-Misi.png"
                                alt="Titus Misi Jr., CEO & Lead Consultant"
                                className="rounded-3xl shadow-2xl w-full object-cover border-4 border-green-500/50"
                            />
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-black px-10 py-4 rounded-xl font-bold shadow-lg text-lg">
                                CEO and Lead Consultant
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-4xl font-bold text-yellow-400">Titus Misi Jr.</h3>
                            <p className="text-lg leading-relaxed">
                                A certified Management Consulting professional and business leader with a proven track record in formulating and implementing business strategy, achieving market penetration and breakthroughs in Malawi. Extensive experience across telecommunications, insurance, fin-tech, energy, and water utility sectors.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Expertise includes strategy advisory, market analysis, business case & ROI, multi-stakeholder management, business continuity & risk advisory, digital transformation, and project financing. Former Deputy Managing Director and Sales Director at Huawei Technologies — advised telecom operators, investors, and Government MDAs. Internationally accredited Huawei sales facilitator and the first in Sub-Saharan Africa to attain Level 5 Sales Expert certification.
                            </p>
                            <div className="pt-4">
                                <p className="font-bold text-green-400 text-xl">Qualifications:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-200 text-lg">
                                    <li>PhD candidate in Innovation and Development, MUST</li>
                                    <li>MBA (Merit), Bradford University</li>
                                    <li>CMI Post-Graduate Diploma in Professional Consulting</li>
                                    <li>BSc (Electrical Engineering), University of Malawi</li>
                                </ul>
                            </div>
                            <p className="text-sm italic text-gray-500 pt-4">* Previously known as Titus Tasosa</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview - Vision, Mission, Location */}
            <section 
                id="who-we-are" 
                className="py-24 bg-black text-white scroll-mt-24"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-16 text-green-400">Who We Are</h2>
                    <div className="bg-green-950/60 p-12 rounded-3xl border border-green-600/40 shadow-2xl text-center max-w-5xl mx-auto">
                        <p className="text-lg leading-relaxed mb-10">
                            TM Consultancy (MBS: 1075886 | TPN: 70017239) has been operating for five years, specializing in the interplay between business strategy and information systems. Our team delivers management consulting focused on strategy, decision-making, and risk control, alongside robust digital platforms for revenue collection, financial management, and operational efficiency.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 mt-12">
                            <div>
                                <h3 className="text-3xl font-bold text-yellow-400 mb-6">Our Vision</h3>
                                <p className="text-xl leading-relaxed">
                                    To “make business happen” through impeccable business advisory and digital enablement services.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-yellow-400 mb-6">Our Mission</h3>
                                <p className="text-xl leading-relaxed">
                                    To provide valuable insight, rigorous analysis, and practical recommendations to help clients achieve their business goals and succeed in their digital transformation journey.
                                </p>
                            </div>
                        </div>

                        <p className="text-lg mt-12 opacity-90">
                            2nd Floor, Development House, Victoria Avenue, P.O. Box 977, Blantyre, Malawi
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section 
                id="services" 
                className="py-24 bg-gradient-to-b from-green-950 to-black text-white scroll-mt-24"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-16 text-green-400">Our Core Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/30 hover:border-green-400 transition">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Management Consulting</h3>
                            <p>Strategic planning, business cases, ROI analysis, go-to-market strategies, and Business Continuity Management (BCM).</p>
                        </div>
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/30 hover:border-green-400 transition">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Enterprise IT Strategy</h3>
                            <p>Formulation and review of IT strategies aligned with long-term business objectives.</p>
                        </div>
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/30 hover:border-green-400 transition">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Business Process Digitisation</h3>
                            <p>Custom solutions using TM FEM™ and TM WFM™ for orchestration, visibility, and rule-based control.</p>
                        </div>
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/30 hover:border-green-400 transition">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Infrastructure Supply</h3>
                            <p>Authorised DELL™ reseller; solar and hybrid backup power systems.</p>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link 
                            href="/services" 
                            className="inline-block bg-green-500 text-black px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-green-400 hover:scale-105 transition duration-300"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Brief TM FEM Highlight */}
            <section 
                id="tm-fem" 
                className="py-24 bg-black text-white scroll-mt-24"
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold mb-8 text-green-400">Flagship Solution: TM FEM™</h2>
                    <p className="text-xl max-w-4xl mx-auto opacity-90 mb-12">
                        Our proprietary front-end management platform delivers secure, multi-channel transaction processing and revenue management — already proven with over MK35 billion collected through integrations with major banks and mobile money providers.
                    </p>
                </div>
            </section>

        </PublicLayout>
    );
}