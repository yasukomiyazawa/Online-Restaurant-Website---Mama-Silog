import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="bg-silogMeals bg-cover w-full h-screen flex flex-col xl:flex-row xl:justify-around max-xl:h-auto">
      <h1 className="text-white pb-5 flex pl-12 flex-col justify-center font-extrabold text-9xl max-xl:hidden">
        <span>No. 1</span>
        <span>Silog</span>
        <span>in Japan</span>
      </h1>

      <h1 className="xl:hidden flex justify-center mt-10 font-bold text-8xl text-white max-xl:text-7xl max-md:text-5xl max-sm:text-3xl">
        No.1 Silog in Japan
      </h1>
      <div>
        <div className="mt-10 max-xl:flex max-xl:flex-col max-xl:items-center">
          <div className="flex justify-center">
            <Image
              src="/hero1.png"
              alt="silog meals photo"
              className="max-md:w-3/4 max-lg:w-3/5 max-xl:w-4/6"
              width={600}
              height={80}
            />
          </div>

          <div className="xl:hidden flex flex-col items-center text-white justify-center max-md:w-4/6 max-lg:w-2/4 max-xl:w-2/6 bg-yellow-950 border border-black mt-5 py-3 max-xl:mb-7">
            <h2 className="font-sans pb-5 text-xl font-semibold">
              Mama Silog Best Sellers
            </h2>
            <p className="max-sm:text-sm pb-5">
              Try out our top selling silog meals!
            </p>
            <CustomButton
              title="See More"
              style="border border-yellow-400 bg-yellow-400 py-2 px-5 hover:bg-rose-900 max-sm:text-sm"
              href="#bestsellers"
            />
          </div>
        </div>

        <div className="box-border grid grid-cols-2 gap-3 mt-5 max-md:hidden max-xl:hidden">
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
