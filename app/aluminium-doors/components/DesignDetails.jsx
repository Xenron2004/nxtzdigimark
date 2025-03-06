import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../assets/aldoorsthree.webp";

const featuresAndUsesData = [
    {
      imageSrc: AluminiumDoor,
      FeatureHeading: "Innovative Features That Redefine Living Spaces",
      FeatureDesc:
        "From smooth gliding mechanisms to customizable configurations, our aluminium sliding doors are designed to bring style, durability, and functionality to your home. Experience the perfect blend of modern aesthetics and exceptional performance.",
      UseHeading: "Versatile Uses for Every Space",
      UseDesc:
        "Whether enhancing natural light in living rooms or creating seamless indoor-outdoor transitions on balconies, our sliding doors adapt effortlessly to your lifestyle. Built for durability and elegance, they’re ideal for high-traffic areas and modern apartments.",
    },

    // Add more objects here if needed
  ];

const DesignDetails = () => {

  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Sliding Doors
          </h1>
        </div>

       {/* Features and uses section */}
       <section className="flex flex-col gap-12 w-full max-w-[1280px] ">
      {featuresAndUsesData.map((item, index) => (
        <FeatureUse
          key={index}
          index={index}
          imageSrc={item.imageSrc}
          FeatureHeading={item.FeatureHeading}
          FeatureDesc={item.FeatureDesc}
          UseHeading={item.UseHeading}
          UseDesc={item.UseDesc}
        />
      ))}
    </section>

      </div>
    </section>
  );
};

export default DesignDetails;
