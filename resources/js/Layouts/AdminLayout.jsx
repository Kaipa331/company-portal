import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-6">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

                <nav className="space-y-3">
                    <Link href="/admin" className="block hover:text-gray-300">
                        Dashboard
                    </Link>
                    <Link href="/admin/clients" className="block hover:text-gray-300">
                        Clients
                    </Link>
                    <Link href="/admin/projects" className="block hover:text-gray-300">
                        Projects
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Admin</h1>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">
                            {auth?.user?.name}
                        </span>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="text-red-600 hover:underline"
                        >
                            Logout
                        </Link>
                    </div>
                </div>

                {children}
            </main>
        </div>
    );
}
