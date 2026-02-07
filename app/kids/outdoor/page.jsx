import BirthdayOutdoorHero from "../outdoor/OutdoorHero";
import OutdoorPortfolio from "../outdoor/Outportfolio";

export const metadata = {
  title: "Outdoor Birthday Photography | Snappy Times",
  description:
    "Outdoor birthday photography with creative themes, natural light, garden and beach setups, cake smash shoots, and candid family moments.",
};

export default function BirthdayOutdoorPage() {
  return (
    <main className="overflow-hidden">
      <BirthdayOutdoorHero />
    <OutdoorPortfolio />
    </main>
  );
}
