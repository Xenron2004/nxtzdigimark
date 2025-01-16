import Image from "next/image";
import Home from "./home/page";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="mt-[90px]">
        <Home />
      </div>
    </SmoothScroll>
  );
}
