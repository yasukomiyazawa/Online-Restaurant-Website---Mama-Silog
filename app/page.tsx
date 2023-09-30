import {
  BestSellers,
  Blogs,
  CustomButton,
  Footer,
  Hero,
  Navbar,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // min-h-screen
    // <main className="flex flex-col items-center justify-between">
    <main className="grid grid-rows-auto">
      <Hero />
      <BestSellers />
      <div className="w-full bg-silogMeals2 bg-cover bg-center">
        <div className="h-1/4 flex justify-around py-20 text-white font-bold">
          <p className="text-4xl">Order Now!</p>

          <CustomButton
            title="Click Here"
            href="/orderForm"
            style="rounded-lg text-2xl"
          />

          <p className="text-4xl">See Menu</p>
        </div>
      </div>

      <Blogs />

      <div className="w-full flex justify-center flex-col pt-12 pb-20 bg-slate-50">
        <div className="flex justify-center flex-col gap-5">
          <div className="flex justify-center text-3xl font-extrabold capitalize">
            Subscribe Now
          </div>
          <div className="flex justify-center text-slate-500">
            Feast On Exclusive Offers! Subscribe for Delicious Deals and Fresh
            Menu Updates!
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <form
            action=""
            className="border rounded-full border-black flex justify-between bg-slate-200 px-5 py-3 mt-4 md:w-full"
            style={{ width: "700px" }}
          >
            <input
              type="email"
              placeholder="enter your email"
              style={{ outline: "none" }}
              className="bg-transparent w-full mr-2 px-2"
            />
            <input
              type="submit"
              placeholder="subscribe"
              className="border border-black rounded-full px-5 py-1 bg-slate-50 hover:bg-yellow-500 font-semibold cursor-pointer"
            />
          </form>
        </div>
      </div>
    </main>
  );
}
