export default function AdminProjects() {
  // Fake data – later from backend
  const projects = [
    { id: 1, name: "E-commerce Platform", client: "Kaipa Ltd", status: "In Progress", progress: 65, deadline: "2026-04-15" },
    { id: 2, name: "HR Management System", client: "Retail Chain", status: "Testing", progress: 92, deadline: "2026-02-28" },
    { id: 3, name: "Digital Strategy Consulting", client: "Finance Co", status: "Completed", progress: 100, deadline: "2025-11-30" },
    { id: 4, name: "Mobile App Redesign", client: "Kaipa Ltd", status: "Planning", progress: 10, deadline: "2026-06-30" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            All Projects
          </h1>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            + New Project
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Project</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Client</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Progress</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Deadline</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900">{project.name}</td>
                    <td className="px-6 py-5 text-sm text-gray-600">{project.client}</td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          project.status === 'Testing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }} />
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-600">{project.deadline}</td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
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