import { Head, Link } from '@inertiajs/react';

export default function PublicLayout({ children, title = 'TM Consultancy' }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Head title={title} />

            {/* Header / Navigation Bar */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    {/* Logo / Brand Name */}
                    <Link href="/" className="text-2xl font-bold text-indigo-600">
                        TM Consultancy
                    </Link>

                    {/* Main Navigation */}
                    <nav className="hidden md:flex space-x-10">
                        <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
                            About
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-indigo-600 font-medium">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
                            Contact
                        </Link>
                    </nav>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/login"
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main content area */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">TM Consultancy</h3>
                            <p className="text-sm">
                                Technology Consulting • Custom Software Development • Client Platforms
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                                <li><Link href="/about" className="hover:text-white">About</Link></li>
                                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                            <p className="text-sm">
                                Email: info@tmconsultancy.mw<br />
                                Phone: +265 XXX XXX XXX<br />
                                Blantyre, Malawi
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                        © {new Date().getFullYear()} TM Consultancy. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}