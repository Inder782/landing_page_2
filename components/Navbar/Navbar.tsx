import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "./styles.css";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <section className="flex justify-between p-5 items-center">
      <div className="logo mr-52">
        <Link href="/">soller</Link>
      </div>
      <div className="links font-bold max-[1280px]:hidden ">
        <Link href="/" className="p-5">
          Products
        </Link>
        <Link href="/" className="p-5">
          Solutions
        </Link>
        <Link href="/" className="p-5">
          Services
        </Link>
        <Link href="/" className="p-5">
          Configure
        </Link>
      </div>
      <div className="flex p-2 max-[1280px]:hidden ml-auto">
        <div className="flex justify-center items-center p-3 gap-3">
          <Image
            src="/headset.svg"
            width={20}
            height={20}
            alt="headset"
            className=""
          />
          <p className="">555 818 282</p>
        </div>

        <button className="bg-amber-300 ml-7 rounded-full p-2 m-1">
          Request a Quote
        </button>
      </div>
      <div className="sheet ">
        <div className="hamburger">
          <Sheet>
            <SheetTrigger className="flex z-30 bg-orange-300 p-2 rounded-full items-center shadow-lg">
              ☰
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
