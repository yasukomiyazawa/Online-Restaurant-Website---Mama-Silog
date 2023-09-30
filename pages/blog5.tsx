import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog5 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-5.png"
        blogTitle="Customer Stories: A Taste of Home Away from Homee"
        p1="Our restaurant isn't just a place to enjoy delicious food; it's a place where heartwarming stories unfold. 
        We've had the privilege of welcoming Filipino expatriates, travelers, and locals alike who have found a taste 
        of home and community within our walls. It's a testament to the power of food to evoke nostalgia, connection, and a sense of belonging."
        p2="From grandparents sharing stories of their hometowns over a hearty meal to friends reuniting over a steaming bowl of sinigang, 
        our restaurant has become a hub for creating cherished memories. It's a place where you can relive the flavors of your childhood, 
        introduce your friends to the delights of Filipino cuisine, and build new traditions."
        p3="Every dish on our menu is a story waiting to be told. It's the story of a grandmother's secret adobo recipe passed down through 
        generations, the story of a fishing village where the day's catch becomes a feast, and the story of street vendors peddling sweet halo-halo 
        on a scorching summer day. When you dine with us, you're not just savoring food; you're reliving the narratives that have shaped Filipino culture."
        p4="We are immensely proud to have played a part in these stories, to have been a backdrop for laughter, celebration, and the forging of bonds. 
        Our commitment to authenticity ensures that every dish is a taste of home, no matter how far you may be from the Philippines. 
        Come and be a part of our story, and let us be a part of yours."
        user="Emily Johnson"
        date="May 25, 2023"
      />

      <div className="border border-t-black">
        <h3 className="font-bold text-3xl flex justify-center my-8">
          Other Blogs
        </h3>
        <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15 mb-10 mx-10">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default blog5;
