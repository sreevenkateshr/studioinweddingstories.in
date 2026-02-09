// app/birthday/page.jsx
import Head from "next/head";
import BirthdayHero from "../birthday/BirthdayHero";
import BirthdayPortfolio from "../birthday/BirthdayPortfolio";

export default function BirthdayPage() {
  return (
    <>
      <Head>
        {/* Basic Meta */}
        <title>Birthday Outdoor Photography | LittleStudioin</title>
        <meta
          name="Birthday Outdoor Photography"
          content="Creative outdoor birthday photography with themed setups, natural light, cake smash, family moments, and joyful celebrations in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
        />
        <meta
          name="keywords"
          content="birthday photography Nagercoil, outdoor birthday photoshoot Kanyakumari, cake smash photoshoot Trivandrum, family birthday photography Tirunelveli, professional birthday photographers South India"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in/kids/birthday" />

        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="Birthday Outdoor Photography | StudioIn Wedding Stories" />
        <meta
          property="og:description"
          content="Creative outdoor birthday photography with themed setups, natural light, cake smash, family moments, and joyful celebrations in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in/kids/birthday" />
        <meta property="og:image" content="/studioin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="Birthday Outdoor Photography | StudioIn Wedding Stories" />
        <meta
          name="twitter:description"
          content="Creative outdoor birthday photography with themed setups, natural light, cake smash, family moments, and joyful celebrations in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
        />
        <meta name="twitter:image" content="/studioin-logo.png" />

        {/* Geo / Misc */}
        <meta name="geo.country" content="India" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Nagercoil" />
        <meta name="author" content="StudioIn Wedding Stories" />
        <meta name="copyright" content="StudioIn Wedding Stories" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "StudioIn Wedding Stories",
              "image": "https://www.studioinweddingstories.in/studioin-logo.png",
              "url": "https://www.studioinweddingstories.in/birthday",
              "telephone": "+91 95975 08874",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "StudioIn Wedding Photography, 3HP2+H7C, Church Rd, Kanniyakumari, Tamil Nadu 629702",
                "addressLocality": "Nagercoil",
                "addressRegion": "Tamil Nadu",
                "postalCode": "629001",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/studio.in26",
                "https://www.instagram.com/studio_.in",
                "https://www.youtube.com/@studio.inweddingphotography"
              ],
              "description": "Creative outdoor birthday photography with themed setups, natural light, cake smash, family moments, and joyful celebrations in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli.",
              "areaServed": [
                "Nagercoil",
                "Kanyakumari",
                "Trivandrum",
                "Tirunelveli",
                "Marthandam",
                "South India"
              ]
            })
          }}
        />
      </Head>

      <main className="overflow-hidden">
        {/* Birthday Hero Section */}
        <BirthdayHero />
        <BirthdayPortfolio />
      </main>
    </>
  );
}
