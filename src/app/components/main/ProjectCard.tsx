"use client";

import React from "react";
import Image from "next/image";
import { Project } from "../../modules/Project";
import { useRouter } from "next/navigation";



export default function ProjectCard({
  title,
  description,
  url,
  image,
  techstack,
}: Project) {
  const router = useRouter()

  return (
    <div className="card w-full bg-neutral text-neutral-content shadow-md break-inside-avoid hover:cursor-pointer rounded" onClick={() => {
      window.open(url, '_blank')
    }}>
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
