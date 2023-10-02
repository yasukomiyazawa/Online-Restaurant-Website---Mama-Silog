import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog2 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-2.png"
        blogTitle="Featured Dish of the Month: Tapsilog"
        p1="Tapsilog, a beloved Filipino dish, takes center stage this month as our featured dish. 
        Prepared with marinated pork, garlic fried rice, and perfectly cooked sunny-side-up eggs, 
        this meal embodies the essence of Filipino comfort food. Every bite is a symphony of flavors 
        that dances on your palate."
        p2="In the Philippines, tapsilog is a staple breakfast item enjoyed by people from all walks of life.
         It's a dish that represents the simplicity and warmth of Filipino hospitality. At our restaurant, 
         we've taken this classic and elevated it to new heights, offering a delectable experience that brings
        the essence of the Philippines to your plate."
        p3="But what makes tapsilog truly special is the way it brings people together. It's a meal that 
        transcends social boundaries and connects generations. Families gather around the breakfast table to savor tapsilog, 
        sharing stories and laughter. It's a reminder that the best moments in life are often enjoyed over a hearty meal."
        p4="As you savor each bite of our tapsilog, you'll experience the perfect harmony of flavors. The savory sweetness of 
        the marinated pork, the garlicky aroma of the fried rice, and the rich creaminess of the sunny-side-up eggs create a memorable 
        combination that lingers in your memory. It's a taste that takes you on a journey to the heart of the Philippines, 
        where simple ingredients come together to create culinary magic."
        user="Antonio Cruz"
        date="February 10, 2023"
      />

      <div className="border border-t-black max-lg:hidden">
        <h3 className="font-bold text-3xl flex justify-center my-8">
          Other Blogs
        </h3>
        <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15 mb-10 mx-10">
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
        </div>
      </div>

      <div className="border border-t-black lg:hidden">
        <h3 className="font-bold text-3xl flex justify-center my-8">
          Other Blogs
        </h3>
        <div className="grid grid-cols-1 grid-rows-2 gap-y-44 gap-x-8 mt-15 mb-10 mx-10 max-lg:m-8 max-lg:gap-y-4">
          <div className="flex flex-col items-center">
            <BlogsCard
              bgImg="bg-blog3"
              user="Yuki Tanaka"
              date="March 15, 2023"
              title="Filipino Food Culture in Japan"
              description="Experience the fusion of Filipino and Japanese cuisines in the heart of Japan, where two culinary worlds meet."
            />
            <CustomButton title="Read More" href="/blog3" />
          </div>
          <div className="flex flex-col items-center">
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

export default blog2;
