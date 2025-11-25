// app/page.jsx
import {
  HeroSection,
  Homeabout,
  SelectedWorks,
  Homeservices,
  // TimelessStaples,
  RecentArrivals,
  Midslide,
  Testimonials,
  Ourprocess,
  Homevideo,
  Homebookus,
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
      <RecentArrivals />
      <Midslide />
      <Testimonials />
      <Ourprocess />
      <Homevideo />
      <Homebookus />
      <Imageslider /> 
    </>
  );
}
