import React from "react";
import { BlogsCard } from ".";
import { CustomButton } from ".";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  return (
    <div id="blogs" className="mx-20 mt-16 mb-10 max-xl:mt-10">
      <h2 className="header headerQuery">Blogs</h2>

      <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15">
        <div>
          <BlogsCard
            bgImg="bg-blog1"
            user="Maria Santos"
            date="January 5, 2023"
            title="Introduction to Filipino Cuisine"
            description="Explore the rich tapestry of Filipino flavors and culinary heritage on a delightful journey."
          />
          <CustomButton title="Read More" href="/blog1" />
        </div>
        <div>
          <BlogsCard
            bgImg="bg-blog2"
            user="Antonio Cruz"
            date="February 10, 2023"
            title=" Featured Dish of the Month: Tapsilog"
            description="Tapsilog, a beloved Filipino dish featuring marinated pork, garlic fried rice, and sunny-side-up eggs."
          />
          <CustomButton title="Read More" href="/blog2" />
        </div>
        <div>
          <BlogsCard
            bgImg="bg-blog3"
            user="Yuki Tanaka"
            date="March 15, 2023"
            title="Filipino Food Culture in Japan"
            description="Experience the fusion of Filipino and Japanese cuisines in the heart of Japan, where two culinary worlds meet."
          />
          <CustomButton title="Read More" href="/blog3" />
        </div>
      </div>
      <Link
        className="hover flex justify-end items-center text-xl font-extrabold"
        href="/blogs"
        passHref
      >
        <FontAwesomeIcon
          className="mr-1 hover"
          icon={faAnglesRight}
          style={{ color: "#000000" }}
        />
        See More
      </Link>
    </div>
  );
};

export default Blogs;
