// app/baptism/page.jsx
import Baptismhero from "../baptism/baptismhero";
import Baptismportfolio from "../baptism/baptismPortfolio";

export default function BaptismPage() {
  return (
    <>
      {/* Basic Meta */}
      <title>Baptism Photography | StudioIn Wedding Stories</title>
      <meta
        name="description"
        content="Capture timeless baptism memories with elegant ceremonies, family celebrations, and professional photography in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
      />
      <meta
        name="keywords"
        content="baptism photography, baptism photoshoot, elegant baptism ceremony, family baptism photographer, kids baptism photoshoot Nagercoil, baptism photographer Kanyakumari, Trivandrum baptism photography, Tirunelveli baptism photographer"
      />
      <link rel="canonical" href="https://www.studioinweddingstories.in/baptism" />

      {/* Favicons / App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/studioin-logo.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:title" content="Baptism Photography | StudioIn Wedding Stories" />
      <meta
        property="og:description"
        content="Capture timeless baptism memories with elegant ceremonies, family celebrations, and professional photography in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
      />
      <meta property="og:site_name" content="StudioIn Wedding Stories" />
      <meta property="og:url" content="https://www.studioinweddingstories.in/baptism" />
      <meta property="og:image" content="/studioin-logo.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@studioinwedding" />
      <meta name="twitter:site" content="StudioIn Wedding Stories" />
      <meta name="twitter:title" content="Baptism Photography | StudioIn Wedding Stories" />
      <meta
        name="twitter:description"
        content="Capture timeless baptism memories with elegant ceremonies, family celebrations, and professional photography in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
      />
      <meta name="twitter:image" content="/studioin-logo.png" />

      {/* Geo / Misc */}
      <meta name="geo.country" content="India" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Nagercoil" />
      <meta name="author" content="StudioIn Wedding Stories" />
      <meta name="copyright" content="StudioIn Wedding Stories" />
       <meta
  name="google-site-verification"
  content="65Lz7SFyW5NbmdJje4UmWs1Ovut1Wf9x28K9iRgWfxk"
/>



      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "StudioIn Wedding Stories",
            "image": "https://www.studioinweddingstories.in/studioin-logo.png",
            "url": "https://www.studioinweddingstories.in/baptism",
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
              "https://www.instagram.com/little_studio.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              "https://www.youtube.com/@studio.inweddingphotography"
            ],
            "description": "Capture timeless baptism memories with elegant ceremonies, family celebrations, and professional photography in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli.",
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

      <main className="overflow-hidden">
        {/* Baptism Hero Section */}
        <Baptismhero />
        <Baptismportfolio />
      </main>
    </>
  );
}
