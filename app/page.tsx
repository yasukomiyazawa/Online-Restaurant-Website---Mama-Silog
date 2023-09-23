import { BestSellers } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    // min-h-screen
    <main className="flex flex-col items-center justify-between">
      <BestSellers />
    </main>
  );
}
