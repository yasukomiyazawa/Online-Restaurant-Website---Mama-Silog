import { Footer, Navbar, BlogsCard, CustomButton } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";

const blogs = () => {
  return (
    <>
      <div className="grid grid-rows-auto">
        <Navbar />

        <div className="h-1/4">
          <PageBanner bgImg="bg-menuBanner" title="Blogs" />
        </div>

        <div className="grid grid-cols-3 grid-flow-row gap-y-10 gap-x-8 m-10 max-xl:grid-cols-1">
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog1"
              user="Maria Santos"
              date="January 5, 2023"
              title="Introduction to Filipino Cuisine"
              description="Explore the rich tapestry of Filipino flavors and culinary heritage on a delightful journey."
            />
            <CustomButton
              title="Read More"
              href="/blog1"
              // style="max-xl:flex max-xl:justify-content"
            />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog2"
              user="Antonio Cruz"
              date="February 10, 2023"
              title=" Featured Dish of the Month: Tapsilog"
              description="Tapsilog, a beloved Filipino dish featuring marinated pork, garlic fried rice, and sunny-side-up eggs."
            />
            <CustomButton title="Read More" href="/blog2" />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog3"
              user="Yuki Tanaka"
              date="March 15, 2023"
              title="Filipino Food Culture in Japan"
              description="Experience the fusion of Filipino and Japanese cuisines in the heart of Japan, where two culinary worlds meet."
            />
            <CustomButton title="Read More" href="/blog3" />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog4"
              user="Kenji Nakamura"
              date="April 20, 2023"
              title="A Fusion of Japan and the Philippines"
              description="Celebrate the harmony of Japanese and Filipino flavors with locally sourced ingredients."
            />
            <CustomButton title="Read More" href="/blog4" />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog5"
              user="Emily Johnson"
              date="May 25, 2023"
              title="Customer Stories: A Taste of Home Away from Home"
              description="Heartwarming stories of customers finding a taste of home and community in our restaurant."
            />
            <CustomButton title="Read More" href="/blog5" />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog6"
              user="Sofia Rodriguez"
              date="June 30, 2023"
              title="Exploring Regional Flavors: From Luzon to Mindanao"
              description="Take a culinary voyage across the Philippines, savoring distinctive flavors from Bicol to Cebu."
            />
            <CustomButton title="Read More" href="/blog6" />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog7"
              user="Carlos Santos"
              date="July 15, 2023"
              title="Filipino-Japanese Fusion Delights"
              description="Explore umami magic and sushi-inspired creations in our fusion dishes that blend Japanese and Filipino flavors."
            />
            <CustomButton title="Read More" href="/blog7" />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog8"
              user="Maria Tanaka"
              date="August 20, 2023"
              title="Sweet Fusion: Filipino-Japanese Desserts"
              description="Indulge in modern halo-halo and matcha-infused treats—where Filipino and Japanese sweets collide."
            />
            <CustomButton title="Read More" href="/blog8" />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <BlogsCard
              bgImg="bg-blog9 bg-top"
              user="Yuki Nakamura"
              date="September 10, 2023"
              title="Filipino Festivals in Japan"
              description="Take a culinary voyage across the Philippines, savoring distinctive flavors from Bicol to Cebu."
            />
            <CustomButton title="Read More" href="/blog9" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default blogs;
