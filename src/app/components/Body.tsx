import CVSection from "./body/CVSection";
import ProjectSection from "./body/ProjectSection";

export default function Body() {
  return (
    <div className="p-4 max-w-7xl space-y-8">
      <CVSection />
      <ProjectSection />
    </div>
  );
}
