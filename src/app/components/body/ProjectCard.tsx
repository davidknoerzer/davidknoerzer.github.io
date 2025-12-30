"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "../../modules/Project";

export default function ProjectCard({
  title,
  description,
  url,
  image,
  done,
  techstack,
}: Project) {
  return (
    <Link
      href={url}
      target="_blank"
      className={
        "card w-full bg-base-200 shadow-2xl rounded-2xl break-inside-avoid"
      }
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt="project picture"
        className="rounded-2xl rounded-b-none w-full max-h-64 object-cover"
      />
      {!done && (
        <div className="absolute w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
          <span className="text-accent text-7xl font-semibold -rotate-45">
            TODO
          </span>
        </div>
      )}
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
