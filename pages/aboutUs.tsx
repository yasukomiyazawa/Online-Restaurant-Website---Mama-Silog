import { Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";

const aboutUs = () => {
  return (
    <>
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="About Us" />
      </div>

      <Footer />
    </>
  );
};

export default aboutUs;
