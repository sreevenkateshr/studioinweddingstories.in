import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import FloatingButtons from "./components/FloatingButtons";
import { Cormorant_Garamond } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="x9PgItRfB4Xnihz7Eq7BK9YdGsEUUwE270Tl2wH980w" />

      
      </head>
      <body className="bg-white text-gray-900">
        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* FLOATING WHATSAPP + BACK TO TOP */}
        {/* <FloatingButtons /> */}
      </body>
    </html>
  );
}
