import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Innovative Features of Hanging Doors",
    FeatureDesc:
      "Experience the perfect blend of functionality and style with our expertly crafted hanging doors. Equipped with soft-close rollers, adjustable panels, and concealed guide pieces, these doors are designed to operate smoothly while elevating your space with a sleek and modern finish.",

    UseHeading: "Versatile Uses for Hanging Doors",
    UseDesc:
      "Hanging doors are the ideal choice for space-saving interiors, from wardrobes to room dividers. Perfect for both residential and commercial applications, they offer a contemporary aesthetic while ensuring quiet and seamless operation.",
  },

  // Add more objects here if needed
];

const HangDesignDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Hanging Doors
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

export default HangDesignDetails;
