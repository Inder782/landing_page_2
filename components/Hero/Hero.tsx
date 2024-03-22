import Image from "next/image";
import React from "react";
import "./styles.css";
const Hero = () => {
  return (
    <div className="">
      <div className="images">
        <Image
          src="/hero_section/first.svg"
          width={255}
          height={65}
          alt="hero"
          className=""
        />
        <Image
          src="/hero_section/second.svg"
          width={260}
          height={55}
          alt="hero"
          className="absolute mr-15 mb-[-1.5rem]"
        />
      </div>
      <div className="hero_desc ">
        <h1 className="text-center font-bold text-[40px] max-[350px]:mt-40 mt-12 p-2">
          Get the Sun to Power Your Home
        </h1>
        <p className="mt-8 text-center">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque.
        </p>
        <button className="flex items-center justify-center mt-8 bg-orange-300 p-3 w-52 rounded-full font-bold text-orange-950">
          Request a Quote ->
        </button>
        <p className="mt-8 text-center">
          "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque."
        </p>
        <div className="flex justify-start mt-8">
          <Image src="/user.svg" width={50}height={50} alt="user"/>
          <div>
          <p className="font-bold ml-2 flex ">Rwanda Melfor</p>
          <p className="text-slate-500 font-bold ml-2">zerowaste.com</p>
          </div>

          </div>
      </div>
    </div>
  );
};

export default Hero;
