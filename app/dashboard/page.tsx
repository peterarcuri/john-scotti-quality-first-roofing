import { auth, clerkClient } from '@clerk/nextjs/server'; // Import from the server subpath
import { redirect } from 'next/navigation'; // Import redirect from next/navigation
import LeadTable from './components/LeadTable';

export default async function DashboardPage() {
  const { userId } = await auth(); // Await the auth() function

  if (!userId) {
    return redirect('/sign-in'); // Redirect if the user is not authenticated
  }

  const client = await clerkClient(); // Await clerkClient()  
  const user = await client.users.getUser(userId); // Access the users property on the awaited client object

  // --- Authorization Check ---
  // Define allowed email addresses in a centralized constant for clarity and easier maintenance
  const allowedEmails = ['john@qualityfirstroofingllc.com', 'admin@qualityfirstroofingllc.com', 'peterarcuri@gmail.com'];

  // Check if the user's email address is in the allowed list
  const isAuthorized = user.emailAddresses.some(
    (email: { emailAddress: string }) => allowedEmails.includes(email.emailAddress)
  );

  if (!isAuthorized) {
    return (
      <div className="p-8 text-center text-red-600 font-semibold">
        Access Denied: This dashboard is for internal use only.
      </div>
    );
  }

  // --- Render authorized content ---
  return (
    <div className="p-6 relative w-full py-16 px-6 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800">
      <h1 className="text-3xl font-bold mb-4">Lead Dashboard</h1>
      <LeadTable />
    </div>
  );
}
