import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="p-8 w-full">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <HeroText />
        <HeroCTA />
      </div>
    </section>
  );
}
