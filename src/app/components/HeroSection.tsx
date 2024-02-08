import React from "react";
import Image from "next/image";
import myPicture from "../../images/my_picture.webp"
import { codingFont } from "../layout";


export default function HeroSection() {

    return (
        <div className="hero bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-md" >
                    <div className="avatar">
                        <div className="relative h-64 w-64 rounded">
                            <Image priority src={myPicture} alt="my picture" />
                        </div>
                    </div>
                    <h1 className={"text-5xl font-bold " + codingFont.className}>hello there!</h1>
                    <p className="py-6">Welcome to my Portfolio page. Here you can take a look at some fun
                        projects I did to expand my programming skills :)</p>
                    <button className="btn btn-primary rounded">To the Projects</button>
                </div>
            </div >
        </div >
    );
}