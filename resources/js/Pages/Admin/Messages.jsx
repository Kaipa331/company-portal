import AdminLayout from '@/Layouts/AdminLayout';

export default function Messages({ messages }) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Messages</h2>

            <div className="bg-white rounded shadow">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Message</th>
                        </tr>
                    </thead>

                    <tbody>
                        {messages.map(m => (
                            <tr key={m.id} className="border-t">
                                <td className="p-3">{m.name}</td>
                                <td className="p-3">{m.email}</td>
                                <td className="p-3">{m.message}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

Messages.layout = page => <AdminLayout>{page}</AdminLayout>;
