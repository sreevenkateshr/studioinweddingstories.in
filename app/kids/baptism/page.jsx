import Baptismhero from "../baptism/baptismhero";
import Baptismportfolio from "../baptism/baptismPortfolio"
export const metadata = {
  title: "Birthday Outdoor Photography | Snappy Times",
  description:
    "Creative outdoor birthday photography with themed setups, natural light, cake smash, family moments, and joyful celebrations.",
};

export default function BirthdayPage() {
  return (
    <main className="overflow-hidden">
      {/* Birthday Hero Section */}
      <Baptismhero />
      <Baptismportfolio />
      {/* You can add more sections below later */}
      {/* <GallerySection /> */}
      {/* <BookingCTA /> */}
    </main>
  );
}
