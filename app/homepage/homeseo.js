// pages/_app.js
import "@/styles/global.css";
import Head from "next/head";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>
          StudioIn Wedding Stories | Best Wedding & Event Photography Nagercoil
        </title>
        <meta
          name="description"
          content="StudioIn Wedding Stories offers professional wedding, pre-wedding, and event photography in Nagercoil, capturing timeless memories beautifully."
        />
        <meta
          name="keywords"
          content="best photography Nagercoil, wedding photography Nagercoil, prewedding photoshoot Nagercoil, event photography south india, birthday photography Nagercoil"
        />
        <link rel="canonical" href="https://www.studioinweddingstories.in" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/studioin-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="Googlebot" content="index, follow" />
        <meta name="geo.country" content="India" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Nagercoil" />
        <meta name="language" content="en-us" />
        <meta
          name="classification"
          content="Photography Services, Wedding Photography, Event Photography, Professional Photographers"
        />
        <meta name="author" content="StudioIn Wedding Stories" />
        <meta name="copyright" content="StudioIn Wedding Stories" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="StudioIn Wedding Stories | Best Wedding & Event Photography Nagercoil" />
        <meta
          property="og:description"
          content="StudioIn Wedding Stories offers professional wedding, pre-wedding, and event photography in Nagercoil, capturing timeless memories beautifully."
        />
        <meta property="og:site_name" content="StudioIn Wedding Stories" />
        <meta property="og:url" content="https://www.studioinweddingstories.in" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="al:ios:url" content="https://www.studioinweddingstories.in" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@studioinwedding" />
        <meta name="twitter:site" content="StudioIn Wedding Stories" />
        <meta name="twitter:title" content="StudioIn Wedding Stories | Best Wedding & Event Photography Nagercoil" />
        <meta
          name="twitter:description"
          content="StudioIn Wedding Stories offers professional wedding, pre-wedding, and event photography in Nagercoil, capturing timeless memories beautifully."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

        <Component {...pageProps} />
        {/* Social links example */}
        <div className="flex gap-6 mt-12 justify-center text-white text-2xl">
          <a
            href="https://www.facebook.com/studio.in26"
            className="hover:text-gray-200 transition transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/studio_.in"
            className="hover:text-gray-200 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@studio.inweddingphotography"
            className="hover:text-gray-200 transition transform hover:scale-110"
          >
            <FaYoutube />
          </a>
        </div>
    </>
  );
}
