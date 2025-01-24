import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../../products/assets/products_about.webp";

const featuresAndUsesData = [
    {
      imageSrc: AluminiumDoor,
      FeatureHeading: "Timeless Features for Sliding Windows",
      FeatureDesc:
        "Designed with wide glass panels and narrow sightlines, sliding windows offer expansive views while maintaining a sleek, modern aesthetic. With rubber gaskets for superior dust, noise, and water protection, these windows combine functionality with durability. Performance-tested for insulation and weather resistance, they outlast traditional UPVC alternatives and feature modular components for easy installation.",
      UseHeading: "Versatile Uses for Every Space",
      UseDesc:
        "Ideal for balconies, kitchens, and bedrooms, sliding windows enhance ventilation and natural lighting in any room. Their durable design makes them perfect for high-traffic residential and commercial areas, seamlessly blending practicality with style.",
    },

    // Add more objects here if needed
  ];

const SlDesignDetails = () => {

  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Sliding Windows
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

export default SlDesignDetails;
