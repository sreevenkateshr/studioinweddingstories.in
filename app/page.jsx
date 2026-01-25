// app/page.jsx
import {
  HeroSection,
  Homeabout,
  SelectedWorks,
  Homeservices,
  // TimelessStaples,
  // RecentArrivals,
  Midslide,
  // Testimonials,
  DreamCounter,
  Ourprocess,
  // HomeFAQ,
  // Homevideo,
  // Homebookus,
  Imageslider,
} from "./homepage";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Homeabout />
      <SelectedWorks />
      <Homeservices />
      {/* <TimelessStaples /> */}
      {/* <RecentArrivals /> */}
      <Midslide />
      {/* <Testimonials /> */}
      <Ourprocess />
      <DreamCounter />

      {/* <Faqsection /> */}
      {/* <HomeFAQ /> */}
      {/* <Homevideo /> */}
      {/* <Homebookus /> */}
      <Imageslider />
    </>
  );
}
