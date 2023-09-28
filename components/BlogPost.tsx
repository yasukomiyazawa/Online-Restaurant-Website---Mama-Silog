import React from "react";
import Image from "next/image";
import { BlogPostProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

const BlogPost = ({
  blogImg,
  blogTitle,
  p1,
  p2,
  p3,
  p4,
  user,
  date,
}: BlogPostProps) => {
  return (
    <section className="flex flex-col justify-center gap-5 m-10">
      <div className="w-full flex justify-center mt-4">
        <Image
          src={blogImg}
          alt="blog post image"
          width={800}
          height={300}
          className="shadow-md object-cover"
        />
      </div>
      <h1 className="flex justify-center text-4xl font-extrabold ">
        {blogTitle}
      </h1>
      <div className="flex w-full justify-center gap-3">
        <div>
          <FontAwesomeIcon
            className="mr-1"
            icon={faUser}
            // style={{ color: "#ffffff" }}
          />
          By {user}
        </div>
        <div>
          <FontAwesomeIcon
            className="mr-1"
            icon={faCalendar}
            // style={{ color: "#ffffff" }}
          />
          {date}
        </div>
      </div>
      <div></div>
      <div className="mx-52 flex flex-col gap-4 leading-8">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
      </div>
    </section>
  );
};

export default BlogPost;
