import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog3 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-3.png"
        blogTitle="Filipino Food Culture in Japan"
        p1="Experience the fusion of Filipino and Japanese cuisines in the heart of Japan, where two culinary worlds meet. 
        Japan's love for precision and freshness meets the Philippines' bold and hearty flavors, resulting in a culinary journey like no other.
        It's a delightful blend of traditions, ingredients, and techniques that create a harmonious and unforgettable dining experience."
        p2="At our restaurant, we've embraced this fusion wholeheartedly. Our chefs draw inspiration from both Filipino and Japanese culinary traditions 
        to craft dishes that capture the essence of both cultures. From sushi rolls infused with Filipino ingredients to Japanese-style tempura with a Filipino twist, 
        every dish is a testament to the beautiful marriage of these two rich culinary heritages."
        p3="Our commitment to sourcing local and seasonal ingredients ensures that every plate is a masterpiece. The seafood is as fresh as it gets, 
        and the vegetables burst with flavor. Whether you're indulging in the umami richness of sinigang or the delicate flavors of sashimi, 
        each dish tells a story of craftsmanship, passion, and a deep appreciation for quality."
        p4="But it's not just about the food; it's about the experience. Dining at our restaurant is a journey that immerses you in the vibrant culture of both nations. 
        The ambiance, the service, and the flavors all come together to create a memorable experience that leaves a lasting impression"
        user="Yuki Tanaka"
        date="March 15, 2023"
      />

      <div className="border border-t-black">
        <h3 className="font-bold text-3xl flex justify-center my-3">
          Other Blogs
        </h3>
        <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15 mb-10 mx-10">
          <div>
            <BlogsCard
              bgImg="bg-blog4"
              user="Kenji Nakamura"
              date="April 20, 2023"
              title="A Fusion of Japan and the Philippines"
              description="Celebrate the harmony of Japanese and Filipino flavors with locally sourced ingredients."
            />
            <CustomButton title="Read More" href="/blog4" />
          </div>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default blog3;
