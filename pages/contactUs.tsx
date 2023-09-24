import { Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";

const contactUs = () => {
  return (
    <>
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Contact Us" />
      </div>

      <Footer />
    </>
  );
};

export default contactUs;
