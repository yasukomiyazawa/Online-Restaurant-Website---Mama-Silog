import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog6 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-6.png"
        blogTitle="Exploring Regional Flavors: From Luzon to Mindanao"
        p1="Embark on a culinary voyage across the Philippines, savoring distinctive flavors from Luzon to Mindanao. 
        The Philippines is a diverse archipelago, and its cuisine reflects this diversity with a wide array of regional specialties.
        Each region boasts its own unique ingredients, cooking techniques, and dishes that tell a story of local culture and history. 
        At our restaurant, we take pride in bringing these regional flavors to your plate. Join us as we explore the culinary treasures 
        of Luzon, Visayas, and Mindanao, offering you a taste of the Philippines' rich tapestry of tastes."
        p2="Luzon, the largest island, is known for its hearty and flavorful dishes. Indulge in the spicy notes of Bicol Express, 
        the earthy flavors of pinakbet, and the exquisite blend of sweet and savory in puto bumbong. These dishes showcase the 
        influence of Spanish and Chinese cuisines, along with indigenous ingredients."
        p3="As you journey to Visayas, discover a seafood lover's paradise. The region's proximity to the sea brings forth dishes like kinilaw, 
        a refreshing ceviche-like delicacy, and the sweet delights of piaya. The flavors here are as vibrant as the turquoise waters that surround the islands."
        p4="Mindanao, with its lush landscapes and diverse communities, offers a wealth of flavors. Sample the rich and complex taste of beef rendang, 
        the tropical sweetness of durian candies, and the bold flavors of chicken pianggang. It's a region where indigenous traditions meld with 
        influences from nearby Asian countries."
        user="Sofia Rodriguez"
        date="June 30, 2023"
      />

      <div className="border border-t-black">
        <h3 className="font-bold text-3xl flex justify-center my-3">
          Other Blogs
        </h3>
        <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15 mb-10 mx-10">
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
          <div>
            <BlogsCard
              bgImg="bg-blog8"
              user="Maria Tanaka"
              date="August 20, 2023"
              title="Sweet Fusion: Filipino-Japanese Desserts"
              description="Indulge in modern halo-halo and matcha-infused treats—where Filipino and Japanese sweets collide."
            />
            <CustomButton title="Read More" href="/blog8" />
          </div>
          <div>
            <BlogsCard
              bgImg="bg-blog9"
              user="Yuki Nakamura"
              date="September 10, 2023"
              title="Filipino Festivals in Japan"
              description="Take a culinary voyage across the Philippines, savoring distinctive flavors from Bicol to Cebu."
            />
            <CustomButton title="Read More" href="/blog9" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default blog6;
