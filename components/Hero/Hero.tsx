import Image from "next/image";
import React from "react";
import "./styles.css";
const Hero = () => {
  return (
    <div className="hero_sec ">
      <div className="grid grid-cols-2 max-[1280px]:grid max-[1280px]:grid-cols-1">
        <div className="hero_desc p-6 text-left ml-3 max-[1280px]:order-2">
          <h1 className="font-bold text-8xl p-2 max-[550px]:text-5xl max-[550px]:text-center">
            Get the Sun to Power Your Home
          </h1>
          <p className=" mt-6 text-3xl p-2 max-[550px]:text-center">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <button className="flex items-center justify-center mt-8 bg-orange-300 p-3 w-52 rounded-full font-bold text-orange-950  ">
            Request a Quote -{">"}
          </button>
        </div>
        <div className="max-[700px]:w-[35rem] max-[700px]:ml-auto max-[550px]:w-[25rem] max-[550px]:ml-auto max-[400px]:w-[18rem] max-[400px]:ml-auto max-[350px]:w-[22rem] max-[350px]:ml-auto ">
          <Image
            src="/hero_section/first.svg"
            width={650}
            height={250}
            alt="image"
            className="ml-auto mt-[-7rem] "
          />
          <Image
            src="/hero_section/second.svg"
            width={650}
            height={55}
            alt="hero"
            className="ml-auto mt-[-35rem] z-30 mr-[2rem] max-[550px]:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
