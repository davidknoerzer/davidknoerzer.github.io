import React from "react";

import whatsappWrappedImage from "../../../images/whatsapp-wrapped.webp";
import swissFootyPredictorImage from "../../../images/swiss-footy-predictor.webp";
import imdbProposerImage from "../../../images/imdb.webp";
import whatToCookImage from "../../../images/cooking.webp";
import settlingInCatanImage from "../../../images/catan.webp";
import ProjectCard from "./ProjectCard";
import { Project, Techstack } from "../../modules/Project";

export default function ProjectSection() {
  const projects: Project[] = [
    {
      title: "Whatsapp Wrapped",
      description:
        "Upload your exported Whatsapp History and see a fun Wrap-up of the last year.",
      url: "/whatsapp-wrapped",
      image: whatsappWrappedImage,
      techstack: [
        Techstack.Python,
        Techstack.PythonFlask,
        Techstack.JavaScript,
      ],
    },
    {
      title: "Swiss Footy Predictor",
      description:
        "See predictions about the next round of the Swiss Super League.",
      url: "/swiss-footy-predictor",
      image: swissFootyPredictorImage,
      techstack: [
        Techstack.Python,
        Techstack.PythonFlask,
        Techstack.ScikitLearn,
        Techstack.React,
      ],
    },
    {
      title: "IMDb Movie Proposer",
      description:
        "Upload one or two rating list csv files and see proposals to watch the next movie (or rewatch a classic).",
      url: "/imdb-proposer",
      image: imdbProposerImage,
      techstack: [Techstack.Python, Techstack.PythonFlask, Techstack.React],
    },
    {
      title: "What to Cook",
      description: "See whats cooking and get inspiration for your next meal.",
      url: "/what-to-cook",
      image: whatToCookImage,
      techstack: [Techstack.Java, Techstack.JavaSpring, Techstack.React],
    },
    {
      title: "Settling in Catan",
      description: "Generate maps for your next Settlers of Catan Game.",
      url: "/settling-in-catan",
      image: settlingInCatanImage,
      techstack: [Techstack.NextJS, Techstack.React],
    },
  ];

  return (
    <>
      <h1 className="text-5xl m-4 font-bold">Projects</h1>
      <div className="gap-6 space-y-6 columns-1 md:columns-2 2xl:columns-3">
        {projects.map((item) => (
          <ProjectCard
            {...{
              title: item.title,
              description: item.description,
              url: item.url,
              image: item.image,
              techstack: item.techstack,
            }}
            key={item.url.substring(0)}
          />
        ))}
      </div>
    </>
  );
}
