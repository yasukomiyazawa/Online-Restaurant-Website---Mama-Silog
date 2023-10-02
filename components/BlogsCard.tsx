import React from "react";
import Image from "next/image";
import { BlogCardProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

const BlogsCard = ({
  bgImg,
  user,
  date,
  title,
  description,
}: BlogCardProps) => {
  return (
    <>
      <div className="mb-5">
        <div
          className={`flex items-end text-white w-full h-48 bg-cover bg-center ${bgImg}`}
        >
          <div className=" flex w-full justify-center gap-3 bg-yellow-500">
            <div>
              <FontAwesomeIcon
                className="mr-1"
                icon={faUser}
                style={{ color: "#ffffff" }}
              />
              By {user}
            </div>
            <div>
              <FontAwesomeIcon
                className="mr-1"
                icon={faCalendar}
                style={{ color: "#ffffff" }}
              />
              {date}
            </div>
          </div>
        </div>
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <h3 className="text-black-100 font-semibold my-2 max-lg:base max-lg:text-center">
            {title}
          </h3>
          <p className="text-zinc-400 mb-2 max-lg:text-sm max-lg:text-center">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;
