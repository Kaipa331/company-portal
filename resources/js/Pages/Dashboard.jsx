import { Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome */}
        <div className="bg-white rounded-2xl shadow p-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Welcome back, {auth?.user?.name || 'Client'}
          </h1>
          <p className="text-lg text-gray-600">
            Here's a quick overview of your TM Consultancy portal.
          </p>
        </div>

        {/* Quick stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Active Projects</h3>
            <p className="text-4xl font-bold text-gray-800">3</p>
            <p className="text-sm text-gray-500 mt-1">Ongoing work</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Pending Invoices</h3>
            <p className="text-4xl font-bold text-gray-800">1</p>
            <p className="text-sm text-gray-500 mt-1">Total: MWK 450,000</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Open Requests</h3>
            <p className="text-4xl font-bold text-gray-800">0</p>
            <p className="text-sm text-gray-500 mt-1">No pending support tickets</p>
          </div>
        </div>

        {/* Quick actions – now with real links */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white p-8 rounded-xl shadow transition text-center text-xl font-medium flex items-center justify-center"
            >
              View My Projects
            </Link>

            <Link
              href="/invoices"
              className="bg-green-600 hover:bg-green-700 text-white p-8 rounded-xl shadow transition text-center text-xl font-medium flex items-center justify-center"
            >
              View Invoices
            </Link>

            <Link
              href="/requests"
              className="bg-purple-600 hover:bg-purple-700 text-white p-8 rounded-xl shadow transition text-center text-xl font-medium flex items-center justify-center"
            >
              Submit Request / Support
            </Link>

            <Link
              href="/files"
              className="bg-amber-600 hover:bg-amber-700 text-white p-8 rounded-xl shadow transition text-center text-xl font-medium flex items-center justify-center"
            >
              My Files & Deliverables
            </Link>

            <Link
              href="/profile"
              className="bg-gray-600 hover:bg-gray-700 text-white p-8 rounded-xl shadow transition text-center text-xl font-medium flex items-center justify-center"
            >
              Profile & Settings
            </Link>

            {/* Logout button – uses a POST request */}
            <Link
              href="/logout"
              method="post"
              as="button"
              className="bg-red-600 hover:bg-red-700 text-white p-8 rounded-xl shadow transition text-center text-xl font-medium flex items-center justify-center"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}