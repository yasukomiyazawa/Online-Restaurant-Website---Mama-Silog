"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <nav className="flex justify-between h-25 drop-shadow-2xl bg-white shadow-2xl">
        <Link href="/" passHref>
          <Image
            src="/logo.png"
            alt="logo"
            width={250}
            height={15}
            className="ml-8 max-lg:w-36"
          />
        </Link>
        <div className="lg:flex hidden text-xl font-semibold items-center mr-10 font-inter text-black justify-between w-1/2">
          <Link className="hover" href="/" passHref>
            Home
          </Link>
          <Link className="hover" href="/menu" passHref>
            Menu
          </Link>
          <Link className="hover" href="/blogs" passHref>
            Blogs
          </Link>
          <Link className="hover" href="/aboutUs" passHref>
            About Us
          </Link>
          <Link className="hover" href="/orderForm" passHref>
            Order
          </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-3xl mr-6">
            ☰
          </button>
          {isOpen && (
            <div className="flex flex-col absolute items-center justify-center top-20 right-0 text-xl gap-4 bg-white w-full h-auto py-10">
              <Link className="hover px-4 py-2" href="/menu" passHref>
                Menu
              </Link>
              <Link className="hover px-4 py-2" href="/blogs" passHref>
                Blogs
              </Link>
              <Link className="hover px-4 py-2" href="/aboutUs" passHref>
                About Us
              </Link>
              <Link className="hover px-4 py-2" href="/orderForm" passHref>
                Order
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
