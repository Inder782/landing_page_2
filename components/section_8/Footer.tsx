import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between p-6 max-[1200px]:flex-col max-[1200px]:text-center max-[1200px]:items-center">
      <div className="flex gap-10 ml-12 max-[1200px]:flex-col max-[1200px]:text-center">
        <Link
          href={"/"}
          className="flex justify-center items-center  font-bold text-2xl"
        >
          <Image src="/footer/group_46.svg" width={52} height={52} alt="logo" />
          <span>Soller</span>
        </Link>
        <span className="font-semibold">
          @ 2023 Soller, Inc. All rights reserved.
        </span>
      </div>
      <div className="flex gap-10 mr-12 font-bold text-xl max-[1200px]:flex max-[1200px]:justify-center max-[1200px]:mt-10">
        <Link href={"/"} className="">
          <span>Terms</span>
        </Link>
        <Link href={"/"}>
          <span>Privacy</span>
        </Link>
        <Link href={"/"}>
          <span>Support</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
