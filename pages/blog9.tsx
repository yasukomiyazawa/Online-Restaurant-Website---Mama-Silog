import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog9 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-9.png"
        blogTitle="Filipino Festivals in Japan"
        p1="Take a culinary voyage across the Philippines, savoring distinctive flavors from Bicol to Cebu. 
        The Philippines is a country known for its rich cultural tapestry, and one of the most vibrant aspects 
        of this culture is its festivals. From lively parades to sumptuous feasts, Filipino festivals are a 
        testament to the nation's love for celebration and community. At our restaurant, we bring the spirit 
        of Filipino festivals to Japan, allowing you to experience the joy and flavors of these celebrations. 
        Join us in celebrating the festivals of the Philippines, right here in the heart of Japan."
        p2="One of the most iconic Filipino festivals is Sinulog, celebrated in Cebu. It's a vibrant and 
        lively celebration that honors the Santo Niño, or the Child Jesus. The streets come alive with colorful 
        processions, traditional dances, and, of course, delicious food. During Sinulog, you can savor the 
        flavors of Cebu lechon, a roast pig known for its crispy skin and tender meat."
        p3="Another festival that we pay homage to is the Pahiyas Festival in Lucban, Quezon. This agricultural 
        harvest festival is a riot of colors and creativity, with houses adorned with colorful rice decorations. 
        At our restaurant, you can enjoy dishes inspired by the bounty of the harvest, such as rice cakes and kakanin."
        p4="But it's not just about the big festivals; it's also about the local fiestas that happen throughout the Philippines. 
        Each region has its own unique celebrations, and we bring these flavors to you year-round. From the spicy dishes of 
        Bicol to the seafood feasts of Palawan, our menu is a journey through the diverse festivals of the Philippines."
        user="Yuki Nakamura"
        date="September 10, 2023"
      />

      <div className="border border-t-black max-lg:hidden">
        <h3 className="font-bold text-3xl flex justify-center my-8">
          Other Blogs
        </h3>
        <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15 mb-10 mx-10">
          <div>
            <BlogsCard
              bgImg="bg-blog5"
              user="Emily Johnson"
              date="May 25, 2023"
              title="Customer Stories: A Taste of Home Away from Home"
              description="Heartwarming stories of customers finding a taste of home and community in our restaurant."
            />
            <CustomButton title="Read More" href="/blog5" />
          </div>
          <div>
            <BlogsCard
              bgImg="bg-blog6"
              user="Sofia Rodriguez"
              date="June 30, 2023"
              title="Exploring Regional Flavors: From Luzon to Mindanao"
              description="Take a culinary voyage across the Philippines, savoring distinctive flavors from Bicol to Cebu."
            />
            <CustomButton title="Read More" href="/blog6" />
          </div>
          <div>
            <BlogsCard
              bgImg="bg-blog7"
              user="Carlos Santos"
              date="July 15, 2023"
              title="Filipino-Japanese Fusion Delights"
              description="Explore umami magic and sushi-inspired creations in our fusion dishes that blend Japanese and Filipino flavors."
            />
            <CustomButton title="Read More" href="/blog7" />
          </div>
        </div>
      </div>

      <div className="border border-t-black lg:hidden">
        <h3 className="font-bold text-3xl flex justify-center my-8">
          Other Blogs
        </h3>
        <div className="grid grid-cols-1 grid-rows-2 gap-y-44 gap-x-8 mt-15 mb-10 mx-10 max-lg:m-8 max-lg:gap-y-4">
          <div className="flex flex-col items-center">
            <BlogsCard
              bgImg="bg-blog5"
              user="Emily Johnson"
              date="May 25, 2023"
              title="Customer Stories: A Taste of Home Away from Home"
              description="Heartwarming stories of customers finding a taste of home and community in our restaurant."
            />
            <CustomButton title="Read More" href="/blog5" />
          </div>
          <div className="flex flex-col items-center">
            <BlogsCard
              bgImg="bg-blog6"
              user="Sofia Rodriguez"
              date="June 30, 2023"
              title="Exploring Regional Flavors: From Luzon to Mindanao"
              description="Take a culinary voyage across the Philippines, savoring distinctive flavors from Bicol to Cebu."
            />
            <CustomButton title="Read More" href="/blog6" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default blog9;
