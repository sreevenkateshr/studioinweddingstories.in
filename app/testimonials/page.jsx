// app/testimonials/page.jsx
import TestimonialsSection from "./index";

export default function TestimonialsPage() {
  return (
    <>
        {/* Basic Meta */}
        <title>Testimonials | StudioIn Wedding Stories</title>
        <meta
          name="description"
          content="Read testimonials from happy clients of StudioIn Wedding Stories, capturing beautiful weddings, events, and celebrations across Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
        />
        <meta
          name="keywords"
          content="StudioIn Wedding Stories testimonials, wedding photography reviews Nagercoil, birthday photography reviews Kanyakumari, event photography feedback Trivandrum, client reviews Tirunelveli"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in/testimonials" />

        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="Testimonials | StudioIn Wedding Stories" />
        <meta
          property="og:description"
          content="Read testimonials from happy clients of StudioIn Wedding Stories, capturing beautiful weddings, events, and celebrations across Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in/testimonials" />
        <meta property="og:image" content="/studioin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="Testimonials | StudioIn Wedding Stories" />
        <meta
          name="twitter:description"
          content="Read testimonials from happy clients of StudioIn Wedding Stories, capturing beautiful weddings, events, and celebrations across Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
        />
        <meta name="twitter:image" content="/studioin-logo.png" />
 {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="x9PgItRfB4Xnihz7Eq7BK9YdGsEUUwE270Tl2wH980w" />

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
              "url": "https://www.studioinweddingstories.in/testimonials",
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
              "description": "Read testimonials from happy clients of StudioIn Wedding Stories, capturing beautiful weddings, events, and celebrations across Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby.",
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
      <TestimonialsSection />
    </>
  );
}
