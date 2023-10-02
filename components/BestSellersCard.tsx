import React from "react";
import { BestSellersCardProps } from "@/types";

const BestSellersCard = ({
  bgStyle,
  priceStyle,
  price,
  item,
}: BestSellersCardProps) => {
  return (
    <div className={`flex shadow-lg ${bgStyle}`}>
      <div className={`flex flex-col flex-grow justify-between `}>
        <div
          className={`border rounded-lg ml-auto mr-4 mt-4 px-3 py-1 max-xl:px-1 max-xl:py-1 max-xl:mr-1 max-xl:mt-1 text-white ${priceStyle}`}
        >{`¥${price}`}</div>
        <div
          className={`text-center mb-3 font-semibold text-2xl text-yellow-950`}
        >
          {item}
        </div>
      </div>
    </div>
  );
};

export default BestSellersCard;
