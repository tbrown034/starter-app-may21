import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="p-8">
      <div className="w-full flex flex-col items-center justify-center py-16 text-center">
        <HeroText />
        <HeroCTA />
      </div>
    </section>
  );
}
