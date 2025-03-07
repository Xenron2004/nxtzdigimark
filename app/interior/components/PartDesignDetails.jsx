import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";
import Partition from "../assets/3035.jpg"

const featuresAndUsesData = [
  {
    imageSrc: Partition,
    FeatureHeading: "Sleek Features of Partition Doors",
    FeatureDesc:
      "Our partition doors combine style and functionality, featuring slim aluminum profiles, versatile panel designs, and an anodized coating for scratch resistance and durability. Pre-engineered for precision, they ensure smooth operation and a luxurious aesthetic for any space.",

    UseHeading: "Versatile Uses for Parttion  Doors",
    UseDesc:
      "Perfect for dividing living rooms or commercial spaces, partition doors enhance privacy while maintaining an open and modern feel. Ideal for offices and homes, they add a touch of sophistication and adaptability to your interiors.",
  },

  // Add more objects here if needed
];

const PartDesignDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Partition Doors
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

export default PartDesignDetails;
