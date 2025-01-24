import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Smart Features of Ventilation Doors",
    FeatureDesc:
      "Our ventilation doors are designed for comfort and practicality, featuring built-in insect screens, optimized airflow systems, and rust-resistant aluminum frames. With sleek designs and durable coatings, they ensure effortless maintenance and long-lasting performance.",
    UseHeading: "Practical Uses for Everyday Spaces",
    UseDesc:
      "Perfect for kitchens, bathrooms, and high-humidity areas, these doors enhance air circulation while keeping insects out. They combine functionality and style, making them ideal for maintaining a fresh and comfortable indoor environment.",
  },

  // Add more objects here if needed
];

const VentDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Ventilation Doors
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

export default VentDetails;
