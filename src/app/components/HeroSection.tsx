import React from "react";
import Image from "next/image";
import myPicture from "../../images/my_picture.webp";
import { Nanum_Gothic_Coding } from "next/font/google";
const codingFont = Nanum_Gothic_Coding({
  weight: ["400"],
  subsets: ["latin"],
});
export default function HeroSection() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          priority
          src={myPicture}
          alt="my picture"
          className="max-w-sm rounded"
        />
        <div>
          <h1 className={"text-7xl font-bold " + codingFont.className}>
            hello there!
          </h1>
          <p className="py-6">
            Welcome to my Portfolio page. Here you can take a look at some fun
            projects I did to expand my programming skills :)
          </p>
          <button className="btn btn-primary rounded">To the Projects</button>
        </div>
      </div>
    </div>
  );
}
