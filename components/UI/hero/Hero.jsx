import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center">
      <HeroText />
      <HeroCTA />
    </section>
  );
}
