// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import ContactForm from '@/components/ContactForm';
import MapClientWrapper from '@/components/MapClientWrapper';

export const metadata = {
  title: "John Scotti | Quality First Roofing | Citrus County, FL",
  description: "Licensed roofing contractor in Citrus County, Florida. Quality First Roofing provides roof repairs, replacements & free inspections.",
  keywords: ["roofing Citrus County", "roof repair", "roof replacement", "Lecanto FL", "John Scotti"],
  robots: "index, follow",
  openGraph: {
    title: "Quality First Roofing - Lecanto FL",
    description: "Trusted roofing expert in Citrus County. Get your free inspection today.",
    url: "https://john-scotti-quality-first-roofing.vercel.app",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://qualityfirstroofingllc.com/logo.png",
        alt: "Quality First Roofing Logo",
        width: 600,
        height: 400,
      },
    ],
  }
};

const localBusinessJsonLd = {
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
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.85886015136089,
    longitude: -82.50411363276991,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "08:00",
      closes: "18:00"
    }
  ],
  sameAs: [
    "https://www.facebook.com/search/top?q=quality%20first%20roof%20specialist%20john%20scotti",
    "https://www.linkedin.com/in/john-scotti-72849012/"
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 text-center">
        <Image
          src="/johnScottiProfilePic.jpg"
          alt="John Scotti Profile Picture"
          width={200}
          height={200}
          className="mx-auto mb-4 rounded-full"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          John Scotti – Citrus County&apos;s Trusted Roofing &amp; Home Improvement Specialist
        </h1>
        <p className="text-xl mb-6">In partnership with Quality First Roofing, LLC</p>
        <Link
          href="#contact"
          className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded shadow-lg hover:bg-yellow-500"
        >
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

      <section><MapClientWrapper /></section>

      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Request a Free Quote</h3>
          <ContactForm />
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
