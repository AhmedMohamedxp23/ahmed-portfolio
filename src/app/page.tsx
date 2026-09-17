import ContactFooter from "@/components/ContactFooter";
import FeaturedCase from "@/components/FeaturedCase";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Journey from "@/components/Journey";
import Marquee from "@/components/Marquee";
import MoreWork from "@/components/MoreWork";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <FeaturedCase />
        <MoreWork />
        <Journey />
        <HowIWork />
        <ContactFooter />
      </main>
    </div>
  );
}
