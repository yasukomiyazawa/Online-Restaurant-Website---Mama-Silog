import React from "react";
import { CustomButtonProps } from "@/types";
import Link from "next/link";

const CustomButton = ({ title, style, href }: CustomButtonProps) => {
  return (
    <Link href="{href}">
      <button
        className={`border border-yellow-400 bg-yellow-400 py-2 px-5 hover:bg-rose-900 ${style}`}
      >
        {title}
      </button>
    </Link>
  );
};

export default CustomButton;
