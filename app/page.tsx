// app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import MapComponent from '@/components/Map';



export default function Home() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
  
    const form = e.currentTarget as HTMLFormElement; // ✅ type-safe cast
    const formData = new FormData(form);
  
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };
  
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (res.ok) {
        setSuccessMessage('Thank you, a specialist will be contacting you shortly!');
        form.reset(); // ✅ use the cast form to reset
  
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 3000);
      } else {
        alert('There was an error submitting your request.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your request.');
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>John Scotti | Citrus County Roofing Specialist</title>
        <meta name="description" content="Get a free quote from John Scotti of Quality First Roofing, LLC. Trusted roofing & home improvement services in Citrus County, Florida." />
        <meta name="robots" content="index, follow" />
      </Head>

      <Script type="application/ld+json" id="local-business-schema">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Quality First Roofing, LLC",
    image: "https://qualityfirstroofingllc.com/logo.png",
    "@id": "https://qualityfirstroofingllc.com",
    url: "https://qualityfirstroofingllc.com",
    telephone: "+13524825111",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Citrus County Area",
      addressLocality: "Citrus County",
      addressRegion: "FL",
      postalCode: "34450",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.85886015136089,
      longitude: -82.50411363276991
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/search/top?q=quality%20first%20roof%20specialist%20john%20scotti",
      "https://www.linkedin.com/in/john-scotti-72849012/"
    ]
  })}
</Script>


      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 text-center">
      <Image src="/johnScottiProfilePic.jpg" alt="John Scotti Profile Picture" width={200} height={200} className="mx-auto mb-4 rounded-full" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">John Scotti – Citrus County's Trusted Roofing & Home Improvement Specialist</h1>
        <p className="text-xl mb-6">In partnership with Quality First Roofing, LLC</p>
        <Link href="#contact" className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded shadow-lg hover:bg-yellow-500">
           Get a Free Estimate
        </Link>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose John Scotti?</h2>
        <p className="mb-4 text-lg">
          With over 20 years of experience, John Scotti is a local roofing expert providing reliable and affordable services throughout Citrus County, FL.
        </p>
        <p className="text-lg">
          Licensed, insured, and committed to quality workmanship — specializing in roofing, gutters, siding, and home improvements.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Services</h3>
          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li>✓ Roof Repair & Replacement</li>
            <li>✓ Storm Damage Restoration</li>
            <li>✓ Gutter Installation</li>
            <li>✓ Siding & Exterior Upgrades</li>
            <li>✓ Energy-Efficient Roofing</li>
          </ul>
        </div>
      </section>

      <section><MapComponent /></section>

      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Request a Free Quote</h3>

          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
              {successMessage}
            </div>
)}


          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" type="text" required placeholder="Your Name" className="w-full p-3 border rounded" />
            <input name="email" type="email" required placeholder="Your Email" className="w-full p-3 border rounded" />
            <input name="phone" type="tel" required placeholder="Your Phone Number" className="w-full p-3 border rounded" />
            <textarea name="message" rows={4} placeholder="How can we help?" className="w-full p-3 border rounded" />
            <button type="submit" disabled={submitting} className="bg-blue-600 text-white py-3 px-6 rounded font-semibold hover:bg-blue-700">
              {submitting ? 'Sending...' : 'Send Request'}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center py-8">
        <p>&copy; {new Date().getFullYear()} Quality First Roofing, LLC. Serving Citrus County, FL</p>
        <div className="mt-2 text-sm">
          <Link href="https://www.linkedin.com/in/john-scotti-72849012/">LinkedIn</Link> |{' '}
          <Link href="https://qualityfirstroofingllc.com/">Main Site</Link> |{' '}
          <Link href="https://www.facebook.com/search/top?q=quality%20first%20roof%20specialist%20john%20scotti">Facebook</Link>
        </div>
      </footer>
    </main>
  );
}
