export default function Files() {
  // Fake data — in real app this would come from backend
  const files = [
    {
      id: 1,
      name: "Final UI Design Package",
      type: "ZIP",
      size: "18.4 MB",
      uploaded: "2026-01-20",
      project: "E-commerce Platform",
    },
    {
      id: 2,
      name: "Backend API Documentation",
      type: "PDF",
      size: "4.2 MB",
      uploaded: "2025-12-15",
      project: "HR Management System",
    },
    {
      id: 3,
      name: "Strategy Report - Phase 1",
      type: "PDF",
      size: "6.8 MB",
      uploaded: "2025-11-10",
      project: "Digital Transformation Consulting",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          My Files & Deliverables
        </h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">File Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Project</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Uploaded</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {files.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900">{file.name}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{file.project}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{file.type}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{file.size}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{file.uploaded}</td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {files.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No files available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}