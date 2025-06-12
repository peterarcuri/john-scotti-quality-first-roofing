'use client';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 relative h-15 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 shadow-lg shadow-blue-500">
    <Link href="/" className="text-xl font-bold text-gray-800">
    <Image
          src="/qualityfirstroofinglogo.webp"
          alt="Quality First Roofing Logo"
          width={115}
          height={115}  
          className="drop-shadow-glow rounded-md"       
        />
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
