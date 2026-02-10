// /app/faq/page.tsx
import Faq from "../faq/index";

export default function FaqPage() {
  return (
    <>
        {/* Basic Meta */}
        <title>FAQ | StudioIn Wedding Stories Photography</title>
        <meta
          name="description"
          content="“FAQs on StudioIn Wedding Stories’ wedding, pre-wedding, birthday & event photography services across Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
        />
        <meta
          name="keywords"
          content="StudioIn Wedding Stories FAQ, wedding photography questions Nagercoil, pre-wedding photography answers Kanyakumari, event photography Trivandrum, birthday photography Tirunelveli, photography South India"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in/faq" />

        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="FAQ | StudioIn Wedding Stories Photography" />
        <meta
          property="og:description"
          content="Frequently Asked Questions about StudioIn Wedding Stories' wedding, pre-wedding, birthday, and event photography services in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in/faq" />
        <meta property="og:image" content="/studioin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="FAQ | StudioIn Wedding Stories Photography" />
        <meta
          name="twitter:description"
          content="Frequently Asked Questions about StudioIn Wedding Stories' wedding, pre-wedding, birthday, and event photography services in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
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
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does StudioIn Wedding Stories offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide professional wedding, pre-wedding, birthday, and event photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli & nearby."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I book a photoshoot?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact us via phone at +91 95975 08874 or through our website contact form."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which areas do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nagercoil, Kanyakumari, Trivandrum, Tirunelveli, Marthandam, and surrounding areas in South India."
                  }
                }
              ]
            })
          }}
        />

      <Faq />
    </>
  );
}
