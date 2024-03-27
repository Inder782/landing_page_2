import Image from "next/image";
import React from "react";

const Section_4 = () => {
  return (
    <div className=" grid grid-cols-2 mt-80 max-[950px]:flex max-[950px]:flex-col relative overflow-hidden ">
      <div className=" p-8">
        <h1 className="font-bold text-orange-300 mt-12">System Features</h1>
        <h1 className="font-bold text-5xl mt-2 ">Powerful features</h1>
        <p className="mt-10">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <div className="mt-20 grid grid-cols-2 gap-12 ">
          <div className="">
            <Image
              src="section_4/icons/icon_1.svg"
              width={55}
              height={55}
              alt="icon_1"
            />
            <h1 className="font-bold">Erat Sit</h1>
            <p>
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>
          <div className="">
            <Image
              src="section_4/icons/icon_2.svg"
              width={55}
              height={55}
              alt="icon_1"
            />
            <h1 className="font-bold">Erat Sit</h1>
            <p>
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>
          <div className="">
            <Image
              src="section_4/icons/icon_3.svg"
              width={55}
              height={55}
              alt="icon_1"
            />
            <h1 className="font-bold">Erat Sit</h1>
            <p>
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>
          <div className="">
            <Image
              src="section_4/icons/icon_4.svg"
              width={55}
              height={55}
              alt="icon_1"
            />
            <h1 className="font-bold">Erat Sit</h1>
            <p>
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="section_4/rectangle_4.svg"
          width={500}
          height={25}
          alt="rectangle"
          className="ml-auto max-[450px]:w-[30rem] max-[450px]:-top-[20rem]"
        />
        <Image
          src="section_4/mobile_sec_4.svg"
          layout="intrinsic"
          width={350}
          height={95}
          alt="ellipse"
          className="relative -top-[40rem] right-20 ml-auto max-[450px]:w-[10rem] max-[450px]:-top-[20rem]"
        />
        {/* <Image
          src="section_4/ellipse.svg"
          width={99}
          height={55}
          alt="ellipse"
          className="absolute top-[38rem] right-[rem] z-10 max-[950px]:w-[10rem] max-[950px]:ml-auto max-[450px]:w-[4rem] max-[450px]:left-[22rem]"
        /> */}
      </div>
    </div>
  );
};

export default Section_4;
