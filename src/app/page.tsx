import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/main/ProjectSection";
import CVSection from "./components/main/CVSection";
import CVTimeline from "./components/main/CVTimeline";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <div className="container min-h-screen p-4">
        <ProjectSection></ProjectSection>
        <CVSection></CVSection>
      </div>
      <Footer></Footer>
    </>
  );
}
