import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function AdminProjects({ projects = [] }) {
    const emptyForm = { name: '', client: '', status: 'Pending', description: '' };
    const { data, setData, post, put, delete: destroy, reset } = useForm(emptyForm);
    const [editing, setEditing] = useState(null);

    // Flash message from Laravel
    const { flash } = usePage().props;
    const [message, setMessage] = useState(flash?.success || '');

    // Auto-hide message after 3 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    // Submit form for create or update
    const submitForm = (e) => {
        e.preventDefault();

        if (editing) {
            put(`/admin/projects/${editing.id}`, {
                onSuccess: () => {
                    setEditing(null);
                    reset();
                },
            });
        } else {
            post('/admin/projects', {
                onSuccess: () => reset(),
            });
        }
    };

    // Start editing a project
    const startEdit = (p) => {
        setEditing(p);
        setData({
            name: p.name || '',
            client: p.client || '',
            status: p.status || 'Pending',
            description: p.description || '',
        });
    };

    // Cancel editing
    const cancelEdit = () => {
        setEditing(null);
        reset();
    };

    // Map status to colored badges
    const statusBadge = (status) => {
        const map = {
            Pending: "bg-yellow-100 text-yellow-700",
            Active: "bg-green-100 text-green-700",
            Completed: "bg-blue-100 text-blue-700",
        };
        return map[status] || "bg-gray-100 text-gray-700";
    };

    return (
        <div className="space-y-10">

            {/* Flash message popup */}
            {message && (
                <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
                    {message}
                </div>
            )}

            {/* Page header */}
            <div>
                <h1 className="text-3xl font-bold">Projects Manager</h1>
                <p className="text-gray-600">Create, update and manage consultancy projects</p>
            </div>

            {/* Project form */}
            <form onSubmit={submitForm} className="bg-white p-8 rounded-2xl shadow space-y-5">
                <h2 className="text-xl font-semibold">{editing ? "Edit Project" : "Create New Project"}</h2>

                <input
                    type="text"
                    placeholder="Project Name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="w-full border px-4 py-3 rounded-lg"
                    required
                />

                <input
                    type="text"
                    placeholder="Client Name"
                    value={data.client}
                    onChange={e => setData('client', e.target.value)}
                    className="w-full border px-4 py-3 rounded-lg"
                    required
                />

                <select
                    value={data.status}
                    onChange={e => setData('status', e.target.value)}
                    className="w-full border px-4 py-3 rounded-lg"
                >
                    <option>Pending</option>
                    <option>Active</option>
                    <option>Completed</option>
                </select>

                <textarea
                    placeholder="Project Description"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="w-full border px-4 py-3 rounded-lg"
                />

                <div className="flex gap-3">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
                    >
                        {editing ? 'Update Project' : 'Create Project'}
                    </button>

                    {editing && (
                        <button
                            type="button"
                            onClick={cancelEdit}
                            className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* Projects table */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                        <tr className="text-left">
                            <th className="p-5">Project</th>
                            <th className="p-5">Client</th>
                            <th className="p-5">Status</th>
                            <th className="p-5 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.length === 0 && (
                            <tr>
                                <td colSpan="4" className="p-8 text-center text-gray-500">
                                    No projects created yet.
                                </td>
                            </tr>
                        )}

                        {projects.map(p => (
                            <tr key={p.id} className="border-t">
                                <td className="p-5 font-semibold">{p.name}</td>
                                <td className="p-5 text-gray-600">{p.client}</td>
                                <td className="p-5">
                                    <span className={`px-3 py-1 rounded-full text-sm ${statusBadge(p.status)}`}>
                                        {p.status}
                                    </span>
                                </td>
                                <td className="p-5 text-right space-x-4">
                                    <button
                                        onClick={() => startEdit(p)}
                                        className="text-indigo-600 hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (confirm(`Delete "${p.name}" ?`)) {
                                                destroy(`/admin/projects/${p.id}`);
                                            }
                                        }}
                                        className="text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

AdminProjects.layout = page => <AdminLayout>{page}</AdminLayout>;
