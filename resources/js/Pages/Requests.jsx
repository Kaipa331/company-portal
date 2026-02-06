export default function Requests() {
  // Fake data
  const requests = [
    {
      id: "REQ-001",
      subject: "Change in payment terms",
      status: "Open",
      date: "2026-02-05",
      priority: "Medium",
    },
    {
      id: "REQ-002",
      subject: "Bug report in client dashboard",
      status: "In Progress",
      date: "2026-01-28",
      priority: "High",
    },
    {
      id: "REQ-003",
      subject: "Request for additional feature",
      status: "Closed",
      date: "2025-12-10",
      priority: "Low",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Requests & Support Tickets
          </h1>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            + New Request
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subject</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Priority</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {requests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900">{request.id}</td>
                    <td className="px-6 py-5 text-sm text-gray-900">{request.subject}</td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          request.status === 'Open'
                            ? 'bg-yellow-100 text-yellow-800'
                            : request.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-600">{request.date}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{request.priority}</td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {requests.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No requests submitted yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}