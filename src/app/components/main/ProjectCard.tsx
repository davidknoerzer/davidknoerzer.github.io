"use client";

import React from "react";
import Image from "next/image";
import { Project } from "../../modules/Project";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  url,
  image,
  techstack,
}: Project) {
  const router = useRouter();

  return (
    <Link
      href={url}
      target="_blank"
      className="card w-full bg-base-200 shadow-2xl hover:cursor-pointer rounded-2xl break-inside-avoid"
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt="project picture"
        className="rounded-2xl rounded-b-none"
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
    </Link>
  );
}
