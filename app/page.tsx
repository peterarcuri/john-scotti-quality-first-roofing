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
    <h1 className="text-4xl md:text-5xl text-gray-200 font-bold mb-4 ">
      John Scotti – Citrus County&apos;s Trusted Roofing &amp; Home Improvement Specialist
    </h1>
    <p className="text-xl mb-6 text-gray-200">In partnership with Quality First Roofing, LLC</p>
    <Link
      href="#contact"
      className="bg-blue-700 text-gray font-semibold py-3 px-6 rounded shadow-sm shadow-blue-500 hover:bg-blue-600"
    >
      Get a Free Estimate
    </Link>
  </div>
</section>


<section className="relative w-full py-16 px-6 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800">
  {/* Aurora Effect */}
  {/* <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-400 opacity-100 blur-3xl rounded-full mix-blend-lighten animate-pulse" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gray-400 opacity-20 blur-2xl rounded-full mix-blend-lighten animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-blue-800 opacity-20 blur-3xl rounded-full mix-blend-lighten animate-pulse" />
  </div> */}

  {/* Content */}
  <div className="relative max-w-4xl mx-auto text-gray-300">
    <div className="relative z-10 margin-bottom: 20px bg-gradient-to-r from-gray-400/20 to-blue-600/20 p-6 rounded-lg max-w-2xl mx-auto shadow-md shadow-blue-500">
    <h2 className="text-[2.4rem] font-bold mb-4">Why Choose John Scotti?</h2>
    </div>
   
    <p className="mt-12 mb-4 margin-mt-50px text-[1.2rem]">
      With over 20 years of experience, John Scotti is a local roofing expert providing reliable and affordable services throughout Citrus County, FL.
    </p>
    <p className="text-lg">
      Licensed, insured, and committed to quality workmanship — specializing in roofing, gutters, siding, and home improvements.
    </p>
  </div>
</section>



<section className="relative w-full py-16 px-6 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800">
  <div className="max-w-screen-xl mx-auto">
    <h3 className="text-2xl text-gray-200 font-bold mb-10">Our Services</h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {[
        {
          label: "Roof Repair & Replacement",
          image: "/services_roof_image.webp",
        },
        {
          label: "Storm Damage Restoration",
          image: "/services_storm_damage.webp",
        },
        {
          label: "Gutter Installation",
          image: "/services_gutter_image.webp",
        },
        {
          label: "Siding & Exterior Upgrade",
          image: "/services_siding_image.webp",
        },
        {
          label: "Energy Efficient Roofing",
          image: "/services_energy_eff.webp",
        },
      ].map(({ label, image }, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-lg border border-gray-800 bg-blue-950 shadow-[0_0_15px] shadow-blue-700/30 transition-transform duration-300 hover:scale-105"
        >
          {/* Image Container */}
          <div className="relative h-40 overflow-hidden">
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Glare Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-200">{label}</h4>
          </div>
        </div>
      ))}
    </div>
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

      <footer className="font-alice text-[1.7rem] bg-blue-900 text-gray-300 text-center py-8 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 shadow-lg shadow-blue-500">
        <p>&copy; {new Date().getFullYear()} Quality First Roofing, LLC. Serving Citrus County, FL</p>
        <div className="text-gray-300 mt-2 text-[1.2rem]">
          <Link href="https://www.linkedin.com/in/john-scotti-72849012/">LinkedIn</Link> |{' '}
          <Link href="https://qualityfirstroofingllc.com/">Quality First Roofing LLC</Link> |{' '}
          <Link href="https://www.facebook.com/search/top?q=quality%20first%20roof%20specialist%20john%20scotti">Facebook</Link>
        </div>
      </footer>
    </main>
  );
}
