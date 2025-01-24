import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";

const featuresAndUsesData = [
    {
      imageSrc: AluminiumDoor,
      FeatureHeading: "Sophisticated Features of Glass-to-Glass Corner Windows",
      FeatureDesc:
        "Experience panoramic views with sleek corner designs that redefine modern aesthetics. These windows feature superior sealing to protect against noise, water, and dust, while durable frames ensure long-term performance. Enhanced with advanced Texguard coating for added gloss and resilience, their modular components make installation easy and efficient.",
      UseHeading: "Contemporary Uses for Stunning Spaces",
      UseDesc:
        "Perfect for luxurious living rooms and balconies, glass-to-glass corner windows bring a touch of elegance to any space. They add contemporary appeal to kitchens and bathrooms while providing maximum natural light, making them ideal for bright, open, and stylish interiors.",
    },

    // Add more objects here if needed
  ];

const GsDesignDetails = () => {

  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
           GLASS-to-glass corner Windows
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

export default GsDesignDetails;
