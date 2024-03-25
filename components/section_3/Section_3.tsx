import Image from "next/image";
import React from "react";

const Section_3 = () => {
  return (
    <div className="grid grid-cols-2 mt-8 max-[900px]:flex max-[900px]:flex-col">
      <div className="grid grid-col-1  relative max-[900px]:flex max-[900px]:flex-col max-[900px]:order-1">
        <Image
          src="/section_3/mobile.svg"
          width={"455"}
          height={255}
          alt="mobile"
          className="absolute z-20 mt-10 ml-8"
        />
        <Image
          src="/section_3/rectangle.svg"
          width={"455"}
          height={255}
          alt="frame"
          className="absolute"
        />
        <Image
          src="/section_3/frame.svg"
          width={"455"}
          height={255}
          alt="card"
          className="absolute z-30 top-14"
        />
        <Image
          src="/section_3/ellipse.svg"
          width={"455"}
          height={255}
          alt="ellipse"
          className="z-30"
        />
        <Image
          src="/section_3/ellipse_2.svg"
          width={"455"}
          height={255}
          alt="ellipse_2"
          className=""
        />
      </div>
      {/* <div className="mt-12 max-[900px]:flex max-[900px]:flex-col">
        <p className="font-bold text-xl ml-2">Services</p>
        <h1 className="font-bold text-4xl mt-1">Personalized services</h1>
        <p className="mt-8">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <div className="grid grid-cols-2 gap-5 mt-12">
          <div>
            <Image
              src="/section_3/icons/truck.svg"
              width={65}
              height={25}
              alt="truck"
            />
            <h1 className="font-bold mt-2">Et mrius</h1>
            <p>
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </p>
          </div>
          <div>
            <Image
              src="/section_3/icons/trophy.svg"
              width={65}
              height={25}
              alt="truck"
            />
            <h1 className="font-bold mt-2">Et mrius</h1>
            <p>
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </p>
          </div>
          <div>
            <Image
              src="/section_3/icons/trekking.svg"
              width={65}
              height={25}
              alt="truck"
            />
            <h1 className="font-bold mt-2">Et mrius</h1>
            <p>
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </p>
          </div>
          <div>
            <Image
              src="/section_3/icons/piggy-bank.svg"
              width={65}
              height={25}
              alt="truck"
            />
            <h1 className="font-bold mt-2">Et mrius</h1>
            <p>
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Section_3;
