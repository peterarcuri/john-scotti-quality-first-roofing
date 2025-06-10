import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  domain: 'john-scotti-quality-first-roofing.vercel.app',
  proxyUrl: 'https://john-scotti-quality-first-roofing.vercel.app',
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};