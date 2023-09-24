import { Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";

const blogs = () => {
  return (
    <>
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Blogs" />
      </div>

      <Footer />
    </>
  );
};

export default blogs;
