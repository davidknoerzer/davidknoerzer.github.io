"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import myPicture from "../../images/my_picture.webp";
import { Source_Code_Pro } from "next/font/google";

const codingFont = Source_Code_Pro({
  weight: ["400"],
  subsets: ["latin"],
});
export default function HeroSection() {
  return (
    <div className="hero min-h-screen bg-fixed hero-background">
      <div className="hero-content flex-col lg:flex-row bg-base-200 bg-opacity-85 m-4 rounded-xl">
        <Image
          priority
          src={myPicture}
          alt="my picture"
          className="max-w-xs md:max-w-sm rounded-xl"
        />
        <div>
          <h1 className={"text-7xl " + codingFont.className}>Hello There!</h1>
          <p className="py-6">
            Willkommen auf meiner Portfolio-Seite. Hier kannst du einen Blick auf einige lustige Projekte ansehen, mit denen ich meine Programmierkenntnisse erweitert habe :)
          </p>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/davidknoerzer"
            className="btn btn-primary rounded"
          >
            My Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
}
