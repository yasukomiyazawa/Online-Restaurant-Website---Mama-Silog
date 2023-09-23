import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="flex justify-around mt-10">
      <h1 className="pl-12 pb-5 text-white flex flex-col justify-center font-extrabold text-9xl">
        <span>No. 1</span>
        <span>Silog</span>
        <span>in Japan</span>
      </h1>
      <div>
        <div className="flex justify-center">
          <Image
            src="/hero1.png"
            alt="silog meals photo"
            width={600}
            height={80}
          />
        </div>
        <div className="box-border grid grid-cols-2 gap-3 mt-5">
          <div className="flex flex-col items-center text-white justify-center w-300px h-100px bg-yellow-950 border border-black">
            <h2 className="font-sans pb-5 text-xl font-semibold">
              Mama Silog Best Sellers
            </h2>
            <p className="pb-5">Try out our top selling silog meals!</p>
            <CustomButton
              title="See More"
              style="border border-yellow-400 bg-yellow-400 py-2 px-5 hover:bg-rose-900"
              href="#bestsellers"
            />
          </div>
          <Image
            src="/tapsilog.png"
            alt="tapsilog photo"
            width={300}
            height={90}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
