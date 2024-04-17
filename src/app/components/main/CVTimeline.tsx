// import React from "react";
// import { CVChapter } from "../../modules/CVChapter";
// import iptImage from "../../../images/ipt.webp";
// import bNovaImage from "../../../images/b-nova.webp";
// import novartisImage from "../../../images/novartis.webp";
// import fhnwImage from "../../../images/fhnw.webp";
// import uzhImage from "../../../images/uzh.webp";
// import CVCard from "./CVCard";

// export default function CVTimeline() {
//   let cvChapters: CVChapter[] = [
//     {
//       title: "Junior Software Engineer",
//       organization: "Innovation Process Technology AG",
//       description: [
//         "ESB-Betrieb mit Mulesoft, REST, Syrius Kernsystem",
//         "ESB-Schnittstellen Entwicklung Mulesoft, Kafka, Salesforce & Avaloq Kernsystem",
//         "Entwicklung Custom Connector mit Java",
//         "DevOps Pipeline Entwicklung für Mule Apps",
//       ],
//       startDate: new Date(2022, 11, 1),
//       endDate: new Date(),
//       isCurrentOccupation: true,
//       image: iptImage,
//     },
//     {
//       title: "IT-Consultant",
//       organization: "b-nova Schweiz GmbH",
//       description: [
//         "Fullstack Entwicklung mit Angular 4, Java Spring und MongoDB",
//       ],
//       startDate: new Date(2017, 9, 1),
//       endDate: new Date(2017, 12, 1),
//       isCurrentOccupation: false,
//       image: bNovaImage,
//     },
//     {
//       title: "Informatiker Generalist Lehrling",
//       organization: "Novartis Pharma AG",
//       description: ["UX-Design", "IT-Support", "Hardware-Testing"],
//       startDate: new Date(2013, 9, 1),
//       endDate: new Date(2017, 8, 1),
//       isCurrentOccupation: false,
//       image: novartisImage,
//     },
//     {
//       title: "Business Information Systems",
//       organization: "MSc, FHNW",
//       description: [],
//       startDate: new Date(2023, 9, 1),
//       endDate: new Date(),
//       isCurrentOccupation: true,
//       image: fhnwImage,
//     },
//     {
//       title: "Information Systems",
//       organization: "MSc, UZH",
//       description: [],
//       startDate: new Date(2022, 9, 1),
//       endDate: new Date(2023, 8, 1),
//       isCurrentOccupation: false,
//       image: uzhImage,
//     },
//     {
//       title: "Business Information Technology",
//       organization: "BSc, FHNW",
//       description: [],
//       startDate: new Date(2018, 9, 1),
//       endDate: new Date(2021, 8, 1),
//       isCurrentOccupation: false,
//       image: fhnwImage,
//     },
//   ];

//   cvChapters = cvChapters.sort((a, b) => (a.endDate > b.endDate) ? -1 : 1)


//   return (
//     <>
//       <h2 className="text-5xl m-4 font-bold">CV</h2>
//       <ul className="timeline timeline-snap-icon  max-md:timeline-compact timeline-vertical">

//         {cvChapters.map((item) => (
//           <li key={item.title}>
//             <div className="timeline-middle">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
//             </div>
//             <div className="timeline-start md:text-end mb-10">
//               <CVCard
//                 {...{
//                   title: item.title,
//                   organization: item.organization,
//                   description: item.description,
//                   startDate: item.startDate,
//                   endDate: item.endDate,
//                   isCurrentOccupation: item.isCurrentOccupation,
//                   image: item.image,
//                 }}
//               />
//             </div>

//             <hr />
//           </li>

//         ))}
//       </ul>
//     </>
//   );
// }
