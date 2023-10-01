import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap flex-col text-black border-t border-gray-100 bg-footerBg1 bg-cover bg-center">
        <div className="flex max-md:flex-col flex-wrap justify-around gap-5 sm:px-16 px-6 py-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <Image
              src="/logo.png"
              alt="mama silog logo"
              width={120}
              height={20}
              className="object-contain"
              layout="fixed"
            />
            <p className="font-bold">
              Mama Silog <br /> All Rights Reserved &copy;
            </p>
          </div>

          <div className="flex flex-wrap">
            <div>
              <h3 className="pb-3 font-semibold">Contact Information</h3>
              <ul>
                <li className="pb-3 hover1">
                  <FontAwesomeIcon icon={faPhone} className="pr-3" />
                  +81 90 1651 1559
                </li>
                <li className="pb-3 hover1">
                  <FontAwesomeIcon icon={faEnvelope} className="pr-3" />
                  www.mamasilog@gmail.com
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div>
              <h3 className="pb-3 font-semibold">Follow Us</h3>
              <ul>
                <li className="pb-3 hover1">
                  <FontAwesomeIcon icon={faFacebookF} className="pr-3" />
                  <Link href="/"></Link>
                  Facebook
                </li>
                <li className="pb-3 hover1">
                  <FontAwesomeIcon icon={faInstagram} className="pr-3" />
                  <Link href="/"></Link>
                  Instagram
                </li>
                <li className="pb-3 hover1">
                  <FontAwesomeIcon icon={faTwitter} className="pr-3" />
                  <Link href="/"></Link>
                  Twitter
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap">
            {footerLinks.map((link) => (
              <div key={link.title} className="">
                <h3 className="pb-3 font-semibold">{link.title}</h3>
                <ul>
                  {link.links.map((item) => (
                    <li key={item.title} className="hover1">
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="flex justify-center border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>
          Developed by{" "}
          <span className="font-semibold text-red-900 text-xl">
            Yasuko Miyazawa
          </span>{" "}
          | All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
