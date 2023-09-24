import React from "react";
import { BlogsCard } from ".";
import { CustomButton } from ".";

const Blogs = () => {
  return (
    <div id="blogs" className="mx-20 h-screen">
      <h2 className="header">Blogs</h2>

      <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15">
        <div>
          <BlogsCard
            bgImg="bg-blog1"
            user="Maria Santos"
            date="January 5, 2023"
            title="Introduction to Filipino Cuisine"
            description="Explore the rich tapestry of Filipino flavors and culinary heritage on a delightful journey."
          />
          <CustomButton title="Read More" href="/" />
        </div>
        <div>
          <BlogsCard
            bgImg="bg-blog2"
            user="Antonio Cruz"
            date="February 10, 2023"
            title=" Featured Dish of the Month: Tapsilog"
            description="Tapsilog, a beloved Filipino dish featuring marinated pork, garlic fried rice, and sunny-side-up eggs."
          />
          <CustomButton title="Read More" href="/" />
        </div>
        <div>
          <BlogsCard
            bgImg="bg-blog3"
            user="Yuki Tanaka"
            date="March 15, 2023"
            title="Filipino Food Culture in Japan"
            description="Experience the fusion of Filipino and Japanese cuisines in the heart of Japan, where two culinary worlds meet."
          />
          <CustomButton title="Read More" href="/" />
        </div>
        <div>
          <BlogsCard
            bgImg="bg-blog4"
            user="Kenji Nakamura"
            date="April 20, 2023"
            title="A Fusion of Japan and the Philippines"
            description="Celebrate the harmony of Japanese and Filipino flavors with locally sourced ingredients."
          />
          <CustomButton title="Read More" href="/" />
        </div>
        <div>
          <BlogsCard
            bgImg="bg-blog5"
            user="Emily Johnson"
            date="May 25, 2023"
            title="Customer Stories: A Taste of Home Away from Home"
            description="Heartwarming stories of customers finding a taste of home and community in our restaurant."
          />
          <CustomButton title="Read More" href="/" />
        </div>
        <div>
          <BlogsCard
            bgImg="bg-blog6"
            user="Sofia Rodriguez"
            date="June 30, 2023"
            title="Exploring Regional Flavors: From Luzon to Mindanao"
            description="Take a culinary voyage across the Philippines, savoring distinctive flavors from Bicol to Cebu.
            "
          />
          <CustomButton title="Read More" href="/" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
