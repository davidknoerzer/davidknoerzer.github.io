import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/main/ProjectSection";
import CVSection from "./components/main/CVSection";

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
