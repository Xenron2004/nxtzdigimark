import React from "react";
import Villa from "../../public/assets/Villa.webp";
import Image from "next/image";
import MainSection from "./components/MainSection";
import StayTouch from "./components/StayTouch";
import VisitOffice from "./components/VisitOffice";
import Link from "next/link";
const Contact = () => {
  return (
    <section className="flex flex-col mt-[90px] items-center justify-center  gap-[100px]   ">
      {/* Hero section */}
      <MainSection />

      <div className="flex flex-col gap-[40px]  md:flex-row items-center max-w-7xl w-11/12 justify-between">
        {/* LEft section */}
        <div className="flex flex-col gap-5 mt-10 items-start md:max-w-[652px] w-full h-auto justify-center">
          {/* heading & small text */}
          <div className="flex flex-col gap-3">
            <h1 className="font-montserrat max-w-[631px] text-[40px] text-start text-headingText font-normal tracking-[-1%] leading-[52px]">
              NXTZEN Exclusive TOSTEM Studios - Vizag & Rajahmundry
            </h1>
          </div>

          {/* Japanese innovation text */}
          <h3 className="font-montserrat tracking-[2%]  leading-[27px] w-full text-[16px] font-normal text-start text-bodyText ">
            Experience luxury and innovation at NXTZEN’s TOSTEM Studios in Vizag
            and Rajahmundry, Andhra Pradesh. Showcasing TOSTEM's globally
            renowned aluminium doors and windows, these modern showrooms are the
            go-to destination for cutting-edge architecture solutions.
            <br />
            <br />
            Discover Japanese technology combined with elegant, durable, and
            weather-resistant designs. Whether you're a homeowner, architect, or
            builder, our expert team is ready to help you create sustainable,
            stylish spaces.
            <br />
            <br />
            Visit us to explore how TOSTEM products can elevate your spaces with
            unmatched quality and performance.
          </h3>

          {/* CTA Button */}
          <Link href="/about">
          <button className="font-montserrat mt-[32px] bg-primary text-white text-[16px] tracking-[2%] px-6 py-4">
            ABOUT US
          </button>
          </Link>
        </div>

        {/* Right section  */}
        <div>
          <Image
            className=" w-full    h-full"
            src={Villa}
            alt="Nxtzen hero Image"
          />
        </div>
      </div>
      <StayTouch />
      <VisitOffice/>
    </section>
  );
};

export default Contact;
