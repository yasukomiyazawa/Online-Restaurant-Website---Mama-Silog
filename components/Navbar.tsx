import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <div className="bg-silogMeals bg-cover w-full h-screen">
      <nav className="flex justify-between h-25 drop-shadow-2xl bg-white shadow-2xl">
        <Image
          src="/logo.png"
          alt="logo"
          width={250}
          height={15}
          className="ml-8"
        />

        <div className="flex text-xl font-semibold items-center mr-10 font-inter text-black justify-between w-1/2">
          <Link className="hover" href="/" passHref>
            Home
          </Link>
          <Link className="hover" href="/menu" passHref>
            Menu
          </Link>
          <Link className="hover" href="/gallery" passHref>
            Gallery
          </Link>
          <Link className="hover" href="#blogs" passHref>
            Blogs
          </Link>
          <Link className="hover" href="/aboutUs" passHref>
            About Us
          </Link>
          <Link className="hover" href="/contactUs" passHref>
            Contact Us
          </Link>
        </div>
      </nav>

      <Hero />
    </div>
  );
};

export default Navbar;
