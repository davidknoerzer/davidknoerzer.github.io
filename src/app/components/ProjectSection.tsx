import React from "react";
import Image from "next/image";

import whatsappWrappedImage from "../../images/novartis.webp"
import swissFootyPredictorImage from "../../images/novartis.webp"
import imdbProposerImage from "../../images/novartis.webp"
import whatToCookImage from "../../images/novartis.webp"
import settlingInCatanImage from "../../images/novartis.webp"
import ProjectCard from "./ProjectCard";
import { Project, Techstack } from "../modules/Project";

export default function ProjectSection() {

    const projects: Project[] = [
        {
            title: "Whatsapp Wrapped",
            description: "Upload your exported Whatsapp History and see a fun Wrappup of the last year.",
            url: "/whatsapp-wrapped",
            image: whatsappWrappedImage,
            techstack: [Techstack.Python, Techstack.PythonFlask, Techstack.Angular],
        },
        {
            title: "Swiss Footy Predictor",
            description: "See predictions about the next round of the Swiss Super League",
            url: "/swiss-footy-predictor",
            image: whatsappWrappedImage,
            techstack: [Techstack.Python, Techstack.PythonFlask, Techstack.ScikitLearn, Techstack.React],
        },
        {
            title: "IMDb Movie Proposer",
            description: "Upload one or two rating list csv files and see proposals to watch the next movie (or rewatch a classic).",
            url: "/imdb-proposer",
            image: whatsappWrappedImage,
            techstack: [Techstack.Python, Techstack.PythonFlask, Techstack.Angular],
        },
        {
            title: "What to cook",
            description: "See whats cooking and get inspiration for your next meal",
            url: "/what-to-cook",
            image: whatsappWrappedImage,
            techstack: [Techstack.Java, Techstack.JavaSpringBoot, Techstack.React],
        },
        {
            title: "Settling in Catan",
            description: "Generate maps for your next Settlers of Catan Game",
            url: "/settling-in-catan",
            image: whatsappWrappedImage,
            techstack: [Techstack.JavaScript],
        },
    ];

    return (
        <div className="container content-center">
            {
                projects.map(item => (
                    <ProjectCard {...{ title: item.title, description: item.description, url: item.url, image: item.image, techstack: item.techstack }} />
                ))
            }
        </div>
    );
}