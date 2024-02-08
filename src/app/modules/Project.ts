import { StaticImageData } from "next/image";

export enum Techstack {
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
    Java = "Java",
    Python = "Python",
    Angular = "Angular",
    React = "React",
    PythonFlask = "Python Flask",
    NextJS = "Next.js",
    ScikitLearn = "scikit-learn",
    JavaSpringBoot = "Java Spring Boot"
}

export type Project = {
    title: string,
    description: string,
    url: string,
    image: StaticImageData,
    techstack: Techstack[]
}