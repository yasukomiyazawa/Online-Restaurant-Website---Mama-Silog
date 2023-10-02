import { CustomButton, Footer, Navbar } from "@/components";
import React from "react";
import "../app/globals.css";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const orderForm = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   number: "",
  //   order: "",
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { id, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [id]: value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "https://script.google.com/macros/s/AKfycbyNNBI3ui7X3kKac4OTfLOb7GUcdah3xDxEQ-k5ycye1RZ14YyR4jq1ok2R5fIq4TSt/exec",

  //       {
  //         method: "POST",
  //         mode: "no-cors",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     if (response.ok) {
  //       alert("Order submitted successfully!");
  //     } else {
  //       alert("Order not submitted. Please re-enter order.");
  //       console.error("Order submission failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  return (
    <div>
      <div className="grid grid-row-auto">
        <Navbar />

        <div>
          <PageBanner bgImg="bg-menuBanner" title="Order" />
        </div>

        <div className="grid grid-cols-2 gap-10 m-11 max-xl:flex max-xl:flex-col">
          <div>
            <form
              action=""
              className="flex flex-col gap-10 px-10 max-xl:px-0"
              id="form"
            >
              <h1 className="text-3xl font-bold max-xl:text-2xl">
                PLACE YOUR ORDER
              </h1>
              <h2 className="font-semibold text-gray-600 max-xl:text-sm">
                Ordering from us is easy! <br /> Fill out the form below with
                your details and the items you'd like to order.
              </h2>
              <div className="flex flex-col">
                <label
                  className="mb-8 font-semibold text-lg max-xl:text-base"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  style={{ outline: "none" }}
                  className="border-b border-x-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-8 font-semibold text-lg max-xl:text-base"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  style={{ outline: "none" }}
                  className="border-b border-x-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-8 font-semibold text-lg max-xl:text-base"
                  htmlFor="number"
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  name="Phone Number"
                  id="number"
                  style={{ outline: "none" }}
                  className="border-b border-x-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-5 font-semibold text-lg max-xl:text-base"
                  htmlFor="order"
                >
                  Order:
                </label>
                <textarea
                  name="Order"
                  id="order"
                  cols={20}
                  rows={5}
                  style={{ outline: "none" }}
                  placeholder="List the dishes and quantities you'd like to order. Feel free to include any specific instructions or preferences. (e.g. tapsilog-2x)"
                  className="border-b border-x-gray-600"
                />
              </div>
              {/* <button type="submit" onClick={handleSubmit}> */}
              <CustomButton title="Order" href="/orderForm" />
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
              <h2 className="font-semibold text-2xl flex justify-center my-8 max-xl:text-xl">
                Contact Us
              </h2>

              <div className="flex flex-col gap-8">
                <div className="flex justify-between text-lg border-b border-x-gray-600 pb-5 max-xl:text-base">
                  <span className="font-semibold">Phone:</span>
                  <span className="text-gray-600">+81 90 1651 1559</span>
                </div>
                <div className="flex justify-between text-lg border-b border-x-gray-600 pb-5 max-xl:text-base">
                  <span className="font-semibold">Email:</span>
                  <span className="text-gray-600">mamasilog21@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex justify-around mt-14 max-xl:flex-col max-xl:items-center max-xl:mt-0">
              {/* <div className="">
              </div> */}

              <Link
                className="flex items-center"
                href="/menu"
                target="_blank"
                passHref
              >
                <button className="hover:bg-yellow-500 border border-black-100 rounded-lg text-2xl bg-yellow-50 py-3 px-6 max-xl:text-lg max-xl:py-1 max-xl:px-2 max-xl:my-5">
                  See Menu
                </button>
              </Link>

              <div className="flex flex-col items-end">
                <span className="font-semibold text-3xl mb-4 max-xl:items-center max-xl:text-xl">
                  Opening Hours:
                </span>
                <span className="text-2xl border-x-gray-400 max-xl:items-center max-xl:text-base">
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
