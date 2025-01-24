import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Sophisticated Features of Corner Openable Doors",
    FeatureDesc:
      "Crafted with slim aluminum frames and durable hardware, our corner openable doors offer wide openings and customizable designs. With high thermal and noise insulation, they seamlessly blend functionality with modern aesthetics.",
    UseHeading: "Exclusive Uses for Unique Spaces",
    UseDesc:
      "Perfect for luxury interiors and modern architectural designs, these doors enhance indoor-outdoor connectivity and provide stunning panoramic views. Ideal for maximizing space and elevating contemporary living environments.",
  },

  // Add more objects here if needed
];

const CorDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Corner Operable Doors
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

export default CorDetails;
