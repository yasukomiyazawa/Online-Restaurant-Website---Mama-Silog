import { Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";

const gallery = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Gallery" />
      </div>

      <Footer />
    </div>
  );
};

export default gallery;
