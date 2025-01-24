import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Superior Features for Awning Windows",
    FeatureDesc:
      "Hinged at the top and opening outward, awning windows are designed to enhance airflow and natural light. With nano-tech gaskets ensuring waterproof sealing, they offer unmatched durability through a robust aluminum build. Optimized for easy installation and maintenance, these windows promise long-lasting performance and convenience.",
    UseHeading: "Practical Uses for Any Setting",
    UseDesc:
      "Ideal for bathrooms, kitchens, and balconies, awning windows are perfect for areas prone to rain and moisture. Their functional design complements both residential and office interiors, offering a blend of practicality and style. ",
  },

];

const AwnDesignDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Awning Windows
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

export default AwnDesignDetails;
