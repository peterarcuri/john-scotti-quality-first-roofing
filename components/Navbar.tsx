'use client';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 bg-white shadow">
    <Link href="/" className="text-xl font-bold text-gray-800">
      Quality First Roofing
    </Link>
    <div className="flex gap-4 items-center">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <Link
          href="/dashboard"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Dashboard
        </Link>
        <SignOutButton>
          <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  </nav>
);

export default Navbar;
