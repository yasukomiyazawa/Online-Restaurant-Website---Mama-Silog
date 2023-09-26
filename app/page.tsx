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
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <BestSellers />
      <div className="w-full bg-silogMeals2 bg-cover bg-center">
        <div className="h-1/4 flex justify-around py-20 text-white font-bold">
          <p className="text-4xl">Order Now!</p>

          <CustomButton
            title="Click Here"
            href="/menu"
            style="rounded-lg text-2xl"
          />

          <p className="text-4xl">See Menu</p>
        </div>
      </div>
      <Blogs />

      <div>
        <div>Subscribe Now</div>
        <div>
          Feast On Exclusive Offers! Subscribe for Delicious Deals and Fresh
          Menu Updates!
        </div>
        {/* <form action="">
          <input
            type="email"
            placeholder="enter your email"
            className="email"
          />
          <input className="btn">subscribe</input>
        </form> */}
      </div>
    </main>
  );
}
