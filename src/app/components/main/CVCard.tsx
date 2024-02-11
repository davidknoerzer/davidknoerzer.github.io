import React from "react";
import Image from "next/image";
import { CVChapter } from "@/app/modules/CVChapter";

export default function CVCard({
  title,
  description,
  image,
  timeframe,
  organization,
}: CVChapter) {
  return (
    <div className="card bg-base-200 shadow-2xl rounded-2xl break-inside-avoid">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{organization}</p>
        <figure>
          <Image
            src={image}
            width={500}
            height={500}
            alt="cv experience organization image"
            className="rounded-2xl p-6 bg-white"
          />
        </figure>
        {description.length > 0 && (
          <ul className="list-disc p-4">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{timeframe}</div>
        </div>
      </div>
    </div>
  );
}
