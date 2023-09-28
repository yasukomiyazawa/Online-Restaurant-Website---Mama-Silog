import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog8 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-8.png"
        blogTitle="Sweet Fusion: Filipino-Japanese Desserts"
        p1="Indulge in modern halo-halo and matcha-infused treats—where Filipino and Japanese sweets collide. 
        Desserts are the sweet finale to every meal, and our fusion desserts are a testament to the delightful 
        collision of flavors and traditions from two culinary powerhouses."
        p2="Halo-halo, the iconic Filipino dessert, takes on a modern twist with the addition of matcha. 
        Imagine layers of matcha-flavored shaved ice, red beans, sweet potato, and leche flan, topped with 
        a scoop of matcha ice cream. It's a symphony of textures and tastes that celebrate the best of both cultures."
        p3="For those who adore matcha, our matcha-infused sweets are a dream come true. Try the matcha leche flan, a 
        velvety custard infused with the earthy notes of matcha. Pair it with matcha-infused bibingka, 
        a rice cake, for a delightful contrast of textures."
        p4="Our dessert menu is a testament to the creativity and innovation of our chefs, who take classic Filipino 
        and Japanese sweets and give them a contemporary twist. Whether you're a fan of traditional flavors or 
        seeking exciting new taste experiences, our fusion desserts are sure to satisfy your sweet cravings."
        user="Maria Tanaka"
        date="August 20, 2023"
      />

      <div className="border border-t-black">
        <h3 className="font-bold text-3xl flex justify-center my-3">
          Other Blogs
        </h3>
        <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15 mb-10 mx-10">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default blog8;
