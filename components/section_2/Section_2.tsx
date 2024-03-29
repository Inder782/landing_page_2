import React from "react";
import "./styles.css";
import Image from "next/image";

const Section_2 = () => {
  return (
    <div className="grid grid-cols-1 text-center">
      <div className=" mt-5">
        <p className="font-bold text-orange-500">No more waste</p>
        <h1 className="font-bold text-3xl mt-3">Pick the Sun</h1>
        <p className="mt-3">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1  relative max-[350px]:w-[full]">
          <Image
            src="/section_2/Circles.svg"
            width={1900}
            height={25}
            layout="responsive"
            alt="circles"
            className="max-[350px]:w-[full]"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <Image
              src="/section_2/Desktop.svg"
              width={1250}
              height={25}
              alt="desktop"
              className="max-[350px]:w-[15rem] max-[1400px]:w-[60rem] max-[1100px]:w-[40rem] max-[750px]:w-[35rem] max-[600px]:w-[25rem] max-[450px]:w-[20rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
