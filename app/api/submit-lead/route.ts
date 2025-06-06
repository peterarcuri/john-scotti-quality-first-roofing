// app/api/submit-lead/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const data = await req.formData();
  const name = data.get('name')?.toString();
  const email = data.get('email')?.toString();
  const phone = data.get('phone')?.toString();
  const message = data.get('message')?.toString();

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const lead = await prisma.lead.create({
    data: { name, email, phone, message },
  });

  return NextResponse.json({ success: true, lead });
}
