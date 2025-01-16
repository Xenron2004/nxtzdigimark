import React from "react";
import Hero from "./components/Hero";
import HeroImg from "../../public/assets/Hero_nxt.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Why from "../../public/assets/why_nxt.png";
import Tostem from "../../public/assets/partner_tostem.jpg";
import Whyus from "./components/Whyus";
import Leading from "./components/Leading";
import Products from "./components/Products";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center  gap-[100px]   ">
      {/* Hero section */}
   
      <div className="flex flex-col gap-y-10   md:flex-row items-center max-w-7xl w-11/12 justify-between">
        {/* LEft section */}
        <div className="flex flex-col gap-5 mt-10 items-start md:max-w-[525px] w-full h-auto justify-center ">
          {/* heading & small text */}
          <div className="flex flex-col gap-3 ">
            <p className=" capitalize font-montserrat font-semibold text-[15px] text-secondary">
              WELCOME TO NXTZEN
            </p>
            <h1 className="font-montserrat max-w-[525px] text-[56px] text-start text-headingText font-medium leading-[72px]">
              Innovative Ideas Stylish Designs
            </h1>
          </div>

          {/* Japanese innovation text */}
          <h3 className="font-montserrat max-w-[240px] tracking-[-1%]  w-full text-[22px] font-semibold text-start text-secondary ">
            Japanese <span className="font-medium"> Innovation </span>
            <span className="font-medium"> in Window</span> Design
          </h3>

          {/* paragraph text */}
          <p className="max-w-[511px] w-full font-montserrat tracking-[2%] leading-[25px] font-normal text-bodyText text-[17px]">
            We are a leading lifestyle brand, offering innovative, sustainable
            housing solutions that elevate customer lifestyles with high-quality
            fenestration products, cutting-edge technology, and client-focused
            services.
          </p>

          {/* CTA Button */}
          <button className="font-montserrat mt-[32px] bg-primary text-white text-[16px] tracking-[2%] px-6 py-4">
            GET IN TOUCH
          </button>
        </div>

        {/* Right section  */}
        <div className=" w-full max-w-[850px]    h-full">
          <Image src={HeroImg} alt="Nxtzen hero Image" />
        </div>
      </div>
    
      

      <Whyus />
      <Leading />
      <Products />
      <Works/>
      <Reviews/>
      <Gallery/>
    </section>
  );
};

export default Home;
