export default function Invoices() {
  // Fake data — in real app this would come from backend / props
  const invoices = [
    {
      id: "INV-001",
      date: "2026-01-15",
      amount: "MWK 750,000",
      status: "Pending",
      description: "Monthly consulting retainer - January 2026",
    },
    {
      id: "INV-002",
      date: "2025-12-10",
      amount: "MWK 1,200,000",
      status: "Paid",
      description: "Custom software development - Phase 1",
    },
    {
      id: "INV-003",
      date: "2025-11-05",
      amount: "MWK 450,000",
      status: "Overdue",
      description: "Platform maintenance fee",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          My Invoices
        </h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Invoice #</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900">{invoice.id}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{invoice.date}</td>
                    <td className="px-6 py-5 text-sm font-medium text-gray-900">{invoice.amount}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{invoice.description}</td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          invoice.status === 'Paid'
                            ? 'bg-green-100 text-green-800'
                            : invoice.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Download PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {invoices.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No invoices found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}