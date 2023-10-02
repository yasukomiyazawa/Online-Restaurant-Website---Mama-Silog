import React from "react";
import PageBanner from "@/components/PageBanner";
import { BlogsCard, CustomButton, Footer, Navbar } from "@/components";
import "../app/globals.css";
import BlogPost from "@/components/BlogPost";

const blog1 = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <BlogPost
        blogImg="/blog-1.png"
        blogTitle="Introduction to Filipino Cuisine"
        p1="Explore the rich tapestry of Filipino flavors and culinary heritage on a delightful journey.
        Filipino cuisine is a treasure trove of diverse and vibrant dishes that reflect the country's unique 
        history and cultural influences. From the bustling streets of Manila to the lush landscapes of the provinces, 
        Filipino food is a testament to the nation's love for bold flavors and hearty meals."
        p2="At our restaurant, we are proud to bring these flavors to Japan, offering a taste of the Philippines right here in the heart of Tokyo.
        From classics like adobo and sinigang to lesser-known gems like kare-kare, our menu is a celebration of Filipino 
        culinary traditions. Join us on a gastronomic adventure as we pay homage to the Philippines' culinary legacy."
        p3="In every dish, you'll discover the depth of Filipino cuisine. The use of local ingredients, such as coconut milk,
        calamansi, and an array of tropical fruits, creates a symphony of flavors that dance on your taste buds. Whether you're
        indulging in the savory notes of crispy lechon or the comforting warmth of a bowl of arroz caldo, each bite tells a story of tradition, 
        history, and the vibrant spirit of the Philippines."
        p4="But it's not just about the food; it's about the culture. The Philippines' culinary traditions are deeply intertwined with its 
        history and people. Our restaurant aims to capture the essence of Filipino hospitality, where every meal is a celebration and every guest is 
        family. It's a place where stories are shared, friendships are forged, and the love for food brings people closer."
        user="Maria Santos"
        date="January 5, 2023"
      />

      <div className="border border-t-black max-lg:hidden">
        <h3 className="font-bold text-3xl flex justify-center my-8">
          Other Blogs
        </h3>
        <div className="grid grid-cols-3 grid-flow-row gap-y-44 gap-x-8 mt-15 mb-10 mx-10 max-xl:mx-2">
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

      <div className="border border-t-black lg:hidden">
        <h3 className="font-bold text-3xl flex justify-center my-8">
          Other Blogs
        </h3>
        <div className="grid grid-cols-1 grid-rows-2 gap-y-44 gap-x-8 mt-15 mb-10 mx-10 max-lg:m-8 max-lg:gap-y-4">
          <div className="flex flex-col items-center">
            <BlogsCard
              bgImg="bg-blog2"
              user="Antonio Cruz"
              date="February 10, 2023"
              title=" Featured Dish of the Month: Tapsilog"
              description="Tapsilog, a beloved Filipino dish featuring marinated pork, garlic fried rice, and sunny-side-up eggs."
            />
            <CustomButton title="Read More" href="/blog2" />
          </div>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default blog1;
