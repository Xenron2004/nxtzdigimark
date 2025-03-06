import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../assets/alwindowstwo.webp";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Sleek Features of Slit Windows",
    FeatureDesc:
      "Slit windows boast vertical or horizontal designs, creating a modern aesthetic with clean lines. Permanently sealed panels provide superior weatherproofing, while slim aluminum profiles ensure durability and elegance. These windows are engineered for controlled natural light penetration and feature modular systems for hassle-free installation, making them a contemporary choice for stylish spaces.",
    UseHeading: "Versatile Uses of Slit Windows",
    UseDesc:
      "Perfect for enhancing natural lighting in wardrobes and bathrooms, slit windows offer a unique solution for spaces requiring privacy without compromising on light. Their sleek design makes them an excellent fit for modern living spaces and offices, blending functionality with minimalist charm.",
  },

  // Add more objects here if needed
];

const SlitDesignDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Slit Windows
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

export default SlitDesignDetails;
