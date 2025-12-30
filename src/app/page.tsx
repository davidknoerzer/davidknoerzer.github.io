import Body from "./components/Body";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#4FA6C6] via-[#7EC8E3] to-[#d6ecf6]">
      <HeroSection />
      <Body />
      <Footer />
    </div>
  );
}
