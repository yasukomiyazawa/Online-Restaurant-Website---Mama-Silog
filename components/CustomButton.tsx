import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, style }: CustomButtonProps) => {
  return <button className={style}>{title}</button>;
};

export default CustomButton;
