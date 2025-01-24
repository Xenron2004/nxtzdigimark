import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Innovative Features of Tilt and Slide Windows",
    FeatureDesc:
      "Tilt and slide windows feature a unique mechanism that offers draft-free ventilation with ease. Designed with large glass panels, they provide expansive views while ensuring excellent sealing against weather elements. Their recyclable aluminum construction enhances durability, and the design is both user-friendly and low-maintenance, making them a perfect addition to modern spaces.",
    UseHeading: "Practical Uses of Tilt and Slide Windows",
    UseDesc:
      "Tilt and slide windows are ideal for bedrooms, kitchens, and balconies, offering efficient ventilation in compact areas. Perfect for modern apartments and office interiors, they combine functionality and style, making them a versatile choice for contemporary living and working spaces.",
  },

  // Add more objects here if needed
];

const VertDesignDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Vertical Sliding Windows
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

export default VertDesignDetails;
