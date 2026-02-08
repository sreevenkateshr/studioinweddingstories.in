import KidsHero from "./components/KidsHero";
import AboutSection from "./components/AboutSection"
import SelectedWorks from "./components/SelectedWorks";
import WhoWeAre from "./components/WhoWeAre"
import KidsFAQ from "./components/KidsFAQ";
import Testimonials from "./components/Testimonials";
import InstagramSlider from "./components/InstagramSlider";
// import { CldImage } from 'next-cloudinary';
// export default function Page() {
//   return (
//     <CldImage
//       src="cld-sample-5" // Use this sample image or upload your own via the Media Library
//       width="500" // Transform the image: auto-crop to square aspect_ratio
//       height="500"
//       crop={{
//         type: 'auto',
//         source: true
//       }}
//     />
//   );
// }

export default function KidsPage() {
  return (
    <main className="bg-white text-black">
      <KidsHero />
      <AboutSection />
      <WhoWeAre />
      <SelectedWorks />
      <KidsFAQ />
      <Testimonials />
      <InstagramSlider />
    </main>
  );
}
