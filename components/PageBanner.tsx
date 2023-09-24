import { PageBannerProps } from "@/types";
import React from "react";

const PageBanner = ({ bgImg, title }: PageBannerProps) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-48 ${bgImg} bg-cover bg-right`}
    >
      <div className="flex text-white font-bold text-8xl">{title}</div>
    </div>
  );
};

export default PageBanner;
