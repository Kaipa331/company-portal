import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, router } from '@inertiajs/react';
import { useState } from 'react';

export default function AdminClients({ clients }) {

    const [search, setSearch] = useState('');
    const [editing, setEditing] = useState(null);

    const { data, setData, post, put, reset, processing } = useForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        address: '',
    });

    function submit(e) {
        e.preventDefault();

        if (editing) {
            put(`/admin/clients/${editing.id}`, {
                onSuccess: () => {
                    reset();
                    setEditing(null);
                }
            });
        } else {
            post('/admin/clients', {
                onSuccess: () => reset()
            });
        }
    }

    function editClient(client) {
        setEditing(client);
        setData({
            name: client.name || '',
            email: client.email || '',
            phone: client.phone || '',
            company: client.company || '',
            address: client.address || '',
        });
    }

    function deleteClient(id) {
        if (confirm("Delete this client?")) {
            router.delete(`/admin/clients/${id}`);
        }
    }

    const filtered = clients.filter(c =>
        (c.company || '').toLowerCase().includes(search.toLowerCase()) ||
        (c.email || '').toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Clients</h1>
                    <p className="text-gray-600">Manage consultancy clients</p>
                </div>
            </div>


            {/* ADD / EDIT FORM */}
            <div className="bg-white p-6 rounded-2xl shadow">
                <form onSubmit={submit} className="grid md:grid-cols-5 gap-3">

                    <input
                        placeholder="Company"
                        value={data.company}
                        onChange={e => setData('company', e.target.value)}
                        className="border p-3 rounded"
                        required
                    />

                    <input
                        placeholder="Email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        className="border p-3 rounded"
                    />

                    <input
                        placeholder="Phone"
                        value={data.phone}
                        onChange={e => setData('phone', e.target.value)}
                        className="border p-3 rounded"
                    />

                    <input
                        placeholder="Address"
                        value={data.address}
                        onChange={e => setData('address', e.target.value)}
                        className="border p-3 rounded"
                    />

                    <button
                        disabled={processing}
                        className="bg-green-600 text-white rounded px-6"
                    >
                        {editing ? 'Update' : 'Add'}
                    </button>

                </form>
            </div>


            {/* SEARCH */}
            <div className="bg-white p-6 rounded-2xl shadow">
                <input
                    type="text"
                    placeholder="Search clients..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full md:w-96 px-5 py-3 border rounded-xl"
                />
            </div>


            {/* TABLE */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-5 text-left">Company</th>
                            <th className="p-5 text-left">Email</th>
                            <th className="p-5 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">

                        {filtered.map(client => (

                            <tr key={client.id}>

                                <td className="p-5 font-semibold">
                                    {client.company}
                                </td>

                                <td className="p-5 text-gray-600">
                                    {client.email}
                                </td>

                                <td className="p-5 text-right space-x-4">

                                    <button
                                        onClick={() => editClient(client)}
                                        className="text-green-600 hover:underline"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteClient(client.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan="3" className="p-10 text-center text-gray-500">
                                    No clients found
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

AdminClients.layout = page => <AdminLayout>{page}</AdminLayout>;
