// app/page.jsx
import {
  HeroSection,
  Homeabout,
  Homeservices,
  SelectedWorks,
  LatestStories,
  Testimonials,
  Ourprocess,
  DreamCounter,
  Midslide,
  Imageslider,
} from "./homepage"; // ✅ import from homepage folder

export default function HomePage() {
  return (
    <>
      {/* Basic Meta */}
      <title>
        StudioIn Wedding Stories | Best Wedding & Event Photography Nagercoil
      </title>
      <meta
        name="description"
        content="StudioIn Wedding Stories provides wedding, pre-wedding, birthday & event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
      />
      <meta
        name="keywords"
        content="best photography Nagercoil, wedding photography Nagercoil, pre-wedding photoshoot Nagercoil, birthday photography Kanyakumari, event photography Trivandrum, professional photographers Tirunelveli, South India photography"
      />
      {/* ✅ Robots Meta Tag for SEO */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href="https://www.studioinweddingstories.in" />

      {/* Favicons / App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/studioin-logo.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta
        property="og:title"
        content="StudioIn Wedding Stories | Best Wedding & Event Photography Nagercoil"
      />
      <meta
        property="og:description"
        content="StudioIn Wedding Stories offers professional wedding, pre-wedding, birthday, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Capturing timeless memories beautifully."
      />
      <meta property="og:site_name" content="StudioIn Wedding Stories" />
      <meta property="og:url" content="https://www.studioinweddingstories.in" />
      <meta property="og:image" content="/studioin-logo.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@studioinwedding" />
      <meta name="twitter:site" content="StudioIn Wedding Stories" />
      <meta
        name="twitter:title"
        content="StudioIn Wedding Stories | Best Wedding & Event Photography Nagercoil"
      />
      <meta
        name="twitter:description"
        content="StudioIn Wedding Stories offers professional wedding, pre-wedding, birthday, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Capturing timeless memories beautifully."
      />
      <meta name="twitter:image" content="/studioin-logo.png" />

      {/* Google Search Console Verification */}
      <meta
  name="google-site-verification"
  content="65Lz7SFyW5NbmdJje4UmWs1Ovut1Wf9x28K9iRgWfxk"
/>


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
            url: "https://www.studioinweddingstories.in",
            telephone: "+91 95975 08874",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "studio.in wedding photography, 3HP2+H7C, Church Rd, Kanniyakumari, Tamil Nadu 629702",
              addressLocality: "Nagercoil",
              addressRegion: "Tamil Nadu",
              postalCode: "629001",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.facebook.com/studio.in26",
              "https://www.instagram.com/studio_.in",
              "https://www.instagram.com/little_studio.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              "https://www.youtube.com/@studio.inweddingphotography",
            ],
            description:
              "StudioIn Wedding Stories offers professional wedding, pre-wedding, birthday, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Capturing timeless memories beautifully.",
            areaServed: [
              "Nagercoil",
              "Kanyakumari",
              "Trivandrum",
              "Tirunelveli",
              "Marthandam",
              "South India",
            ],
          }),
        }}
      />

      {/* Homepage Sections */}
      <HeroSection />
      <Homeabout />
      <Homeservices />
      <SelectedWorks />
      <LatestStories />
      <Testimonials />
      <Ourprocess />
      <DreamCounter />
      <Midslide />
      <Imageslider />
    </>
  );
}
