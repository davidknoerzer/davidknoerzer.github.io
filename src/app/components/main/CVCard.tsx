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
    <div className="card bg-neutral text-neutral-content shadow-md break-inside-avoid rounded">
      <figure className="px-10 pt-10">
        <Image
          src={image}
          width={500}
          height={500}
          alt="cv experience organization image"
          className="rounded-2xl p-8 bg-white"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title} <br />
          {organization}
        </h2>
        {
          description.map((item) => (
            <div className="chat-bubble bg-base-100 text-base-content" key={item}>
              {item}
            </div>
          ))}
        <p className="card-actions justify-end">{timeframe}</p>
      </div>
    </div>
  );
}
