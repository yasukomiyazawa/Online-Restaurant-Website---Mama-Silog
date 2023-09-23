import React from "react";
import { BestSellersCard } from ".";

const BestSellers = () => {
  return (
    <section id="bestsellers" className="h-screen w-full">
      <h2 className="header">Best Sellers</h2>

      <div className="flex justify-center items-center gap-10">
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <BestSellersCard
            bgStyle="bg-tapsilog bg-cover bg-center w-64 h-64"
            price={800}
            priceStyle="bg-yellow-500 border-yellow-500"
            item="Tapsilog"
          />
          <BestSellersCard
            bgStyle="bg-tuyosilog bg-cover bg-center w-64 h-64"
            price={850}
            priceStyle="bg-rose-950 border-rose-950"
            item="Tuyosilog"
          />
          <BestSellersCard
            bgStyle="bg-tocilog bg-cover bg-center w-64 h-64"
            price={800}
            priceStyle="bg-rose-950 border-rose-950"
            item="Tocilog"
          />
          <BestSellersCard
            bgStyle="bg-spamsilog bg-cover bg-center w-64 h-64"
            price={750}
            priceStyle="bg-yellow-500 border-yellow-500"
            item="Spamsilog"
          />
        </div>

        <video
          className="flex justify-center items-center shadow-lg"
          controls
          width={500}
          height={350}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default BestSellers;
