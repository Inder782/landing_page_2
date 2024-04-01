import Image from "next/image";
import React from "react";

const section_7 = () => {
  return (
    <div className="bg-purple-700 ">
      <div className="grid grid-cols-2 mt-40 max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:text-center ">
        <div>
          <h1 className="text-amber-300 font-bold text-2xl p-8">
            Get the Sun to power your home
          </h1>
          <h1 className="text-white font-bold p-8 text-5xl ">
            All the power that you need for your house is now available
          </h1>
        </div>
        <div className="relative  max-w-[1200px] flex flex-col justify-center items-center">
          <Image
            src="/section_7/Ellipse_1.svg"
            width={640}
            height={52}
            alt="ellipse"
            className="absolute  right-0 top-0 z-10 max-[1200px]:hidden"
          />
          <button className="text-xl bg-amber-300  z-20 rounded-full p-3 m-2 font-bold shadow-lg text-red-950 mt-40 max-[1200px]:p-8 max-[1200px]:w-96 max-[1200px]:mt-[2rem] ml-32">
            Request a Quote -{">"}
          </button>
          <span className="flex text-xl order-1 mt-5 p-2 font-semibold z-20 ml-32">
            Egestas fringilla aliquam leo
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-32">
        <Image
          src="/section_7/Macbook.svg"
          width={1400}
          height={25}
          alt="macbook"
        />
      </div>
    </div>
  );
};

export default section_7;
