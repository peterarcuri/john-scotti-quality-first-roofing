'use client';

import { useEffect, useState } from 'react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  createdAt: string;
}

export default function LeadTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch('/api/leads');

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to fetch');
        }

        const data = await res.json();
        setLeads(data);
      } catch (err: unknown) {
        console.error('Failed to fetch leads:', err);
        setError(String(err))
      }
    };

    fetchLeads();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Total Leads: {leads.length}</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-teal-600 text-gray-300 text-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Message</th>
            <th className="p-2 border">Submitted</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="p-2 border text-gray-300">{lead.name}</td>
              <td className="p-2 border text-gray-300">{lead.email}</td>
              <td className="p-2 border text-gray-300">{lead.phone}</td>
              <td className="p-2 border text-gray-300">{lead.message || '-'}</td>
              <td className="p-2 border text-gray-300">
                {new Date(lead.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
