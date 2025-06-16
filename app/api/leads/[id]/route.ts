// app/api/leads/[id]/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma'; // Adjust if needed

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const leadId = parseInt(params.id, 10);

  if (isNaN(leadId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
    });

    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json(lead);
  } catch (error) {
    console.error('[LEAD_FETCH_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to retrieve lead' },
      { status: 500 }
    );
  }
}
