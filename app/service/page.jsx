// app/services/page.jsx
import ServicesPage from "./index";

export default function Services() {
  return (
    <>
        {/* Basic Meta */}
        <title>Services | StudioIn Wedding Stories</title>
        <meta
          name="description"
          content="StudioIn Wedding Stories offers professional wedding, birthday, kids, and event photography services in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby areas."
        />
        <meta
          name="keywords"
          content="StudioIn Wedding Stories, wedding photography services Nagercoil, birthday photography services Kanyakumari, kids photography Trivandrum, event photography Tirunelveli, professional photographers South India"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in/service" />

        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="Services | StudioIn Wedding Stories" />
        <meta
          property="og:description"
          content="StudioIn Wedding Stories offers professional wedding, birthday, kids, and event photography services in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby areas."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in/service" />
        <meta property="og:image" content="/studioin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
 {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="x9PgItRfB4Xnihz7Eq7BK9YdGsEUUwE270Tl2wH980w" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="Services | StudioIn Wedding Stories" />
        <meta
          name="twitter:description"
          content="StudioIn Wedding Stories offers professional wedding, birthday, kids, and event photography services in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby areas."
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
              "url": "https://www.studioinweddingstories.in/service",
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
              "description": "StudioIn Wedding Stories offers professional wedding, birthday, kids, and event photography services in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby areas.",
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

      {/* Main Page Content */}
      <ServicesPage />
    </>
  );
}
