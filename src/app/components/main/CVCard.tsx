import React from "react";
import Image from "next/image";
import { CVChapter } from "@/app/modules/CVChapter";
import { start } from "repl";

export default function CVCard({
  title,
  description,
  image,
  startDate,
  endDate,
  isCurrentOccupation,
  organization,
}: CVChapter) {
  let timeframe = null;
  if (startDate !== undefined && endDate !== undefined) {
    let endDateString = isCurrentOccupation ? "today" : endDate.getMonth() + "." + endDate.getFullYear();
    timeframe = startDate.getMonth() + "." + startDate.getFullYear() + " - " + endDateString;
  }




  return (
    <div className="card bg-base-100 shadow-2xl image-full break-inside-avoid">
      <figure className="m-20">
        <Image
          src={image}
          width={500}
          height={500}
          alt="cv experience organization image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{organization}</p>
        {description.length > 0 && (
          <ul className="list-disc p-4">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{timeframe !== null ? timeframe : ''}</div>
        </div>
      </div>
    </div>
  );
}
