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

<section className="relative text-white py-20 px-6 text-center overflow-hidden">
  {/* Background image with opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-100"
    style={{ backgroundImage: "url('/headerRoofimage.webp')" }}
    aria-hidden="true"
  ></div>

  {/* Overlay to ensure text readability if needed */}
  <div className="relative z-10 bg-gradient-to-r from-blue-900/50 to-blue-600/50 p-6 rounded-lg">
    <Image
      src="/johnScottiProfilePic.jpg"
      alt="John Scotti Profile Picture"
      width={250}
      height={250}
      className="mx-auto mb-4 rounded-full"
    />
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      John Scotti – Citrus County&apos;s Trusted Roofing &amp; Home Improvement Specialist
    </h1>
    <p className="text-xl mb-6">In partnership with Quality First Roofing, LLC</p>
    <Link
      href="#contact"
      className="bg-blue-700 text-gray font-semibold py-3 px-6 rounded shadow-lg hover:bg-blue-600"
    >
      Get a Free Estimate
    </Link>
  </div>
</section>


<section className="relative w-full py-16 px-6 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800">
  {/* Aurora Effect */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400 opacity-30 blur-3xl rounded-full mix-blend-lighten animate-pulse" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gray-400 opacity-20 blur-2xl rounded-full mix-blend-lighten animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-blue-800 opacity-20 blur-3xl rounded-full mix-blend-lighten animate-pulse" />
  </div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-4">Why Choose John Scotti?</h2>
    <p className="mb-4 text-lg">
      With over 20 years of experience, John Scotti is a local roofing expert providing reliable and affordable services throughout Citrus County, FL.
    </p>
    <p className="text-lg">
      Licensed, insured, and committed to quality workmanship — specializing in roofing, gutters, siding, and home improvements.
    </p>
  </div>
</section>


<section className="relative w-full py-16 px-6 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800">
  {/* Aurora Effect */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400 opacity-30 blur-3xl rounded-full mix-blend-lighten animate-pulse" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gray-400 opacity-20 blur-2xl rounded-full mix-blend-lighten animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-blue-800 opacity-20 blur-3xl rounded-full mix-blend-lighten animate-pulse" />
  </div>

  <div className="max-w-7xl mx-auto">
    <h3 className="text-2xl text-gray-200 font-bold mb-10 text-center">Our Services</h3>

    <ul className="flex justify-between gap-4 text-gray-200 text-sm md:text-base overflow-x-auto">
      {[
        { label: "Roof Repair & Replacement", image: "/servicesRoofimage.webp", alt: "Roof repair & replacement image" },
        { label: "Storm Damage Restoration", image: "/servicesStormDamageimage.webp", alt: "Storm damage Restoration image" },
        { label: "Gutter Installation", image: "/servicesGutterimage.webp", alt: "Gutter installation image" },
        { label: "Siding & Exterior Upgrade", image: "/servicesSidingImage.webp", alt: "Siding & exterior upgrade image" },
        { label: "Energy Efficient Roofing", image: "/servicesEnergyEffImage.webp", alt: "Energy efficient roofing image" },
      ].map(({ label, image, alt }) => (
        <li key={label} className="flex flex-col items-center w-1/5 min-w-[180px] group">
          <p className="mb-2 font-semibold">{label}</p>
          <div className="relative w-full pt-[100%] rounded-xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-white/0 before:opacity-0 group-hover:before:opacity-40 before:transition-opacity">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>




      <section><MapClientWrapper /></section>

      <section className="relative w-full py-16 px-6 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800">
  {/* Aurora Effect */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400 opacity-30 blur-3xl rounded-full mix-blend-lighten animate-pulse" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gray-400 opacity-20 blur-2xl rounded-full mix-blend-lighten animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-blue-800 opacity-20 blur-3xl rounded-full mix-blend-lighten animate-pulse" />
  </div>

        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-300">Request a Free Quote</h3>
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
