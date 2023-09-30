import { Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";

const aboutUs = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="About Us" />
      </div>

      <section className="flex flex-col gap-5">
        <div className="flex justify-center">
          <h1 className="flex flex-col text-center mt-8 text-3xl font-bold gap-3">
            Two Nations, One Flavorful Journey: <br />
            <span className="font-semibold">
              Savoring Filipino Tradition Since 2021 in the Heart of Japan!
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              src="/about-us.png"
              alt="silog meals image"
              width={700}
              height={100}
              className="shadow-lg m-10"
            />
          </div>

          <div className="flex flex-col gap-8 mx-10 my-10 justify-center">
            <p>
              Welcome to a culinary sanctuary where flavors dance and memories
              are crafted on each plate. Since 2021, our restaurant has been a
              cherished hub, nestled in the heart of Japan, where the essence of
              home-cooked goodness meets the bustling energy of the streets of
              Manila. At our core, we celebrate the art of silog -
              <span className="font-bold text-rose-900">
                a delightful Filipino tradition that fuses sinangag -garlic
                fried rice and itlog- egg with an array of succulent meats.
              </span>
            </p>
            <p>
              Our menu is a symphony of simplicity and authenticity, capturing
              the very soul of Filipino heritage.
              <span className="font-bold text-rose-900">
                {" "}
                Each dish is meticulously crafted with care, using locally
                sourced ingredients and seasoned with love.
              </span>{" "}
              Whether you're savoring the nostalgic taste of tapsilog,
              longsilog, or any of our other signature silog creations, you're
              not just enjoying a meal; you're experiencing a piece of our
              culinary expertise and cultural heritage.
            </p>
            <p>
              Join us in this flavorful journey, where every bite tells a story,
              and every meal is a celebration of tradition. Step into our warm
              ambiance, experience the sizzle of our grill, and let the aroma of
              our silog meals transport you to a place where every bite feels
              like home.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default aboutUs;
