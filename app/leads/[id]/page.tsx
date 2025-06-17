import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
  createdAt: string;
}

interface LeadDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function LeadDetailPage({ params }: LeadDetailPageProps) {
  console.log('Rendering LeadDetailPage with params:', params);
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/leads/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return notFound();

  const lead: Lead = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-32 rounded-lg text-gray-400 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 shadow-md shadow-blue-500">
      <h2 className="text-3xl font-bold mb-4 text-gray-200">Lead Details</h2>
      <p className="text-2xl">Name:{lead.name}</p>
      <p className="text-2xl">Email: {lead.email}</p>
      <p className="text-2xl">Phone: {lead.phone}</p>
      <p className="text-2xl">Message: {lead.message || 'None'}</p>
      <p className="text-sm text-gray-500 mt-4">
        Submitted: {new Date(lead.createdAt).toLocaleString()}
      </p>

      <div className="mt-6">
        <Link
          href="/admin/leads"
          className="text-blue-400 hover:underline"
        >
          ← Back to Leads
        </Link>
      </div>
    </div>
  );
}