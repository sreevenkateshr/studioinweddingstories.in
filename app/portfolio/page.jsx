// app/portfolio/page.jsx
import Homeport from "./homeport";


export default function PortfolioPage() {
  return (
    <>
        {/* Basic Meta */}
        <title>Portfolio | StudioIn Wedding Stories</title>
        <meta
          name="description"
          content="Explore StudioIn Wedding Stories portfolio showcasing wedding, birthday, kids, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby areas."
        />
        <meta
          name="keywords"
          content="StudioIn Wedding Stories, wedding photography portfolio, birthday photography portfolio, kids photography portfolio, event photography South India, Nagercoil, Kanyakumari, Trivandrum, Tirunelveli"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in/portfolio" />

        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="Portfolio | StudioIn Wedding Stories" />
        <meta
          property="og:description"
          content="Explore StudioIn Wedding Stories portfolio showcasing wedding, birthday, kids, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby areas."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in/portfolio" />
        <meta property="og:image" content="/studioin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="Portfolio | StudioIn Wedding Stories" />
        <meta
          name="twitter:description"
          content="Explore StudioIn Wedding Stories portfolio showcasing wedding, birthday, kids, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby areas."
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
              "url": "https://www.studioinweddingstories.in/portfolio",
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
              "description": "Explore StudioIn Wedding Stories portfolio showcasing wedding, birthday, kids, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby areas.",
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

      {/* Page Sections */}
      <main className="overflow-hidden">
        <Homeport />
  
      </main>
    </>
  );
}
