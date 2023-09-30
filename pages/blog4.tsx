import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog4 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-4.png"
        blogTitle="A Fusion of Japan and the Philippines"
        p1="Celebrate the harmony of Japanese and Filipino flavors with locally sourced ingredients. 
        Our commitment to using fresh and high-quality produce from both Japan and the Philippines 
        allows us to create dishes that truly represent the best of both worlds. It's a culinary journey
        that bridges the geographical gap and unites the essence of these two remarkable nations."
        p2="From miso-infused adobo to tempura with a tropical twist, our menu is a testament to the creative 
        possibilities that arise when you combine the culinary traditions of Japan and the Philippines. 
        Every dish is a unique experience that showcases the beauty of this fusion."
        p3="Behind each dish is a story of collaboration between our Filipino and Japanese chefs. 
        They work hand in hand, drawing inspiration from their respective backgrounds and culinary journeys. 
        It's this synergy that creates dishes that not only taste incredible but also celebrate the cultural diversity of our team."
        p4="We believe in the power of food to connect people and create memories. Dining at our restaurant is not just a meal; 
        it's an exploration of flavors, a celebration of culture, and a reminder that when different culinary traditions come together, 
        something truly extraordinary is born."
        user="Kenji Nakamura"
        date="April 20, 2023"
      />

      <div className="border border-t-black">
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

      <Footer />
    </div>
  );
};

export default blog4;
