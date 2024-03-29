import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Section_5 = () => {
  return (
    <div className=" bg-purple-700 sm:mt-[55rem] md:mt-[20rem] max-[4500px]:mt-[52rem] relative">
      <div className="grid grid-cols-2">
        <div className="">
          <h1 className="font-bold text-xl mt-2 text-orange-300 p-6">
            Join other Sun harvesters
          </h1>
          <h1 className="text-3xl order-1 p-6 font-bold text-white">
            Make something awesome
          </h1>
          <p className="order-1 p-6 text-white">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div className="  order-1 mt-20  justify-self-center">
          <button className=" bg-amber-300 rounded-full p-2 m-1 font-bold shadow-lg text-red-950 ">
            Request a Quote -{">"}
          </button>
        </div>
      </div>
      <div className=" flex justify-center">
        <Carousel>
          <CarouselPrevious className="bg-blue-500" />
          <CarouselContent>
            <CarouselItem>
              <div>
                <Image
                  src="/section_5/1.svg"
                  width={25}
                  height={25}
                  alt="profile"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Section_5;
