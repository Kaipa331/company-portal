import { useParams } from '@inertiajs/react';

export default function ProjectDetail() {
  const { id } = useParams();

  // Fake data — in real app this comes from backend
  const project = {
    id,
    name: "E-commerce Platform for Retail Client",
    status: "In Progress",
    progress: 65,
    deadline: "2026-04-15",
    description: "Full custom e-commerce solution including product catalog, payment integration, admin panel and mobile responsive design.",
    milestones: [
      { name: "Requirements & Planning", completed: true },
      { name: "UI/UX Design", completed: true },
      { name: "Backend Development", completed: true },
      { name: "Frontend Development", completed: false },
      { name: "Testing & QA", completed: false },
      { name: "Deployment & Training", completed: false },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {project.name}
              </h1>
              <p className="text-gray-600">Project ID: #{project.id}</p>
            </div>
            <span className="px-6 py-2 rounded-full bg-blue-100 text-blue-800 font-medium">
              {project.status}
            </span>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="text-right mt-2 text-gray-600">
              {project.progress}% complete • Deadline: {project.deadline}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Project Description</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Milestones</h3>
            <div className="space-y-4">
              {project.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {milestone.completed ? (
                      <span className="text-green-500 text-xl">✓</span>
                    ) : (
                      <span className="text-gray-400 text-xl">○</span>
                    )}
                    <span className={milestone.completed ? "line-through text-gray-500" : ""}>
                      {milestone.name}
                    </span>
                  </div>
                  <span className={milestone.completed ? "text-green-600 font-medium" : "text-gray-500"}>
                    {milestone.completed ? "Completed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}