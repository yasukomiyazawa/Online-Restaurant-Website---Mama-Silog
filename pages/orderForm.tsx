import { Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const orderForm = () => {
  return (
    <div>
      <div className="grid grid-row-auto">
        <Navbar />

        <div>
          <PageBanner bgImg="bg-menuBanner" title="Order" />
        </div>

        <div className="grid grid-cols-2 gap-10 m-11">
          <div>
            <form action="" className="flex flex-col gap-10 px-10">
              <h1 className="text-3xl font-bold">PLACE YOUR ORDER</h1>
              <h2 className="font-semibold text-gray-600">
                Ordering from us is easy! <br /> Fill out the form below with
                your details and the items you'd like to order.
              </h2>
              <div className="flex flex-col">
                <label className="mb-8 font-semibold text-lg" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  style={{ outline: "none" }}
                  className="border-b border-x-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-8 font-semibold text-lg" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  style={{ outline: "none" }}
                  className="border-b border-x-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-8 font-semibold text-lg" htmlFor="number">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="number"
                  style={{ outline: "none" }}
                  className="border-b border-x-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-5 font-semibold text-lg" htmlFor="order">
                  Order:
                </label>
                <textarea
                  name="order"
                  id="order"
                  cols={20}
                  rows={5}
                  style={{ outline: "none" }}
                  placeholder="List the dishes and quantities you'd like to order. Feel free to include any specific instructions or preferences. (e.g. tapsilog-2x)"
                  className="border-b border-x-gray-600"
                />
              </div>
            </form>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6463.783812069876!2d139.89865409458406!3d35.90066298082388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018997198c4c8e3%3A0x43ac706a4d3531c3!2sMihara%2C%20Nagareyama%2C%20Chiba%20270-0103%2C%20Japan!5e0!3m2!1sen!2sus!4v1696081392340!5m2!1sen!2sus"
              width="100%"
              height="280"
              style={{ border: "0px", pointerEvents: "none" }}
              allowFullScreen
              className="shadow-lg"
            ></iframe>

            <div>
              <h2 className="font-semibold text-2xl flex justify-center my-8">
                Contact Us
              </h2>

              <div className="flex flex-col gap-8">
                <div className="flex justify-between text-lg border-b border-x-gray-600 pb-5">
                  <span className="font-semibold">Phone:</span>
                  <span className="text-gray-600">+81 90 1651 1559</span>
                </div>
                <div className="flex justify-between text-lg border-b border-x-gray-600 pb-5">
                  <span className="font-semibold">Email:</span>
                  <span className="text-gray-600">mamasilog21@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex justify-around mt-14">
              {/* <div className="">
              </div> */}

              <Link
                className="flex items-center"
                href="/menu"
                target="_blank"
                passHref
              >
                <button className="hover:bg-yellow-500 border border-black-100 rounded-lg text-2xl bg-yellow-50 py-3 px-6">
                  See Menu
                </button>
              </Link>

              <div className="flex flex-col items-end">
                <span className="font-semibold text-3xl mb-4">
                  Opening Hours:
                </span>
                <span className="text-2xl border-x-gray-400">
                  Everyday 8AM - 8PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default orderForm;
