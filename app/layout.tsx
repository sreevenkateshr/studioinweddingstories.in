import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import FloatingButtons from "./components/FloatingButtons";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
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
