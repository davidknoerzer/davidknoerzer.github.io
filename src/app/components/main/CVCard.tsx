import React from "react";
import Image from "next/image";
import { CVChapter } from "@/app/modules/CVChapter";
import { time } from "console";

export default function CVCard({
  title,
  description,
  image,
  timeframe,
  organization,
}: CVChapter) {
  return (
    <div className="card bg-base-100 bg-cyan-500 shadow-2xl break-inside-avoid rounded">
      <figure className="px-10 pt-10">
        <Image
          src={image}
          width={500}
          height={500}
          alt="cv experience organization image"
          className="rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title} <br />
          {organization}
        </h2>
        {description.map((item) => (
          <p className="px-10 space-x-0" key={item}>
            {item}
          </p>
        ))}

        <p className="card-actions justify-end">{timeframe}</p>
      </div>
    </div>
  );
}
