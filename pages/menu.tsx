import { Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";

const menu = () => {
  return (
    <>
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Menu"/>
      </div>

      <Footer />
    </>
  );
};

export default menu;
