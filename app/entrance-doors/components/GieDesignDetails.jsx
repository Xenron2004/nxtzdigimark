import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Exceptional Features for Entrance Doors",
    FeatureDesc:
      "Engineered for security and style, our entrance doors feature robust steel panels with an anti-rust epoxy coating, ensuring long-lasting durability. A multi-lock system offers enhanced protection, while built-in EPDM gaskets provide anti-pinch safety. With customizable design and color options, these doors seamlessly blend functionality with modern aesthetics. Additionally, energy-efficient insulation foam reduces noise and heat transfer for ultimate comfort.",
    UseHeading: "Versatile Uses for Every Home",
    UseDesc:
      "Perfect for main entrances and condominiums, our entrance doors enhance home security with advanced anti-break-in technology. Designed to withstand fluctuating weather conditions, they are ideal for all climates. Their customizable options make them a great fit for modern homes, providing both practicality and elegance.",
  },

  // Add more objects here if needed
];

const GeiDesignDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Giesta Doors
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

export default GeiDesignDetails;
