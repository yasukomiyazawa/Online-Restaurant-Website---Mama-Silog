import { Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";
import MenuCard from "@/components/MenuCard";

const menu = () => {
  return (
    <div className="grid grid-row-auto">
      <Navbar />

      <div>
        <PageBanner bgImg="bg-menuBanner" title="Menu" />
      </div>

      <div className="grid grid-cols-2 grid-flow-row mx-14 mt-8">
        <MenuCard
          img="/cornsilog.png"
          itemAlt="cornsilog"
          item="Cornsilog"
          price={690}
          // ingr="corned beef, garlic rice, fried egg"
          desc="Tender corned beef served with garlic rice and a fried egg."
        />
        <MenuCard
          img="/hotsilog.png"
          itemAlt="hotsilog"
          item="Hotsilog"
          price={580}
          // ingr="filipino-style hotdog, garlic rice, fried egg"
          desc="Savory hotdog served with garlic rice and a fried egg."
        />
        <MenuCard
          img="/kawalisilog.png"
          itemAlt="kawalisilog"
          item="Kawalisilog"
          price={850}
          // ingr="crispy pork belly (lechon kawali), garlic rice, fried egg"
          desc="Crispy pork belly, garlic rice, and a fried egg: a Filipino favorite."
        />
        <MenuCard
          img="/nugsilog.png"
          itemAlt="nugsilog"
          item="Nugsilog"
          price={690}
          // ingr="chicken nuggets, garlic rice, fried egg"
          desc="Crispy chicken nuggets paired with garlic rice and a fried egg."
        />
        <MenuCard
          img="/spamsilog.png"
          itemAlt="spamsilog"
          item="Spamsilog"
          price={750}
          // ingr="spam, garlic rice, fried egg"
          desc="Classic Spam, garlic rice, and a fried egg combo."
        />
        <MenuCard
          img="/tapsilog.png"
          itemAlt="tapsilog"
          item="Tapsilog"
          price={780}
          // ingr="marinated beef tapa, garlic rice, fried egg"
          desc="Marinated beef tapa with garlic rice and a fried egg."
        />
        <MenuCard
          img="/tocilog.png"
          itemAlt="tocilog"
          item="Tocilog"
          price={720}
          // ingr="sweet pork tocino, garlic rice, fried egg"
          desc="Sweet pork tocino paired with garlic rice and a fried egg."
        />
        <MenuCard
          img="/tuyosilog.png"
          itemAlt="tuyosilog"
          item="Tuyosilog"
          price={750}
          // ingr="dried fish (tuyo), garlic rice, fried egg"
          desc="Dried fish (tuyo) with garlic rice and a fried egg."
        />
      </div>

      <Footer />
    </div>
  );
};

export default menu;
