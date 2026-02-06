export default function Projects() {
  // Fake projects data for now
  const projects = [
    { id: 1, name: "E-commerce Platform", status: "In Progress", progress: 65 },
    { id: 2, name: "HR System", status: "Testing", progress: 92 },
    { id: 3, name: "Consulting Strategy", status: "Completed", progress: 100 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          My Projects
        </h1>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600 mb-3">Status: {project.status}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="text-right text-sm text-gray-500 mt-1">
                {project.progress}% complete
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}