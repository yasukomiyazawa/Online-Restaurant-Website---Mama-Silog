import React from "react";
import Image from "next/image";
import { MenuCardProps } from "@/types";
import { CustomButton } from ".";

const MenuCard = ({ img, itemAlt, item, price, ingr, desc }: MenuCardProps) => {
  return (
    <div className="grid grid-cols-2 m-5 p-5 items-center shadow-xl max-xl:flex max-xl:flex-col">
      <div style={{ width: "250px", height: "150px", position: "relative" }}>
        <Image
          src={img}
          alt={`${itemAlt} image`}
          layout="fill" // This makes the image fill its parent container
          objectFit="cover" // This makes the image cover the container
        />
      </div>

      <div>
        <div className="flex justify-between pb-7 max-xl:pb-4 max-xl:flex max-xl:flex-col max-xl:items-center max-xl:mt-4">
          <h3 className="font-bold text-3xl">{item}</h3>
          <span className="font-bold text-rose-900 text-xl">{`¥ ${price}`}</span>
        </div>
        <p className="text-slate-500">{ingr}</p>
        <p className="text-slate-500 text-base pb-4">{desc}</p>

        <div className="max-xl:flex max-xl:justify-center">
          <CustomButton title="Order" href="/orderForm" style="py-0" />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
