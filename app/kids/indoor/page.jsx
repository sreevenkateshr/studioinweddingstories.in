// app/birthday/page.jsx
import BirthdayIndoorHero from "../indoor/IndoorHero";
import IndoorPortfolio from "../indoor/IndoorPortfolio";

export default function BirthdayPage() {
  return (
    <>
      {/* Basic Meta */}
      <title>Birthday Photography | Little StudioIn Wedding Stories</title>
      <meta
        name="description"
        content="Professional indoor and outdoor birthday photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Creative setups, cake smash, family moments & joyful celebrations."
      />
      <meta
        name="keywords"
        content="birthday photography Nagercoil, outdoor birthday photoshoot Kanyakumari, indoor birthday photography Trivandrum, cake smash Tirunelveli, family birthday photography, professional birthday photographers South India"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href="https://www.studioinweddingstories.in/kids/indoor" />

      {/* Favicons / App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/studioin-logo.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:title" content="Birthday Photography | StudioIn Wedding Stories" />
      <meta
        property="og:description"
        content="Professional indoor and outdoor birthday photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Creative setups, cake smash, family moments & joyful celebrations."
      />
      <meta property="og:site_name" content="StudioIn Wedding Stories" />
      <meta property="og:url" content="https://www.studioinweddingstories.in/kids/indoor" />
      <meta property="og:image" content="/studioin-logo.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@studioinwedding" />
      <meta name="twitter:site" content="StudioIn Wedding Stories" />
      <meta name="twitter:title" content="Birthday Photography | StudioIn Wedding Stories" />
      <meta
        name="twitter:description"
        content="Professional indoor and outdoor birthday photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Creative setups, cake smash, family moments & joyful celebrations."
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
            name: "StudioIn Wedding Stories",
            image: "https://www.studioinweddingstories.in/studioin-logo.png",
            url: "https://www.studioinweddingstories.in/kids/indoor",
            telephone: "+91 95975 08874",
            address: {
              "@type": "PostalAddress",
              streetAddress: "StudioIn Wedding Photography, 3HP2+H7C, Church Rd, Kanniyakumari, Tamil Nadu 629702",
              addressLocality: "Nagercoil",
              addressRegion: "Tamil Nadu",
              postalCode: "629001",
              addressCountry: "IN"
            },
            sameAs: [
              "https://www.facebook.com/studio.in26",
              "https://www.instagram.com/studio_.in",
              "https://www.instagram.com/little_studio.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              "https://www.youtube.com/@studio.inweddingphotography"
            ],
            description: "Professional indoor and outdoor birthday photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Creative setups, cake smash, family moments & joyful celebrations.",
            areaServed: [
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
        {/* Indoor Birthday Section */}
        <BirthdayIndoorHero />
        <IndoorPortfolio />
      </main>
    </>
  );
}
