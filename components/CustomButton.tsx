import React from "react";
import { CustomButtonProps } from "@/types";
import Link from "next/link";

const CustomButton = ({ title, style, href }: CustomButtonProps) => {
  return (
    <Link href="{href}">
      <button className={style}>{title}</button>
    </Link>
  );
};

export default CustomButton;
