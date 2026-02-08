// app/page.jsx
import {
  HeroSection,
  Homeabout,
  Homeservices,
  // WhoWeAre,
  SelectedWorks,

  // TimelessStaples,
  // RecentArrivals,
  Midslide,
  Testimonials,
  LatestStories,
  DreamCounter,
  Ourprocess,
  // HomeFAQ,
  // Homevideo,
  // Homebookus,
  Imageslider,
} from "./homepage";
// import CoupleGallerySection from "@/components/CoupleGallerySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Homeabout />
      <Homeservices />
      <SelectedWorks />
      {/* <WhoWeAre /> */}

      <LatestStories />

      {/* <TimelessStaples /> */}
      {/* <RecentArrivals /> */}

      <Testimonials />
      <Ourprocess />
      <DreamCounter />

      {/* <Faqsection /> */}
      {/* <HomeFAQ /> */}
      {/* <Homevideo /> */}
      {/* <Homebookus /> */}
      <Midslide />
      {/* <CoupleGallerySection /> */}
      <Imageslider />
    </>
  );
}
