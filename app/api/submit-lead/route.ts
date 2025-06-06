// app/api/submit-lead/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json(); // ✅ fix here
    const name = data.name?.toString();
    const email = data.email?.toString();
    const phone = data.phone?.toString();
    const message = data.message?.toString() || '';

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: { name, email, phone, message },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error('submit-lead API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
