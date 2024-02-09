import React from "react";
import { CVChapter } from "../../modules/CVChapter";
import iptImage from "../../../images/novartis.webp";
import bNovaImage from "../../../images/novartis.webp";
import novartisImage from "../../../images/novartis.webp";
import fhnwImage from "../../../images/novartis.webp";
import CVCard from "./CVCard";

export default function CVSection() {
  const workChapters: CVChapter[] = [
    {
      title: "Junior Software Engineer",
      organization: "Innovation Process Technology AG",
      description: [
        "ESB-Betrieb mit Mulesoft, REST, Syrius Kernsystem",
        "ESB-Schnittstellen Entwicklung Mulesoft, Kafka, Salesforce & Avaloq Kernsystem",
        "Entwicklung Custom Connector mit Java",
        "DevOps Pipeline Entwicklung für Mule Apps",
      ],
      timeframe: "11.2022 - heute",
      image: iptImage,
    },
    {
      title: "IT-Consultant",
      organization: "b-nova Schweiz GmbH",
      description: [
        "Fullstack Entwicklung mit Angular 4, Java Spring und MongoDB",
      ],
      timeframe: "09.2017 - 12.2017",
      image: bNovaImage,
    },
    {
      title: "Informatiker Generalist Lehrling",
      organization: "Novartis Pharma AG",
      description: ["UX-Design", "IT-Support", "Hardware-Testing"],
      timeframe: "09.2013 – 08.2017",
      image: novartisImage,
    },
  ];
  const schoolChapters: CVChapter[] = [
    {
      title: "Business Information Systems",
      organization: "FHNW",
      description: ["Master of Science"],
      timeframe: "2023 - heute",
      image: fhnwImage,
    },
    {
      title: "Business Information Technology",
      organization: "FHNW",
      description: ["Bachelor of Science"],
      timeframe: "2018 - 2021",
      image: fhnwImage,
    },
  ];
  return (
    <>
      <div className="container min-h-screen p-4 bg-purple-500">
        <h2 className="text-5xl m-4 font-bold">CV</h2>
        <h3 className="text-3xl m-4">Beruflicher Werdegang</h3>
        <div className="gap-4 space-y-4 columns-1 md:columns-2 2xl:columns-3 bg-green-500">
          {workChapters.map((item) => (
            <CVCard
              {...{
                title: item.title,
                description: item.description,
                organization: item.organization,
                image: item.image,
                timeframe: item.timeframe,
              }}
              key={item.title}
            />
          ))}
        </div>
        <h3 className="text-3xl m-4">Akademischer Werdegang</h3>
        <div className="gap-4 space-y-4 columns-1 md:columns-2 2xl:columns-3 bg-green-500">
          {schoolChapters.map((item) => (
            <CVCard
              {...{
                title: item.title,
                description: item.description,
                organization: item.organization,
                image: item.image,
                timeframe: item.timeframe,
              }}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
