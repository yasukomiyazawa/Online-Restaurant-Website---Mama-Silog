import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog7 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-7.png"
        blogTitle="Filipino-Japanese Fusion Delights"
        p1="Explore umami magic and sushi-inspired creations in our fusion dishes that blend Japanese and Filipino flavors. 
        Japan and the Philippines share a love for food that is deeply ingrained in their cultures. Both nations take pride 
        in their culinary heritage, and our restaurant is where these two worlds collide in a burst of creativity."
        p2="Our Filipino-Japanese fusion dishes are a testament to the creativity of our chefs who draw inspiration from 
        the best of both cuisines. Dive into a world where adobo meets teriyaki, where tempura gets a tropical twist, 
        and where sushi rolls embrace the bold flavors of Filipino ingredients."
        p3="One of our standout dishes is the adobo teriyaki—a harmonious blend of soy sauce, vinegar, and sugar 
        that creates a sweet-savory symphony on your palate. The tempura sinigang, on the other hand, combines the 
        lightness of tempura batter with the tangy goodness of sinigang soup. It's an unexpected pairing that surprises and delights."
        p4="And let's not forget our sushi rolls infused with Filipino ingredients. The kinilaw maki, with its fresh seafood and citrusy 
        kick, offers a refreshing take on sushi. The sisig tempura roll, with crispy sisig nestled inside, is a revelation of textures and flavors."
        user="Carlos Santos"
        date="July 15, 2023"
      />

      <div className="border border-t-black">
        <h3 className="font-bold text-3xl flex justify-center my-8">
          Other Blogs
        </h3>
        <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15 mb-10 mx-10">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default blog7;
