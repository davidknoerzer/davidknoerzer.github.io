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
      <div className="hero-content flex-col lg:flex-row bg-base-200 bg-opacity-80 m-4 rounded-xl">
        <Image
          priority
          src={myPicture}
          alt="my picture"
          className="max-w-xs md:max-w-sm rounded-xl"
        />
        <div>
          <h1 className={"text-7xl " + codingFont.className}>Hello There!</h1>
          <p className="py-6">
            Welcome to my Portfolio page. Here you can take a look at some fun
            projects I did to expand my programming skills :)
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
