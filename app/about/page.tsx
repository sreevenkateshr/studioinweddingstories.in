// /app/about-us/page.tsx
import AboutContent from "./index";
import Head from "next/head";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        {/* Basic Meta */}
        <title>About Us | StudioIn Wedding Stories Photography</title>
        <meta
          name="description"
          content="StudioIn Wedding Stories offers professional wedding, pre-wedding, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
        />
        <meta
          name="keywords"
          content="StudioIn Wedding Stories, wedding photography Nagercoil, pre-wedding photography Nagercoil, event photography Kanyakumari, birthday photography Trivandrum, professional photographers Tirunelveli, photography South India"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in/about-us" />

        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
 {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="x9PgItRfB4Xnihz7Eq7BK9YdGsEUUwE270Tl2wH980w" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="About Us | StudioIn Wedding Stories Photography" />
        <meta
          property="og:description"
          content="StudioIn Wedding Stories offers professional wedding, pre-wedding, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in/about-us" />
        <meta property="og:image" content="/studioin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="About Us | StudioIn Wedding Stories Photography" />
        <meta
          name="twitter:description"
          content="StudioIn Wedding Stories offers professional wedding, pre-wedding, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
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
              "url": "https://www.studioinweddingstories.in/about-us",
              "telephone": "+91 95975 08874", // replace with actual
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "studio.in wedding photography, 3HP2+H7C, Church Rd, Kanniyakumari, Tamil Nadu 629702",
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
              "description": "StudioIn Wedding Stories offers professional wedding, pre-wedding, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby.",
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

      <AboutContent />
    </>
  );
}