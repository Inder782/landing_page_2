import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section_6 = () => {
  return (
    <div className="grid grid-cols-2 mt-54 max-sm:flex max-sm:flex-col max-sm:items-center mt-32 ">
      <div className="relative w-300 h-300">
        <Image
          src="/section_6/profiles/pro1.svg"
          width={150}
          height={25}
          alt="profile"
          className="absolute left-1/3"
        />
        <Image
          src="/section_6/profiles/pro2.svg"
          width={150}
          height={25}
          alt="profile"
          className="absolute top-96 left-2/3 -translate-x-full -translate-y-full "
        />
        <Image
          src="/section_6/profiles/pro3.svg"
          width={205}
          height={25}
          alt="profile"
          className="absolute top-96 left-1/4 -translate-x-1/3 -translate-y-full"
        />
      </div>
      <div className="mt-32 ">
        <h1 className="font-bold text-orange-400 ">Case studies</h1>
        <h2 className="font-bold text-7xl mt-8">
          Check how our systems have helped others
        </h2>
        <p className="mt-10 font-semibold">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <Link href="/" className="font-bold text-red-950">
          <p className="mt-14">Find Case studies -{">"}</p>
        </Link>
      </div>
    </div>
  );
};

export default Section_6;
