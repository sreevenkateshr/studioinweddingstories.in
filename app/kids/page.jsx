// app/kids/page.jsx
import Head from "next/head";
import KidsHero from "./components/KidsHero";
import AboutSection from "./components/AboutSection";
import SelectedWorks from "./components/SelectedWorks";
import WhoWeAre from "./components/WhoWeAre";
import KidsFAQ from "./components/KidsFAQ";
import Testimonials from "./components/Testimonials";
import InstagramSlider from "./components/InstagramSlider";

export default function KidsPage() {
  return (
    <>
      <Head>
        {/* Basic Meta */}
        <title>Kids Photography | StudioIn Wedding Stories Nagercoil</title>
        <meta
          name="description"
          content="StudioIn Wedding Stories offers professional kids and family photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Capture beautiful childhood memories with our creative photography."
        />
        <meta
          name="keywords"
          content="kids photography Nagercoil, family photoshoot Kanyakumari, birthday photography Trivandrum, children photography Tirunelveli, StudioIn Wedding Stories"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in/kids" />

        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="Kids Photography | StudioIn Wedding Stories Nagercoil" />
        <meta
          property="og:description"
          content="StudioIn Wedding Stories offers professional kids and family photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Capture beautiful childhood memories with our creative photography."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in/kids" />
        <meta property="og:image" content="/studioin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="Kids Photography | StudioIn Wedding Stories Nagercoil" />
        <meta
          name="twitter:description"
          content="StudioIn Wedding Stories offers professional kids and family photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby. Capture beautiful childhood memories with our creative photography."
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
              "url": "https://www.studioinweddingstories.in/kids",
              "telephone": "+91 95975 08874",
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
              "description": "StudioIn Wedding Stories offers professional kids and family photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby.",
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

      {/* Page Sections */}
      <main className="bg-white text-black">
        <KidsHero />
        <AboutSection />
        <WhoWeAre />
        <SelectedWorks />
        <KidsFAQ />
        <Testimonials />
        <InstagramSlider />
      </main>
    </>
  );
}
