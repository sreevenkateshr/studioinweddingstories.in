import BirthdayIndoorHero from "../indoor/IndoorHero";
import IndoorPortfolio from "../indoor/IndoorPortfolio";

export const metadata = {
  title: "Birthday Photography | Outdoor & Indoor | Snappy Times",
  description:
    "Professional birthday photography services including outdoor shoots and indoor celebrations with creative themes, natural light, and elegant decor.",
};

export default function BirthdayPage() {
  return (
    <main className="overflow-hidden">
      {/* Outdoor Birthday Section */}

      {/* Indoor Birthday Section */}
      <BirthdayIndoorHero />
      <IndoorPortfolio />
    </main>
  );
}
