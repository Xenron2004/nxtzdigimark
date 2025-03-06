import React from "react";
import FeatureUse from "@/components/FeatureUse";
import Casement from "../assets/14610.jpg";


const featuresAndUsesData = [
  {
    imageSrc: Casement,
    FeatureHeading: "Innovative Features for Modern Casement Doors",
    FeatureDesc:
      "Built with rust-proof aluminum frames and a multi-point locking system, our casement doors offer unmatched security and durability. Weather-sealed and available in a variety of colors and designs, they combine style with long-lasting performance.",
    UseHeading: "Versatile Uses for Every Space",
    UseDesc:
      "Ideal for home or office entrances, private rooms, or smaller spaces needing ventilation, these doors enhance functionality and security. Perfectly suited for areas prone to extreme weather, they deliver both protection and elegance",
  },

  // Add more objects here if needed
];

const CsDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Casement Doors
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

export default CsDetails;
