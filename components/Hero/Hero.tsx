import Image from "next/image";
import React from "react";
import "./styles.css";
const Hero = () => {
  return (
    <div className="hero_sec">
      <div className="grid grid-cols-2">
        <div className="hero_desc p-6 text-left ml-3 ">
          <h1 className="font-bold text-8xl p-2 ">
            Get the Sun to Power Your Home
          </h1>
          <p className=" mt-6 text-3xl p-2">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <button className="flex items-center justify-center mt-8 bg-orange-300 p-3 w-52 rounded-full font-bold text-orange-950 ">
            Request a Quote -&gt
          </button>
        </div>
        <div className=" ">
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
            className="ml-auto mt-[-35rem] z-30 mr-[2rem]"
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 z-10 min-[1280px]:hidden">
        <Image
          src="/hero_section/first.svg"
          width={450}
          height={50}
          alt="hero"
          className="col-span-1 justify-self-end order-first mt-[-7rem]"
        />
        <Image
          src="/hero_section/second.svg"
          width={450}
          height={55}
          alt="hero"
          className="absolute justify-self-end "
        />
      </div> */}
      {/* <div className="hero_desc ">
        <h1 className="text-center font-bold text-[40px] max-[350px]:mt-40 mt-12 p-2">
          Get the Sun to Power Your Home
        </h1>
        <p className="mt-8 text-center">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque.
        </p>
        <button className="flex items-center justify-center mt-8 bg-orange-300 p-3 w-52 rounded-full font-bold text-orange-950">
          Request a Quote -&gt
        </button>
        <p className="mt-8 text-center">
          "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque."
        </p>
        <div className="flex justify-start mt-8">
          <Image src="/user.svg" width={50} height={50} alt="user" />
          <div>
            <p className="font-bold ml-2 flex ">Rwanda Melfor</p>
            <p className="text-slate-500 font-bold ml-2">zerowaste.com</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
