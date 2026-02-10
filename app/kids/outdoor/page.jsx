// app/outdoor/birthday/page.jsx
import BirthdayOutdoorHero from "../outdoor/OutdoorHero";
import OutdoorPortfolio from "../outdoor/Outportfolio";

export default function BirthdayOutdoorPage() {
  return (
    <>
        {/* Basic Meta */}
        <title>Outdoor Birthday Photography | Little StudioIn Wedding Stories</title>
        <meta
          name="description"
          content="Outdoor birthday photography with creative themes, natural light, garden and beach setups, cake smash shoots, and candid family moments in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
        />
        <meta
          name="keywords"
          content="birthday photography Nagercoil, outdoor birthday photoshoot Kanyakumari, garden photoshoot Trivandrum, beach birthday photography Tirunelveli, StudioIn Wedding Stories"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in/kids/outdoor" />

        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="Outdoor Birthday Photography | StudioIn Wedding Stories" />
        <meta
          property="og:description"
          content="Outdoor birthday photography with creative themes, natural light, garden and beach setups, cake smash shoots, and candid family moments in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in/kids/outdoor" />
        <meta property="og:image" content="/studioin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="Outdoor Birthday Photography | StudioIn Wedding Stories" />
        <meta
          name="twitter:description"
          content="Outdoor birthday photography with creative themes, natural light, garden and beach setups, cake smash shoots, and candid family moments in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli."
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
              "url": "https://www.studioinweddingstories.in/kids/outdoor",
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
              "description": "Outdoor birthday photography with creative themes, natural light, garden and beach setups, cake smash shoots, and candid family moments in Nagercoil, Kanyakumari, Trivandrum & Tirunelveli.",
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
        <BirthdayOutdoorHero />
        <OutdoorPortfolio />
      </main>
    </>
  );
}
