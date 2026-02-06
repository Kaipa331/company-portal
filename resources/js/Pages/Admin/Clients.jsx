export default function Clients() {
  // Fake data — later from backend
  const clients = [
    { id: 1, name: "Precious Kaipa", email: "precious@example.com", company: "Kaipa Ltd", joined: "2025-10-01", active_projects: 3, total_invoiced: "MWK 2,850,000" },
    { id: 2, name: "John Mwale", email: "john@retail.mw", company: "Retail Chain", joined: "2025-11-15", active_projects: 2, total_invoiced: "MWK 1,800,000" },
    { id: 3, name: "Mary Banda", email: "mary@finance.mw", company: "Finance Co", joined: "2025-12-05", active_projects: 1, total_invoiced: "MWK 980,000" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            All Clients
          </h1>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            + Add New Client
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Active Projects</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Invoiced</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900">{client.name}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{client.email}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{client.company}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{client.joined}</td>
                    <td className="px-6 py-5 text-sm text-gray-600 text-center">{client.active_projects}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{client.total_invoiced}</td>
                    <td className="px-6 py-5 text-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}