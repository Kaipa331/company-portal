export default function AdminDashboard({ auth }) {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Welcome, {auth?.user?.name}. Full control over TM Consultancy operations.
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Total Clients</h3>
            <p className="text-5xl font-bold text-gray-800">18</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Active Projects</h3>
            <p className="text-5xl font-bold text-gray-800">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-amber-700 mb-2">Pending Invoices</h3>
            <p className="text-5xl font-bold text-gray-800">4</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Open Requests</h3>
            <p className="text-5xl font-bold text-gray-800">7</p>
          </div>
        </div>

        {/* Quick admin links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/clients"
            className="bg-blue-600 hover:bg-blue-700 text-white p-8 rounded-xl shadow text-center text-xl font-medium flex items-center justify-center"
          >
            Manage Clients
          </Link>

          <Link
            href="/admin/projects"
            className="bg-green-600 hover:bg-green-700 text-white p-8 rounded-xl shadow text-center text-xl font-medium flex items-center justify-center"
          >
            All Projects
          </Link>

          <Link
            href="/admin/invoices"
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-8 rounded-xl shadow text-center text-xl font-medium flex items-center justify-center"
          >
            All Invoices
          </Link>

          <Link
            href="/admin/requests"
            className="bg-purple-600 hover:bg-purple-700 text-white p-8 rounded-xl shadow text-center text-xl font-medium flex items-center justify-center"
          >
            Manage Requests
          </Link>

          <Link
            href="/admin/files"
            className="bg-amber-600 hover:bg-amber-700 text-white p-8 rounded-xl shadow text-center text-xl font-medium flex items-center justify-center"
          >
            All Files
          </Link>
        </div>
      </div>
    </div>
  );
}