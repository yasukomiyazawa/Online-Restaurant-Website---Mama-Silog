import { PageBannerProps } from "@/types";
import React from "react";

const PageBanner = ({ bgImg, title }: PageBannerProps) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-48 ${bgImg} bg-cover bg-right`}
    >
      <h2 className="flex text-white font-bold text-8xl">{title}</h2>
    </div>
  );
};

export default PageBanner;
