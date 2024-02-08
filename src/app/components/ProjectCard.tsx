'use client';

import React from "react";
import Image from "next/image";
import { Project } from "../modules/Project";


export default function ProjectCard({ title, description, url, image, techstack }: Project) {
    const handleCardClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (

        <div className="card w-96 bg-base-100 shadow-xl" onClick={() => handleCardClick(url)}>
            <Image src={image} width={500} height={500} alt="project picture" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-side">{description}</p>
                <div className="card-actions justify-end">
                    {techstack.map(item => (
                        <div className="badge badge-outline" key={item}>{item}</div>
                    ))}
                </div>
            </div>
        </div>

    );
}