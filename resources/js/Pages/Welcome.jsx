import PublicLayout from '@/Layouts/PublicLayout';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Welcome({ stats = {}, projects = [] }) {
    const page = usePage();
    const props = page.props ?? {};
    
    const auth  = props.auth  ?? null;
    const flash = props.flash ?? {};

    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        message: ''
    });

    function submit(e) {
        e.preventDefault();
        post('/consultation', {
            onSuccess: () => reset(),
        });
    }

    return (
        <PublicLayout title="TM Consultancy">

            {/* HERO – even tighter version */}
            <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-green-700 via-green-500 to-black"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <img 
                        src="/images/logo.tm.jpg"  
                        alt="TM Consultancy - Simple, Straightforward"
                        className="mx-auto h-28 md:h-40 w-auto mb-4 md:mb-6 drop-shadow-2xl"
                    />
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-green-400">
                        TM Consultancy
                    </h1>
                    <p className="text-xl md:text-4xl font-bold mb-2 text-yellow-400">
                        Transforming Businesses Through Smart Technology
                    </p>
                    <p className="text-base md:text-xl opacity-90 mb-8">
                        Strategic consulting • Digital platforms • Secure revenue solutions
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                        {auth?.user ? (
                            <Link 
                                href="/dashboard" 
                                className="bg-green-500 text-black px-9 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-green-400 hover:scale-105 transition duration-300"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <a 
                                    href="#services" 
                                    className="bg-green-600/80 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-green-500 hover:scale-105 transition duration-300"
                                >
                                    Our Services
                                </a>
                                <a 
                                    href="#tm-fem" 
                                    className="bg-yellow-500/90 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-yellow-400 hover:scale-105 transition duration-300"
                                >
                                    TM FEM™ Platform
                                </a>
                                <a 
                                    href="#consultation" 
                                    className="border-2 border-green-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 hover:text-black transition duration-300"
                                >
                                    Free Consultation
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Quick Stats / Impact */}
            <section 
                id="impact" 
                className="py-20 bg-gradient-to-b from-black to-green-950 text-white scroll-mt-20"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
                        Our Impact at a Glance
                    </h2>
                    <div className="grid grid-cols-1 gap-8 justify-items-center">
                        <div className="bg-green-900/50 p-10 md:p-12 rounded-3xl border border-green-600/40 flex flex-col items-center justify-center text-center min-h-[220px] md:min-h-[260px] shadow-2xl hover:shadow-2xl hover:border-yellow-400/60 hover:scale-[1.02] transition-all duration-300 w-full max-w-md lg:max-w-lg">
                            <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-yellow-400 tracking-tight drop-shadow-lg">
                                MK35bn+
                            </div>
                            <div className="text-2xl md:text-3xl font-semibold text-white/90 mt-6">
                                Revenue Collected
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CEO / Leadership */}
            <section 
                id="leadership" 
                className="py-24 bg-black text-white scroll-mt-20"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-12 text-green-400">Our Leadership</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="relative">
                            <img 
                                src="/images/Titus-Misi.png"
                                alt="Titus Misi Jr., CEO & Lead Consultant"
                                className="rounded-3xl shadow-2xl w-full object-cover border-4 border-green-500/50"
                            />
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-black px-10 py-4 rounded-xl font-bold shadow-lg text-lg">
                                CEO & Lead Consultant
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-yellow-400">Titus Misi Jr.</h3>
                            <p className="text-lg">
                                Certified Management Consulting professional with proven expertise in strategy, digital transformation, and revenue systems across telecom, fin-tech, utilities, and more. Former Deputy MD at Huawei Technologies — first in Sub-Saharan Africa to achieve Level 5 Sales Expert certification.
                            </p>
                            <a href="/about#leadership" className="inline-block text-green-400 font-bold hover:text-green-300 transition">  
                                Read Full Profile →  
                            </a>  
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section 
                id="services" 
                className="py-24 bg-gradient-to-b from-green-950 to-black text-white scroll-mt-20"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-16 text-green-400">Our Core Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/40 hover:border-green-400 transition">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Management Consulting</h3>
                            <p>Strategic planning, business cases, ROI, go-to-market, BCM</p>
                        </div>
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/40 hover:border-green-400 transition">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Enterprise IT Strategy</h3>
                            <p>IT alignment with business goals</p>
                        </div>
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/40 hover:border-green-400 transition">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Business Process Digitisation</h3>
                            <p>TM FEM™ & TM WFM™ orchestration platforms</p>
                        </div>
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/40 hover:border-green-400 transition">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Infrastructure Supply</h3>
                            <p>DELL™ reseller • Solar & hybrid backup</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TM FEM™ Platform */}
            <section 
                id="tm-fem" 
                className="py-24 bg-black text-white scroll-mt-20"
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold mb-8 text-green-400">TM Front-end Management™ Platform</h2>
                    <p className="text-xl max-w-5xl mx-auto opacity-90 mb-12">
                        Proprietary transaction platform with assured integrity and multi-channel access — proven with ~MK35 billion collected.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/40">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Payment API</h3>
                            <p>REST + OAuth 2.0, integrated with major Malawian banks & mobile money</p>
                        </div>
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/40">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Multi-Channel Access</h3>
                            <p>Web portal, mobile app, USSD — unified experience</p>
                        </div>
                        <div className="bg-green-900/50 p-8 rounded-2xl border border-green-600/40">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Dashboard & Reporting</h3>
                            <p>Customizable real-time insights & automated reports</p>
                        </div>
                    </div>

                    <h3 className="text-4xl font-bold mb-8 text-green-400">TM FEM™ Achievements with SRWB</h3>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-green-900/40 p-6 rounded-2xl border border-green-600/30 text-left">
                            <p className="text-xl font-bold text-yellow-400">Integration with all major banks and mobile money</p>
                        </div>
                        <div className="bg-green-900/40 p-6 rounded-2xl border border-green-600/30 text-left">
                            <p className="text-xl font-bold text-yellow-400">Cashier portal on all cash collection points</p>
                        </div>
                        <div className="bg-green-900/40 p-6 rounded-2xl border border-green-600/30 text-left">
                            <p className="text-xl font-bold text-yellow-400">Postpaid and Prepaid on a Single Window</p>
                        </div>
                        <div className="bg-green-900/40 p-6 rounded-2xl border border-green-600/30 text-left">
                            <p className="text-xl font-bold text-yellow-400">USSD / Mobile App for water users</p>
                        </div>
                    </div>

                    <h3 className="text-4xl font-bold mb-10 text-green-400">Customizable Dashboards & Reporting</h3>
                    <p className="text-xl max-w-5xl mx-auto opacity-90 mb-12 leading-relaxed">
                        The TM FEM™ comes with a customizable management dashboard to give a quick view of the business position at a glance and provides for setting up standard reports that can be automated to run periodically. You will be able to customise reports based on different dimensions. Reports can be auto-generated and emailed to a mailing list daily, weekly, etc.
                    </p>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                            <div className="flex flex-col items-center">
                                <div className="w-full max-w-[95%] overflow-hidden border-4 border-yellow-400 shadow-2xl shadow-yellow-400/20 transition-transform hover:scale-[1.02]">
                                    <img 
                                        src="/images/SRWB.png"
                                        alt="SRWB Management Dashboard - Real-time revenue, transactions, faults, and audit trail overview"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <p className="mt-5 text-lg font-medium opacity-90 text-center px-4">
                                    SRWB Dashboard: Customizable view of key metrics — total revenue, transactions, weekly trends
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-full max-w-[95%] overflow-hidden border-4 border-yellow-400 shadow-2xl shadow-yellow-400/20 transition-transform hover:scale-[1.02]">
                                    <img 
                                        src="/images/SRWB-REPORTS.png"
                                        alt="SRWB Consolidated Reports - Zone-based revenue breakdown, exportable formats"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <p className="mt-5 text-lg font-medium opacity-90 text-center px-4">
                                    SRWB Consolidated Reports: Dimension-based customization, auto-generated & emailed reports
                                </p>
                            </div>

                            <div className="flex flex-col items-center lg:col-span-1 md:col-span-2">
                                <div className="w-full max-w-[95%] overflow-hidden border-4 border-yellow-400 shadow-2xl shadow-yellow-400/20 transition-transform hover:scale-[1.02]">
                                    <img 
                                        src="/images/ADMARC.png"
                                        alt="ADMARC Management Dashboard - Purchases, sales, stock, cash utilisation overview"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <p className="mt-5 text-lg font-medium opacity-90 text-center px-4">
                                    ADMARC Management Dashboard: Real-time insights into purchases, sales, stock & cash flow
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Form */}
            <section 
                id="consultation" 
                className="bg-gradient-to-br from-black via-green-950 to-green-800 text-white py-32 scroll-mt-20"
            >
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold mb-10 text-yellow-400">Request Free Consultation</h2>
                    <p className="text-xl mb-12 opacity-90">Let's discuss how we can support your strategy, digitisation, or revenue goals.</p>

                    {flash?.success && (
                        <div className="mb-8 p-6 bg-green-700/60 rounded-2xl">{flash.success}</div>
                    )}
                    {flash?.error && (
                        <div className="mb-8 p-6 bg-red-700/60 rounded-2xl">{flash.error}</div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <input 
                            required 
                            placeholder="Full Name" 
                            className="w-full p-5 rounded-xl bg-white/10 border border-green-400/40 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/50" 
                            value={data.name} 
                            onChange={e => setData('name', e.target.value)} 
                        />
                        <input 
                            required 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-5 rounded-xl bg-white/10 border border-green-400/40 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/50" 
                            value={data.email} 
                            onChange={e => setData('email', e.target.value)} 
                        />
                        <textarea 
                            placeholder="Your project or challenge..." 
                            className="w-full p-5 rounded-xl bg-white/10 border border-green-400/40 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/50 min-h-[160px]" 
                            value={data.message} 
                            onChange={e => setData('message', e.target.value)} 
                        />
                        <button 
                            disabled={processing} 
                            className={`w-full bg-green-500 text-black py-6 rounded-xl font-bold text-xl shadow-2xl hover:bg-green-400 transition ${processing ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
                        >
                            {processing ? "Submitting..." : "Submit Request"}
                        </button>
                    </form>
                </div>
            </section>

        </PublicLayout>
    );
}