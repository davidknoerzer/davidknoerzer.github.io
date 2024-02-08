import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import CVSection from "./components/CVSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ProjectSection></ProjectSection>
      <CVSection></CVSection>
      <Footer></Footer>
    </>
  );
}
