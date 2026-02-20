import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function PublicLayout({ children, title = 'TM Consultancy' }) {
    const { auth } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Head title={title} />

            {/* Header / Navigation Bar - Sticky, blurred, branded */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-800/50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    {/* Logo / Brand */}
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/images/logo.tm.jpg"  // Small/cropped version recommended; adjust path if needed
                            alt="TM Consultancy"
                            className="h-10 w-auto object-contain drop-shadow-md"
                        />
                        <span className="text-green-400 font-extrabold text-xl tracking-tight hidden sm:block">
                            TM Consultancy
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        <Link href="/" className="text-white/90 hover:text-green-400 font-medium transition duration-300">
                            Home
                        </Link>
                        <Link href="/about" className="text-white/90 hover:text-green-400 font-medium transition duration-300">
                            About
                        </Link>
                        <Link href="/services" className="text-white/90 hover:text-green-400 font-medium transition duration-300">
                            Services
                        </Link>
                        <Link href="/contact" className="text-white/90 hover:text-green-400 font-medium transition duration-300">
                            Contact
                        </Link>
                    </nav>

                    {/* Auth Button */}
                    <div className="hidden md:flex items-center">
                        {auth?.user ? (
                            <Link
                                href="/dashboard"
                                className="bg-green-500 text-black px-6 py-2.5 rounded-full font-bold hover:bg-green-400 hover:scale-105 transition duration-300 shadow-xl"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition duration-300 shadow-xl"
                            >
                                Client Portal
                            </Link>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black border-t border-green-800 py-6 px-4 space-y-6 text-center">
                        <Link
                            href="/"
                            className="block text-white/90 hover:text-green-400 text-lg font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block text-white/90 hover:text-green-400 text-lg font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="block text-white/90 hover:text-green-400 text-lg font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-white/90 hover:text-green-400 text-lg font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        {auth?.user ? (
                            <Link
                                href="/dashboard"
                                className="block bg-green-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Client Portal
                            </Link>
                        )}
                    </div>
                )}
            </header>

            {/* Main Content - Offset for fixed header */}
            <main className="flex-grow pt-20 md:pt-24">
                {children}
            </main>

            {/* Footer - Real data integrated */}
            <footer className="bg-black border-t border-green-700 py-12 text-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Brand & Tagline */}
                        <div>
                            <h3 className="text-2xl font-extrabold text-green-400 mb-3">TM Consultancy</h3>
                            <p className="text-lg font-semibold text-yellow-400 mb-2">Simple, Straightforward</p>
                            <p className="text-sm opacity-90">
                                Transforming Businesses Through Smart Technology
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-base">
                                <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
                                <li><Link href="/about" className="hover:text-green-400 transition">About</Link></li>
                                <li><Link href="/services" className="hover:text-green-400 transition">Services</Link></li>
                                <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
                                <li><Link href="/login" className="hover:text-green-400 transition">Client Portal</Link></li>
                            </ul>
                        </div>

                        {/* Real Contact & Registrations */}
                        <div>
                            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Contact & Info</h4>
                            <p className="text-base leading-relaxed">
                                2nd Floor Development House,<br />
                                Victoria Avenue,<br />
                                P.O. Box 977,<br />
                                Blantyre, Malawi
                            </p>
                            <p className="text-base mt-4">
                                MBS: 1075886 | TPN: 70017239
                            </p>
                            <p className="text-base mt-2">
                                <a
                                    href="https://www.tm.mw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 transition"
                                >
                                    www.tm.mw
                                </a>
                            </p>
                            {/* Uncomment & fill if you have real contacts */}
                            {/* <p className="text-base mt-4">
                                Phone: +265 XXX XXX XXX<br />
                                Email: info@tm.mw
                            </p> */}
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-green-800/50 text-center text-sm opacity-70">
                        © {new Date().getFullYear()} TM Consultancy | Simple, Straightforward
                    </div>
                </div>
            </footer>
        </div>
    );
}