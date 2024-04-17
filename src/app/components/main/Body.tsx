import React from "react";
import ProjectSection from "./ProjectSection";
import CVSection from "./CVSection";

export default function Body() {
  return (
    <div className="body-background">
      <CVSection></CVSection>
      <ProjectSection></ProjectSection>
    </div>
  );
}
