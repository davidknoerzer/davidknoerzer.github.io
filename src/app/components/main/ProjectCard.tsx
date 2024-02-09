"use client";

import React from "react";
import Image from "next/image";
import { Project } from "../../modules/Project";

export default function ProjectCard({
  title,
  description,
  url,
  image,
  techstack,
}: Project) {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="card w-full bg-base-100 bg-pink-500 shadow-2xl break-inside-avoid hover:cursor-pointer rounded"
      onClick={() => handleCardClick(url)}
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt="project picture"
        className="rounded rounded-b-none"
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-side">{description}</p>
        <div className="card-actions justify-end">
          {techstack.map((item) => (
            <div className="badge badge-outline" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
