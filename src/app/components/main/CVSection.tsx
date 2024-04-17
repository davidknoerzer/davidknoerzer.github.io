import React from "react";
import { CVChapter } from "../../modules/CVChapter";
import iptImage from "../../../images/ipt.webp";
import bNovaImage from "../../../images/b-nova.webp";
import novartisImage from "../../../images/novartis.webp";
import fhnwImage from "../../../images/fhnw.webp";
import uzhImage from "../../../images/uzh.webp";
import CVCard from "./CVCard";

export default function CVSection() {
  let cvChapters: CVChapter[] = [
    {
      title: "Junior Software Engineer",
      organization: "Innovation Process Technology AG",
      description: [
        "ESB-Betrieb mit Mulesoft, REST, Syrius Kernsystem",
        "ESB-Schnittstellen Entwicklung Mulesoft, Kafka, Salesforce & Avaloq Kernsystem",
        "Entwicklung Custom Connector mit Java",
        "DevOps Pipeline Entwicklung für Mule Apps",
      ],
      startDate: new Date(2022, 10),
      endDate: new Date(),
      isCurrentOccupation: true,
      image: iptImage,
    },
    {
      title: "IT-Consultant",
      organization: "b-nova Schweiz GmbH",
      description: [
        "Fullstack Entwicklung mit Angular 4, Java Spring und MongoDB",
      ],
      startDate: new Date(2017, 8),
      endDate: new Date(2017, 11),
      isCurrentOccupation: false,
      image: bNovaImage,
    },
    {
      title: "Informatiker Generalist Lehrling",
      organization: "Novartis Pharma AG",
      description: ["UX-Design", "IT-Support", "Hardware-Testing"],
      startDate: new Date(2013, 7),
      endDate: new Date(2017, 6),
      isCurrentOccupation: false,
      image: novartisImage,
    },
    {
      title: "Business Information Systems",
      organization: "MSc, FHNW",
      description: [],
      startDate: new Date(2023, 8),
      endDate: new Date(),
      isCurrentOccupation: true,
      image: fhnwImage,
    },
    {
      title: "Information Systems & Informatics",
      organization: "MSc, UZH",
      description: [],
      startDate: new Date(2022, 8),
      endDate: new Date(2023, 7),
      isCurrentOccupation: false,
      image: uzhImage,
    },
    {
      title: "Business Information Technology",
      organization: "BSc, FHNW",
      description: [],
      startDate: new Date(2018, 8),
      endDate: new Date(2021, 7),
      isCurrentOccupation: false,
      image: fhnwImage,
    },
  ];

  cvChapters.sort((a, b) => b.endDate.getTime() - a.endDate.getTime());

  return (
    <div className="container p-4 space-y-4">
      <h2 className="text-6xl p-4 font-bold bg-base-300  shadow-2xl rounded-2xl">CV</h2>
      <div className="gap-6 space-y-6 columns-1 md:columns-2 2xl:columns-3">
        {cvChapters.map((item) => (
          <CVCard key={item.title}
            {...{
              title: item.title,
              organization: item.organization,
              description: item.description,
              startDate: item.startDate,
              endDate: item.endDate,
              isCurrentOccupation: item.isCurrentOccupation,
              image: item.image,
            }}
          />
        ))}
      </div>
    </div >

  );
}
