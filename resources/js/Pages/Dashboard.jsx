import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black text-white flex">
            {/* Sidebar Navigation */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-72 bg-green-950/80 backdrop-blur-lg border-r border-green-800/50 transform transition-transform duration-300 lg:translate-x-0 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:relative lg:shadow-2xl`}
            >
                <div className="p-6 border-b border-green-800/50">
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/logo.tm.jpg"
                            alt="TM Consultancy"
                            className="h-10 w-auto"
                        />
                        <span className="text-xl font-bold text-green-400">Client Portal</span>
                    </div>
                </div>

                <nav className="p-6 space-y-2">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-700/30 text-green-400 font-medium hover:bg-green-700/50 transition"
                    >
                        <span className="text-xl">🏠</span> Dashboard
                    </Link>
                    <Link
                        href="/projects"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-900/40 transition"
                    >
                        <span className="text-xl">📁</span> My Projects
                    </Link>
                    <Link
                        href="/invoices"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-900/40 transition"
                    >
                        <span className="text-xl">💳</span> Invoices & Payments
                    </Link>
                    <Link
                        href="/requests"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-900/40 transition"
                    >
                        <span className="text-xl">🎟️</span> Support Requests
                    </Link>
                    <Link
                        href="/files"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-900/40 transition"
                    >
                        <span className="text-xl">📄</span> Files & Deliverables
                    </Link>
                    <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-900/40 transition"
                    >
                        <span className="text-xl">👤</span> Profile & Settings
                    </Link>
                </nav>

                <div className="absolute bottom-6 left-6 right-6">
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-red-600/80 hover:bg-red-700 rounded-xl font-medium transition"
                    >
                        <span className="text-xl">🚪</span> Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Mobile header with menu toggle */}
                <header className="lg:hidden bg-green-950/80 backdrop-blur-lg border-b border-green-800/50 p-4 flex items-center justify-between">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-3xl text-green-400 focus:outline-none"
                    >
                        ☰
                    </button>
                    <div className="text-xl font-bold text-green-400">TM Client Portal</div>
                    <div className="w-10" /> {/* Spacer */}
                </header>

                <main className="p-6 md:p-10">
                    {/* Welcome */}
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-block bg-green-900/50 p-4 rounded-full mb-6">
                            <div className="text-6xl md:text-8xl">👋</div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-green-400 mb-4">
                            Welcome back, {user?.name?.split(' ')[0] || 'Client'}
                        </h1>
                        <p className="text-xl md:text-2xl text-yellow-400 opacity-90">
                            Your secure TM Consultancy Client Portal
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                        <div className="bg-gradient-to-br from-green-900/60 to-green-950/60 p-8 rounded-2xl border border-green-700/40 shadow-xl hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300 text-center">
                            <div className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
                                3
                            </div>
                            <h3 className="text-2xl font-bold text-white/90">Active Projects</h3>
                            <p className="text-lg opacity-80 mt-2">Ongoing consulting & delivery</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-900/60 to-green-950/60 p-8 rounded-2xl border border-green-700/40 shadow-xl hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300 text-center">
                            <div className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
                                1
                            </div>
                            <h3 className="text-2xl font-bold text-white/90">Pending Invoices</h3>
                            <p className="text-lg opacity-80 mt-2">MWK 450,000 outstanding</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-900/60 to-green-950/60 p-8 rounded-2xl border border-green-700/40 shadow-xl hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300 text-center">
                            <div className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
                                0
                            </div>
                            <h3 className="text-2xl font-bold text-white/90">Open Support Tickets</h3>
                            <p className="text-lg opacity-80 mt-2">No pending requests</p>
                        </div>
                    </div>

                    {/* Recent Activity / Quick Actions */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Recent Activity */}
                        <div className="bg-green-950/60 rounded-2xl border border-green-800/40 shadow-2xl p-8">
                            <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
                                <span className="text-4xl">📊</span> Recent Activity
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { date: 'Feb 15, 2026', desc: 'Invoice #INV-042 paid', amount: '+MWK 150,000' },
                                    { date: 'Feb 10, 2026', desc: 'Project milestone approved', amount: '' },
                                    { date: 'Feb 5, 2026', desc: 'New support ticket opened', amount: '' },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center p-4 bg-black/30 rounded-xl hover:bg-green-900/40 transition"
                                    >
                                        <div>
                                            <p className="font-medium">{item.desc}</p>
                                            <p className="text-sm opacity-70">{item.date}</p>
                                        </div>
                                        {item.amount && (
                                            <p className="font-bold text-green-400">{item.amount}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/activity"
                                className="block text-center mt-6 text-green-400 hover:text-green-300 font-bold"
                            >
                                View Full Activity Log →
                            </Link>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-green-950/60 rounded-2xl border border-green-800/40 shadow-2xl p-8">
                            <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
                                <span className="text-4xl">⚡</span> Quick Actions
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { label: 'View Projects', href: '/projects', color: 'green' },
                                    { label: 'Invoices & Payments', href: '/invoices', color: 'yellow' },
                                    { label: 'Support / Requests', href: '/requests', color: 'purple' },
                                    { label: 'Files & Deliverables', href: '/files', color: 'blue' },
                                    { label: 'Profile & Settings', href: '/profile', color: 'gray' },
                                ].map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`bg-gradient-to-br from-${item.color}-700 to-${item.color}-800 hover:from-${item.color}-600 hover:to-${item.color}-700 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center text-lg md:text-xl font-medium flex items-center justify-center transform hover:scale-[1.03]`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Mobile overlay backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}