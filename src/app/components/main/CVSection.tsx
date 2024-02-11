import React from "react";
import { CVChapter } from "../../modules/CVChapter";
import iptImage from "../../../images/ipt.webp";
import bNovaImage from "../../../images/b-nova.webp";
import novartisImage from "../../../images/novartis.webp";
import fhnwImage from "../../../images/fhnw.webp";
import uzhImage from "../../../images/uzh.webp";
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
      timeframe: "09.2013 - 08.2017",
      image: novartisImage,
    },
  ];
  const schoolChapters: CVChapter[] = [
    {
      title: "Business Information Systems",
      organization: "MSc, FHNW",
      description: [],
      timeframe: "2023 - heute",
      image: fhnwImage,
    },
    {
      title: "Information Systems",
      organization: "MSc, UZH",
      description: [],
      timeframe: "2022 - 2023",
      image: uzhImage,
    },
    {
      title: "Business Information Technology",
      organization: "BSc, FHNW",
      description: [],
      timeframe: "2018 - 2021",
      image: fhnwImage,
    },
  ];
  return (
    <>
      <h2 className="text-5xl m-4 font-bold">CV</h2>
      <h3 className="text-3xl m-4">Beruflicher Werdegang</h3>
      <div className="gap-6 space-y-6 columns-1 md:columns-2 2xl:columns-3">
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
      <div className="gap-6 space-y-4 columns-1 md:columns-2 2xl:columns-3">
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
    </>
  );
}
