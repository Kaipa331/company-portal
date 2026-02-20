import AdminLayout from '@/Layouts/AdminLayout';

export default function AdminDashboard() {
    return (
        <div className="space-y-10">

            {/* PAGE TITLE */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-1">
                    Monitor your consultancy activity and manage system data.
                </p>
            </div>


            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-indigo-600">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Total Clients</p>
                            <p className="text-4xl font-extrabold mt-2">24</p>
                        </div>
                        <div className="text-4xl">👥</div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-green-600">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Active Projects</p>
                            <p className="text-4xl font-extrabold mt-2">12</p>
                        </div>
                        <div className="text-4xl">📁</div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-orange-500">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Pending Requests</p>
                            <p className="text-4xl font-extrabold mt-2">5</p>
                        </div>
                        <div className="text-4xl">⏳</div>
                    </div>
                </div>

            </div>


            {/* QUICK ACTIONS */}
            <div className="bg-white p-8 rounded-2xl shadow">
                <h2 className="text-xl font-bold mb-6">Quick Actions</h2>

                <div className="flex flex-wrap gap-4">

                    <a href="/admin/clients"
                       className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                        Manage Clients
                    </a>

                    <a href="/admin/projects"
                       className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                        View Projects
                    </a>

                    <a href="/admin/messages"
                       className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                        Check Messages
                    </a>

                </div>
            </div>


            {/* RECENT ACTIVITY */}
            <div className="bg-white p-8 rounded-2xl shadow">

                <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

                <div className="space-y-4">

                    <div className="border-b pb-3">
                        <p className="font-semibold">New client registered</p>
                        <p className="text-gray-500 text-sm">2 hours ago</p>
                    </div>

                    <div className="border-b pb-3">
                        <p className="font-semibold">Project status updated</p>
                        <p className="text-gray-500 text-sm">Yesterday</p>
                    </div>

                    <div>
                        <p className="font-semibold">New contact form message received</p>
                        <p className="text-gray-500 text-sm">2 days ago</p>
                    </div>

                </div>

            </div>


            {/* WELCOME PANEL */}
            <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">Welcome back 👋</h3>
                <p className="text-gray-700">
                    Use the admin panel to manage clients, projects,
                    payments, and communication across the system.
                </p>
            </div>

        </div>
    );
}

AdminDashboard.layout = page => <AdminLayout>{page}</AdminLayout>;
