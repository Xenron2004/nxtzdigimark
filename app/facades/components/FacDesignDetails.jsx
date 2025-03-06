import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../assets/2149360638.jpg";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Distinctive Features of Facades",
    FeatureDesc:
      "Our Facades are engineered for both aesthetics and functionality. Featuring an anodized coating with TEXGUARD for unmatched gloss and durability, they also include an efficient drainage mechanism for superior water management. Pre-coated aluminum ensures consistent color, while modular designs allow seamless integration with windows and doors.",
    UseHeading: "Versatile Uses for Modern Architecture",
    UseDesc:
      "Facades are ideal for commercial buildings and storefronts, adding a sleek and professional appearance. They enhance the aesthetic appeal of office spaces while providing improved weatherproofing for high-rise structures. Designed for energy-efficient architectural applications, facades combine functionality with contemporary style.",
  },

  // Add more objects here if needed
];

const FacDesignDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Facades
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

export default FacDesignDetails;
