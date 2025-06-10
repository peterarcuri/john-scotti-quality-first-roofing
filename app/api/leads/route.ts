import { auth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/clerk-sdk-node'; // ✅ correct for server-side usage

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Call clerkClient as a function, await result to get client object
    const user = await clerkClient.users.getUser(userId);
    const userEmail = user.emailAddresses[0]?.emailAddress;

    const allowedEmails = [
      'john@qualityfirstroofingllc.com',
      'admin@qualityfirstroofingllc.com',
      'peterarcuri@gmail.com',
    ];

    if (!userEmail || !allowedEmails.includes(userEmail)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(leads);
  } catch (err) {
    console.error('Error fetching leads:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
