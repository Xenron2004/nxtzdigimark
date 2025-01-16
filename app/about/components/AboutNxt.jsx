import React from "react";
import AboutNxtImage from "../../../public/assets/About_hero.webp";
import Image from "next/image";
import Awards from "./Awards";

const AboutNxt = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[80px] w-full h-auto">
      <div className="flex flex-col   md:flex-row items-center max-w-7xl w-11/12 justify-between">
        <div>
          <Image
            className=" w-full    h-full"
            src={AboutNxtImage}
            alt="Nxtzen hero Image"
          />
        </div>
        {/* LEft section */}
        <div className="flex flex-col gap-5 mt-10 items-start md:max-w-[652px] w-full h-auto justify-center">
          {/* heading & small text */}
          <div className="flex flex-col gap-3">
            <p className=" capitalize font-montserrat font-semibold text-[15px] text-secondary">
              ABOUT NXTZEN
            </p>
            <h1 className="font-montserrat max-w-[525px] text-[32px] text-start text-headingText font-medium tracking-[-1%]">
              NXTZEN Production Excellence
            </h1>
          </div>

          {/* Japanese innovation text */}
          <h3 className="font-montserrat tracking-[2%]  leading-[27px] w-full text-[16px] font-normal text-start text-bodyText ">
            Nxtzen was founded by Mr. Naresh Pedapudi, an accomplished
            professional with over 20 years of sales expertise in the building
            materials industry. An MBA graduate from Andhra University, Mr.
            Pedapudi established the company driven by a strong passion for
            bringing innovative, high-quality imported interior and exterior
            building materials to the Indian market.
          </h3>

          {/* paragraph text */}
          <p className="max-w-[625px] w-full font-montserrat tracking-[2%] leading-[25px] font-normal text-bodyText text-[16px]">
            Starting its journey with globally renowned brands like TOSTEM,
            Nxtzen has set new standards in quality and innovation. The company
            remains committed to delivering state-of-the-art solutions that
            seamlessly blend aesthetics with functionality, redefining modern
            architectural spaces.
          </p>

          {/* CTA Button */}
          <button className="font-montserrat mt-[32px] bg-primary text-white text-[16px] tracking-[2%] px-6 py-4">
            CONTACT
          </button>
        </div>

        {/* Right section  */}
        {/* <div >
        <Image className=" w-full    h-full" src={AboutNxtImage} alt="Nxtzen hero Image" />
      </div> */}
      </div>

      {/* Our vision section  */}
      <div className="flex flex-col gap-[40px]  md:flex-row items-center max-w-7xl w-11/12 justify-between">
        {/* LEft section */}
        <div className="flex flex-col gap-5 mt-10 items-start md:max-w-[652px] w-full h-auto justify-center">
          {/* heading & small text */}
          <div className="flex flex-col gap-3">
            <p className=" capitalize font-montserrat font-semibold text-[15px] text-secondary">
              OUR VISION
            </p>
            <h1 className="font-montserrat max-w-[525px] text-[32px] text-start text-headingText font-medium tracking-[-1%]">
              NXTZEN Vision
            </h1>
          </div>

          {/* Japanese innovation text */}
          <h3 className="font-montserrat tracking-[2%]  leading-[27px] w-full text-[16px] font-normal text-start text-bodyText ">
            At NXTZEN, our vision is to partner with the world’s best brands
            while delivering exceptional service to our customers. We believe
            that offering premium products goes hand in hand with prioritizing
            outstanding service. Our motto, "Service should always be the
            highest priority," drives everything we do, ensuring a seamless and
            satisfying experience for every client.
          </h3>

          {/* CTA Button */}
          <button className="font-montserrat mt-[32px] bg-primary text-white text-[16px] tracking-[2%] px-6 py-4">
            CONTACT
          </button>
        </div>

        {/* Right section  */}
        <div>
          <Image
            className=" w-full    h-full"
            src={AboutNxtImage}
            alt="Nxtzen hero Image"
          />
        </div>
      </div>
      
      {/* Awards & Recognition section */}

      <Awards/>

    </section>
  );
};

export default AboutNxt;
